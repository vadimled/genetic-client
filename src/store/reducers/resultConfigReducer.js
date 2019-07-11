import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { ALLELE_TYPES } from "Utils/constants";

const initialState = {
  isOpen: false,
  isHgvsLoaded: false,
  gene: '',
  chromosome: '',
  position: null,
  alleleType: ALLELE_TYPES.change.value,
  alleleReference: '',
  alleleAlternative: '',
  vaf: 0,
  coverage: 0,
  coding: '',
  protein: '',
  validationFaildFields: []
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_RESULT_CONFIG_IS_OPEN]: (state, { payload }) => {
    return {
      ...state,
      isOpen: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_IS_HGVS_LOADED]: (state, { payload }) => {
    return {
      ...state,
      isHgvsLoaded: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_GENE]: (state, { payload }) => {
    return {
      ...state,
      gene: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== 'gene')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_CHROMOSOME]: (state, { payload }) => {
    return {
      ...state,
      chromosome: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== 'chromosome')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_POSITION]: (state, { payload }) => {
    return {
      ...state,
      position: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== 'position')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_TYPE]: (state, { payload }) => {
    return {
      ...state,
      alleleType: payload,
      alleleReference: '', // drop on change
      alleleAlternative: '', // drop on change,
      validationFaildFields: state.validationFaildFields
        .filter((f) => f !== 'alleleReference' && f !== 'alleleAlternative')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_REFERENCE]: (state, { payload }) => {
    return {
      ...state,
      alleleReference: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== 'alleleReference')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE]: (state, { payload }) => {
    return {
      ...state,
      alleleAlternative: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== 'alleleAlternative')
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_VAF]: (state, { payload }) => {
    return {
      ...state,
      vaf: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_COVERAGE]: (state, { payload }) => {
    return {
      ...state,
      coverage: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_CODING]: (state, { payload }) => {
    return {
      ...state,
      coding: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_PROTEIN]: (state, { payload }) => {
    return {
      ...state,
      protein: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS]: (state, { payload }) => {
    return {
      ...state,
      validationFaildFields: payload
    };
  },

  [actionsTypes.RESULT_CONFIG_SET_INITIAL_STATE]: () => {
    return {
      ...initialState
    };
  },

});

export default tableReducer;
