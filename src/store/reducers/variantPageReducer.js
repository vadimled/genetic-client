import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  variantData: {
    gene: "A1CF",
    protein: "p.Leu2303Leu",
    chrPosition: "chr1:45797505",
    alleleChange: "C > GA",
    alleleChangeLong: "C.7634+21 > GA_110509.1",
    ref: "C",
    alt: "GA",
    dbSNP: "rs3219489",
    clinvarVariationId: "516652",
    coding: "c.7634+21_7634+22insTCATCATGAGAGAAGGTGAGTGGGGCTCTCAAAGTG",
    transcript: "NM_110509.1",
    COSMIC: ["COSM3997243", "COSM3997245", "COSM3997244"],
    AminoAcidChange: "I1564ISLKN",
    DamagingScore: "TTCATGAGAGAAGGTGAGTGG"
  },
  somatic_variant_class: null,
  germline_variant_class: null,
  externalResources: [],
  selectedZygosityType: null,
  somaticClassHistory: {
    "0gzhbamall3xfe2gzdmlnw9aj": {
      key: 0,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "1gzhbamall3xfe2gzdmlnw9aj": {
      key: 1,
      created_at: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Unclassified"
    },
    "2gzhbamall3xfe2gzdmlnw9aj": {
      key: 2,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050816_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier3"
    },
    "3gzhbamall3xfe2gzdmlnw9aj": {
      key: 3,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050815_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier4"
    },
    "4gzhbamall3xfe2gzdmlnw9aj": {
      key: 4,
      created_at: "9/nov/2017",
      gsid: "GS00115NP050814_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "5gzhbamall3xfe2gzdmlnw9aj": {
      key: 5,
      created_at: "8/nov/2017",
      gsid: "GS00115NP050813_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier2"
    },
    "6gzhbamall3xfe2gzdmlnw9aj": {
      key: 6,
      created_at: "7/nov/2017",
      gsid: "GS00115NP050812_TS1_01",
      analystName: "Waly Yafe",
      class: "Tier3"
    },
    "7gzhbamall3xfe2gzdmlnw9aj": {
      key: 7,
      created_at: "6/nov/2017",
      gsid: "GS00115NP050811_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier4"
    },
    "8gzhbamall3xfe2gzdmlnw9aj": {
      key: 8,
      created_at: "5/nov/2017",
      gsid: "GS00115NP050810_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier1"
    },
    "9gzhbamall3xfe2gzdmlnw9aj": {
      key: 9,
      created_at: "4/nov/2017",
      gsid: "GS00115NP050828_TS1_01",
      analystName: "Lior GoldBerg",
      class: "Tier2"
    },
    "10zhbamall3xfe2gzdmlnw9aj": {
      key: 10,
      created_at: "3/nov/2017",
      gsid: "GS00115NP050838_TS1_01",
      analystName: "Taly Yafe",
      class: "Tier3"
    }
  },
  germlineClassHistory: {
    "0gzhbamall3xfe2gzdmlnw9aj": {
      key: 1,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "1gzhbamall3xfe2gzdmlnw9aj": {
      key: 2,
      created_at: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "2gzhbamall3xfe2gzdmlnw9aj": {
      key: 3,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050816_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "3gzhbamall3xfe2gzdmlnw9aj": {
      key: 4,
      created_at: "10/nov/2017",
      gsid: "GS00115NP050815_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LBEN"
    },
    "4gzhbamall3xfe2gzdmlnw9aj": {
      key: 5,
      created_at: "9/nov/2017",
      gsid: "GS00115NP050814_TS1_01",
      analystName: "Taly Yafe",
      class: "PATH"
    },
    "5gzhbamall3xfe2gzdmlnw9aj": {
      key: 6,
      created_at: "8/nov/2017",
      gsid: "GS00115NP050813_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "6gzhbamall3xfe2gzdmlnw9aj": {
      key: 7,
      created_at: "7/nov/2017",
      gsid: "GS00115NP050812_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "7gzhbamall3xfe2gzdmlnw9aj": {
      key: 8,
      created_at: "6/nov/2017",
      gsid: "GS00115NP050811_TS1_01",
      analystName: "Lior GoldBerg",
      class: "LPATH"
    },
    "8gzhbamall3xfe2gzdmlnw9aj": {
      key: 9,
      created_at: "5/nov/2017",
      gsid: "GS00115NP050810_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    },
    "9gzhbamall3xfe2gzdmlnw9aj": {
      key: 10,
      created_at: "4/nov/2017",
      gsid: "GS00115NP050828_TS1_01",
      analystName: "Lior GoldBerg",
      class: "VUS"
    },
    "10zhbamall3xfe2gzdmlnw9aj": {
      key: 11,
      created_at: "3/nov/2017",
      gsid: "GS00115NP050838_TS1_01",
      analystName: "Taly Yafe",
      class: "VUS"
    }
  },
  classificationHistory: [],
  isLoading: false
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_VARIANT_CLASSIFICATION]: (state, { payload }) => {
    const { value, name } = payload;
    return {
      ...state,
      somatic_variant_class:
        name.indexOf(TEXTS.somatic) !== -1
          ? value.toLowerCase()
          : state.somatic_variant_class.toLowerCase(),
      germline_variant_class:
        name.indexOf(TEXTS.germline) !== -1
          ? value.toLowerCase()
          : state.germline_variant_class.toLowerCase()
    };
  },

  [actionsTypes.SET_VARIANT_ZYGOSITY_TYPE]: (state, { payload }) => {
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

  [actionsTypes.SET_VARIANT_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_TEST_INFORMATION]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.SET_NEW_EVIDENCE_ENTRY]: (state, { payload }) => {

    const { id, classification } = payload;
    delete payload.id;

    const
      targetDataName = classification === TEXTS.germline
        ? "germline_evidence"
        : "somatic_evidence",

      targetData = { ...state[targetDataName], [id]: payload };
    return {
      ...state,
      [targetDataName]: targetData
    };
  },

  [actionsTypes.SET_EDITED_EVIDENCE_ENTRY]: (state, { payload }) => {
    const { id, classification } = payload;
    delete payload.id;

    const
      targetDataName = classification === TEXTS.germline
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
      { ids: {evidenceId } , data:{classification} } = payload,

      targetDataName = classification === TEXTS.germline
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

});

export default variantPageReducer;
