import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateCoverageTableMockData } from "Utils/coverage-data-generator";

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
    console.log("--paayload: ", payload)
    const { item, value } = payload;
    let data = state?.data;

    data[item.id].selected = value;

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS_COVERAGE]: (state, { payload }) => {
    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        // if an item has already status we cannot select it to send for confirmation
        if (!item.status) {
          item.selected =
            payload !== false;
        }
      }
    }

    return {
      ...state,
      data: { ...data }
    };
  }

});

export default coveragePageReducer;
