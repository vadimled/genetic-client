import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  data: null
};

const finalReportReducer = createReducer(initialState, {
  [actionsTypes.FETCH_DATA]: (state, {payload}) => {

    return {
      ...state,
      isLoggedIn: true,
      ...payload
    };
  }

});


export default finalReportReducer;