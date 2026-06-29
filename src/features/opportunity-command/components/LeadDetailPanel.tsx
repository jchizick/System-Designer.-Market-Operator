import { Archive, Check, Edit3, FileText, MailCheck, MessageSquareReply, RotateCcw } from 'lucide-react';
import { canTransitionToStatus } from '../storage';
import type { BusinessLead, PipelineStatus } from '../types';
import { DraftEditor } from './DraftEditor';
import { PriorityBadge, StatusBadge } from './LeadTable';

function WorkflowButton({
  label,
  disabled,
  onClick,
  icon: Icon,
  tone = 'neutral',
  completed = false,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  icon: typeof Check;
  tone?: 'neutral' | 'blue' | 'emerald' | 'cyan' | 'purple' | 'slate';
  completed?: boolean;
}) {
  const toneClasses = {
    neutral: 'border-white/14 bg-black/22 text-white/48 hover:border-white/24 hover:bg-white/[0.035] hover:text-white/68',
    blue: 'border-blue-400/38 bg-blue-400/[0.075] text-blue-200 shadow-[inset_0_0_18px_rgba(96,165,250,0.035)] hover:border-blue-300/54 hover:bg-blue-400/[0.11] hover:text-blue-100',
    emerald: 'border-emerald-400/38 bg-emerald-400/[0.075] text-emerald-200 shadow-[inset_0_0_18px_rgba(52,211,153,0.04)] hover:border-emerald-300/54 hover:bg-emerald-400/[0.11] hover:text-emerald-100',
    cyan: 'border-cyan-300/36 bg-cyan-300/[0.075] text-cyan-100 shadow-[inset_0_0_18px_rgba(103,232,249,0.035)] hover:border-cyan-200/52 hover:bg-cyan-300/[0.11] hover:text-cyan-50',
    purple: 'border-purple-300/38 bg-purple-300/[0.075] text-purple-100 shadow-[inset_0_0_18px_rgba(216,180,254,0.035)] hover:border-purple-200/54 hover:bg-purple-300/[0.11] hover:text-purple-50',
    slate: 'border-white/20 bg-white/[0.045] text-white/58 shadow-[inset_0_0_18px_rgba(255,255,255,0.018)] hover:border-white/34 hover:bg-white/[0.07] hover:text-white/74',
  };
  const stateClasses = completed ? toneClasses[tone] : toneClasses.neutral;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center justify-center gap-2 border px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.09em] transition-colors disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-black/16 disabled:text-white/24 disabled:shadow-none disabled:hover:bg-black/16 ${stateClasses}`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
      {label}
    </button>
  );
}

function FitMeter({ lead }: { lead: BusinessLead }) {
  const segmentCount = 10;
  const filledSegments = Math.max(0, Math.min(segmentCount, Math.round(lead.fitScore.score / 10)));
  const tone = lead.fitScore.score >= 78
    ? {
      active: 'border-emerald-300/42 bg-emerald-400/82 shadow-[0_0_8px_rgba(52,211,153,0.2)]',
      inactive: 'border-emerald-500/12 bg-emerald-950/28',
    }
    : lead.fitScore.score >= 58
      ? {
        active: 'border-yellow-200/34 bg-yellow-300/62 shadow-[0_0_7px_rgba(250,204,21,0.12)]',
        inactive: 'border-yellow-300/10 bg-yellow-950/16',
      }
      : {
        active: 'border-cyan-200/24 bg-cyan-300/38 shadow-[0_0_6px_rgba(103,232,249,0.1)]',
        inactive: 'border-white/10 bg-white/[0.035]',
      };

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
      <div
        className="grid grid-cols-10 gap-1 border border-emerald-500/14 bg-black/24 p-1.5"
        aria-label={`Fit score ${lead.fitScore.score} out of 100`}
        title={`Fit score ${lead.fitScore.score} out of 100`}
      >
        {Array.from({ length: segmentCount }, (_, index) => (
          <span
            key={index}
            className={`h-3 border ${index < filledSegments ? tone.active : tone.inactive}`}
            aria-hidden="true"
          />
        ))}
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
  onEdit,
}: {
  lead: BusinessLead;
  onChangeStatus: (status: PipelineStatus) => void;
  onSaveDraft: (draft: { subject: string; body: string }) => void;
  onEdit: () => void;
}) {
  const workflowRank: Record<PipelineStatus, number> = {
    new: 0,
    prospect: 0,
    draft_ready: 1,
    approved: 2,
    sent: 3,
    replied: 4,
    archived: 5,
  };
  const currentWorkflowRank = workflowRank[lead.status];
  const markSentDisabled = currentWorkflowRank < 3 && !canTransitionToStatus(lead, 'sent');

  return (
    <aside className="space-y-3">
      <section className="border border-emerald-500/16 bg-black/18 p-4">
        <div className="mb-4 flex flex-col gap-3 border-b border-emerald-500/12 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-space-grotesk text-[22px] font-medium leading-tight text-white/88">{lead.company}</h2>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.04em] text-white/42">
              {lead.contactName} // {lead.role} // {lead.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex min-h-7 items-center gap-2 border border-emerald-500/24 bg-black/22 px-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white/58 transition-colors hover:border-emerald-300/42 hover:text-emerald-200"
            >
              <Edit3 className="h-3.5 w-3.5" strokeWidth={1.7} />
              Edit lead
            </button>
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
          <WorkflowButton label="Draft ready" icon={FileText} tone="blue" completed={currentWorkflowRank >= 1} onClick={() => onChangeStatus('draft_ready')} />
          <WorkflowButton label="Approve" icon={Check} tone="emerald" completed={currentWorkflowRank >= 2} onClick={() => onChangeStatus('approved')} />
          <WorkflowButton label="Mark sent" icon={MailCheck} tone="cyan" completed={currentWorkflowRank >= 3} disabled={markSentDisabled} onClick={() => onChangeStatus('sent')} />
          <WorkflowButton label="Reply" icon={MessageSquareReply} tone="purple" completed={currentWorkflowRank >= 4} onClick={() => onChangeStatus('replied')} />
          <WorkflowButton label="Archive" icon={Archive} tone="slate" completed={lead.status === 'archived'} onClick={() => onChangeStatus('archived')} />
          <WorkflowButton label="Restore" icon={RotateCcw} disabled={lead.status !== 'archived'} onClick={() => onChangeStatus('prospect')} />
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
