import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  actionSlideBarStatus: false, // false === closed
  currentEvidenceTab: "1",
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
    if (!payload.actionSlideBarStatus && payload.mode !== TEXTS.delete) {
      status = Object.assign( {}, ...initialState );
    } else if (payload.data) {
      const { data, id, mode, actionSlideBarStatus } = payload;
      status = Object.assign(
        {},
        { actionSlideBarStatus, id, mode },
        { evidenceTypeSelect: data.category },
        { evidenceSourceInput: data.source },
        { evidenceLevelSelect: data.level },
        { evidenceDescriptionTextarea: data.description }
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
  },
  
  [actionsTypes.CLEAN_EVIDENCE_ACTION_DATA]: () => {
    return {
      ...initialState
    };
  },
  
  [actionsTypes.SET_CURRENT_EVIDENCE_TAB]: (state, { payload }) => {
    return {
      ...state,
      currentEvidenceTab: payload
    };
  }
});

export default evidenceConfigReducer;
