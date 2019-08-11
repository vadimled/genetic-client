import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  tests: [],
  isLoading: false
};

const testsReducer = createReducer(initialState, {

  [actionsTypes.SET_TESTS_TO_STORE]: (state, { payload }) => {

    return {
      ...state,
      tests: payload
    };
  },

  [actionsTypes.SET_TESTS_LOADING]: (state, { payload }) => {

    return {
      ...state,
      isLoading: payload
    };
  },

});

export default testsReducer;
