import actionsTypes from "../actionsTypes";

export const handleOnConfirmation = data => {
  return {
    type: actionsTypes.HANDLE_ON_CONFIRMATION,
    payload: data
  };
};
