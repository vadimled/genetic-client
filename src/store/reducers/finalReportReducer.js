import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  data: [],
  selectedData: []
};

const finalReportReducer = createReducer(initialState, {
  [actionsTypes.ADD_ROW]: (state, {payload}) => {
    return {
      ...state,
      selectedData: state.selectedData.push(payload)
    };
  },
  
  [actionsTypes.REMOVE_SELECTED_TABLE_ROW]: (state, {payload}) => {
    console.log(payload);
    return {
      ...state
    };
  }

});


export default finalReportReducer;
