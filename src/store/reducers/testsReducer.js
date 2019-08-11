import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  tests: []
};

const testsReducer = createReducer(initialState, {

  [actionsTypes.SET_TESTS_TO_STORE]: (state, { payload }) => {

    return {
      ...state,
      tests: payload
    };
  },

});

export default testsReducer;
