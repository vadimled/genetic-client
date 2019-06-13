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
