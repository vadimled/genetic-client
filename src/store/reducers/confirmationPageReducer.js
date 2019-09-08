import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  metaData: null
};

const confirmationPageReducer = createReducer(initialState, {
  [actionsTypes.SET_CONFIRMATION_PAGE_METADATA]: (state, { payload }) => {
    return {
      ...state,
      metaData: payload
    };
  }
});

export default confirmationPageReducer;
