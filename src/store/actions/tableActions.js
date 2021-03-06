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

export const fetchTableData = data => {
  return{
    type: actionsTypes.FETCH_TABLE_DATA,
    payload: data
  };
};

export function setServerDataToStore(data) {
  return {
    type: actionsTypes.FETCH_TABLE_DATA_SUCCESS,
    payload: data
  };
}

export function setParsedDataToStore(data) {
  return {
    type: actionsTypes.SET_PARSED_DATA_TO_STORE,
    payload: data
  };
}

export const setSort = (data)=> {
  return{
    type: actionsTypes.SET_SORT,
    payload: data
  };
};

export const tableDataAddResult = data => {
  return{
    type: actionsTypes.TABLE_DATA_ADD_RESULT,
    payload: data
  };
};

export const setTableReducerLoading = data => {
  return{
    type: actionsTypes.SET_TABLE_REDUCER_LOADING,
    payload: data
  };
};

export const setConfirmationStatusToStore = data => {
  return{
    type: actionsTypes.SET_CONFIRMATION_STATUS_TO_STORE,
    payload: data
  };
};

export const exportTable = data => {
  return{
    type: actionsTypes.EXPORT_TABLE,
    payload: data
  };
};

export const updateVariantInTableData = data => {
  return{
    type: actionsTypes.UPDATE_VARIANT_IN_TABLE_DATA,
    payload: data
  };
};

export const saveUserPreferencesSorting = data => {
  return {
    type: actionsTypes.SAVE_USER_PREFERENCES_SORTING,
    payload: data
  };
};

export const fetchUserPreferences = data => {
  return {
    type: actionsTypes.FETCH_USER_PREFERENCES,
    payload: data
  };
};


export const applyConfirmationSuccess = data => {
  return {
    type: actionsTypes.APPLY_CONFIRMATION_SUCCESS,
    payload: data
  };
};

export const setTableCurrentPage = data => {
  return {
    type: actionsTypes.SET_TABLE_CURRENT_PAGE,
    payload: data
  };
};
