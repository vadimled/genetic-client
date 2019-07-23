import types from "../actionsTypes";

export const fetchCaseData = () =>{
  return{
    type: types.FETCH_CASE_DATA
  };
};

export const setCaseData = data =>{
  return{
    type: types.SET_CASE_DATA,
    payload: data
  };
};



