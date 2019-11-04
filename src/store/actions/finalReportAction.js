import actionsTypes from "../actionsTypes";

export const removeSelectedTableRow = data => {
  return {
    type: actionsTypes.REMOVE_SELECTED_TABLE_ROW,
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

  console.log("--data: ", data);

  return {
    type: actionsTypes.MOVE_TO_ACTIONABLE_TABLE,
    payload: data
  };
}

export function fetchFinalReportVariants(data) {

  console.log("--data: ", data);

  return {
    type: actionsTypes.FETCH_FINAL_REPORT_VARIANTS,
    payload: data
  };
}

export function setFinalReportVariantsToStore(data) {

  console.log("--data: ", data);

  return {
    type: actionsTypes.SET_FINAL_REPORT_VARIANTS_TO_STORE,
    payload: data
  };
}



