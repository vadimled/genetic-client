import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  data: null,
  selectedVariants: []
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

    let data = Object.assign(state?.data);

    let selectedVariants = Object.assign(state?.selectedVariants);

    data[item.id].selected = value;

    selectedVariants.push(data[item.id]);

    state.data = data;
    state.selectedVariants = selectedVariants;

    // selectedVariants.push(data[item.id])

    return {
      ...state
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