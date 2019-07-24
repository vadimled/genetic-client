import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  gsid: null,
  panel_type: null,
  test_id: null,
  showTumorInfo: false,
  mutation_types: [],
  tumorInfo: {
    type: "",
    location: "",
    percent: -1
  }
};

const caseReducer = createReducer(initialState, {
  [actionsTypes.SET_CASE_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_TUMOR_INFO_MODE]: (state, { payload }) => {
    return {
      ...state,
      showTumorInfo: payload
    };
  },

  [actionsTypes.SET_TUMOR_INFO]: (state, { payload }) => {
    // const {type: [val](|| location || percent)} = payload;
    return {
      ...state,
      tumorInfo: {
        ...state.tumorInfo,
        ...payload
      }
    };
  }
});

export default caseReducer;
