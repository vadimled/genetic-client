import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

/* gene(pin): "A1CF"
chrPosition(pin)
transcript(pin)
exon(pin): 2
alleleChange(pin)
alleleChangeLong(pin): "sghshsfghsfh"
coding(pin)
codingLong(pin): "cAc/gTa/qwertyyuyuiyiyutyutyu"
protein(pin)
vaf(pin): 99
gnomAD(pin): 14
zygosity(pin): ""
variantClass(pin): ""
coverage(pin): 292*/
const initialState = {
  variantData: {
    gene: "A1CF",
    protein: "zaszg",
    chrPosition: "Chr4:236283",
    alleleChange: "G > A",
    coding: "aGc/tCg",
    transcript: "NM_110509.1"
  },
  dataId: "k5wp5amernh84pvsygjji9ljz", // null,
  type: "somatic",
  valueSomatic: "unclassified",
  valueGermline: "unclassified",
  externalResources: [
    {
      title: "Variant DBs",
      UCSC: "https://genome.ucsc.edu/cgi-bin/hgTracks?",
      gnomAD: "https://gnomad.broadinstitute.org/variant/",
      dbSNP: "https://www.ncbi.nlm.nih.gov/snp/?",
      ClinVar: "https://www.ncbi.nlm.nih.gov/clinvar/variation/",
      COSMIC: "https://cancer.sanger.ac.uk/cosmic/mutation/overview?",
      OMIM: "https://www.omim.org/",
      OncoKB: "https://oncokb.org/gene/",
      PMKB: "https://pmkb.weill.cornell.edu/search?",
      Varsome: "https://varsome.com/variant/hg19/",
      ICGC: "https://dcc.icgc.org/q?",
      Uniprot: "https://www.uniprot.org/uniprot/?"
    },
    {
      title: "Publications",
      Pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/?",
      googleScholar: "https://scholar.google.co.il/scholar?"
    },
    {
      title: "In Silico predictors",
      "Damaging score": ""
    }
  ]
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
  }
});

export default variantPageReducer;
