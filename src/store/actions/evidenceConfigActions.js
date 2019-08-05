import actionsTypes from "actionsTypes";

export const setEvidenceActionSlidePanelStatus = data => {
  return {
    type: actionsTypes.SET_ACTION_SLIDEPANEL_STATUS,
    payload: data
  };
};

