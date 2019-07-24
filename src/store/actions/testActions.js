import actionsTypes from "../actionsTypes";

export const fetchCaseData = id =>{
  return{
    type: actionsTypes.FETCH_CASE_DATA,
    payload: id
  };
};

export const setCaseData = data =>{
  return{
    type: actionsTypes.SET_CASE_DATA,
    payload: data
  };
};

export const setTumorInfoMode = data => {
  return {
    type: actionsTypes.SET_TUMOR_INFO_MODE,
    payload: data
  };
};

export const setTumorInfo = data => {
  return {
    type: actionsTypes.SET_TUMOR_INFO,
    payload: data
  };
};



