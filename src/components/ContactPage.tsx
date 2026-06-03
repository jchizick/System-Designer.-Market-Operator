import React, { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, Layers3, LockKeyhole, Mail, MapPin, Radar, ShieldCheck, XCircle } from 'lucide-react';
import { Footer } from './Footer';
import { TopBar } from './TopBar';

const projectTypes = [
  'AI System',
  'Product / Dashboard',
  'Brand System',
  'Trading / Market Tool',
  'Workflow Automation',
  'Portfolio / Website',
  'Other',
];

const caseStudyTitles: Record<string, string> = {
  'synthetic-foundry': 'Synthetic Foundry',
  'market-command': 'Market Command',
  'algonquin-dashboard': 'Algonquin Dashboard',
  'the-brawler-mind': 'The Brawler Mind',
  'blockchain-brawlers': 'Blockchain Brawlers',
  'daniels-massage-therapy': 'Daniels Massage Therapy',
};

function titleFromCaseSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

const initialFormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  companyWebsite: '',
};

type FormState = typeof initialFormState;
type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitState = 'idle' | 'loading' | 'success' | 'error';

function ContactRadar() {
  return (
    <div className="relative hidden h-48 w-48 shrink-0 items-center justify-center text-emerald-400 opacity-70 lg:flex" aria-hidden="true">
      <div className="absolute inset-0 border border-emerald-500/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-emerald-500/12" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-emerald-500/12" />
      {[44, 74, 108, 144].map((size) => (
        <div
          key={size}
          className="absolute border border-emerald-500/12"
          style={{ width: size, height: size, left: `calc(50% - ${size / 2}px)`, top: `calc(50% - ${size / 2}px)`, borderRadius: '9999px' }}
        />
      ))}
      <Radar className="h-44 w-44 opacity-15" strokeWidth={0.8} />
      <span className="h-2 w-2 bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.8)]" />
      <span className="absolute -right-1 top-4 text-emerald-400/25">+</span>
      <span className="absolute bottom-5 -left-1 text-emerald-400/25">+</span>
    </div>
  );
}

function ContactInput({
  id,
  label,
  required = false,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-mono-xs uppercase tracking-widest text-white/55">
        {label} {required && <span className="text-emerald-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-mono-xs uppercase tracking-wider text-red-300/85">{error}</p>}
    </div>
  );
}

function FieldShell({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div className={`border bg-black/22 transition-colors ${error ? 'border-red-300/55' : 'border-white/14 focus-within:border-emerald-400/60'}`}>
      {children}
    </div>
  );
}

function MetadataRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2.4rem_minmax(0,1fr)] gap-4 border-t border-dashed border-emerald-500/14 py-4">
      <div className="flex h-9 w-9 items-center justify-center border border-emerald-500/35 text-emerald-400">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="mb-1 text-mono-xs uppercase tracking-widest text-emerald-400">{label}</div>
        <div className="text-mono-sm leading-relaxed pr-5 text-white/74">{value}</div>
      </div>
    </div>
  );
}

