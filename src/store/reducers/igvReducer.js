import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const baseBamUrl =
  "http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeUwRepliSeq/";
const initialState = {
  fetchBAMFileStatus: null, // null | 1 | 2 | 3
  isIgvAlertShow: false,
  isIgvAlertShowAgaing: true,
  igvLastQuery: null, // null | { type: 'BAM_FILE' | 'CHR_POS', data }
  // eslint-disable-next-line
  BAMFileUrl: `${baseBamUrl}wgEncodeUwRepliSeqGm12801G1bAlnRep1.bam`,
  BAMIndexFileUrl: `${baseBamUrl}wgEncodeUwRepliSeqGm12801G1bAlnRep1`
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
      fetchBAMFileStatus: null,
      igvLastQuery: payload === false ? null : state.igvLastQuery
    };
  },

  [actionsTypes.HANDLE_IGV_ALERT_SHOW_AGAIN]: (state, { payload }) => {
    return {
      ...state,
      isIgvAlertShowAgaing: payload
    };
  },

  [actionsTypes.SET_IGV_LAST_QUERY]: (state, { payload }) => {
    return {
      ...state,
      igvLastQuery: state.isIgvAlertShowAgaing ? payload : null
    };
  }
});

export default tableReducer;
