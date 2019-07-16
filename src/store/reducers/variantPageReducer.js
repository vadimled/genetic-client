import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  variantData: {
    gene: "A1CF",
    protein: "p.Leu2303Leu",
    chrPosition: "chr1:45797505",
    alleleChange: "G > GA",
    ref: "G",
    alt: "GA",
    dbSNP: "rs3219489",
    clinvarVariationId: "516652",
    coding: "c.7634+21_7634+22insTCATCATGAGAGAAGGTGAGTGGGGCTCTCAAAGTG",
    transcript: "NM_110509.1",
    COSMIC: "COSM4142157",
    variant: "D479D", // ????????
    AminoAcidChange: "I1564ISLKN",
    DamagingScore: "TTCATGAGAGAAGGTGAGTGG"
  },
  dataId: "k5wp5amernh84pvsygjji9ljz", // null,
  type: "somatic",
  valueSomatic: "unclassified",
  valueGermline: "unclassified",
  externalResources: []
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_GENE]: (state, { payload }) => {
    return {
      ...state,
      dataId: payload
    };
  },

  [actionsTypes.SET_VARIANT_CLASSIFICATION]: (state, { payload }) => {
    const { value, name } = payload;
    return {
      ...state,
      valueSomatic: name === "somatic" ? value : state.valueSomatic,
      valueGermline: name === "germline" ? value : state.valueGermline
    };
  },

  [actionsTypes.SET_VARIANT_ZYGOSITY_TYPE]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    };
  },

  [actionsTypes.SET_EXTERNAL_RESOURCES]: (state, { payload }) => {
    return {
      ...state,
      externalResources: payload
    };
  }
});

export default variantPageReducer;
