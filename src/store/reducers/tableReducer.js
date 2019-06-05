import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateDNAVariantTableMockData } from "../../utils/mockdata-generator";

const initialState = {
  data: generateDNAVariantTableMockData(10000),
  selectedRowKeys: []
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.SELECT_ROW_KEY]: (state, { payload }) => {
    const selectedRowKeys = payload;

    return {
      ...state,
      selectedRowKeys
    };
  },

  [actionsTypes.SET_NOTES]: (state, { payload }) => {
    const { id, notes } = payload;
    const newObj = state?.data[id];
    if (newObj) newObj.notes = notes;

    return {
      ...state
    };
  }
});

export default tableReducer;
