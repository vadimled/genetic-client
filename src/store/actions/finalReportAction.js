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

export function setCurrentActionableTab(data) {
  return {
    type: actionsTypes.SET_CURRENT_ACTIONABLE_TAB,
    payload: data
  };
}

export function setExpandedInterpretationTextArea(data) {
  return {
    type: actionsTypes.SET_EXPANDED_TAB_TEXTAREA,
    payload: data
  };
}

export function saveExpandedTextAreaContent(data) {
  return {
    type: actionsTypes.SAVE_EXPANDED_TAB_TEXTAREA_CONTENT,
    payload: data
  };
}

export function setExpandedTextAreaContentSaved(data) {
  return {
    type: actionsTypes.SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED,
    payload: data
  };
}

export function setIsSelectVariants() {
  return {
    type: actionsTypes.SET_IS_SELECT_VARIANTS
  };
}

export function setToStoreTherapiesTextArea(data) {
  return {
    type: actionsTypes.SET_THERAPIES_TAB_TEXTAREA_TO_STORE,
    payload: data
  };
}
export function setActionableAlterationDrugsDescription(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION,
    payload: data
  };
}

export function setActionableAlterationDrugsDescriptionSaved(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED,
    payload: data
  };
}
