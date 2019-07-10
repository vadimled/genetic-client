import actionsTypes from "../actionsTypes";

export const setGeneValue = data => {
  return {
    type: actionsTypes.SET_GENE_VALUE,
    payload: data
  };
};

export const setGeneType = data => {
  return {
    type: actionsTypes.SET_GENE_TYPE,
    payload: data
  };
};
