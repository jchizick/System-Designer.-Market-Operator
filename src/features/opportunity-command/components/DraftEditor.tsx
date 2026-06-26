import React from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import type { BusinessLead } from '../types';

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  const Icon = copied ? ClipboardCheck : Clipboard;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-9 items-center justify-center gap-2 border border-emerald-500/24 bg-black/20 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-emerald-300 transition-colors hover:border-emerald-300/46 hover:bg-emerald-500/[0.055]"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
      {copied ? 'Copied' : label}
    </button>
  );
}

export function DraftEditor({
  lead,
  onSaveDraft,
}: {
  lead: BusinessLead;
  onSaveDraft: (draft: { subject: string; body: string }) => void;
}) {
  const [subject, setSubject] = React.useState(lead.draft.subject);
  const [body, setBody] = React.useState(lead.draft.body);

  React.useEffect(() => {
    setSubject(lead.draft.subject);
    setBody(lead.draft.body);
  }, [lead.id, lead.draft.subject, lead.draft.body]);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (subject !== lead.draft.subject || body !== lead.draft.body) {
        onSaveDraft({ subject, body });
      }
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [body, lead.draft.body, lead.draft.subject, onSaveDraft, subject]);

  return (
    <section className="border border-emerald-500/16 bg-black/18 p-4">
      <div className="mb-4 flex flex-col gap-3 border-b border-emerald-500/12 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Draft editor</div>
          <div className="mt-1 font-mono text-[11px] text-white/44">
            From identity: <span className="text-white/68">{lead.draft.from}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <CopyButton value={subject} label="Copy subject" />
          <CopyButton value={body} label="Copy body" />
        </div>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/42">Subject</span>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="min-h-11 w-full border border-emerald-500/18 bg-black/32 px-3 font-mono text-[13px] text-white/76 outline-none transition-colors placeholder:text-white/28 focus:border-emerald-300/48"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/42">Body</span>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={12}
          className="w-full resize-y border border-emerald-500/18 bg-black/32 px-3 py-3 font-mono text-[13px] leading-relaxed text-white/72 outline-none transition-colors placeholder:text-white/28 focus:border-emerald-300/48"
        />
      </label>
    </section>
  );
}
