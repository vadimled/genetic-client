import types from "../actionsTypes";

export const setFilterType = data =>{
  return{
    type: types.SET_FILTER_TYPE,
    payload: data
  };
};
