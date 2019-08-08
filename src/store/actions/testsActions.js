import actionsTypes from "../actionsTypes";

export const fetchTests = () =>{
  return{
    type: actionsTypes.FETCH_TESTS
  };
};

export const setTestsToStore = () =>{
  return{
    type: actionsTypes.SET_TESTS_TO_STORE
  };
};

