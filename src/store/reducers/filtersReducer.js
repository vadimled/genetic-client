import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';
import { FILTERS } from "Utils/constants";

const initialState = {
  [FILTERS.type]: null,
  [FILTERS.variantClass]: [],
  [FILTERS.hotSpot]: null,
  [FILTERS.snp]: null,
  [FILTERS.roi]: null,
  [FILTERS.gnomId]: null
};

const filtersReducer = createReducer(initialState, {
  [actionsTypes.SET_FILTER_TYPE]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      [FILTERS.type]: value
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS]: (state, {payload}) => {
    const { value } = payload;
    let classes = state[FILTERS.variantClass].slice();

    // push or remove value from variantClass
    const index = classes.indexOf(value);
    if (index === -1) {
      classes.push(value);
    } else {
      classes.splice(index, 1);
    }

    return {
      ...state,
      [FILTERS.variantClass]: classes
    };
  },

  [actionsTypes.SET_FILTER_HOT_SPOT]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      [FILTERS.hotSpot]: value
    };
  },

  [actionsTypes.SET_FILTER_SNP]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      [FILTERS.snp]: value
    };
  },

  [actionsTypes.SET_FILTER_ROI]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      [FILTERS.roi]: value
    };
  },

  [actionsTypes.SET_FILTER_GNOM_ID]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      [FILTERS.gnomId]: value
    };
  },
});

export default filtersReducer;
