import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  serverData: {},
  data: {},
  uncheckConfirmationData: null,
  isLoading: false
};

const coveragePageReducer = createReducer(initialState, {
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



  [actionsTypes.HANDLE_SELECTED_ROW_COVERAGE]: (state, { payload }) => {
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
