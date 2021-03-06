import actionsTypes from "../actionsTypes";

export const fetchTests = () =>{
  return{
    type: actionsTypes.FETCH_TESTS
  };
};

export const setTestsToStore = (data) =>{
  return{
    type: actionsTypes.SET_TESTS_TO_STORE,
    payload: data
  };
};

export const setTestsLoading = (data) =>{
  return{
    type: actionsTypes.SET_TESTS_LOADING,
    payload: data
  };
};

