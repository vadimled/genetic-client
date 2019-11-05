import actionsTypes from "../actionsTypes";

export const removeActionableSelectedRowFromStore = data => {
  return {
    type: actionsTypes.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE,
    payload: data
  };
};

export const fetchFinalReport = data => {
  return {
    type: actionsTypes.FETCH_FINAL_REPORT_ACTIONABLE_DATA,
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

export function setFinalReportDataToStore(data) {
  return {
    type: actionsTypes.SET_FINAL_REPORT_DATA_TO_STORE,
    payload: data
  };
}

// export function removeActionableSelectedRowFromStore(data) {
//   return {
//     type: actionsTypes.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE,
//     payload: data
//   };
// }

export function setFinalReportNavigationStatus(data) {
  return {
    type: actionsTypes.SET_NAVIGATION_STATUS,
    payload: data
  };
}
