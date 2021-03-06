import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { PRIORITY } from "../../utils/constants";
import { CONFIRMATION_VALUES, SORTING_ORDER, TEXTS } from "Utils/constants";

const initialState = {
  serverData: {},
  data: {},
  uncheckConfirmationData: null,
  sortParam: "priority",
  sortOrder: SORTING_ORDER.default,
  isLoading: false,
  currentPage: 1
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

    return {
      ...state,
      sortParam: field,
      sortOrder: order,
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
        if (item.status === TEXTS.UNCHECK) {
          item.selected = !payload;
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

  [actionsTypes.APPLY_CONFIRMATION_SUCCESS]: (state, { payload }) => {
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

    const { variantId, status } = payload;

    let data = state?.data;

    data[variantId].status = status;

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
      ...state.data,
      [payload.id]: {
        ...payload,
      }
    };

    return {
      ...state,
      data
    };
  },
  
  [actionsTypes.SET_TABLE_CURRENT_PAGE]: (state, { payload }) => {
    return {
      ...state,
      currentPage: payload
    };
  },
});

export default tableReducer;
