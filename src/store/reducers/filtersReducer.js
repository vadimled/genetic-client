import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { FILTERS } from "Utils/constants";

export const changeValueAccordingOnMode = (stateValue, value, mode) => {
  let newValue;

  if (mode === "multiple") {
    newValue = stateValue.slice();

    // push or remove value
    const index = newValue.indexOf(value);
    if (index === -1) {
      newValue.push(value);
    } else {
      newValue.splice(index, 1);
    }

    return newValue;
  } else if (mode === "single") {
    newValue = value;

    // reset if clicked the same
    if (newValue === stateValue) newValue = null;

    return newValue;
  }

  return value;
};

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

    if(testType === "solid" || testType === "hema"){

      filtersConfig = {
        [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
        [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
        [FILTERS.gnomAD]: ['na', 'veryRare'],
        [FILTERS.vaf]: [1, 100]
      };
    }

    if(testType === "risk"){
      filtersConfig = {
        [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
        [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
        [FILTERS.vaf]: [30, 100]
      };
    }


    return {
      ...state,
      ...filtersConfig
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS_GERMLINE]: (state, { payload }) => {
    const { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(
      state[FILTERS.variantClassGermline],
      value,
      mode
    );

    return {
      ...state,
      [FILTERS.variantClassGermline]: newValue
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS_SOMATIC]: (state, { payload }) => {
    const { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(
      state[FILTERS.variantClassSomatic],
      value,
      mode
    );

    return {
      ...state,
      [FILTERS.variantClassSomatic]: newValue
    };
  },

  [actionsTypes.SET_FILTER_HOT_SPOT]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(
      state[FILTERS.hotSpot],
      value,
      mode
    );

    return {
      ...state,
      [FILTERS.hotSpot]: newValue
    };
  },

  [actionsTypes.SET_FILTER_SNP]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(state[FILTERS.snp], value, mode);

    return {
      ...state,
      [FILTERS.snp]: newValue
    };
  },

  [actionsTypes.SET_FILTER_ROI]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(state[FILTERS.roi], value, mode);

    return {
      ...state,
      [FILTERS.roi]: newValue
    };
  },

  [actionsTypes.SET_FILTER_VAF]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(state[FILTERS.vaf], value, mode);

    return {
      ...state,
      [FILTERS.vaf]: newValue
    };
  },

  [actionsTypes.SET_FILTER_CANCER_DBS]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(
      state[FILTERS.cancerDBs],
      value,
      mode
    );

    return {
      ...state,
      [FILTERS.cancerDBs]: newValue
    };
  },

  [actionsTypes.SET_FILTER_GNOM_ID]: (state, { payload }) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode(
      state[FILTERS.gnomAD],
      value,
      mode
    );

    return {
      ...state,
      [FILTERS.gnomAD]: newValue
    };
  },

  [actionsTypes.CLEAR_FILTER_SECTION]: (state, { payload }) => {
    const { filtersKey } = payload;

    if(filtersKey === "searchText"){
      state[filtersKey] = "";
    }else {
      state[filtersKey] = [];
    }

    return {
      ...state
    };
  },

  [actionsTypes.UPDATE_SEARCH]: (state, { payload }) => {
    return Object.assign({}, state, {
      searchText: payload
    });
  }
});

export default filtersReducer;
