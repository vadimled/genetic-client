import actionsTypes from "../actionsTypes";


export const setNotes = data => {
  return {
    type: actionsTypes.SET_NOTES,
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

export const handleZygosity = data => {
  return {
    type: actionsTypes.HANDLE_ZYGOSITY,
    payload: data
  };
};

export const handleVariantClass = data => {
  return {
    type: actionsTypes.HANDLE_VARIANT_CLASS,
    payload: data
  };
};

export const handleConfirmationStatus = data => {
  return {
    type: actionsTypes.HANDLE_CONFIRMATION_STATUS,
    payload: data
  };
};

export const updateSearch = data => {
  return {
    type: actionsTypes.UPDATE_SEARCH,
    payload: data
  };
};

export const applyConfirmation = data => {
  return {
    type: actionsTypes.APPLY_CONFIRMATION,
    payload: data
  };
};

export const handleUncheckConfirmationData = data => {
  return {
    type: actionsTypes.HANDLE_UNCHECK_CONFIRMATION_DATA,
    payload: data
  };
};

export const updateActivityLog = data => {
  return{
    type: actionsTypes.UPDATE_ACTIVITY_LOG,
    payload: data
  };
};

export const fetchData = data => {
  return{
    type: actionsTypes.FETCH_DATA,
    payload: data
  };
};
