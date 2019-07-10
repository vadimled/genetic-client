import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  gene: "k5wp5amernh84pvsygjji9ljz", // null,
  type: "somatic",
  value: null
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_GENE]: (state, { payload }) => {
    return {
      ...state,
      gene: payload
    };
  },

  [actionsTypes.SET_GENE_VALUE]: (state, { payload }) => {
    return {
      ...state,
      value: payload
    };
  },

  [actionsTypes.SET_GENE_TYPE]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    };
  }
});

export default variantPageReducer;
