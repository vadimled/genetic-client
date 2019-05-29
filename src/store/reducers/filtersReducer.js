import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';

const initialState = {
  type: 'Somatic', // or null
  variantClass: ['PATH', 'VUS'], // or []
  hotSpot: true, // or null
  snp: false, // or null
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
