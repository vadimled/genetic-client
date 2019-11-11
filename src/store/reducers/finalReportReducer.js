import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { NAV_STATUS, TEXTAREA_NAME } from "Utils/constants";

const initialState = {
  serverData: null,
  data: null,
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  actionableVariants: [],
  clinicalVariants: [],
  mutation_type: null,
  navigationStatus: NAV_STATUS.alterations,
  selectedUpperTableRowObject: null,
  currentActionableTab: "1",
  selectedVariantsIds: [],
  variantDescription: "",
  geneDescription: "",
  variantDescriptionSaved: false,
  geneDescriptionSaved:false,
  selectVariants: true
};

const finalReportReducer = createReducer(initialState, {
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

  [actionsTypes.ADD_ROW]: (state, { payload }) => {
    return {
      ...state,
      selectedData: state.selectedData.push(payload)
    };
  },

  [actionsTypes.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE]: (
    state,
    { payload }
  ) => {
    const newActionableVariants = state.actionableVariants.filter(
      obj => obj?.id !== payload?.id
    );
    return {
      ...state,
      actionableVariants: newActionableVariants
    };
  },

  [actionsTypes.REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE]: (
    state,
    { payload }
  ) => {
    const newClinicalVariants = state.clinicalVariants.filter(
      obj => obj?.id !== payload?.id
    );
    return {
      ...state,
      clinicalVariants: newClinicalVariants
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {
    const { item, value } = payload;

    let newData = state?.data;
    let selectedVariants = state?.selectedVariantsIds;

    newData[item.id].selected = value;

    selectedVariants.push(item.id);

    return {
      ...state,
      data: { ...newData },
      selectedVariantsIds: [...selectedVariants]
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {
    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        item.selected = !payload;
      }
    }

    return {
      ...state,
      dna_variants: { ...data }
    };
  },

  [actionsTypes.SET_VARIANTS_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      dna_variants: payload,
      actionableVariants: payload
    };
  },

  [actionsTypes.SET_FINAL_REPORT_ACTIONABLE_DATA_TO_STORE]: (
    state,
    { payload }
  ) => {
    return {
      ...state,
      actionableVariants: payload
    };
  },

  [actionsTypes.SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE]: (
    state,
    { payload }
  ) => {
    return {
      ...state,
      clinicalVariants: payload
    };
  },

  [actionsTypes.SET_ACTIONABLE_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      // dna_variants: payload,
      actionableVariants: payload
    };
  },

  [actionsTypes.SET_NAVIGATION_STATUS]: (state, { payload }) => {
    return {
      ...state,
      navigationStatus: payload
    };
  },

  [actionsTypes.SET_SELECTED_UPPER_TABLE_ROW_OBJECT]: (state, { payload }) => {
    return {
      ...state,
      selectedUpperTableRowObject: payload,
      selectVariants: true
    };
  },

  [actionsTypes.SET_CURRENT_ACTIONABLE_TAB]: (state, { payload }) => {
    return {
      ...state,
      currentActionableTab: payload.toString() || "1"
    };
  },

  [actionsTypes.SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED]: (state, { payload }) => {
    let contentSaved;
    switch (payload) {
      case TEXTAREA_NAME.geneDescription:
        contentSaved = {
          geneDescriptionSaved: true
        };
        break;
      case TEXTAREA_NAME.variantDescription:
        contentSaved = {
          variantDescriptionSaved: true
        };
        break;
    }
    
    return {
      ...state,
      ...contentSaved
    };
  },

  [actionsTypes.SET_EXPANDED_TAB_TEXTAREA]: (state, { payload }) => {
    const { name, value } = payload;
    let textArea;
    switch (name) {
      case TEXTAREA_NAME.geneDescription:
        textArea = {
          geneDescription: value,
          geneDescriptionSaved: false
        };
        break;
      case TEXTAREA_NAME.variantDescription:
        textArea = {
          variantDescription: value,
          variantDescriptionSaved: false
        };
        break;
    }

    return {
      ...state,
      ...textArea
    };
  },
  
  [actionsTypes.SET_SELECT_VARIANTS]: state => {
    return {
      ...state,
      selectVariants: !state.selectVariants,
      selectedUpperTableRowObject: null
    };
  },
  
});

export default finalReportReducer;
