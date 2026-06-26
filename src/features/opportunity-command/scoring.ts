import type { BusinessLead, FitScore } from './types';

export function calculateFitScore(lead: BusinessLead): FitScore {
  const reasons: string[] = [];
  let score = 30;

  if (lead.priority === 'high') {
    score += 12;
    reasons.push('High-priority lead for manual review.');
  } else if (lead.priority === 'medium') {
    score += 7;
    reasons.push('Medium priority with enough signal to draft.');
  } else {
    score += 3;
    reasons.push('Lower priority, keep warm without pressure.');
  }

  if (lead.signals.some((signal) => /founder-led/i.test(signal))) {
    score += 12;
    reasons.push('Founder-led business can make quick system decisions.');
  }

  if (lead.needs.some((need) => /dashboard|workflow|booking|brief|crm|lead/i.test(need))) {
    score += 18;
    reasons.push('Needs map to product/interface/workflow systems.');
  }

  if ([lead.observedProblem, lead.offerAngle, lead.fitReason].some((field) => /dashboard|workflow|booking|brief|crm|lead|system|interface|report/i.test(field || ''))) {
    score += 10;
    reasons.push('Manual fit notes identify a system-shaped opportunity.');
  }

  if (lead.signals.some((signal) => /complex|data|multiple|ops-heavy|reports/i.test(signal))) {
    score += 14;
    reasons.push('Operational complexity creates a clear command-center use case.');
  }

  if (['6-15', '16-30'].includes(lead.companySize)) {
    score += 10;
    reasons.push('Company size is large enough to feel workflow pain but small enough for focused adoption.');
  }

  if (lead.signals.some((signal) => /warm|referral|past conversation/i.test(signal)) || /referral|past conversation/i.test(lead.source.label)) {
    score += 10;
    reasons.push('Warm source reduces outreach friction.');
  }

  const cappedScore = Math.min(100, score);
  const tier = cappedScore >= 78 ? 'high' : cappedScore >= 58 ? 'medium' : 'low';

  return {
    score: cappedScore,
    tier,
    reasons,
  };
}
