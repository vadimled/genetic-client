import actionsTypes from "../actionsTypes";

export const fetchConfirmationMetadata = data => {
  return {
    type: actionsTypes.FETCH_CONFIRMATION_PAGE_METADATA,
    payload: data
  };
};

export const setConfirmationPageMetadataToStore = data => {
  return {
    type: actionsTypes.SET_CONFIRMATION_PAGE_METADATA,
    payload: data
  };
};
