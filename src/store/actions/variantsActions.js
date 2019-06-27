import actionsTypes from "../actionsTypes";

export const setMutationType = data => {
  return {
    type: actionsTypes.SET_MUTATION_TYPE,
    payload: data
  };
};

export const setTumorInfoMode = data => {
  return {
    type: actionsTypes.SET_TUMOR_INFO_MODE,
    payload: data
  };
};
