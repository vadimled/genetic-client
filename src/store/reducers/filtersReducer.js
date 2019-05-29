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
    const {type} = payload;
    return {
      ...state,
      type
    };
  },
});

export default filtersReducer;
