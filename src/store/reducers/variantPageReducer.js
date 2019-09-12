import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  isLoading: false,
  variantData: null,
  externalResources: [],
  selectedZygosityType: null,
  classificationHistory: [],
  somaticClassHistory: null,
  germlineClassHistory: null,
  isReconfirmed: false
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_VARIANT_CLASS]: (state, { payload }) => {
    const { value, name } = payload;
    return {
      ...state,
      variantData: {
        ...state.variantData,
        variantClassSomatic:
          name.indexOf(TEXTS.somatic) !== -1
            ? value.toLowerCase()
            : state.variantData.variantClassSomatic.toLowerCase(),
        variantClassGermline:
          name.indexOf(TEXTS.germline) !== -1
            ? value.toLowerCase()
            : state.variantData.variantClassGermline.toLowerCase()
      }
    };
  },

  [actionsTypes.SET_HISTORY_TABLE_DATA]: (state, { payload }) => {
    const { data, type } = payload;
    const newData = Object.assign(
      {},
      type === TEXTS.somatic
        ? { somaticClassHistory: data }
        : { germlineClassHistory: data }
    );

    return {
      ...state,
      ...newData
    };
  },

  [actionsTypes.SET_VARIANT_ZYGOSITY_TYPE]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_CURRENT_VARIANT_CLASS]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_EXTERNAL_RESOURCES]: (state, { payload }) => {
    return {
      ...state,
      externalResources: payload
    };
  },

  [actionsTypes.SET_VARIANT_METADATA]: (state, { payload }) => {
    return {
      ...state,
      variantData: payload
    };
  },

  [actionsTypes.SET_SERVER_VARIANT_METADATA]: (state, { payload }) => {
    return {
      ...state,
      serverData: payload
    };
  },

  [actionsTypes.SET_TEST_INFORMATION]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_NEW_EVIDENCE_ENTRY]: (state, { payload }) => {
    const { zygosity_type, id } = payload;
    delete payload.id;

    const
      targetDataName = zygosity_type === TEXTS.germline
        ? "germline_evidence"
        : "somatic_evidence",
      
      targetData = { ...state[targetDataName], [id]: payload };
    return {
      ...state,
      [targetDataName]: targetData
    };
  },

  [actionsTypes.SET_EDITED_EVIDENCE_ENTRY]: (state, { payload }) => {
    const { zygosity_type, id  } = payload;
    delete payload.id;
  
    const
      targetDataName = zygosity_type === TEXTS.germline
        ? "germline_evidence"
        : "somatic_evidence",
    
      targetData = { ...state[targetDataName], [id]: payload };
    return {
      ...state,
      [targetDataName]: targetData
    };
  },
  
  [actionsTypes.DELETE_EVIDENCE_ENTRY_FROM_STORE]: (state, { payload }) => {
    const
      { ids: {evidenceId } , data:{ zygosity_type } } = payload,
    
      targetDataName =  zygosity_type === TEXTS.germline
        ? "germline_evidence"
        : "somatic_evidence",
      
      targetData = Object.assign({}, state[targetDataName]);
    
    delete targetData[evidenceId];
    return {
      ...state,
      [targetDataName]: targetData
    };
  },
  
  [actionsTypes.SET_EVIDENCE_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_VARIANT_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.SET_CLASSIFICATION_HISTORY_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      classificationHistory: payload
    };
  },

  [actionsTypes.SET_VARIANT_PAGE_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.SET_RECONFIRM_STATUS]: (state, { payload }) => {
    return {
      ...state,
      isReconfirmed: payload
    };
  }
});

export default variantPageReducer;
