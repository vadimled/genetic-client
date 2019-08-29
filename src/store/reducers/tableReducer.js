import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { PRIORITY } from "../../utils/constants";
import { CONFIRMATION_VALUES } from "Utils/constants";

const initialState = {
  serverData: {},
  data: {},
  uncheckConfirmationData: null,
  sortParam: "priority",
  sortOrder: "default",
  clicksCounter: 1,
  isLoading: false
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.SET_TABLE_REDUCER_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.FETCH_TABLE_DATA_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      serverData: payload
    };
  },

  [actionsTypes.SET_PARSED_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      data: payload
    };
  },

  [actionsTypes.SET_SORT]: (state, { payload }) => {
    const { field, order } = payload;

    if (state.clicksCounter >= 2) {
      return {
        ...state,
        sortParam: field,
        sortOrder: order,
        clicksCounter: order === "default" ? 1 : 0
      };
    }

    return {
      ...state,
      sortParam: field,
      sortOrder: order,
      clicksCounter: order === "default" ? 1 : state.clicksCounter + 1
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {
    const { item, value } = payload;
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
          item.selected =
            payload === false
              ? // if all rows selected or on discarding
              false
              : // otherwise
              true;
        }
      }
    }

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.HANDLE_VARIANT_CLASS]: (state, { payload }) => {
    const { item, value } = payload;

    const priority = PRIORITY[value];

    let data = state?.data;

    const record = data[item.id];

    if (record?.zygosity === "homo" || record?.zygosity === "hetero") {
      record.variantClassGermline = value;
    } else if (item?.zygosity === "somatic") {
      record.variantClassSomatic = value;
    }

    data[item.id].priority = priority;

    const newData = Object.assign({}, data);

    state.data = newData;

    return {
      ...state
    };
  },

  [actionsTypes.UPDATE_VARIANT_IN_TABLE_DATA]: (state, { payload }) => {
    const { id } = payload;
    let data = state?.data;

    data[id] = payload;

    const newData = Object.assign({}, data);

    state.data = newData;

    return {
      ...state
    };
  },

  [actionsTypes.APPLY_CONFIRMATION]: (state, { payload }) => {
    let data = state?.data;
    // payload includes confirmed rows
    payload.forEach(row => {
      let dataRow = data[row.id];
      dataRow.status = CONFIRMATION_VALUES.PENDING.value;
      dataRow.selected = false;
    });

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.SET_CONFIRMATION_STATUS_TO_STORE]: (state, { payload }) => {
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
  }
});

export default tableReducer;
