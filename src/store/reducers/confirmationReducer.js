import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isOnConfirmation: false,
};

const confirmationReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_ON_CONFIRMATION]: (state, { payload }) => {
    return {
      ...state,
      isOnConfirmation: payload
    };
  },
});

export default confirmationReducer;


