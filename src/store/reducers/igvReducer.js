import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isFetchBAMFIleFailed: false,
  fetchBAMFileStatus: null // null | 1 | 2 | 3
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.FETCH_BAM_FILE_FAILED]: (state, { payload }) => {
    return {
      ...state,
      isFetchBAMFIleFailed: payload,
      fetchBAMFileStatus: null
    };
  },

  [actionsTypes.FETCH_BAM_FILE_STATUS]: (state, { payload }) => {
    return {
      ...state,
      fetchBAMFileStatus: payload
    };
  },

});

export default tableReducer;
