import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { FILTERS } from "Utils/constants";

const initialState = {
  [FILTERS.type]: "somatic", // 'somatic' | 'germline'
  [FILTERS.variantClassGermline]: [],
  [FILTERS.variantClassSomatic]: [],
  [FILTERS.hotSpot]: [],
  [FILTERS.snp]: [],
  [FILTERS.roi]: [],
  [FILTERS.vaf]: [1, 99], // [0, 100]
  [FILTERS.cancerDBs]: [],
  [FILTERS.gnomAD]: [],
  [FILTERS.searchText]: "",
  [FILTERS.zygosity]: [],
  [FILTERS.effect]: [],
};

const filtersReducer = createReducer(initialState, {
  [actionsTypes.SET_FILTER_TYPE]: (state, { payload }) => {
    const { value } = payload;
    return {
      ...state,
      type: value
    };
  },

  [actionsTypes.SET_DEFAULT_FILTERS]: (state, {payload}) => {

    let filtersConfig = {};
    const testType = payload;

    if (testType === "solid" || testType === "hema") {

      filtersConfig = {
        [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
        [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
        [FILTERS.gnomAD]: ['na', 'veryRare'],
        [FILTERS.vaf]: [1, 100],
        [FILTERS.snp]: [],
        [FILTERS.roi]: [],
        [FILTERS.cancerDBs]: [],
        [FILTERS.zygosity]: [],
        [FILTERS.effect]: [],

      };
    }

    if (testType === "risk") {
      filtersConfig = {
        [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
        [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
        [FILTERS.vaf]: [30, 100],
        [FILTERS.snp]: [],
        [FILTERS.roi]: [],
        [FILTERS.cancerDBs]: [],
        [FILTERS.zygosity]: [],
        [FILTERS.effect]: [],
      };
    }

    return {
      ...state,
      ...filtersConfig
    };
  },

  [actionsTypes.SET_FILTER_ZYGOSITY]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.zygosity]: payload
    };
  },

  [actionsTypes.SET_FILTER_EFFECT]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.effect]: payload
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS_GERMLINE]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.variantClassGermline]: payload
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS_SOMATIC]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.variantClassSomatic]: payload
    };
  },

  [actionsTypes.SET_FILTER_HOT_SPOT]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.hotSpot]: payload
    };
  },

  [actionsTypes.SET_FILTER_SNP]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.snp]: payload
    };
  },

  [actionsTypes.SET_FILTER_ROI]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.roi]: payload
    };
  },

  [actionsTypes.SET_FILTER_VAF]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.vaf]: payload
    };
  },

  [actionsTypes.SET_FILTER_CANCER_DBS]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.cancerDBs]: payload
    };
  },

  [actionsTypes.SET_FILTER_GNOM_ID]: (state, { payload }) => {
    return {
      ...state,
      [FILTERS.gnomAD]: payload
    };
  },

  [actionsTypes.CLEAR_FILTER_SECTION]: (state, { payload }) => {
    const { filtersKey } = payload;

    if (filtersKey === FILTERS.searchText) {
      state[filtersKey] = "";
    } else {
      state[filtersKey] = [];
    }

    return {
      ...state,
    };
  },

  [actionsTypes.UPDATE_SEARCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      [FILTERS.searchText]: payload
    });
  }
});

export default filtersReducer;
