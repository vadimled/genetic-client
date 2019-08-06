import actionsTypes from "../actionsTypes";

export const setEvidenceActionMode = data => {
  return {
    type: actionsTypes.SET_ACTION_MODE,
    payload: data
  };
};

export const setEvidenceActionData = data => {
  return {
    type: actionsTypes.SET_EVIDENCE_ACTION_DATA,
    payload: data
  };
};

