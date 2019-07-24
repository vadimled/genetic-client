import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  selectedMutation: ""
};

const variantsReducer = createReducer(initialState, {
  [actionsTypes.SET_MUTATION_TYPE]: (state, { payload }) => {
    return {
      ...state,
      selectedMutation: payload
    };
  }
});

export default variantsReducer;
