import types from "../actionsTypes";

export const login = data =>{
  return{
    type: types.LOGIN,
    payload: data
  };
};



