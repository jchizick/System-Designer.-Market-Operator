import { CheckCircle2, Clock3, MailCheck, MessageSquareReply, PencilLine, Search, ShieldCheck } from 'lucide-react';
import type { BusinessLead, PipelineStatus, Priority } from '../types';

const statusLabels: Record<PipelineStatus, string> = {
  prospect: 'Prospect',
  draft_ready: 'Draft ready',
  approved: 'Approved',
  sent: 'Sent',
  replied: 'Replied',
  archived: 'Archived',
};

const priorityLabels: Record<Priority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const statusIcon: Record<PipelineStatus, typeof Clock3> = {
  prospect: Search,
  draft_ready: PencilLine,
  approved: ShieldCheck,
  sent: MailCheck,
  replied: MessageSquareReply,
  archived: CheckCircle2,
};

export function StatusBadge({ status }: { status: PipelineStatus }) {
  const Icon = statusIcon[status];
  const tone = status === 'replied'
    ? 'border-cyan-300/28 bg-cyan-300/[0.055] text-cyan-200'
    : status === 'sent' || status === 'approved'
      ? 'border-emerald-300/30 bg-emerald-300/[0.055] text-emerald-300'
      : status === 'archived'
        ? 'border-white/14 bg-white/[0.035] text-white/42'
        : 'border-emerald-500/18 bg-black/22 text-white/58';

  return (
    <span className={`inline-flex min-h-7 items-center gap-2 border px-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${tone}`}>
      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
      {statusLabels[status]}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const tone = priority === 'high'
    ? 'border-emerald-400/34 text-emerald-300'
    : priority === 'medium'
      ? 'border-yellow-300/24 text-yellow-200/82'
      : 'border-white/14 text-white/45';

  return (
    <span className={`inline-flex min-h-6 items-center border bg-black/18 px-2 font-mono text-[10px] uppercase tracking-[0.08em] ${tone}`}>
      {priorityLabels[priority]}
    </span>
  );
}

export function LeadTable({
  leads,
  selectedLeadId,
  onSelectLead,
}: {
  leads: BusinessLead[];
  selectedLeadId: string;
  onSelectLead: (leadId: string) => void;
}) {
  return (
    <div className="overflow-x-auto border border-emerald-500/14 bg-black/18">
      <table className="w-full min-w-[760px] border-collapse">
        <thead>
          <tr className="border-b border-emerald-500/16 bg-emerald-500/[0.025] text-left font-mono text-[10px] uppercase tracking-[0.1em] text-white/42">
            <th className="px-3 py-3 font-medium">Lead</th>
            <th className="px-3 py-3 font-medium">Need</th>
            <th className="px-3 py-3 font-medium">Fit</th>
            <th className="px-3 py-3 font-medium">Priority</th>
            <th className="px-3 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-500/10">
          {leads.map((lead) => {
            const selected = lead.id === selectedLeadId;

            return (
              <tr
                key={lead.id}
                className={`cursor-pointer transition-colors ${selected ? 'bg-emerald-500/[0.07]' : 'bg-transparent hover:bg-emerald-500/[0.035]'}`}
                onClick={() => onSelectLead(lead.id)}
              >
                <td className="px-3 py-3 align-top">
                  <button type="button" className="block w-full text-left" onClick={() => onSelectLead(lead.id)}>
                    <span className="block font-space-grotesk text-[16px] font-medium leading-tight text-white/82">{lead.company}</span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.04em] text-white/42">
                      {lead.contactName} // {lead.role}
                    </span>
                  </button>
                </td>
                <td className="max-w-[260px] px-3 py-3 align-top font-mono text-[12px] leading-relaxed text-white/58">
                  {lead.needs[0]}
                </td>
                <td className="px-3 py-3 align-top">
                  <span className="font-mono text-[18px] leading-none text-emerald-300 tabular-nums">{lead.fitScore.score}</span>
                  <span className="ml-1 font-mono text-[10px] uppercase text-white/36">/100</span>
                </td>
                <td className="px-3 py-3 align-top">
                  <PriorityBadge priority={lead.priority} />
                </td>
                <td className="px-3 py-3 align-top">
                  <StatusBadge status={lead.status} />
                </td>
              </tr>
            );
          })}
          {leads.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-3 py-8 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-white/42">
                No leads match the current filters.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
