import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { ALLELE_TYPES, VALIDATION_FAILD_FIELDS } from "Utils/constants";

const initialState = {
  isOpen: false,
  isHgvsLoaded: false,
  isOnEdit: false,
  id: null,
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
  transcript: '',
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
      isHgvsLoaded: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.loadHgvs),
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_IS_ON_EDIT]: (state, { payload }) => {
    return {
      ...state,
      isOnEdit: payload
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_GENE]: (state, { payload }) => {
    return {
      ...state,
      gene: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.gene),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_CHROMOSOME]: (state, { payload }) => {
    return {
      ...state,
      chromosome: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.chromosome),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_POSITION]: (state, { payload }) => {
    return {
      ...state,
      position: payload,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.position),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_TYPE]: (state, { payload }) => {
    return {
      ...state,
      alleleType: payload,
      alleleReference: '', // drop on change
      alleleAlternative: '', // drop on change,
      validationFaildFields: state.validationFaildFields
        .filter((f) => f !== VALIDATION_FAILD_FIELDS.alleleReference
          && f !== VALIDATION_FAILD_FIELDS.alleleAlternative
        ),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_REFERENCE]: (state, { payload }) => {
    // remove all digits because alleleReference can contains only string values
    let alleleReference = payload.replace(/\d/g, '');
    // alleleReference should be in upper case
    alleleReference = alleleReference.toUpperCase();
    return {
      ...state,
      alleleReference,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.alleleReference),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
    };
  },

  [actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE]: (state, { payload }) => {
    // remove all digits because alleleAlternative can contains only string values
    let alleleAlternative = payload.replace(/\d/g, '');
    // alleleAlternative should be in upper case
    alleleAlternative = alleleAlternative.toUpperCase();
    return {
      ...state,
      alleleAlternative,
      validationFaildFields: state.validationFaildFields.filter((f) => f !== VALIDATION_FAILD_FIELDS.alleleAlternative),
      isHgvsLoaded: false, // drop in change
      coding: '', // drop in change
      protein: '', // drop in change
      transcript: '', // drop in change
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

  [actionsTypes.HANDLE_RESULT_CONFIG_TRANSCRIPT]: (state, { payload }) => {
    return {
      ...state,
      transcript: payload
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

  [actionsTypes.RESULT_CONFIG_SET_ID]: (state, { payload }) => {
    return {
      ...state,
      id: payload,
    };
  },

});

export default tableReducer;
