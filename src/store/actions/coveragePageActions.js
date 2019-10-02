import actionsTypes from "../actionsTypes";

export const handleSelectedRowCoverage = data => {
  return {
    type: actionsTypes.HANDLE_SELECTED_ROW_COVERAGE,
    payload: data
  };
};

export const handleSelectAllRowsCoverage = data => {
  return {
    type: actionsTypes.HANDLE_SELECT_ALL_ROWS_COVERAGE,
    payload: data
  };
};


export const fetchTableData = data => {
  return{
    type: actionsTypes.FETCH_COVERAGE_TABLE_DATA,
    payload: data
  };
};

export const setCoveragePageReducerLoading = data => {
  return{
    type: actionsTypes.SET_COVERAGE_TABLE_REDUCER_LOADING,
    payload: data
  };
};

// export function setServerDataToStore(data) {
//   return {
//     type: actionsTypes.FETCH_TABLE_DATA_SUCCESS,
//     payload: data
//   };
// }