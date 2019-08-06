import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  actionSlideBarStatus: false, // false === closed
  mode: null,
  id: null,
  evidenceTypeSelect: null,
  evidenceSourceInput: null,
  evidenceLevelSelect: null,
  evidenceDescriptionTextarea: null
};

const evidenceConfigReducer = createReducer(initialState, {
  [actionsTypes.SET_ACTION_MODE]: (state, { payload }) => {
    let status = {};

    if (!payload?.actionSlideBarStatus && payload?.mode !== TEXTS.delete) {
      status = Object.assign(
        {},
        { actionSlideBarStatus: false },
        { mode: null },
        { evidenceTypeSelect: null },
        { evidenceSourceInput: null },
        { evidenceLevelSelect: null },
        { evidenceDescriptionTextarea: null }
      );
    } else {
      status = Object.assign({}, payload);
    }
    return {
      ...state,
      ...status
    };
  },
  [actionsTypes.SET_EVIDENCE_ACTION_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  }
});

export default evidenceConfigReducer;
