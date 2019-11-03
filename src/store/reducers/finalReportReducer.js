import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  actionableVariants: [
    {
      id: "5d511f574651a20020a0ab52",
      variant_id: "1d5bcc6608589e00124bfd76",
      mutation_type: "dna",
      gene: "MTHFR",
      vaf: 48,
      protein: "p.Glu429Ala",
      coding: "c.1305C>T" ,
      zygosity: "homo",
      germline_class: "lpath",
      somatic_class: "tier2",
      is_marked: false,
      clinical_trials: true,
      approved_drug_same_indication: "Gedatolisib",
      approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
      is_expanded_interpretation_approved: false,
      is_therapies_approved: false,
      is_clinical_trials_approved: false
    },
    {
      id: "5d511f574651a20020a0ab50",
      variant_id: "1d5bcc6608589e00124bfd76",
      mutation_type: "dna",
      gene: "RFHTM",
      vaf: 86,
      protein: "p.fRu429Ala",
      coding: "c.1305C>T" ,
      germline_class: "lpath",
      somatic_class: "tier4",
      is_marked: false,
      clinical_trials: true,
      approved_drug_same_indication: "Gedatolisib",
      approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
      is_expanded_interpretation_approved: false,
      is_therapies_approved: false,
      is_clinical_trials_approved: false,
      zygosity: "somatic"
    },
    {
      mutation_type: "cnv",
      chr: "chr9",
      confidence: "Medium",
      copiesCNVCov: 10,
      copiesPanelizer: 9,
      end: 90638863,
      gene: "ACSS3",
      gsid: "8bcxvk3suud55gfutdl4xdpke",
      id: "1v57djma4p",
      key: 0,
      num_amplicons: 12,
      range: {start: 367693, end: 90638863},
      start: 367693,
      status: "Amplification",
      test_id: "j2ntz6mr0jy4g78kdvqkhm6x3",
      weighted_avg: 1740.772085605
    },
    {
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9h991hfs",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },
    {
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9h991hf",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },


    {
      id: "5d511f574651a20020a0ab55",
      variant_id: "1d5bcc6608589e00124bfd76",
      mutation_type: "dna",
      gene: "MACSS3THFR",
      vaf: 41,
      protein: "p.Glu429Ala",
      coding: "c.1305C>T" ,
      germline_class: "path",
      somatic_class: "tier2",
      is_marked: false,
      clinical_trials: true,
      approved_drug_same_indication: "Gedatolisib",
      approved_drug_other_indication: "Palbociclib\n" + "Gedatolisib",
      is_expanded_interpretation_approved: false,
      is_therapies_approved: false,
      is_clinical_trials_approved: false,
      zygosity: "homo",
    },{
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yvr0enn7z7s9h991hfs",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvry5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },


    {
      mutation_type: "dna",
      alleleChange: "T > G",
      alleleChangeLong: "T > G",
      alt: "G",
      chr: "chr1",
      chrPosition: "chr1:11854476",
      clinvar: 3521,
      coding: "c.1286A>C",
      codingLong: "c.1286A>C",
      cosmic: (2)[("COSM3735923", "COSM3735924")],
      coverage: 605,
      db_snp: "rs1801131",
      dp: 605.666666667,
      effect: "MODERATE",
      exon: undefined,
      gene: "MTHFR",
      gnomAD: null,
      hotSpot: undefined,
      id: "5d94675214ac3f001r7818469",
      isAdded: undefined,
      key: "5d94675214ac3f0017818469",
      notes: undefined,
      omim: false,
      percentageVariants: 0.482976187597,
      position: 11854476,
      priority: 8,
      protein: "p.Glu429Ala",
      proteinWholly: "p.Glu429Ala",
      ref: "T",
      roi: true,
      snp: true,
      status: "UNCHECK",
      transcript: "NM_005957.4",
      vaf: 48,
      variantClassGermline: "path",
      variantClassSomatic: "vus",
      zygosity: "homo"
    },{
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9h991hrfs5",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },
    {
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9h9951hfsy",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },

    {
      mutation_type: "dna",
      alleleChange: "T > G",
      alleleChangeLong: "T > G",
      alt: "G",
      chr: "chr1",
      chrPosition: "chr1:11854476",
      clinvar: 3521,
      coding: "c.1286A>C",
      codingLong: "c.1286A>C",
      cosmic: (2)[("COSM3735923", "COSM3735924")],
      coverage: 605,
      db_snp: "rs1801131",
      dp: 605.666666667,
      effect: "MODERATE",
      exon: undefined,
      gene: "MTHFR",
      gnomAD: null,
      hotSpot: undefined,
      id: "5d94675214ac3f0017818469t",
      isAdded: undefined,
      key: "5d94675214ac3f0017818469t",
      notes: undefined,
      omim: false,
      percentageVariants: 0.482976187597,
      position: 11854476,
      priority: 8,
      protein: "p.Glu429Ala",
      proteinWholly: "p.Glu429Ala",
      ref: "T",
      roi: true,
      snp: true,
      status: "UNCHECK",
      transcript: "NM_005957.4",
      vaf: 48,
      variantClassGermline: "path",
      variantClassSomatic: "vus",
      zygosity: "homo"
    },{
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9ht991hfs",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzitnzy",
      weighted_avg: 6421.221668522
    },

    {
      mutation_type: "dna",
      alleleChange: "T > G",
      alleleChangeLong: "T > G",
      alt: "G",
      chr: "chr1",
      chrPosition: "chr1:11854476",
      clinvar: 3521,
      coding: "c.1286A>C",
      codingLong: "c.1286A>C",
      cosmic: (2)[("COSM3735923", "COSM3735924")],
      coverage: 605,
      db_snp: "rs1801131",
      dp: 605.666666667,
      effect: "MODERATE",
      exon: undefined,
      gene: "MTHFR",
      gnomAD: null,
      hotSpot: undefined,
      id: "5d94675214ac3f0017818469",
      isAdded: undefined,
      key: "5d94675214ac3f0017818469",
      notes: undefined,
      omim: false,
      percentageVariants: 0.482976187597,
      position: 11854476,
      priority: 8,
      protein: "p.Glu429Ala",
      proteinWholly: "p.Glu429Ala",
      ref: "T",
      roi: true,
      snp: true,
      status: "UNCHECK",
      transcript: "NM_005957.4",
      vaf: 48,
      variantClassGermline: "path",
      variantClassSomatic: "vus",
      zygosity: "homo"
    },{
      mutation_type: "cnv",
      chr: "chr12",
      confidence: "High",
      copiesCNVCov: 5,
      copiesPanelizer: 5,
      end: 18740479,
      gene: "ACSS3",
      gsid: "da4syy0yv0enn7z7s9h991hfs",
      id: "bptwpd79an",
      key: 1,
      num_amplicons: 4,
      range: {start: 257691, end: 18740479},
      start: 257691,
      status: "Deletion",
      test_id: "4kfub3vfut4bvy5r3j7yzinzy",
      weighted_avg: 6421.221668522
    },

    {
      mutation_type: "dna",
      alleleChange: "T > G",
      alleleChangeLong: "T > G",
      alt: "G",
      chr: "chr1",
      chrPosition: "chr1:11854476",
      clinvar: 3521,
      coding: "c.1286A>C",
      codingLong: "c.1286A>C",
      cosmic: (2)[("COSM3735923", "COSM3735924")],
      coverage: 605,
      db_snp: "rs1801131",
      dp: 605.666666667,
      effect: "MODERATE",
      exon: undefined,
      gene: "MTHFR",
      gnomAD: null,
      hotSpot: undefined,
      id: "5d94675214ac3f0017818469",
      isAdded: undefined,
      key: "5d94675214ac3f0017818469",
      notes: undefined,
      omim: false,
      percentageVariants: 0.482976187597,
      position: 11854476,
      priority: 8,
      protein: "p.Glu429Ala",
      proteinWholly: "p.Glu429Ala",
      ref: "T",
      roi: true,
      snp: true,
      status: "UNCHECK",
      transcript: "NM_005957.4",
      vaf: 48,
      variantClassGermline: "path",
      variantClassSomatic: "vus",
      zygosity: "homo"
    },
    {
      mutation_type: "dna",
      alleleChange: "T > G",
      alleleChangeLong: "T > G",
      alt: "G",
      chr: "chr1",
      chrPosition: "chr1:11854476",
      clinvar: 3521,
      coding: "c.1286A>C",
      codingLong: "c.1286A>C",
      cosmic: (2)[("COSM3735923", "COSM3735924")],
      coverage: 605,
      db_snp: "rs1801131",
      dp: 605.666666667,
      effect: "MODERATE",
      exon: undefined,
      gene: "MTHFR",
      gnomAD: null,
      hotSpot: undefined,
      id: "5d94675214ac3f0045828469t",
      isAdded: undefined,
      key: "5d94675214ac3f6017828469t",
      notes: undefined,
      omim: false,
      percentageVariants: 0.482976187597,
      position: 11854476,
      priority: 8,
      protein: "p.Glu429Ala",
      proteinWholly: "p.Glu429Ala",
      ref: "T",
      roi: true,
      snp: true,
      status: "UNCHECK",
      transcript: "NM_005957.4",
      vaf: 88,
      variantClassGermline: "vus",
      variantClassSomatic: "vus",
      zygosity: "hetero"
    }
  ],
  mutation_type: null
};

const finalReportReducer = createReducer(initialState, {

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

    let data = Object.assign(state?.dna_variants);

    let selectedVariants = [...state?.selectedVariants];

    selectedVariants.push(item.id);

    console.log("--selectedVariants: ", selectedVariants);

    data[item.id].selected = value;

    return {
      ...state,
      dna_variants: {...data},
      selectedVariants: [...selectedVariants]
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {

    let data = state?.dna_variants;

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
      dna_variants: payload
    };
  },

});

export default finalReportReducer;
