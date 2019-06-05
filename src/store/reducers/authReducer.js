import _ from "lodash";
import actionsTypes from '../actionsTypes';
import createReducer from "./createReducer";

const initialState = {
  isLoggedIn: false,
  status: null,
  serverError: null,
  userEmail: null
};

const authReducer = createReducer(initialState, {
  [actionsTypes.LOGIN_SUCCESS]: (state, {payload}) => {

    return {
      ...state,
      isLoggedIn: true,
      ...payload
    };
  },

  [actionsTypes.LOGIN_RESULT]: (state, {payload}) => {
    return {
      ...state,
      isLoggedIn: !_.has(payload, "message"),
      serverError: null,
      ...payload
    };
  },

});


export default authReducer;
