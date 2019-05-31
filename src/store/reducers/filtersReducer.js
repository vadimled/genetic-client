import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';
import { FILTERS } from "Utils/constants";

const changeValueAccordingOnMode = ({stateValue, value, mode}) => {
  let newValue;

  if (mode === 'multiple') {
    newValue = stateValue.slice();

    // push or remove value
    const index = newValue.indexOf(value);
    if (index === -1) {
      newValue.push(value);
    } else {
      newValue.splice(index, 1);
    }

    return newValue;
  }
  else if (mode === 'single') {
    newValue = value;

    // reset if clicked the same
    if (newValue === stateValue) newValue = null;

    return newValue;
  }

  return value;
};

const initialState = {
  [FILTERS.type]: 'somatic', // 'somatic' | 'germline'
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
    const { value, mode } = payload;

    let newValue = changeValueAccordingOnMode({
      stateValue: state[FILTERS.variantClass],
      value,
      mode
    });

    return {
      ...state,
      [FILTERS.variantClass]: newValue
    };
  },

  [actionsTypes.SET_FILTER_HOT_SPOT]: (state, {payload}) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode({
      stateValue: state[FILTERS.hotSpot],
      value,
      mode
    });

    return {
      ...state,
      [FILTERS.hotSpot]: newValue
    };
  },

  [actionsTypes.SET_FILTER_SNP]: (state, {payload}) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode({
      stateValue: state[FILTERS.snp],
      value,
      mode
    });

    return {
      ...state,
      [FILTERS.snp]: newValue
    };
  },

  [actionsTypes.SET_FILTER_ROI]: (state, {payload}) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode({
      stateValue: state[FILTERS.roi],
      value,
      mode
    });

    return {
      ...state,
      [FILTERS.roi]: newValue
    };
  },

  [actionsTypes.SET_FILTER_GNOM_ID]: (state, {payload}) => {
    let { value, mode } = payload;

    let newValue = changeValueAccordingOnMode({
      stateValue: state[FILTERS.gnomId],
      value,
      mode
    });

    return {
      ...state,
      [FILTERS.gnomId]: newValue
    };
  },
});

export default filtersReducer;
