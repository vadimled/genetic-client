import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  data: null,
  // selectedVariants: null
};

const finalReportReducer = createReducer(initialState, {
  [actionsTypes.FETCH_DATA]: (state, {payload}) => {

    return {
      ...state,
      isLoggedIn: true,
      ...payload
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {

    const { item, value } = payload;

    // const selectedVariants = []

    let data = state?.data;

    data[item.id].selected = value;

    // selectedVariants.push(data[item.id])

    return {
      ...state,
      data: { ...data },
      // selectedVariants
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {

    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        // if an item has already status we cannot select it to send for confirmation

        item.selected = !payload;

      }
    }

    return {
      ...state,
      data: { ...data }
    };
  },

  [actionsTypes.SET_VARIANTS_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      data: payload
    };
  },


});


export default finalReportReducer;