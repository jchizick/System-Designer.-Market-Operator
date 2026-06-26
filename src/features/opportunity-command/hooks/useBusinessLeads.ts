import React from 'react';
import { loadBusinessLeads, saveBusinessLeads, transitionLeadStatus, updateLeadDraft } from '../storage';
import type { BusinessLead, PipelineStatus } from '../types';

export function useBusinessLeads() {
  const [leads, setLeads] = React.useState<BusinessLead[]>(() => loadBusinessLeads());

  React.useEffect(() => {
    saveBusinessLeads(leads);
  }, [leads]);

  const updateLead = React.useCallback((leadId: string, updater: (lead: BusinessLead) => BusinessLead) => {
    setLeads((current) => current.map((lead) => (lead.id === leadId ? updater(lead) : lead)));
  }, []);

  const changeStatus = React.useCallback((leadId: string, status: PipelineStatus) => {
    updateLead(leadId, (lead) => transitionLeadStatus(lead, status));
  }, [updateLead]);

  const saveDraft = React.useCallback((leadId: string, draft: { subject: string; body: string }) => {
    updateLead(leadId, (lead) => updateLeadDraft(lead, draft));
  }, [updateLead]);

  return {
    leads,
    setLeads,
    changeStatus,
    saveDraft,
  };
}
