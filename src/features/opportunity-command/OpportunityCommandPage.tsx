import React from 'react';
import { Filter, Radar, Search } from 'lucide-react';
import { LeadDetailPanel } from './components/LeadDetailPanel';
import { LeadTable } from './components/LeadTable';
import { useBusinessLeads } from './hooks/useBusinessLeads';
import type { PipelineStatus, Priority } from './types';

const statusOptions: Array<'all' | PipelineStatus> = ['all', 'prospect', 'draft_ready', 'approved', 'sent', 'replied', 'archived'];
const priorityOptions: Array<'all' | Priority> = ['all', 'high', 'medium', 'low'];

const statusLabel: Record<'all' | PipelineStatus, string> = {
  all: 'All status',
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

function KpiCell({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 border border-emerald-500/16 bg-black/20 p-3 shadow-[inset_0_0_18px_rgba(16,185,129,0.018)]">
      <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-white/38">{label}</div>
      <div className="mt-2 font-mono text-[28px] leading-none text-emerald-300 tabular-nums">{value}</div>
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
  const { leads, changeStatus, saveDraft } = useBusinessLeads();
  const [selectedLeadId, setSelectedLeadId] = React.useState(leads[0]?.id || '');
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<'all' | PipelineStatus>('all');
  const [priorityFilter, setPriorityFilter] = React.useState<'all' | Priority>('all');
  const [minFit, setMinFit] = React.useState(0);

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

  return (
    <div className="relative min-h-screen max-w-full overflow-x-hidden p-4 sm:p-6">
      <main className="mx-auto w-full max-w-[1320px]">
        <header className="mb-5 border border-emerald-500/16 bg-black/18 p-4 sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
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

            <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-5 lg:w-[560px]">
              <KpiCell label="Total leads" value={kpis.total} />
              <KpiCell label="Draft ready" value={kpis.draftReady} />
              <KpiCell label="Approved" value={kpis.approved} />
              <KpiCell label="Sent" value={kpis.sent} />
              <KpiCell label="Replies" value={kpis.replies} />
            </div>
          </div>
        </header>

        <section className="mb-3 border border-emerald-500/14 bg-black/16 p-3">
          <div className="grid gap-3 lg:grid-cols-[minmax(260px,1fr)_170px_170px_190px] lg:items-end">
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
          </div>
        </section>

        <div className="grid gap-3 xl:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)]">
          <section className="min-w-0">
            <LeadTable leads={filteredLeads} selectedLeadId={selectedLead?.id || ''} onSelectLead={setSelectedLeadId} />
          </section>
          {selectedLead ? (
            <LeadDetailPanel
              lead={selectedLead}
              onChangeStatus={(status) => changeStatus(selectedLead.id, status)}
              onSaveDraft={(draft) => saveDraft(selectedLead.id, draft)}
            />
          ) : null}
        </div>
      </main>
    </div>
  );
}
