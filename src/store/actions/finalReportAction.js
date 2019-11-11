import actionsTypes from "../actionsTypes";

export const removeActionableSelectedRowFromStore = data => {
  return {
    type: actionsTypes.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE,
    payload: data
  };
};

export function removeClinicalSelectedRowFromStore(data) {
  return {
    type: actionsTypes.REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE,
    payload: data
  };
}

export const fetchFinalReportActionableData = data => {
  return {
    type: actionsTypes.FETCH_FINAL_REPORT_ACTIONABLE_DATA,
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

export function moveToActionableTable(data) {

  return {
    type: actionsTypes.MOVE_TO_ACTIONABLE_TABLE,
    payload: data
  };
}

export function fetchFinalReportVariants(data) {

  return {
    type: actionsTypes.FETCH_FINAL_REPORT_VARIANTS,
    payload: data
  };
}

export function setFinalReportVariantsToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_VARIANTS_TO_STORE,
    payload: data
  };
}


export function setActionableTableDataToStore(data) {
  return {
    type: actionsTypes.SET_ACTIONABLE_DATA_TO_STORE,
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

export function setSelectedUpperTableRowObject(obj) {
  return {
    type: actionsTypes.SET_SELECTED_UPPER_TABLE_ROW_OBJECT,
    payload: obj
  };
}

export function setCurrentActionableTab(data) {
  return {
    type: actionsTypes.SET_CURRENT_ACTIONABLE_TAB,
    payload: data
  };
}

export function setFinalReportActionableDataToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_ACTIONABLE_DATA_TO_STORE,
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

export function setSelectVariants() {
  return {
    type: actionsTypes.SET_SELECT_VARIANTS
  };
}
