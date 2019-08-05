import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  actionSlideBarStatus: false // false === closed
};

const evidenceConfigReducer = createReducer(initialState, {
  [actionsTypes.SET_ACTION_SLIDEPANEL_STATUS]: (state, { payload }) => {
    return {
      ...state,
      actionSlideBarStatus: payload
    };
  },
});

export default evidenceConfigReducer;
