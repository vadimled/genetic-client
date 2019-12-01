import actionsTypes from "../actionsTypes";

export const fetchActionableAlterations = data => {
  return {
    type: actionsTypes.FETCH_ACTIONABLE_ALTERATIONS,
    payload: data
  };
};

export function setActionableAlterations(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATIONS,
    payload: data
  };
}

export function postAtionableAlterations(data) {
  return {
    type: actionsTypes.POST_ACTIONABLE_ALTERATIONS,
    payload: data
  };
}

export const deleteActionableAlteration = data => {
  return {
    type: actionsTypes.DELETE_ACTIONABLE_ALTERATION,
    payload: data
  };
};

export const deleteActionableAlterationFromStore = data => {
  return {
    type: actionsTypes.DELETE_ACTIONABLE_ALTERATION_FROM_STORE,
    payload: data
  };
};

export const handleFinalReportSelectedVariantsIdsForActionableAlterations = data => {
  return {
    type: actionsTypes.HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_ACTIONABLE_ALTERATIONS,
    payload: data
  };
};

export const handleFinalReportSelectAllVariantsForActionableAlterations = data => {
  return {
    type: actionsTypes.HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_ACTIONABLE_ALTERATIONS,
    payload: data
  };
};

export function setSelectedActionableAlterationId(id) {
  return {
    type: actionsTypes.SET_SELECTED_ACTIONABLE_ALTERATION_ID,
    payload: id
  };
}

export function setCurrentActionableAlterationTab(data) {
  return {
    type: actionsTypes.SET_CURRENT_ACTIONABLE_ALTERATION_TAB,
    payload: data
  };
}

export function setActionableAlterationExpandedInterpretationToStore(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE,
    payload: data
  };
}

export function setActionableAlterationExpandedInterpretation(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION,
    payload: data
  };
}

// export function setExpandedTextAreaContentSaved(data) {
//   return {
//     type: actionsTypes.SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED,
//     payload: data
//   };
// }

export function setIsSelectVariantsForActionableAlterations() {
  return {
    type: actionsTypes.SET_IS_SELECT_VARIANTS_FOR_ACTIONABLE_ALTERATIONS
  };
}

export function setActionableAlterationDrugsDescription(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION,
    payload: data
  };
}

export function setActionableAlterationDrugsDescriptionToStore(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_TO_STORE,
    payload: data
  };
}

export function setActionableAlterationClinicalTrial(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL,
    payload: data
  };
}

export function setActionableAlterationClinicalTrialToStore(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL_TO_STORE,
    payload: data
  };
}

// export function setActionableAlterationDrugsDescriptionSaved(data) {
//   return {
//     type: actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED,
//     payload: data
//   };
// }




// Uncertain Clinical Significance
export const fetchUncertainClinicalSignificance = data => {
  return {
    type: actionsTypes.FETCH_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
};

export function setFinalReportUncertainClinicalSignificanceToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_UNCERTAIN_CLINICAL_SIGNIFICANCE_TO_STORE,
    payload: data
  };
}

export function setIsSelectVariantsForUncertainClinicalSignificance(data) {
  return {
    type: actionsTypes.SET_IS_SELECT_VARIANTS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
}

export function handleFinalReportSelectedVariantsIdsForUncertainClinicalSignificance(data) {
  return {
    type: actionsTypes.HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
}

export function handleFinalReportSelectAllVariantsForUncertainClinicalSignificance(data) {
  return {
    type: actionsTypes.HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
}

export function postUncertainClinicalSignificance(data) {
  return {
    type: actionsTypes.POST_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
}

export function deleteUncertainClinicalSignificance(data) {
  return {
    type: actionsTypes.DELETE_UNCERTAIN_CLINICAL_SIGNIFICANCE,
    payload: data
  };
}

export function deleteUncertainClinicalSignificanceFromStore(data) {
  return {
    type: actionsTypes.DELETE_UNCERTAIN_CLINICAL_SIGNIFICANCE_FROM_STORE,
    payload: data
  };
}
// -- Uncertain Clinical Significance


export function fetchFinalReportVariants(data) {
  return {
    type: actionsTypes.FETCH_FINAL_REPORT_VARIANTS,
    payload: data
  };
}

export function setFinalReportDnaVariantsToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_DNA_VARIANTS_TO_STORE,
    payload: data
  };
}

export function setFinalReportNavigationValue(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_NAVIGATION_VALUE,
    payload: data
  };
}

