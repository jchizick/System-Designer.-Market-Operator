import { Archive, Check, FileText, MailCheck, MessageSquareReply, RotateCcw } from 'lucide-react';
import { canTransitionToStatus } from '../storage';
import type { BusinessLead, PipelineStatus } from '../types';
import { DraftEditor } from './DraftEditor';
import { PriorityBadge, StatusBadge } from './LeadTable';

function WorkflowButton({
  label,
  disabled,
  onClick,
  icon: Icon,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  icon: typeof Check;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex min-h-10 items-center justify-center gap-2 border border-emerald-500/24 bg-black/22 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-white/62 transition-colors hover:border-emerald-300/42 hover:bg-emerald-500/[0.055] hover:text-emerald-200 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/24 disabled:hover:bg-black/22"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
      {label}
    </button>
  );
}

function FitMeter({ lead }: { lead: BusinessLead }) {
  return (
    <div className="border border-emerald-500/16 bg-black/18 p-4">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Explainable fit score</div>
          <div className="mt-1 font-mono text-[11px] uppercase text-white/38">{lead.fitScore.tier} signal</div>
        </div>
        <div className="font-mono text-[34px] leading-none text-emerald-300 tabular-nums">
          {lead.fitScore.score}
          <span className="text-[13px] text-white/34">/100</span>
        </div>
      </div>
      <div className="h-2 border border-emerald-500/18 bg-black/32 p-[2px]" aria-hidden="true">
        <div className="h-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.25)]" style={{ width: `${lead.fitScore.score}%` }} />
      </div>
      <ul className="mt-4 space-y-2">
        {lead.fitScore.reasons.map((reason) => (
          <li key={reason} className="grid grid-cols-[0.8rem_minmax(0,1fr)] gap-2 font-mono text-[12px] leading-relaxed text-white/58">
            <span className="mt-[0.45rem] h-1.5 w-1.5 bg-emerald-400/72" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeadDetailPanel({
  lead,
  onChangeStatus,
  onSaveDraft,
}: {
  lead: BusinessLead;
  onChangeStatus: (status: PipelineStatus) => void;
  onSaveDraft: (draft: { subject: string; body: string }) => void;
}) {
  const markSentDisabled = !canTransitionToStatus(lead, 'sent');

  return (
    <aside className="space-y-3">
      <section className="border border-emerald-500/16 bg-black/18 p-4">
        <div className="mb-4 flex flex-col gap-3 border-b border-emerald-500/12 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-space-grotesk text-[26px] font-medium leading-tight text-white/88">{lead.company}</h2>
            <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.04em] text-white/42">
              {lead.contactName} // {lead.role} // {lead.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={lead.status} />
            <PriorityBadge priority={lead.priority} />
          </div>
        </div>

        <div className="grid gap-3 font-mono text-[12px] leading-relaxed text-white/58 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-emerald-400">Website</div>
            {lead.website}
          </div>
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-emerald-400">Company size</div>
            {lead.companySize}
          </div>
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-emerald-400">Industry</div>
            {lead.industry}
          </div>
          <div>
            <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-emerald-400">Source</div>
            {lead.source.label}
          </div>
        </div>
      </section>

      <FitMeter lead={lead} />

      <section className="border border-emerald-500/16 bg-black/18 p-4">
        <div className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Manual workflow</div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <WorkflowButton label="Draft ready" icon={FileText} onClick={() => onChangeStatus('draft_ready')} />
          <WorkflowButton label="Approve" icon={Check} onClick={() => onChangeStatus('approved')} />
          <WorkflowButton label="Mark sent" icon={MailCheck} disabled={markSentDisabled} onClick={() => onChangeStatus('sent')} />
          <WorkflowButton label="Reply" icon={MessageSquareReply} onClick={() => onChangeStatus('replied')} />
          <WorkflowButton label="Archive" icon={Archive} onClick={() => onChangeStatus('archived')} />
          <WorkflowButton label="Restore" icon={RotateCcw} onClick={() => onChangeStatus('prospect')} />
        </div>
        {markSentDisabled ? (
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-white/38">
            Mark sent unlocks only after manual approval. There is no send button or send API in this module.
          </p>
        ) : null}
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <div className="border border-emerald-500/16 bg-black/18 p-4">
          <div className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Signals</div>
          <ul className="space-y-2">
            {lead.signals.map((signal) => (
              <li key={signal} className="font-mono text-[12px] leading-relaxed text-white/58">{signal}</li>
            ))}
          </ul>
        </div>
        <div className="border border-emerald-500/16 bg-black/18 p-4">
          <div className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Notes</div>
          <p className="font-mono text-[12px] leading-relaxed text-white/58">{lead.notes}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {lead.tags.map((tag) => (
              <span key={tag} className="border border-emerald-500/14 bg-emerald-500/[0.035] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white/44">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DraftEditor lead={lead} onSaveDraft={onSaveDraft} />
    </aside>
  );
}
