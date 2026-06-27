import React from 'react';
import { CheckCircle2, Download, FileJson, FileText, Filter, MessageSquare, Plus, Radar, Search, Send, Upload, Users, type LucideIcon } from 'lucide-react';
import { LeadFormModal } from './components/LeadFormModal';
import { LeadDetailPanel } from './components/LeadDetailPanel';
import { LeadTable } from './components/LeadTable';
import { useBusinessLeads } from './hooks/useBusinessLeads';
import { downloadTextFile, exportLeadsToCsv, exportLeadsToJson, getExportDateStamp, mergeImportedLeads, parseImportedLeads } from './importExport';
import type { BusinessLead, PipelineStatus, Priority } from './types';

const statusOptions: Array<'all' | PipelineStatus> = ['all', 'new', 'prospect', 'draft_ready', 'approved', 'sent', 'replied', 'archived'];
const priorityOptions: Array<'all' | Priority> = ['all', 'high', 'medium', 'low'];

const statusLabel: Record<'all' | PipelineStatus, string> = {
  all: 'All status',
  new: 'New',
  prospect: 'Prospect',
  draft_ready: 'Draft ready',
  approved: 'Approved',
  sent: 'Sent',
  replied: 'Replied',
  archived: 'Archived',
};

const priorityLabel: Record<'all' | Priority, string> = {
  all: 'All priority',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

function KpiCell({
  label,
  value,
  icon: Icon,
  tone = 'emerald',
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  tone?: 'emerald' | 'blue' | 'cyan' | 'purple';
}) {
  const toneClasses = {
    emerald: 'border-emerald-500/20 text-emerald-300',
    blue: 'border-blue-400/18 text-blue-300',
    cyan: 'border-cyan-300/20 text-cyan-200',
    purple: 'border-purple-300/20 text-purple-200',
  };

  return (
    <div className="group min-w-0 border border-emerald-500/16 bg-black/20 p-4 shadow-[inset_0_0_18px_rgba(16,185,129,0.018)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-white/38">{label}</div>
          <div className="mt-1 font-mono text-[28px] leading-none text-emerald-300 tabular-nums">{value}</div>
        </div>
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center border bg-black/24 ${toneClasses[tone]}`}>
          <Icon className="h-5.5 w-5.5" strokeWidth={1.65} />
        </span>
      </div>
    </div>
  );
}

function SelectControl<T extends string>({
  label,
  value,
  options,
  labels,
  onChange,
}: {
  label: string;
  value: T;
  options: T[];
  labels: Record<T, string>;
  onChange: (value: T) => void;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/38">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="min-h-10 w-full border border-emerald-500/18 bg-black/32 px-3 font-mono text-[11px] uppercase tracking-[0.06em] text-white/68 outline-none focus:border-emerald-300/48"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-black text-white">
            {labels[option]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function OpportunityCommandPage() {
  const { leads, replaceLeads, addLead, updateLeadDetails, changeStatus, saveDraft } = useBusinessLeads();
  const [selectedLeadId, setSelectedLeadId] = React.useState(leads[0]?.id || '');
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<'all' | PipelineStatus>('all');
  const [priorityFilter, setPriorityFilter] = React.useState<'all' | Priority>('all');
  const [minFit, setMinFit] = React.useState(0);
  const [formMode, setFormMode] = React.useState<'add' | 'edit' | null>(null);
  const [editingLead, setEditingLead] = React.useState<BusinessLead | undefined>();
  const [dataMessage, setDataMessage] = React.useState<{ tone: 'success' | 'error'; text: string } | null>(null);
  const importInputRef = React.useRef<HTMLInputElement | null>(null);

  const filteredLeads = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return leads.filter((lead) => {
      const queryMatch = normalizedQuery.length === 0
        || [lead.company, lead.contactName, lead.industry, lead.location, lead.notes, ...lead.tags, ...lead.needs, ...lead.signals]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);
      const statusMatch = statusFilter === 'all' || lead.status === statusFilter;
      const priorityMatch = priorityFilter === 'all' || lead.priority === priorityFilter;
      const fitMatch = lead.fitScore.score >= minFit;

      return queryMatch && statusMatch && priorityMatch && fitMatch;
    });
  }, [leads, minFit, priorityFilter, query, statusFilter]);

  React.useEffect(() => {
    if (!filteredLeads.some((lead) => lead.id === selectedLeadId)) {
      setSelectedLeadId(filteredLeads[0]?.id || leads[0]?.id || '');
    }
  }, [filteredLeads, leads, selectedLeadId]);

  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) || filteredLeads[0] || leads[0];

  const kpis = React.useMemo(() => ({
    total: leads.length,
    draftReady: leads.filter((lead) => lead.status === 'draft_ready').length,
    approved: leads.filter((lead) => lead.status === 'approved').length,
    sent: leads.filter((lead) => lead.status === 'sent').length,
    replies: leads.filter((lead) => lead.status === 'replied').length,
  }), [leads]);
  const kpiCards = [
    { label: 'Total leads', value: kpis.total, icon: Users, tone: 'emerald' as const },
    { label: 'Draft ready', value: kpis.draftReady, icon: FileText, tone: 'blue' as const },
    { label: 'Approved', value: kpis.approved, icon: CheckCircle2, tone: 'emerald' as const },
    { label: 'Sent', value: kpis.sent, icon: Send, tone: 'cyan' as const },
    { label: 'Replies', value: kpis.replies, icon: MessageSquare, tone: 'purple' as const },
  ];

  const showDataMessage = React.useCallback((tone: 'success' | 'error', text: string) => {
    setDataMessage({ tone, text });
    window.setTimeout(() => setDataMessage(null), 4200);
  }, []);

  const exportJson = () => {
    downloadTextFile(
      `opportunity-command-leads-${getExportDateStamp()}.json`,
      exportLeadsToJson(leads),
      'application/json',
    );
    showDataMessage('success', `Exported ${leads.length} leads to JSON.`);
  };

  const exportCsv = () => {
    downloadTextFile(
      `opportunity-command-leads-${getExportDateStamp()}.csv`,
      exportLeadsToCsv(leads),
      'text/csv;charset=utf-8',
    );
    showDataMessage('success', `Exported ${leads.length} leads to CSV.`);
  };

  const importJsonFile = async (file: File) => {
    try {
      const text = await file.text();
      const importedLeads = parseImportedLeads(text);

      if (importedLeads.length === 0) {
        showDataMessage('error', 'Import failed: no recognizable leads found.');
        return;
      }

      const replace = window.confirm(
        `Import ${importedLeads.length} leads from JSON?\n\nOK: Replace current leads\nCancel: Merge with current leads`,
      );
      const nextLeads = replace ? importedLeads : mergeImportedLeads(leads, importedLeads);
      const firstImportedLead = replace ? nextLeads[0] : nextLeads[leads.length];

      replaceLeads(nextLeads);
      setSelectedLeadId(firstImportedLead?.id || nextLeads[0]?.id || '');
      setQuery('');
      setStatusFilter('all');
      setPriorityFilter('all');
      setMinFit(0);
      showDataMessage('success', `${replace ? 'Replaced with' : 'Merged'} ${importedLeads.length} imported leads.`);
    } catch {
      showDataMessage('error', 'Import failed: invalid JSON file.');
    } finally {
      if (importInputRef.current) {
        importInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="relative min-h-screen max-w-full overflow-x-hidden p-4 sm:p-6">
      <main className="mx-auto w-full max-w-[1320px]">
        <header className="mb-5 border border-emerald-500/16 bg-black/18 p-4 sm:p-5">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
              <span className="inline-flex h-8 w-8 items-center justify-center border border-emerald-500/28 bg-emerald-500/[0.035]">
                <Radar className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <span>Business Outreach</span>
            </div>
            <h1 className="font-space-grotesk text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-text-primary sm:text-[56px]">
              Opportunity Command Center
            </h1>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.06em] text-white/48">
              Prospect search -&gt; fit signal -&gt; approved briefing
            </p>
          </div>

          <div className="mt-6 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {kpiCards.map((card) => (
              <div key={card.label} className="min-w-0">
                <KpiCell label={card.label} value={card.value} icon={card.icon} tone={card.tone} />
              </div>
            ))}
          </div>
        </header>

        <section className="mb-3 border border-emerald-500/14 bg-black/16 p-3">
          <div className="grid gap-3 xl:grid-cols-[minmax(320px,480px)_150px_150px_170px_minmax(430px,1fr)] xl:items-end">
            <label className="block min-w-0">
              <span className="mb-2 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/38">
                <Search className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.7} />
                Search leads
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Company, need, signal, tag..."
                className="min-h-10 w-full border border-emerald-500/18 bg-black/32 px-3 font-mono text-[12px] text-white/72 outline-none placeholder:text-white/26 focus:border-emerald-300/48"
              />
            </label>
            <SelectControl label="Status" value={statusFilter} options={statusOptions} labels={statusLabel} onChange={setStatusFilter} />
            <SelectControl label="Priority" value={priorityFilter} options={priorityOptions} labels={priorityLabel} onChange={setPriorityFilter} />
            <label className="block min-w-0">
              <span className="mb-2 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/38">
                <Filter className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.7} />
                Min fit: {minFit}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={minFit}
                onChange={(event) => setMinFit(Number(event.target.value))}
                className="w-full accent-emerald-400"
              />
            </label>
            <div className="min-w-0">
              <div className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/38">Data</div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditingLead(undefined);
                    setFormMode('add');
                  }}
                  className="inline-flex min-h-10 items-center justify-center gap-2 border border-emerald-400/42 bg-emerald-400 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#03110c] transition-colors hover:bg-emerald-300"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => importInputRef.current?.click()}
                  className="inline-flex min-h-10 items-center justify-center gap-2 border border-emerald-500/24 bg-black/22 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white/62 transition-colors hover:border-emerald-300/42 hover:text-emerald-200"
                >
                  <Upload className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Import
                </button>
                <button
                  type="button"
                  onClick={exportJson}
                  className="inline-flex min-h-10 items-center justify-center gap-2 border border-emerald-500/24 bg-black/22 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white/62 transition-colors hover:border-emerald-300/42 hover:text-emerald-200"
                >
                  <FileJson className="h-3.5 w-3.5" strokeWidth={1.8} />
                  JSON
                </button>
                <button
                  type="button"
                  onClick={exportCsv}
                  className="inline-flex min-h-10 items-center justify-center gap-2 border border-emerald-500/24 bg-black/22 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white/62 transition-colors hover:border-emerald-300/42 hover:text-emerald-200"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={1.8} />
                  CSV
                </button>
                <input
                  ref={importInputRef}
                  type="file"
                  accept="application/json,.json"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    if (file) {
                      void importJsonFile(file);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {dataMessage ? (
            <div className={`mt-3 border px-3 py-2 font-mono text-[11px] ${
              dataMessage.tone === 'success'
                ? 'border-emerald-400/24 bg-emerald-400/[0.045] text-emerald-200'
                : 'border-red-400/26 bg-red-400/[0.055] text-red-200'
            }`}
            >
              {dataMessage.text}
            </div>
          ) : null}
        </section>

        <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_525px] 2xl:grid-cols-[minmax(0,1fr)_450px]">
          <section className="min-w-0">
            <LeadTable leads={filteredLeads} selectedLeadId={selectedLead?.id || ''} onSelectLead={setSelectedLeadId} />
          </section>
          {selectedLead ? (
            <LeadDetailPanel
              lead={selectedLead}
              onChangeStatus={(status) => changeStatus(selectedLead.id, status)}
              onSaveDraft={(draft) => saveDraft(selectedLead.id, draft)}
              onEdit={() => {
                setEditingLead(selectedLead);
                setFormMode('edit');
              }}
            />
          ) : null}
        </div>
      </main>
      {formMode ? (
        <LeadFormModal
          mode={formMode}
          lead={editingLead}
          onClose={() => setFormMode(null)}
          onSave={(input) => {
            if (formMode === 'add') {
              const newLead = addLead(input);
              setSelectedLeadId(newLead.id);
              setQuery('');
              setStatusFilter('all');
              setPriorityFilter('all');
              setMinFit(0);
            } else if (editingLead) {
              updateLeadDetails(editingLead.id, input);
              setSelectedLeadId(editingLead.id);
            }

            setFormMode(null);
          }}
        />
      ) : null}
    </div>
  );
}
