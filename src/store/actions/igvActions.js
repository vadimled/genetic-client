import actionsTypes from "../actionsTypes";

export const fetchBAMFile = data => {
  return {
    type: actionsTypes.FETCH_BAM_FILE,
    payload: data
  };
};

export const setFetchBAMFileFailed = data => {
  return {
    type: actionsTypes.FETCH_BAM_FILE_FAILED,
    payload: data
  };
};

export const setFetchBAMFileStatus = data => {
  return {
    type: actionsTypes.FETCH_BAM_FILE_STATUS,
    payload: data
  };
};
