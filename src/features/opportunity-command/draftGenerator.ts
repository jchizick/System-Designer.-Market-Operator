import type { BusinessLead, Draft, OutreachProfile } from './types';

const nowIso = () => new Date().toISOString();

export function generateBusinessLeadDraft(lead: BusinessLead, profile: OutreachProfile): Draft {
  const primaryNeed = (lead.offerAngle || lead.needs[0] || 'your operating workflow').toLowerCase();
  const signal = lead.signals[0]?.toLowerCase() || 'the way the business is growing';

  return {
    from: profile.fromIdentity,
    subject: `Small idea for ${lead.company}`,
    body: `Hi ${lead.contactName},

I was looking at ${lead.company} and noticed ${signal}. It made me think there may be a useful opportunity to tighten ${primaryNeed} without turning it into a big rebuild.

My work is around ${profile.positioning}. A simple first step could be a short briefing map: what is already working, where the handoffs are getting heavy, and what a lightweight system could clean up.

No pressure if this is not a current priority. If it is useful, I can send over a compact outline for what I would look at first.

Jordan`,
    updatedAt: nowIso(),
  };
}
