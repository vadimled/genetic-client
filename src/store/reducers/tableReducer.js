import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";

const initialState = {
  data: generateDNAVariantTableMockData(200),
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

  [actionsTypes.HANDLE_ZYGOSITY]: (state, { payload }) => {
    const {item, value} = payload;
    let data = state?.data;
    data[item.id].zygosity = value;

    // and always reset variantClass as a result of changing the zygosity
    // reset to
    if (
      value !== 'insignificant' &&
      value !== 'notReal' &&
      value !== 'unknown'
    ) {
      // unclassified is default for somatic & germline
      data[item.id].variantClass = 'unclassified';
    }
    else {
      data[item.id].variantClass = '';
    }

    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_VARIANT_CLASS]: (state, { payload }) => {
    const {item, value} = payload;
    let data = state?.data;
    data[item.id].variantClass = value;

    return {
      ...state
    };
  },

  [actionsTypes.SET_NOTES]: (state, { payload }) => {
    const { id, notes } = payload;
    let data = state?.data;
    data[id].notes = notes;

    return {
      ...state
    };
  }
});

export default tableReducer;


