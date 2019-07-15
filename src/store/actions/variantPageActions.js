import actionsTypes from "../actionsTypes";

export const setGeneValue = data => {
  return {
    type: actionsTypes.SET_VARIANT_CLASSIFICATION,
    payload: data
  };
};

export const setGeneType = data => {
  return {
    type: actionsTypes.SET_VARIANT_ZYGOSITY_TYPE,
    payload: data
  };
};
