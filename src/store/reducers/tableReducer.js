import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { CONFIRMATION_VALUES } from 'Utils/constants';

const initialState = {
  data: generateDNAVariantTableMockData(200),
  uncheckConfirmationData: null,
  activityLog: {}
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {
    const {item, value} = payload;
    let data = state?.data;

    data[item.id].selected = value;

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {
    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        // if an item has already status we cannot select it to send for confirmation
        if (!item.status) {
          item.selected = payload === true
            // if all rows selected or on discarding
            ? false
            // otherwise
            : true;
        }

      }
    }

    return {
      ...state,
      data: { ...data }
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
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.APPLY_CONFIRMATION]: (state, { payload }) => {
    let data = state?.data;

    // payload includes confirmed rows
    payload.forEach((row) => {
      let dataRow = data[row.id];
      dataRow.status = CONFIRMATION_VALUES.PENDING.value;
      dataRow.selected = false;
    });

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.HANDLE_CONFIRMATION_STATUS]: (state, { payload }) => {
    const { id, status } = payload;
    let data = state?.data;
    data[id].status = status;

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.HANDLE_UNCHECK_CONFIRMATION_DATA]: (state, { payload }) => {
    return {
      ...state,
      uncheckConfirmationData: payload
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
      activityLog
    };
  },

  [actionsTypes.TABLE_DATA_ADD_RESULT]: (state, { payload }) => {
    let data = {
      [payload.id]: {
        ...payload,
        key: payload.id, // need for variantTable
        isAdded: true // indicate that this row has added by user
      },
      ...state.data
    };

    return {
      ...state,
      data
    };
  },

  [actionsTypes.TABLE_DATA_EDIT_RESULT]: (state, { payload }) => {
    let data = {
      ...state.data,
      [payload.id]: {
        ...payload,
        key: payload.id, // need for variantTable
        isAdded: true // indicate that this row has added by user
      }
    };

    return {
      ...state,
      data
    };
  },

});

export default tableReducer;


