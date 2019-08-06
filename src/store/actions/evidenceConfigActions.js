import actionsTypes from "../actionsTypes";

export const setEvidenceActionMode = data => {
  return {
    type: actionsTypes.SET_ACTION_MODE,
    payload: data
  };
};

