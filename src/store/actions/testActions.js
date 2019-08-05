import actionsTypes from "../actionsTypes";

export const fetchTestData = id =>{
  return{
    type: actionsTypes.FETCH_TEST_DATA,
    payload: id
  };
};

export const setTestData = data =>{
  return{
    type: actionsTypes.SET_TEST_DATA,
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



