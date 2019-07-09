import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  gene: "k5wp5amernh84pvsygjji9ljz" // null,
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_GENE_VALUE]: (state, { payload }) => {
    return {
      ...state,
      gene: payload
    };
  }
});

export default variantPageReducer;
