export type OpportunityType = 'business-outreach';

export type PipelineStatus = 'new' | 'prospect' | 'draft_ready' | 'approved' | 'sent' | 'replied' | 'archived';

export type Priority = 'low' | 'medium' | 'high';

export type Source = {
  label: string;
  url?: string;
  capturedAt: string;
};

export type FitScore = {
  score: number;
  tier: 'low' | 'medium' | 'high';
  reasons: string[];
};

export type Draft = {
  from: string;
  subject: string;
  body: string;
  updatedAt: string;
};

export type Interaction = {
  id: string;
  type: 'draft_created' | 'approved' | 'sent' | 'replied' | 'archived' | 'note';
  at: string;
  note: string;
};

export type Opportunity = {
  id: string;
  type: OpportunityType;
  status: PipelineStatus;
  priority: Priority;
  fitScore: FitScore;
  draft: Draft;
  interactions: Interaction[];
  source: Source;
  notes: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  lastContactedAt?: string;
};

export type BusinessLead = Opportunity & {
  type: 'business-outreach';
  company: string;
  contactName: string;
  role: string;
  email?: string;
  website: string;
  industry: string;
  location: string;
  companySize: string;
  signals: string[];
  needs: string[];
  observedProblem?: string;
  offerAngle?: string;
  fitReason?: string;
};

export type OutreachProfile = {
  name: string;
  fromIdentity: string;
  positioning: string;
};

export type BusinessLeadFormInput = {
  businessName: string;
  website: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  industry: string;
  location: string;
  companySize: string;
  observedProblem: string;
  offerAngle: string;
  fitReason: string;
  priority: Priority;
  source: string;
  signals: string;
  tags: string;
  notes: string;
  generateDraft: boolean;
};
