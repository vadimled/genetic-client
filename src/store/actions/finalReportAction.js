import actionsTypes from "../actionsTypes";

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

export function removeClinicalSelectedRowFromStore(data) {
  return {
    type: actionsTypes.REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE,
    payload: data
  };
}

export const fetchActionableAlterations = data => {
  return {
    type: actionsTypes.FETCH_ACTIONABLE_ALTERATIONS,
    payload: data
  };
};

export const fetchFinalReportClinicalData = data => {
  return {
    type: actionsTypes.FETCH_FINAL_REPORT_CLINICAL_DATA,
    payload: data
  };
};

export const handleSelectedRow = data => {
  return {
    type: actionsTypes.HANDLE_SELECTED_ROW,
    payload: data
  };
};

export const handleSelectAllRows = data => {
  return {
    type: actionsTypes.HANDLE_SELECT_ALL_ROWS,
    payload: data
  };
};

export function setVariantsDataToStore(data) {
  return {
    type: actionsTypes.SET_VARIANTS_DATA_TO_STORE,
    payload: data
  };
}

export function postAtionableAlterations(data) {

  return {
    type: actionsTypes.POST_ACTIONABLE_ALTERATIONS,
    payload: data
  };
}

export function fetchFinalReportVariants(data) {

  return {
    type: actionsTypes.FETCH_FINAL_REPORT_VARIANTS,
    payload: data
  };
}

export function setActionableAlterations(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATIONS,
    payload: data
  };
}

export function setFinalReportClinicalDataToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE,
    payload: data
  };
}

export function setFinalReportNavigationStatus(data) {
  return {
    type: actionsTypes.SET_NAVIGATION_STATUS,
    payload: data
  };
}

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

export function setIsSelectVariants() {
  return {
    type: actionsTypes.SET_IS_SELECT_VARIANTS
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
