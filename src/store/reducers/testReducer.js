import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isLoading: false,
  gsid: null,
  panel_type: null,
  id: null,
  showTumorInfo: false,
  mutation_types: [],
  tumor_info: {
    type: "",
    location: "",
    cancer_cell_percentage: -1
  },
  isTumorInfoLoading: false
};

const testReducer = createReducer(initialState, {
  [actionsTypes.SET_TEST_DATA]: (state, { payload }) => {
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

  // [actionsTypes.SET_TUMOR_INFO]: (state, { payload }) => {
  //   // const {type: [val](|| location || cancer_cell_percentage)} = payload;
  //   return {
  //     ...state,
  //     tumor_info: {
  //       ...state.tumor_info,
  //       ...payload
  //     }
  //   };
  // },
  [actionsTypes.SET_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.SET_TUMOR_INFO_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isTumorInfoLoading: payload
    };
  }
});

export default testReducer;
