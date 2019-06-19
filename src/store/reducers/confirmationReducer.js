import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isOnConfirmation: false,
  uncheckConfirmationData: null
};

const confirmationReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_ON_CONFIRMATION]: (state, { payload }) => {
    return {
      ...state,
      isOnConfirmation: payload
    };
  },

  [actionsTypes.HANDLE_UNCHECK_CONFIRMATION_DATA]: (state, { payload }) => {
    return {
      ...state,
      uncheckConfirmationData: payload
    };
  },
});

export default confirmationReducer;


