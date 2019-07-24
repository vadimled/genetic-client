import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  mutations: "dna", // selectedMutation
};

const variantsReducer = createReducer(initialState, {
  [actionsTypes.SET_MUTATION_TYPE]: (state, { payload }) => {
    return {
      ...state,
      mutations: payload
    };
  }
});

export default variantsReducer;
