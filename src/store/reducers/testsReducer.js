import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  tests: []
};

const testsReducer = createReducer(initialState, {
  [actionsTypes.FETCH_TESTS]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

});

export default testsReducer;
