import { initialBusinessLeads } from './data/businessLeads';
import { generateBusinessLeadDraft } from './draftGenerator';
import { calculateFitScore } from './scoring';
import type { BusinessLead, BusinessLeadFormInput, Draft, Interaction, OutreachProfile, PipelineStatus } from './types';

const STORAGE_KEY = 'opportunity-command:v1:business-leads';

const defaultProfile: OutreachProfile = {
  name: 'Jordan Chizick',
  fromIdentity: 'jordan@briefing.chizick.com',
  positioning: 'turning scattered operations, offers, and interfaces into clear systems',
};

const createInteraction = (type: Interaction['type'], note: string): Interaction => ({
  id: `interaction-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  type,
  at: new Date().toISOString(),
  note,
});

export function hydrateBusinessLead(lead: BusinessLead): BusinessLead {
  const fitScore = calculateFitScore(lead);
  const draft = lead.draft.subject && lead.draft.body
    ? lead.draft
    : generateBusinessLeadDraft(lead, defaultProfile);

  return {
    ...lead,
    fitScore,
    draft,
  };
}

const splitList = (value: string) => value
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean);

const compactNeeds = (input: Pick<BusinessLeadFormInput, 'observedProblem' | 'offerAngle' | 'fitReason'>) => [
  input.observedProblem,
  input.offerAngle,
  input.fitReason,
].map((item) => item.trim()).filter(Boolean);

export function businessLeadToFormInput(lead?: BusinessLead): BusinessLeadFormInput {
  return {
    businessName: lead?.company || '',
    website: lead?.website || '',
    contactName: lead?.contactName || '',
    contactRole: lead?.role || '',
    contactEmail: lead?.email || '',
    industry: lead?.industry || '',
    location: lead?.location || '',
    companySize: lead?.companySize || '',
    observedProblem: lead?.observedProblem || lead?.needs[0] || '',
    offerAngle: lead?.offerAngle || lead?.needs[1] || '',
    fitReason: lead?.fitReason || lead?.needs[2] || '',
    priority: lead?.priority || 'medium',
    source: lead?.source.label || 'Manual entry',
    signals: lead?.signals.join(', ') || '',
    tags: lead?.tags.join(', ') || '',
    notes: lead?.notes || '',
    generateDraft: !lead?.draft.subject && !lead?.draft.body,
  };
}

export function createBusinessLeadFromInput(input: BusinessLeadFormInput): BusinessLead {
  const now = new Date().toISOString();
  const leadBase: BusinessLead = {
    id: `lead-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type: 'business-outreach',
    status: 'new',
    priority: input.priority,
    fitScore: { score: 0, tier: 'low', reasons: [] },
    draft: { from: defaultProfile.fromIdentity, subject: '', body: '', updatedAt: now },
    interactions: [createInteraction('note', 'Lead created manually.')],
    source: { label: input.source.trim() || 'Manual entry', capturedAt: now },
    notes: input.notes.trim(),
    tags: splitList(input.tags),
    createdAt: now,
    updatedAt: now,
    company: input.businessName.trim(),
    contactName: input.contactName.trim(),
    role: input.contactRole.trim(),
    email: input.contactEmail.trim() || undefined,
    website: input.website.trim(),
    industry: input.industry.trim(),
    location: input.location.trim(),
    companySize: input.companySize.trim(),
    signals: splitList(input.signals),
    needs: compactNeeds(input),
    observedProblem: input.observedProblem.trim(),
    offerAngle: input.offerAngle.trim(),
    fitReason: input.fitReason.trim(),
  };
  const fitScore = calculateFitScore(leadBase);
  const draft = input.generateDraft
    ? generateBusinessLeadDraft({ ...leadBase, fitScore }, defaultProfile)
    : leadBase.draft;

  return {
    ...leadBase,
    fitScore,
    draft,
  };
}

export function updateBusinessLeadFromInput(lead: BusinessLead, input: BusinessLeadFormInput): BusinessLead {
  const now = new Date().toISOString();
  const updatedLead: BusinessLead = {
    ...lead,
    priority: input.priority,
    source: {
      ...lead.source,
      label: input.source.trim() || 'Manual entry',
    },
    notes: input.notes.trim(),
    tags: splitList(input.tags),
    updatedAt: now,
    company: input.businessName.trim(),
    contactName: input.contactName.trim(),
    role: input.contactRole.trim(),
    email: input.contactEmail.trim() || undefined,
    website: input.website.trim(),
    industry: input.industry.trim(),
    location: input.location.trim(),
    companySize: input.companySize.trim(),
    signals: splitList(input.signals),
    needs: compactNeeds(input),
    observedProblem: input.observedProblem.trim(),
    offerAngle: input.offerAngle.trim(),
    fitReason: input.fitReason.trim(),
  };
  const fitScore = calculateFitScore(updatedLead);

  return {
    ...updatedLead,
    fitScore,
    draft: input.generateDraft
      ? generateBusinessLeadDraft({ ...updatedLead, fitScore }, defaultProfile)
      : lead.draft,
  };
}

export function loadBusinessLeads(): BusinessLead[] {
  if (typeof window === 'undefined') {
    return initialBusinessLeads.map(hydrateBusinessLead);
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    const seeded = initialBusinessLeads.map(hydrateBusinessLead);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    const parsed = JSON.parse(stored) as BusinessLead[];
    return parsed.map(hydrateBusinessLead);
  } catch {
    const seeded = initialBusinessLeads.map(hydrateBusinessLead);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
}

export function saveBusinessLeads(leads: BusinessLead[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function canTransitionToStatus(lead: BusinessLead, nextStatus: PipelineStatus) {
  if (nextStatus === 'sent') {
    return lead.status === 'approved';
  }

  if (lead.status === 'archived') {
    return nextStatus === 'prospect';
  }

  return true;
}

export function transitionLeadStatus(lead: BusinessLead, nextStatus: PipelineStatus): BusinessLead {
  if (!canTransitionToStatus(lead, nextStatus)) {
    return lead;
  }

  const now = new Date().toISOString();
  const interactionNote: Record<PipelineStatus, string> = {
    new: 'Restored to new lead review.',
    prospect: 'Restored to prospect review.',
    draft_ready: 'Draft marked ready for review.',
    approved: 'Draft approved manually.',
    sent: 'Marked as sent outside the app.',
    replied: 'Reply tracked manually.',
    archived: 'Archived from active workflow.',
  };
  const interactionType: Record<PipelineStatus, Interaction['type']> = {
    new: 'note',
    prospect: 'note',
    draft_ready: 'draft_created',
    approved: 'approved',
    sent: 'sent',
    replied: 'replied',
    archived: 'archived',
  };

  return {
    ...lead,
    status: nextStatus,
    updatedAt: now,
    lastContactedAt: nextStatus === 'sent' ? now : lead.lastContactedAt,
    interactions: [createInteraction(interactionType[nextStatus], interactionNote[nextStatus]), ...lead.interactions],
  };
}

export function updateLeadDraft(lead: BusinessLead, draft: Pick<Draft, 'subject' | 'body'>): BusinessLead {
  return {
    ...lead,
    status: lead.status === 'new' || lead.status === 'prospect' ? 'draft_ready' : lead.status,
    draft: {
      ...lead.draft,
      ...draft,
      updatedAt: new Date().toISOString(),
    },
    updatedAt: new Date().toISOString(),
  };
}
