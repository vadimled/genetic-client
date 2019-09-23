import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateCoverageTableMockData } from "Utils/coverage-data-generator";
// import { TEXTS } from "../../utils/constants";

const initialState = {
  data: [],
  uncheckConfirmationData: null,
  isLoading: false
};

const coveragePageReducer = createReducer(initialState, {

  [actionsTypes.SET_COVERAGE_TABLE_REDUCER_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.FETCH_COVERAGE_TABLE_DATA]: (state) => {
    return {
      ...state,
      data: generateCoverageTableMockData(15)
    };
  },


  [actionsTypes.HANDLE_SELECTED_ROW_COVERAGE]: (state, { payload }) => {

    const { item, value } = payload;

    let data = state?.data;

    const newData = Object.assign([], data);

    state.data = newData;

    newData.map(record => {

      if(record.id === item.id){
        record.selected = value;
      }

      return record;
    });
    
    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS_COVERAGE]: (state, { payload }) => {

    console.log("--payload: ", payload)

    let newData = state?.data;


    // newData.map(record => {
    //   if (record.status === TEXTS.UNCHECK) {
    //     item.selected = !payload;
    //   }
    // })

    return {
      ...state,
      data: newData
    };
  },


});

export default coveragePageReducer;
