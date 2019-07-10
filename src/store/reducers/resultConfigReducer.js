import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { ALLELE_TYPES } from "Utils/constants";

const initialState = {
  isOpen: true,
  gene: '',
  chromosome: '',
  position: '',
  alleleType: ALLELE_TYPES.change.value,
  alleleReference: '',
  alleleAlternative: '',
  vaf: 0,
  coverage: 0,
  coding: '',
  proteint: ''
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_RESULT_CONFIG_IS_OPEN]: (state, { payload }) => {
    return {
      ...state,
      isOpen: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_GENE]: (state, { payload }) => {
    return {
      ...state,
      gene: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_CHROMOSOME]: (state, { payload }) => {
    return {
      ...state,
      chromosome: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_POSITION]: (state, { payload }) => {
    return {
      ...state,
      position: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_TYPE]: (state, { payload }) => {
    return {
      ...state,
      alleleType: payload,
      alleleReference: '', // drop on change
      alleleAlternative: '' // drop on change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_REFERENCE]: (state, { payload }) => {
    return {
      ...state,
      alleleReference: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE]: (state, { payload }) => {
    return {
      ...state,
      alleleAlternative: payload
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
      proteint: payload
    };
  },

});

export default tableReducer;
