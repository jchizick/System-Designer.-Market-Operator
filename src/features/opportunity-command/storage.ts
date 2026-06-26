import { initialBusinessLeads } from './data/businessLeads';
import { generateBusinessLeadDraft } from './draftGenerator';
import { calculateFitScore } from './scoring';
import type { BusinessLead, Draft, Interaction, OutreachProfile, PipelineStatus } from './types';

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
    prospect: 'Restored to prospect review.',
    draft_ready: 'Draft marked ready for review.',
    approved: 'Draft approved manually.',
    sent: 'Marked as sent outside the app.',
    replied: 'Reply tracked manually.',
    archived: 'Archived from active workflow.',
  };
  const interactionType: Record<PipelineStatus, Interaction['type']> = {
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
    status: lead.status === 'prospect' ? 'draft_ready' : lead.status,
    draft: {
      ...lead.draft,
      ...draft,
      updatedAt: new Date().toISOString(),
    },
    updatedAt: new Date().toISOString(),
  };
}
