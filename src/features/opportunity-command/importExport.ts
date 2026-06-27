import { generateBusinessLeadDraft } from './draftGenerator';
import { calculateFitScore } from './scoring';
import type { BusinessLead, Draft, FitScore, Interaction, PipelineStatus, Priority, Source } from './types';

const fromIdentity = 'jordan@briefing.chizick.com';
const profile = {
  name: 'Jordan Chizick',
  fromIdentity,
  positioning: 'turning scattered operations, offers, and interfaces into clear systems',
};

const statuses: PipelineStatus[] = ['new', 'prospect', 'draft_ready', 'approved', 'sent', 'replied', 'archived'];
const priorities: Priority[] = ['low', 'medium', 'high'];

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value && typeof value === 'object' && !Array.isArray(value));

const asString = (value: unknown, fallback = '') => (typeof value === 'string' ? value : fallback);

const asArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value.split(',').map((item) => item.trim()).filter(Boolean);
  }

  return [];
};

const generateLeadId = () => `lead-import-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

const normalizeStatus = (value: unknown): PipelineStatus => {
  if (typeof value === 'string' && statuses.includes(value as PipelineStatus)) {
    return value as PipelineStatus;
  }

  return 'new';
};

const normalizePriority = (value: unknown): Priority => {
  if (typeof value === 'string' && priorities.includes(value as Priority)) {
    return value as Priority;
  }

  return 'medium';
};

const normalizeSource = (value: unknown, now: string): Source => {
  if (isRecord(value)) {
    return {
      label: asString(value.label, 'Imported JSON'),
      url: asString(value.url) || undefined,
      capturedAt: asString(value.capturedAt, now),
    };
  }

  return {
    label: asString(value, 'Imported JSON'),
    capturedAt: now,
  };
};

const normalizeDraft = (value: unknown, now: string): Draft => {
  if (isRecord(value)) {
    return {
      from: asString(value.from, fromIdentity),
      subject: asString(value.subject),
      body: asString(value.body),
      updatedAt: asString(value.updatedAt, now),
    };
  }

  return {
    from: fromIdentity,
    subject: '',
    body: '',
    updatedAt: now,
  };
};

const normalizeInteractions = (value: unknown): Interaction[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isRecord).map((interaction, index) => ({
    id: asString(interaction.id, `interaction-import-${Date.now()}-${index}`),
    type: ['draft_created', 'approved', 'sent', 'replied', 'archived', 'note'].includes(asString(interaction.type))
      ? asString(interaction.type) as Interaction['type']
      : 'note',
    at: asString(interaction.at, new Date().toISOString()),
    note: asString(interaction.note, 'Imported interaction.'),
  }));
};

const normalizeFitScore = (value: unknown): FitScore => {
  if (isRecord(value)) {
    const score = typeof value.score === 'number' && Number.isFinite(value.score) ? value.score : 0;
    const tier = ['low', 'medium', 'high'].includes(asString(value.tier)) ? asString(value.tier) as FitScore['tier'] : 'low';

    return {
      score,
      tier,
      reasons: asArray(value.reasons),
    };
  }

  return {
    score: 0,
    tier: 'low',
    reasons: [],
  };
};

export function getExportDateStamp(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function exportLeadsToJson(leads: BusinessLead[]) {
  return JSON.stringify({
    version: 'opportunity-command-v1.2',
    exportedAt: new Date().toISOString(),
    leads,
  }, null, 2);
}

const csvColumns: Array<{ key: string; value: (lead: BusinessLead) => string | number | undefined }> = [
  { key: 'businessName', value: (lead) => lead.company },
  { key: 'website', value: (lead) => lead.website },
  { key: 'contactName', value: (lead) => lead.contactName },
  { key: 'contactRole', value: (lead) => lead.role },
  { key: 'contactEmail', value: (lead) => lead.email },
  { key: 'industry', value: (lead) => lead.industry },
  { key: 'location', value: (lead) => lead.location },
  { key: 'companySize', value: (lead) => lead.companySize },
  { key: 'observedProblem', value: (lead) => lead.observedProblem },
  { key: 'offerAngle', value: (lead) => lead.offerAngle },
  { key: 'fitReason', value: (lead) => lead.fitReason },
  { key: 'fitScore', value: (lead) => lead.fitScore.score },
  { key: 'priority', value: (lead) => lead.priority },
  { key: 'status', value: (lead) => lead.status },
  { key: 'lastContactedAt', value: (lead) => lead.lastContactedAt },
  { key: 'source', value: (lead) => lead.source.label },
  { key: 'tags', value: (lead) => lead.tags.join(', ') },
  { key: 'signals', value: (lead) => lead.signals.join(', ') },
  { key: 'notes', value: (lead) => lead.notes },
  { key: 'draftSubject', value: (lead) => lead.draft.subject },
  { key: 'draftBody', value: (lead) => lead.draft.body },
  { key: 'createdAt', value: (lead) => lead.createdAt },
  { key: 'updatedAt', value: (lead) => lead.updatedAt },
];

const escapeCsvValue = (value: string | number | undefined) => {
  const text = String(value ?? '');

  return `"${text.replaceAll('"', '""')}"`;
};

