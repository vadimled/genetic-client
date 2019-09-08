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

export const addEvidenceEntry = data => {
  return {
    type: actionsTypes.ADD_EVIDENCE_ENTRY,
    payload: data
  };
};

export const editEvidenceEntry = data => {
  return {
    type: actionsTypes.EDIT_EVIDENCE_ENTRY,
    payload: data
  };
};

export const deleteEvidenceEntry = data => {
  return {
    type: actionsTypes.DELETE_EVIDENCE_ENTRY,
    payload: data
  };
};

export const cleanEvidenceActionData = data => {
  return {
    type: actionsTypes.CLEAN_EVIDENCE_ACTION_DATA,
    payload: data
  };
};

export const setCurrentEvidenceTab = data => {
  return {
    type: actionsTypes.SET_CURRENT_EVIDENCE_TAB,
    payload: data
  };
};