function validateForm(values: FormState) {
  const nextErrors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    nextErrors.name = 'Name required';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Email required';
  } else if (!emailPattern.test(values.email.trim())) {
    nextErrors.email = 'Valid email required';
  }

  if (!values.projectType) {
    nextErrors.projectType = 'Project type required';
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Message required';
  }

  return nextErrors;
}

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isSuccess = submitState === 'success';
  const caseParam = searchParams.get('case')?.trim() || '';
  const caseStudyTitle = caseParam ? caseStudyTitles[caseParam] || titleFromCaseSlug(caseParam) : '';

  const updateField = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (submitState === 'error') {
      setSubmitState('idle');
      setErrorMessage('');
    }
  };

  const statusCopy = useMemo(() => {
    if (submitState === 'success') {
      return {
        icon: CheckCircle2,
        heading: 'SIGNAL RECEIVED',
        copy: "I'll review the brief and respond if there's alignment.",
        tone: 'text-emerald-300',
      };
    }

    if (submitState === 'error') {
      return {
        icon: XCircle,
        heading: 'TRANSMISSION FAILED',
        copy: errorMessage || 'Something interrupted the channel. Try again or email directly.',
        tone: 'text-red-300',
      };
    }

    return null;
  }, [errorMessage, submitState]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('error');
      setErrorMessage('Required fields are missing or invalid.');
      return;
    }

    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          caseStudy: caseStudyTitle || undefined,
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'Unable to send message.');
      }

      setSubmitState('success');
      setValues(initialFormState);
      setErrors({});
    } catch (error) {
      setSubmitState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message.');
    }
  };

  return (
    <div className="relative flex min-h-screen max-w-full flex-col overflow-x-hidden p-4 sm:p-6">
      <TopBar className="max-w-[1180px]" />
      <main className="mx-auto w-full max-w-[1180px] flex-grow">
        <section className="relative mb-8 border border-transparent pt-2">
          <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-emerald-500/30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-emerald-500/30" aria-hidden="true" />

          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="min-w-0">
              <div className="mb-8 text-mono-base uppercase tracking-widest text-emerald-400">008 // Contact</div>
              <h1 className="font-space-grotesk text-[48px] font-medium uppercase leading-none tracking-[0] text-text-primary sm:text-[58px] lg:text-[58px]">
                Open A Channel
              </h1>
              <div className="mt-6 h-1 w-12 bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
              <p className="mt-7 max-w-[550px] text-mono-base leading-relaxed text-white/66">
                For AI systems, product interfaces, workflow design, trading dashboards, brand systems, and forward-deployed work.
              </p>
            </div>

            <div className="hidden flex-col items-center gap-4 pt-2 lg:flex">
              <ContactRadar />
              <div className="text-mono-xs uppercase tracking-widest text-emerald-400/80">43.6532 N, 79.3832 W</div>
            </div>
          </div>
        </section>

        <section className="mb-8 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.6fr]">
          <aside className="relative min-w-0 border border-white/14 bg-black/22 p-5 shadow-[inset_0_0_32px_rgba(16,185,129,0.025)] sm:p-7">
            <div className="mb-8 flex items-center gap-3 text-mono-sm uppercase tracking-widest text-emerald-300">
              <span className="text-[22px] leading-none">+</span>
              <h2>Let's Build What Matters.</h2>
            </div>

            <p className="text-mono-base text-white/68">
              I partner with founders, operators, and teams to design intelligent systems and interfaces that perform in the real world. From zero to production, with clarity, precision, and operational intent.
            </p>

            <div className="mt-8">
              <MetadataRow icon={MapPin} label="Location" value="Toronto, Canada" />
              <MetadataRow icon={Clock3} label="Typical Response" value="Within 24-48 hours" />
              <MetadataRow
                icon={Layers3}
                label="Preferred Projects"
                value={
                  <span>
                    AI Systems <span className="px-2 text-emerald-400">.</span> Dashboards <span className="px-2 text-emerald-400">.</span> Interfaces <span className="px-2 text-emerald-400">.</span> Workflows <span className="px-2 text-emerald-400">.</span> Brand Systems
                  </span>
                }
              />
            </div>

            <a
              href="mailto:jordan@chizick.com"
              className="mt-9 grid min-w-0 grid-cols-[2rem_minmax(0,1fr)_1rem] items-center gap-4 border border-emerald-500/35 bg-emerald-500/5 p-4 text-mono-sm text-white/76 transition-colors hover:border-emerald-400/65 hover:bg-emerald-500/10 hover:text-white"
            >
              <Mail className="h-5 w-5 text-emerald-300" strokeWidth={1.5} />
              <span className="min-w-0">
                <span className="mb-1 block text-mono-xs uppercase tracking-widest text-emerald-300">Prefer Direct Contact?</span>
                <span className="break-all">jordan@chizick.com</span>
              </span>
              <ArrowRight className="h-4 w-4 text-emerald-300" strokeWidth={1.6} />
            </a>

            <div className="relative mt-9 border border-white/12 px-5 py-5 text-center text-mono-sm uppercase leading-7 tracking-widest text-emerald-200/78">
              <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t border-white/35" />
              <span className="pointer-events-none absolute right-0 top-0 h-2 w-2 border-r border-t border-white/35" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/35" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/35" />
              Systems Over Assets.<br />Durability Over Decoration.
            </div>
          </aside>

          <section className="relative min-w-0 border border-emerald-500/35 bg-black/28 p-5 shadow-[0_0_28px_rgba(16,185,129,0.05),inset_0_0_32px_rgba(16,185,129,0.025)] sm:p-7">
            <div className="mb-7 flex items-center justify-between gap-5 border-b border-white/10 pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <LockKeyhole className="h-4 w-4 shrink-0 text-emerald-300" strokeWidth={1.6} />
                <h2 className="min-w-0 text-mono-sm uppercase tracking-widest text-emerald-300">Secure Intake // Contact Form</h2>
              </div>
              <div className="hidden text-emerald-500/25 sm:block">////////</div>
            </div>

            {statusCopy && (
              <div className={`mb-5 grid grid-cols-[2.4rem_minmax(0,1fr)] gap-3 border border-white/12 bg-black/28 p-4 ${statusCopy.tone}`}>
                {React.createElement(statusCopy.icon, { className: 'h-6 w-6', strokeWidth: 1.6 })}
                <div>
                  <div className="text-mono-sm uppercase tracking-widest">{statusCopy.heading}</div>
                  <p className="mt-1 text-mono-sm leading-relaxed text-white/64">{statusCopy.copy}</p>
                </div>
              </div>
            )}

            {caseStudyTitle && (
              <div className="mb-5 inline-flex max-w-full items-center gap-2 border border-emerald-500/28 bg-emerald-500/7 px-3 py-2 text-mono-xs uppercase tracking-widest text-emerald-300">
                <span className="h-1.5 w-1.5 shrink-0 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.65)]" />
                <span className="min-w-0 truncate">Discussing Build: {caseStudyTitle}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <input
                type="text"
                name="companyWebsite"
                value={values.companyWebsite}
                onChange={(event) => updateField('companyWebsite', event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <ContactInput id="name" label="Name" required error={errors.name}>
                <FieldShell error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className="h-12 w-full bg-transparent px-4 text-mono-sm text-white/82 outline-none placeholder:text-white/32"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </FieldShell>
              </ContactInput>

              <ContactInput id="email" label="Email" required error={errors.email}>
                <FieldShell error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className="h-12 w-full bg-transparent px-4 text-mono-sm text-white/82 outline-none placeholder:text-white/32"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </FieldShell>
              </ContactInput>

              <ContactInput id="projectType" label="Project Type" required error={errors.projectType}>
                <FieldShell error={errors.projectType}>
                  <select
                    id="projectType"
                    value={values.projectType}
                    onChange={(event) => updateField('projectType', event.target.value)}
                    className="h-12 w-full bg-black px-4 text-mono-sm text-white/76 outline-none"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((projectType) => (
                      <option key={projectType} value={projectType}>{projectType}</option>
                    ))}
                  </select>
                </FieldShell>
              </ContactInput>

              <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
                <ContactInput id="budget" label="Budget / Scope (Optional)">
                  <FieldShell>
                    <input
                      id="budget"
                      type="text"
                      value={values.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      className="h-12 w-full bg-transparent px-4 text-mono-sm text-white/82 outline-none placeholder:text-white/32"
                      placeholder="e.g. $25k - $75k"
                    />
                  </FieldShell>
                </ContactInput>

                <ContactInput id="timeline" label="Timeline (Optional)">
                  <FieldShell>
                    <input
                      id="timeline"
                      type="text"
                      value={values.timeline}
                      onChange={(event) => updateField('timeline', event.target.value)}
                      className="h-12 w-full bg-transparent px-4 text-mono-sm text-white/82 outline-none placeholder:text-white/32"
                      placeholder="e.g. 4-8 weeks"
                    />
                  </FieldShell>
                </ContactInput>
              </div>

              <ContactInput id="message" label="Message" required error={errors.message}>
                <FieldShell error={errors.message}>
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="min-h-[150px] w-full resize-y bg-transparent px-4 py-3 text-mono-sm leading-relaxed text-white/82 outline-none placeholder:text-white/32"
                    placeholder="Tell me about your project, goals, and what success looks like."
                  />
                </FieldShell>
              </ContactInput>

              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="flex h-12 w-full items-center justify-center gap-3 border border-emerald-500/60 bg-emerald-500/12 px-4 text-mono-sm uppercase tracking-widest text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-colors hover:bg-emerald-500/18 hover:text-emerald-200 disabled:cursor-wait disabled:opacity-60"
              >
                <span>{submitState === 'loading' ? 'Transmitting...' : 'Transmit Message'}</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </form>

            <div className="mt-7 grid grid-cols-[2.4rem_minmax(0,1fr)] gap-4 text-mono-sm leading-relaxed text-white/58">
              <ShieldCheck className="h-7 w-7 text-white/50" strokeWidth={1.4} />
              <p>Signals are reviewed personally. If there's alignment, I'll respond directly.</p>
            </div>
          </section>
        </section>

        <section className="mb-10 grid min-w-0 grid-cols-1 border-t border-white/10 pt-6 text-mono-xs uppercase tracking-widest text-white/46 md:grid-cols-4">
          <div className="border-b border-white/10 py-4 md:border-b-0 md:border-r md:pr-6">
            <div className="mb-5 flex items-center gap-2 text-emerald-400"><span className="h-2 w-2 bg-emerald-400" />System Status</div>
            <div className="mb-6 text-mono-base text-emerald-300">Operational</div>
            <div>Last Sync: 06.03.2026 UTC</div>
          </div>
          <div className="border-b border-white/10 py-4 md:border-b-0 md:border-r md:px-6">
            <div className="mb-4 text-emerald-400">Code Of Operations</div>
            <div className="space-y-2">
              {['Clarity First', 'Build To Last', 'Measure What Matters', 'Protect The User'].map((item) => (
                <div key={item}><span className="text-emerald-400">.</span> {item}</div>
              ))}
            </div>
          </div>
          <div className="border-b border-white/10 py-4 md:border-b-0 md:border-r md:px-6">
            <div className="mb-4 text-emerald-400">Capabilities</div>
            <div className="space-y-2">
              <div>AI Systems Design</div>
              <div>Product Interfaces</div>
              <div>Data & Workflow Architecture</div>
              <div>Trading & Ops Dashboards</div>
              <div>Brand Systems</div>
            </div>
          </div>
          <div className="py-4 md:pl-6">
            <div className="mb-4 text-emerald-400">Secure Channel</div>
            <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-white/15 text-emerald-400 md:mx-0">
              <span className="h-2 w-2 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.75)]" />
            </div>
            <div>Encrypted End-To-End</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
