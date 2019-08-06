import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  actionSlideBarStatus: false, // false === closed
  mode: null,
  id: null
};

const evidenceConfigReducer = createReducer(initialState, {
  [actionsTypes.SET_ACTION_MODE]: (state, { payload }) => {
    console.log(payload);
    let status = {};
  
    if (!payload?.actionSlideBarStatus && payload?.mode !== TEXTS.delete) {
      status = Object.assign(
        {},
        { actionSlideBarStatus: false },
        { mode: null },
        { id: null }
      );
    } else {
      status = Object.assign({}, payload);
    }
    console.log(status);
    return {
      ...state,
      ...status
    };
  }
});

export default evidenceConfigReducer;
