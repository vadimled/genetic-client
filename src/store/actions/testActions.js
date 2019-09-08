import actionsTypes from "../actionsTypes";

export const fetchTestMetadata = id =>{
  return{
    type: actionsTypes.FETCH_TEST_METADATA,
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

export function setLoading(status) {
  return {
    type: actionsTypes.SET_LOADING,
    payload: status
  };
}

export const setTumorInfoLoading = data => {
  return {
    type: actionsTypes.SET_TUMOR_INFO_LOADING,
    payload: data
  };
}




