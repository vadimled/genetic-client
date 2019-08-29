import actionsTypes from "../actionsTypes";

export const fetchBAMFile = data => {
  return {
    type: actionsTypes.FETCH_BAM_FILE,
    payload: data
  };
};

export const setFetchBAMFileStatus = data => {
  return {
    type: actionsTypes.FETCH_BAM_FILE_STATUS,
    payload: data
  };
};

export const setBamUrlToStore = data => {
  return {
    type: actionsTypes.SET_BAM_FILE_TO_STORE,
    payload: data
  };
};

export const handleIgvAlertShow = data => {
  return {
    type: actionsTypes.HANDLE_IGV_ALERT_SHOW,
    payload: data
  };
};

export const handleIgvAlertShowAgain = data => {
  return {
    type: actionsTypes.HANDLE_IGV_ALERT_SHOW_AGAIN,
    payload: data
  };
};

export const goToChrPositionIgv = data => {
  return {
    type: actionsTypes.GO_TO_CHR_POSITION_IGV,
    payload: data
  };
};

export const setIgvLastQuery = data => {
  return {
    type: actionsTypes.SET_IGV_LAST_QUERY,
    payload: data
  };
};
