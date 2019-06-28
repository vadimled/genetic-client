import actionsTypes from "../actionsTypes";

export const handleOnConfirmation = data => {
  return {
    type: actionsTypes.HANDLE_ON_CONFIRMATION,
    payload: data
  };
};

export const sendForConfirmation = data => {
  return {
    type: actionsTypes.SEND_FOR_CONFIRMATION,
    payload: data
  };
};

export const handleUncheckConfirmationData = data => {
  return {
    type: actionsTypes.HANDLE_UNCHECK_CONFIRMATION_DATA,
    payload: data
  };
};

export const setConfirmationData = data => {
  return {
    type: actionsTypes.SET_CONFIRMATION_DATA,
    payload: data
  };
};

export const removeConfirmationRow = data => {
  return {
    type: actionsTypes.REMOVE_CONFIRMATION_ROW,
    payload: data
  };
};

export const handleConfirmationNotes = data => {
  return {
    type: actionsTypes.HANDLE_CONFIRMATION_NOTES,
    payload: data
  };
};


