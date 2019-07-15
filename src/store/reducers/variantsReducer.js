import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  testType: "hema",
  mutations: "dna",
  showTumorInfo: false,
  tumorInfo: {
    type: "",
    location: "",
    percent: -1
  }
};

const variantsReducer = createReducer(initialState, {
  [actionsTypes.SET_MUTATION_TYPE]: (state, {payload}) => {
    return {
      ...state,
      mutations: payload
    };
  },

  [actionsTypes.SET_TUMOR_INFO_MODE]: (state, {payload}) => {
    return {
      ...state,
      showTumorInfo: payload
    };
  },
  
  [actionsTypes.SET_TUMOR_INFO]: (state, {payload}) => {
    // const {type: [val](|| location || percent)} = payload;
    return {
      ...state,
      tumorInfo:{
        ...state.tumorInfo,
        ...payload
      }
    };
  },
});

export default variantsReducer;
