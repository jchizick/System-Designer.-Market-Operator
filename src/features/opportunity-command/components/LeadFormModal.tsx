import React from 'react';
import { Save, X } from 'lucide-react';
import { businessLeadToFormInput } from '../storage';
import type { BusinessLead, BusinessLeadFormInput, Priority } from '../types';

const priorityOptions: Priority[] = ['high', 'medium', 'low'];

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/42">
        {label}{required ? <span className="text-emerald-300"> *</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-10 w-full border border-emerald-500/18 bg-black/32 px-3 font-mono text-[12px] text-white/72 outline-none placeholder:text-white/26 focus:border-emerald-300/48"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/42">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y border border-emerald-500/18 bg-black/32 px-3 py-3 font-mono text-[12px] leading-relaxed text-white/72 outline-none placeholder:text-white/26 focus:border-emerald-300/48"
      />
    </label>
  );
}

export function LeadFormModal({
  mode,
  lead,
  onClose,
  onSave,
}: {
  mode: 'add' | 'edit';
  lead?: BusinessLead;
  onClose: () => void;
  onSave: (input: BusinessLeadFormInput) => void;
}) {
  const [form, setForm] = React.useState<BusinessLeadFormInput>(() => {
    const initial = businessLeadToFormInput(lead);

    return {
      ...initial,
      generateDraft: mode === 'add' ? true : initial.generateDraft,
    };
  });
  const [error, setError] = React.useState('');
  const title = mode === 'add' ? 'Add Business Lead' : 'Edit Business Lead';

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const updateField = <K extends keyof BusinessLeadFormInput>(field: K, value: BusinessLeadFormInput[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.businessName.trim()) {
      setError('Business name is required.');
      return;
    }

    if (!form.website.trim() && !form.contactEmail.trim()) {
      setError('Add at least a website or contact email.');
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-[10020] flex items-end justify-center bg-black/72 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-5" role="dialog" aria-modal="true" aria-labelledby="business-lead-form-title">
      <div className="max-h-[92vh] w-full max-w-[920px] overflow-y-auto border border-emerald-500/22 bg-[#050807] shadow-[0_0_40px_rgba(16,185,129,0.08),inset_0_0_28px_rgba(16,185,129,0.025)]">
        <form onSubmit={submit}>
          <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-emerald-500/16 bg-[#050807]/96 px-4 py-3 sm:px-5">
            <div>
              <h2 id="business-lead-form-title" className="font-space-grotesk text-[24px] font-medium leading-tight text-white/88">
                {title}
              </h2>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white/38">
                Manual entry // localStorage only
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-500/22 bg-black/24 text-white/52 transition-colors hover:border-emerald-300/42 hover:text-emerald-200"
              aria-label="Cancel"
            >
              <X className="h-4.5 w-4.5" strokeWidth={1.7} />
            </button>
          </header>

          <div className="space-y-5 p-4 sm:p-5">
            {error ? (
              <div className="border border-red-400/26 bg-red-400/[0.055] px-3 py-2 font-mono text-[12px] text-red-200">
                {error}
              </div>
            ) : null}

            <section className="grid gap-3 md:grid-cols-2">
              <Field label="Business name" value={form.businessName} onChange={(value) => updateField('businessName', value)} required />
              <Field label="Website" value={form.website} onChange={(value) => updateField('website', value)} placeholder="example.com" />
              <Field label="Contact name" value={form.contactName} onChange={(value) => updateField('contactName', value)} />
              <Field label="Contact role" value={form.contactRole} onChange={(value) => updateField('contactRole', value)} />
              <Field label="Contact email" value={form.contactEmail} onChange={(value) => updateField('contactEmail', value)} type="email" />
              <Field label="Industry" value={form.industry} onChange={(value) => updateField('industry', value)} />
              <Field label="Location" value={form.location} onChange={(value) => updateField('location', value)} />
              <Field label="Company size" value={form.companySize} onChange={(value) => updateField('companySize', value)} placeholder="6-15" />
            </section>

            <section className="grid gap-3 md:grid-cols-3">
              <TextAreaField label="Observed problem" value={form.observedProblem} onChange={(value) => updateField('observedProblem', value)} placeholder="What looks heavy, scattered, or unclear?" />
              <TextAreaField label="Offer angle" value={form.offerAngle} onChange={(value) => updateField('offerAngle', value)} placeholder="What useful system or briefing could help?" />
              <TextAreaField label="Fit reason" value={form.fitReason} onChange={(value) => updateField('fitReason', value)} placeholder="Why this lead is or is not a strong fit." />
            </section>

            <section className="grid gap-3 md:grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)]">
              <label className="block min-w-0">
                <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/42">Priority</span>
                <select
                  value={form.priority}
                  onChange={(event) => updateField('priority', event.target.value as Priority)}
                  className="min-h-10 w-full border border-emerald-500/18 bg-black/32 px-3 font-mono text-[11px] uppercase tracking-[0.06em] text-white/68 outline-none focus:border-emerald-300/48"
                >
                  {priorityOptions.map((priority) => (
                    <option key={priority} value={priority} className="bg-black text-white">
                      {priority}
                    </option>
                  ))}
                </select>
              </label>
              <Field label="Source" value={form.source} onChange={(value) => updateField('source', value)} placeholder="Manual entry" />
              <Field label="Signals" value={form.signals} onChange={(value) => updateField('signals', value)} placeholder="Founder-led, data-rich, warm referral" />
            </section>

            <section className="grid gap-3 md:grid-cols-2">
              <Field label="Tags" value={form.tags} onChange={(value) => updateField('tags', value)} placeholder="proptech, dashboard, founder-led" />
              <TextAreaField label="Notes" value={form.notes} onChange={(value) => updateField('notes', value)} rows={2} />
            </section>

            <label className="flex items-center gap-3 border border-emerald-500/14 bg-black/18 px-3 py-3 font-mono text-[12px] text-white/62">
              <input
                type="checkbox"
                checked={form.generateDraft}
                onChange={(event) => updateField('generateDraft', event.target.checked)}
                className="h-4 w-4 accent-emerald-400"
              />
              Generate draft from lead details
            </label>
          </div>

          <footer className="sticky bottom-0 z-10 flex flex-col-reverse gap-2 border-t border-emerald-500/16 bg-[#050807]/96 px-4 py-3 sm:flex-row sm:justify-end sm:px-5">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center justify-center border border-white/14 bg-black/22 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/54 transition-colors hover:border-white/28 hover:text-white/78"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-emerald-400/46 bg-emerald-400 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#03110c] transition-colors hover:bg-emerald-300"
            >
              <Save className="h-4 w-4" strokeWidth={1.8} />
              Save
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
