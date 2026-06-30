import React from 'react';
import { createBusinessLeadFromInput, loadBusinessLeads, saveBusinessLeads, transitionLeadStatus, updateBusinessLeadFromInput, updateLeadDraft } from '../storage';
import type { BusinessLead, BusinessLeadFormInput, PipelineStatus } from '../types';

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

  const addLead = React.useCallback((input: BusinessLeadFormInput) => {
    const newLead = createBusinessLeadFromInput(input);
    setLeads((current) => [newLead, ...current]);
    return newLead;
  }, []);

  const updateLeadDetails = React.useCallback((leadId: string, input: BusinessLeadFormInput) => {
    let savedLead: BusinessLead | undefined;

    setLeads((current) => current.map((lead) => {
      if (lead.id !== leadId) {
        return lead;
      }

      savedLead = updateBusinessLeadFromInput(lead, input);
      return savedLead;
    }));

    return savedLead;
  }, []);

  const deleteLead = React.useCallback((leadId: string) => {
    setLeads((current) => current.filter((lead) => lead.id !== leadId));
  }, []);

  const replaceLeads = React.useCallback((nextLeads: BusinessLead[]) => {
    setLeads(nextLeads);
  }, []);

  return {
    leads,
    setLeads,
    replaceLeads,
    addLead,
    updateLeadDetails,
    deleteLead,
    changeStatus,
    saveDraft,
  };
}
