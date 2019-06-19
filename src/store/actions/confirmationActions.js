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

