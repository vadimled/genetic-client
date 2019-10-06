import actionsTypes from "../actionsTypes";

export const fetchData = data => {
  return {
    type: actionsTypes.FETCH_DATA,
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