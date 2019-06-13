import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  fetchBAMFileStatus: null, // null | 1 | 2 | 3
  isIgvAlertShow: false,
  isIgvAlertShowAgaing: true
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.FETCH_BAM_FILE_STATUS]: (state, { payload }) => {
    return {
      ...state,
      fetchBAMFileStatus: payload
    };
  },

  [actionsTypes.HANDLE_IGV_ALERT_SHOW]: (state, { payload }) => {
    return {
      ...state,
      isIgvAlertShow: state.isIgvAlertShowAgaing ? payload : false,
      fetchBAMFileStatus: null
    };
  },

  [actionsTypes.HANDLE_IGV_ALERT_SHOW_AGAIN]: (state, { payload }) => {
    return {
      ...state,
      isIgvAlertShowAgaing: payload
    };
  },

});

export default tableReducer;
