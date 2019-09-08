import actionsTypes from "../actionsTypes";

export const fetchConfirmationMetadata = data => {
  return {
    type: actionsTypes.FETCH_CONFIRMATION_PAGE_METADATA,
    payload: data
  };
};