export function exportLeadsToCsv(leads: BusinessLead[]) {
  const header = csvColumns.map((column) => column.key).join(',');
  const rows = leads.map((lead) => csvColumns.map((column) => escapeCsvValue(column.value(lead))).join(','));

  return [header, ...rows].join('\r\n');
}

export function downloadTextFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}

export function normalizeImportedLead(rawLead: unknown): BusinessLead | null {
  if (!isRecord(rawLead)) {
    return null;
  }

  const now = new Date().toISOString();
  const observedProblem = asString(rawLead.observedProblem);
  const offerAngle = asString(rawLead.offerAngle);
  const fitReason = asString(rawLead.fitReason);
  const needs = asArray(rawLead.needs);
  const leadBase: BusinessLead = {
    id: asString(rawLead.id, generateLeadId()),
    type: 'business-outreach',
    status: normalizeStatus(rawLead.status),
    priority: normalizePriority(rawLead.priority),
    fitScore: normalizeFitScore(rawLead.fitScore),
    draft: normalizeDraft(rawLead.draft, now),
    interactions: normalizeInteractions(rawLead.interactions),
    source: normalizeSource(rawLead.source, now),
    notes: asString(rawLead.notes),
    tags: asArray(rawLead.tags),
    createdAt: asString(rawLead.createdAt, now),
    updatedAt: asString(rawLead.updatedAt, now),
    lastContactedAt: asString(rawLead.lastContactedAt) || undefined,
    company: asString(rawLead.company || rawLead.businessName, 'Imported lead'),
    contactName: asString(rawLead.contactName),
    role: asString(rawLead.role || rawLead.contactRole),
    email: asString(rawLead.email || rawLead.contactEmail) || undefined,
    website: asString(rawLead.website),
    industry: asString(rawLead.industry),
    location: asString(rawLead.location),
    companySize: asString(rawLead.companySize),
    signals: asArray(rawLead.signals),
    needs: needs.length > 0 ? needs : [observedProblem, offerAngle, fitReason].filter(Boolean),
    observedProblem: observedProblem || needs[0] || '',
    offerAngle: offerAngle || needs[1] || '',
    fitReason: fitReason || needs[2] || '',
  };
  const fitScore = calculateFitScore(leadBase);
  const draft = leadBase.draft.subject || leadBase.draft.body
    ? leadBase.draft
    : generateBusinessLeadDraft({ ...leadBase, fitScore }, profile);

  return {
    ...leadBase,
    fitScore,
    draft,
  };
}

export function parseImportedLeads(jsonText: string): BusinessLead[] {
  const parsed = JSON.parse(jsonText) as unknown;
  const rawLeads = Array.isArray(parsed)
    ? parsed
    : isRecord(parsed) && Array.isArray(parsed.leads)
      ? parsed.leads
      : null;

  if (!rawLeads) {
    return [];
  }

  return rawLeads.map(normalizeImportedLead).filter((lead): lead is BusinessLead => Boolean(lead));
}

export function mergeImportedLeads(existingLeads: BusinessLead[], importedLeads: BusinessLead[]) {
  const usedIds = new Set(existingLeads.map((lead) => lead.id));
  const adjustedImportedLeads = importedLeads.map((lead) => {
    if (!usedIds.has(lead.id)) {
      usedIds.add(lead.id);
      return lead;
    }

    const updatedId = generateLeadId();
    usedIds.add(updatedId);

    return {
      ...lead,
      id: updatedId,
      updatedAt: new Date().toISOString(),
      interactions: [
        {
          id: `interaction-import-conflict-${Date.now()}`,
          type: 'note' as const,
          at: new Date().toISOString(),
          note: `Imported with new id because ${lead.id} already existed locally.`,
        },
        ...lead.interactions,
      ],
    };
  });

  return [...existingLeads, ...adjustedImportedLeads];
}
