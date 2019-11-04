import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
// import remove from "lodash.remove";

const initialState = {
  serverData: null,
  data: null,
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  // actionableVariants: [
  //   {
  //     id: "5d511f574651a20020a0ab52",
  //     variant_id: "1d5bcc6608589e00124bfd76",
  //     mutation_type: "dna",
  //     gene: "MTHFR",
  //     vaf: 48,
  //     protein: "p.Glu429Ala",
  //     coding: "c.1305C>T" ,
  //     zygosity: "homo",
  //     germline_class: "lpath",
  //     somatic_class: "tier2",
  //     is_marked: false,
  //     clinical_trials: true,
  //     approved_drug_same_indication: "Gedatolisib",
  //     approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
  //     is_expanded_interpretation_approved: false,
  //     is_therapies_approved: false,
  //     is_clinical_trials_approved: false
  //   },
  //   {
  //     id: "5d511f574651a20020a0ab50",
  //     variant_id: "1d5bcc6608589e00124bfd78",
  //     mutation_type: "dna",
  //     gene: "RFHTM",
  //     vaf: 86,
  //     protein: "p.fRu429Ala",
  //     coding: "c.1305C>T" ,
  //     germline_class: "lpath",
  //     somatic_class: "tier4",
  //     is_marked: false,
  //     clinical_trials: true,
  //     approved_drug_same_indication: "Gedatolisib",
  //     approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
  //     is_expanded_interpretation_approved: false,
  //     is_therapies_approved: false,
  //     is_clinical_trials_approved: false,
  //     zygosity: "somatic"
  //   },
  //   {
  //     id: "5d511f574651a20020a0ab55",
  //     variant_id: "1d5bcc6608589e00124bfd70",
  //     mutation_type: "dna",
  //     gene: "MACSS3THFR",
  //     vaf: 41,
  //     protein: "p.Glu429Ala",
  //     coding: "c.1305C>T" ,
  //     germline_class: "path",
  //     somatic_class: "tier2",
  //     is_marked: false,
  //     clinical_trials: true,
  //     approved_drug_same_indication: "Gedatolisib",
  //     approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
  //     is_expanded_interpretation_approved: false,
  //     is_therapies_approved: false,
  //     is_clinical_trials_approved: false,
  //     zygosity: "homo",
  //   },
  //   {
  //     mutation_type: "dna",
  //     alleleChange: "T > G",
  //     alleleChangeLong: "T > G",
  //     alt: "G",
  //     chr: "chr1",
  //     chrPosition: "chr1:11854476",
  //     clinvar: 3521,
  //     coding: "c.1286A>C",
  //     codingLong: "c.1286A>C",
  //     cosmic: (2)[("COSM3735923", "COSM3735924")],
  //     coverage: 605,
  //     db_snp: "rs1801131",
  //     dp: 605.666666667,
  //     effect: "MODERATE",
  //     exon: undefined,
  //     gene: "MTHFR",
  //     gnomAD: null,
  //     hotSpot: undefined,
  //     id: "5d94675214ac3f0017818469",
  //     isAdded: undefined,
  //     key: "5d94675214ac3f0017818469",
  //     notes: undefined,
  //     omim: false,
  //     percentageVariants: 0.482976187597,
  //     position: 11854476,
  //     priority: 8,
  //     protein: "p.Glu429Ala",
  //     proteinWholly: "p.Glu429Ala",
  //     ref: "T",
  //     roi: true,
  //     snp: true,
  //     status: "UNCHECK",
  //     transcript: "NM_005957.4",
  //     vaf: 48,
  //     variantClassGermline: "path",
  //     variantClassSomatic: "vus",
  //     zygosity: "homo"
  //   },
  //
  //   {
  //     mutation_type: "dna",
  //     alleleChange: "T > G",
  //     alleleChangeLong: "T > G",
  //     alt: "G",
  //     chr: "chr1",
  //     chrPosition: "chr1:11854476",
  //     clinvar: 3521,
  //     coding: "c.1286A>C",
  //     codingLong: "c.1286A>C",
  //     cosmic: (2)[("COSM3735923", "COSM3735924")],
  //     coverage: 605,
  //     db_snp: "rs1801131",
  //     dp: 605.666666667,
  //     effect: "MODERATE",
  //     exon: undefined,
  //     gene: "MTHFR",
  //     gnomAD: null,
  //     hotSpot: undefined,
  //     id: "5d94675214ac3f0017818449",
  //     isAdded: undefined,
  //     key: "5d94675214ac3f0017818439",
  //     notes: undefined,
  //     omim: false,
  //     percentageVariants: 0.482976187597,
  //     position: 11854476,
  //     priority: 8,
  //     protein: "p.Glu429Ala",
  //     proteinWholly: "p.Glu429Ala",
  //     ref: "T",
  //     roi: true,
  //     snp: true,
  //     status: "UNCHECK",
  //     transcript: "NM_005957.4",
  //     vaf: 48,
  //     variantClassGermline: "path",
  //     variantClassSomatic: "vus",
  //     zygosity: "homo"
  //   },
  //   {
  //     mutation_type: "dna",
  //     alleleChange: "T > G",
  //     alleleChangeLong: "T > G",
  //     alt: "G",
  //     chr: "chr1",
  //     chrPosition: "chr1:11854476",
  //     clinvar: 3521,
  //     coding: "c.1286A>C",
  //     codingLong: "c.1286A>C",
  //     cosmic: (2)[("COSM3735923", "COSM3735924")],
  //     coverage: 605,
  //     db_snp: "rs1801131",
  //     dp: 605.666666667,
  //     effect: "MODERATE",
  //     exon: undefined,
  //     gene: "MTHFR",
  //     gnomAD: null,
  //     hotSpot: undefined,
  //     id: "5d94675214ac3f0045828469t",
  //     isAdded: undefined,
  //     key: "5d94675214ac3f6017828469t",
  //     notes: undefined,
  //     omim: false,
  //     percentageVariants: 0.482976187597,
  //     position: 11854476,
  //     priority: 8,
  //     protein: "p.Glu429Ala",
  //     proteinWholly: "p.Glu429Ala",
  //     ref: "T",
  //     roi: true,
  //     snp: true,
  //     status: "UNCHECK",
  //     transcript: "NM_005957.4",
  //     vaf: 88,
  //     variantClassGermline: "vus",
  //     variantClassSomatic: "vus",
  //     zygosity: "hetero"
  //   }
  // ],
  actionableVariants: [],
  mutation_type: null
};

const finalReportReducer = createReducer(initialState, {

  [actionsTypes.FETCH_TABLE_DATA_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      serverData: payload
    };
  },

  [actionsTypes.SET_PARSED_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      data: payload
    };
  },

  [actionsTypes.ADD_ROW]: (state, { payload }) => {
    return {
      ...state,
      selectedData: state.selectedData.push(payload)
    };
  },

  [actionsTypes.REMOVE_SELECTED_TABLE_ROW]: (state, { payload }) => {
    console.log(payload);
    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {

    const { item, value } = payload;

    let newData = state?.data;

    newData[item.id].selected = value;

    return {
      ...state,
      data: {...newData},
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {

    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        item.selected = !payload;

      }
    }

    return {
      ...state,
      dna_variants: { ...data }
    };
  },

  [actionsTypes.SET_VARIANTS_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      dna_variants: payload,
      actionableVariants: payload
    };
  },

});

export default finalReportReducer;
