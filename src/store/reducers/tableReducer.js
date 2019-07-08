import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { PRIORITY } from "../../utils/constants";

const initialState = {
  data: generateDNAVariantTableMockData(200),
  selectedRowKeys: [],
  activityLog: {}
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

    const newData = Object.assign({}, data);

    state.data = newData;

    // and always reset variantClass as a result of changing the zygosity
    // reset to
    if (
      value !== 'insignificant' &&
      value !== 'notReal' &&
      value !== 'unknown'
    ) {
      // unclassified is default for somatic & germline
      data[item.id].variantClass = 'unclassified';
      data[item.id].priority = PRIORITY['unclassified'];
    }
    else {
      data[item.id].variantClass = '';
    }

    switch (value) {
      case "unknown": data[item.id].priority = PRIORITY['unknown'];
        break;
      case "notReal": data[item.id].priority = PRIORITY['notReal'];
        break;
      case "insignificant": data[item.id].priority = PRIORITY['insignificant'];
        break;
    }

    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_VARIANT_CLASS]: (state, { payload }) => {

    const {item, value} = payload;

    const priority = PRIORITY[value];

    let data = state?.data;

    data[item.id].variantClass = value;

    data[item.id].priority = priority;

    const newData = Object.assign({}, data);

    state.data = newData;

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
  },

  [actionsTypes.UPDATE_ACTIVITY_LOG]: (state, {payload}) => {

    const {item, prevValue, changedField} = payload;

    let activityLog = state?.activityLog;

    const changes = {
      titleCurr: item[changedField],
      titlePrev: prevValue,
      time: new Date(),
      type: changedField
    };

    let changesArr =  activityLog[item.id] && activityLog[item.id][changedField]
      ? activityLog[item.id][changedField] : [];

    activityLog[item.id] = {
      ...activityLog[item.id],
      [changedField]: [...changesArr, changes]
    };

    return{
      ...state,
    };
  }

});

export default tableReducer;


