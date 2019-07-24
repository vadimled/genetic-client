import actionsTypes from "../actionsTypes";

export const setMutationType = data => {
  return {
    type: actionsTypes.SET_MUTATION_TYPE,
    payload: data
  };
};
