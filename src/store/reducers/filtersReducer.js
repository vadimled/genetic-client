import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';
// import { FILTERS } from "Utils/constants";

const initialState = {
  // [FILTERS.type]: null,
  // [FILTERS.variantClass]: [],
  // [FILTERS.hotSpot]: null,
  // [FILTERS.snp]: null,
  // [FILTERS.roi]: null,
  // [FILTERS.gnomId]: null,

  type: null,
  variantClass: [],
  hotSpot: null,
  snp: null,
  roi: null,
  gnomId: null,
  // data: Array.from(new Array(15000), (x, i)=> (
  //   {
  //     gene: "PDG" + i,
  //     chrPosition: "Chr5 : 236628",
  //     transcript: "NM_005591.3",
  //     exon: 1,
  //     alleleChange: "C > T",
  //     coding: "gCc/gTc",
  //     protein: "A449V",
  //     vaf: 1,
  //     zygosity: "Hetro",
  //     variantClass: "",
  //     coverage: 20,
  //     hotSpot: false,
  //     roi: true
  //   }
  // ))

  data: [
    {
      gene: "SDHA",
      chrPosition: "Chr5 : 236628",
      transcript: "NM_005591.3",
      exon: 7,
      alleleChange: "C > T",
      coding: "gCc/gTc",
      protein: "A449V",
      vaf: 33,
      zygosity: "Hom",
      variantClass: "path",
      coverage: 300,
      hotSpot: true,
      roi: false,
    },
    {
      gene: "PDG",
      chrPosition: "Chr5 : 236628",
      transcript: "NM_005591.3",
      exon: 1,
      alleleChange: "C > T",
      coding: "gCc/gTc",
      protein: "A449V",
      vaf: 1,
      zygosity: "Hetro",
      variantClass: "lath",
      coverage: 20,
      hotSpot: false,
      roi: true
    },
    {
      gene: "FBX044",
      chrPosition: "Chr5 : 236628",
      transcript: "NM_005591.3",
      exon: 1,
      alleleChange: "C > T",
      coding: "gCc/gTc",
      protein: "A449V",
      vaf: 1,
      zygosity: "Hetro",
      variantClass: "lben",
      coverage: 20,
      hotSpot: false,
      roi: false
    }
  ]
};



const filtersReducer = createReducer(initialState, {
  [actionsTypes.SET_FILTER_TYPE]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      type: value
    };
  },

  [actionsTypes.SET_FILTER_VARIANT_CLASS]: (state, {payload}) => {
    const { value } = payload;
    let classes = state.variantClass.slice();

    // push or remove value from variantClass
    const index = classes.indexOf(value);
    if (index === -1) {
      classes.push(value);
    } else {
      classes.splice(index, 1);
    }

    return {
      ...state,
      variantClass: classes
    };
  },

  [actionsTypes.SET_FILTER_HOT_SPOT]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      hotSpot: value
    };
  },

  [actionsTypes.SET_FILTER_SNP]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      snp: value
    };
  },

  [actionsTypes.SET_FILTER_ROI]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      roi: value
    };
  },

  [actionsTypes.SET_FILTER_GNOM_ID]: (state, {payload}) => {
    const { value } = payload;
    return {
      ...state,
      gnomId: value
    };
  },

  // [actionsTypes]


});

export default filtersReducer;
