import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  actionableVariants: [],
  mutation_type: null
};

const finalReportReducer = createReducer(initialState, {
  [actionsTypes.ADD_ROW]: (state, { payload }) => {
    return {
      ...state,
      selectedData: state.selectedData.push(payload)
    };
  },

  [actionsTypes.REMOVE_SELECTED_TABLE_ROW_FROM_STORE]: (state, { payload }) => {
    const newActionableVariants = state.actionableVariants.filter(
      obj => obj.variant_id !== payload
    );
    return {
      ...state,
      actionableVariants: newActionableVariants
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {
    const { item, value } = payload;

    // const selectedVariants = []

    let data = Object.assign(state?.data);

    // let selectedVariants = Object.assign(state?.selectedVariants);

    data[item.id].selected = value;

    // selectedVariants.push(data[item.id]);

    state.data = data;
    // state.selectedVariants = selectedVariants;

    // selectedVariants.push(data[item.id])

    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {
    let data = state?.dna_variants;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        // if an item has already status we cannot select it to send for confirmation

        item.selected = !payload;
      }
    }

    return {
      ...state,
      dna_variants: { ...data }
    };
  },

  [actionsTypes.SET_FINAL_REPORT_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      actionableVariants: payload
    };
  },

  [actionsTypes.SET_VARIANTS_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      dna_variants: payload
    };
  }
});

export default finalReportReducer;
