import actionsTypes from "../actionsTypes";

export const fetchData = data => {
  return {
    type: actionsTypes.FETCH_DATA,
    payload: data
  };
};