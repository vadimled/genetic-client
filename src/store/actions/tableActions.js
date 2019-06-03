import actionsTypes from "../actionsTypes";

export const setNotes = data => {
  return {
    type: actionsTypes.SET_NOTES,
    payload: data
  };
};

