import actionsTypes from "../actionsTypes";

export const removeSelectedTableRow = data => {
  return {
    type: actionsTypes.REMOVE_SELECTED_TABLE_ROW,
    payload: data
  };
};
