import ImgCircleOK from "Assets/circle-ok.svg";
import ImgCircleX from "Assets/circle-x.svg";
import ImgCircleClock from "Assets/circle-clock.svg";

export const TAG_COLORS = {
  white: "#fff",
  red: "#F11E2C",
  yellow: "#FED955",
  blue: "#559FD5",
  blueLight: "#7CD8FF",
  orange: "#FF835C"
};

export const FILTERS = {
  type: "type",
  variantClassGermline: "variantClassGermline",
  variantClassSomatic: "variantClassSomatic",
  hotSpot: "hotSpot",
  snp: "snp",
  roi: "roi",
  vaf: "vaf",
  gnomAD: "gnomAD",
  cancerDBs: "canserBDs",
  searchText: "searchText",
  zygosity: "zygosity",
  effect: "effect",
};

export const TEXTS = {
  addNote: "Add a note",
  cancel: "Cancel",
  done: "Done",
  somatic: "somatic",
  germline: "germline",
  somaticUp: "Somatic",
  germlineUp: "Germline",
  externalResources: "External resources",
  seeAll: "See All",
  seeLess: "See Less",
  currentZygosity: "Current zygosity:",
  unclassified: "Unclassified",
  evidence: "evidence",
  evidenceUp: "Evidence",
  add: "add",
  delete: "delete",
  edit: "edit",
  editEvidence: "Edit evidence",
  addEvidence: "Add evidence",
  goBack: "< Go back",
  variantPage: "variantPage",
  singleTestPage: "singleTestPage",
  testsPage: "testsPage",
  searchPlaceholder: "Search for Gene, Coding or Protein"
};

export const LIMITS = {
  maxNotesChar: 150
};

export const MUTATION = {
  dna: "DNA",
  rna: "RNA",
  agena: "Agena"
};

export const FILTERS_CONFIGURATIONS = [
  { value: "defaultFilters", label: "Default filters" }
];

export const SORTING_CONFIGURATIONS = [
  { value: "defaultSorting", label: "Default Sorting" }
];

export const SORTING_ORDER = {
  ascending: "ascending",
  descending: "descending",
  default: "default"
};

export const ZYGOSITY_OPTIONS = [
  { value: "homo", label: "Homo" },
  { value: "hetero", label: "Hetero" },
  { value: "hemi", label: "Hemi" },
  { value: "insignificant", label: "Insignificant" },
  { value: "somatic", label: "Somatic" },
  { value: "notReal", label: "Not-Real" },
  { value: "unknown", label: "Unknown" },
  { value: "notDefined", label: "Not Defined" }
];
/* Germline - for Homo, Hetero and Hemi.
  Somatic - for Somatic.
  Insignificant - for Insignificant.
  Unkown - for Unkown.
  Not-Real - for Not-Real.
*/

export const ZYGOSITY_TYPES = [
  { value: "homo", label: "Germline" },
  { value: "hetero", label: "Germline" },
  { value: "hemi", label: "Germline" },
  { value: "insignificant", label: "Insignificant" },
  { value: "somatic", label: "Somatic" },
  { value: "notReal", label: "Not-Real" },
  { value: "unknown", label: "Unknown" }
];

export const ZYGOSITY = {
  homo: { value: "homo", label: "Homo" },
  hetero: { value: "hetero", label: "Hetero" },
  insignificant: { value: "insignificant", label: "Insignificant" },
  somatic: { value: "somatic", label: "Somatic" },
  notReal: { value: "notReal", label: "Not Real" },
  unknown: { value: "unknown", label: "Unknown" },
  hemi: { value: "hemi", label: "Hemi" },
  notDefined: { value: "notDefined", label: "Not Defined" }
};

export const EFFECT = {
  high: { value: "high", label: "High" },
  modifier: { value: "modifier", label: "Modifier" },
  insignificant: { value: "insignificant", label: "Insignificant" },
  moderate: { value: "moderate", label: "Moderate" },
  low: { value: "low", label: "Low" },
};

export const VARIANT_CLASS_GERMLINE = {
  unclassified: {
    value: "unclassified",
    label: "Unclassified",
    tagColor: TAG_COLORS.white
  },
  path: { value: "path", label: "PATH", tagColor: TAG_COLORS.red },
  lpath: { value: "lpath", label: "LPATH", tagColor: TAG_COLORS.orange },
  vus: { value: "vus", label: "VUS", tagColor: TAG_COLORS.yellow },
  ben: { value: "ben", label: "BEN", tagColor: TAG_COLORS.blue },
  lben: { value: "lben", label: "LBEN", tagColor: TAG_COLORS.blueLight }
};

export const VARIANT_CLASS_SOMATIC = {
  unclassified: {
    value: "unclassified",
    label: "Unclassified",
    tagColor: TAG_COLORS.white
  },
  tier1: { value: "tier1", label: "Tier1", tagColor: TAG_COLORS.red },
  tier2: { value: "tier2", label: "Tier2", tagColor: TAG_COLORS.orange },
  tier3: { value: "tier3", label: "Tier3", tagColor: TAG_COLORS.yellow },
  tier4: { value: "tier4", label: "Tier4", tagColor: TAG_COLORS.blue }
};

export const GERMLINE_VARIANT_CLASS_OPTIONS = [
  { ...VARIANT_CLASS_GERMLINE.unclassified },
  { ...VARIANT_CLASS_GERMLINE.path },
  { ...VARIANT_CLASS_GERMLINE.lpath },
  { ...VARIANT_CLASS_GERMLINE.vus },
  { ...VARIANT_CLASS_GERMLINE.lben },
  { ...VARIANT_CLASS_GERMLINE.ben }
];

export const SOMATIC_VARIANT_CLASS_OPTIONS = [
  { ...VARIANT_CLASS_SOMATIC.unclassified },
  { ...VARIANT_CLASS_SOMATIC.tier1 },
  { ...VARIANT_CLASS_SOMATIC.tier2 },
  { ...VARIANT_CLASS_SOMATIC.tier3 },
  { ...VARIANT_CLASS_SOMATIC.tier4 }
];

export const GNOM_AD = {
  na: "na",
  veryRare: "veryRare",
  rare: "rare",
  common: "common"
};

export const CONFIRMATION_VALUES = {
  CONFIRMED: { value: "CONFIRMED", label: "Confirmed", iconImg: ImgCircleOK },
  NOT_CONFIRMED: {
    value: "NOT_CONFIRMED",
    label: "Not Confirmed",
    iconImg: ImgCircleX
  },
  PENDING: { value: "PENDING", label: "Pending", iconImg: ImgCircleClock },
  // UNCHECK: { value: "UNCHECK", label: "Uncheck", iconImg: "" }
};

export const ALERT_STATUSES = {
  error: "error",
  warning: "warning",
  success: "success",
  default: "default"
};

export const TUMOR_TYPE = [
  "adenoma",
  "carcinoma",
  "hyperplasia",
  "neoplasm",
  "pheochromocytoma",
  "adenocarcinoma",
  "dysplasia-carcinoma_in_situ",
  "osteosarcoma",
  "chondrosarcoma",
  "Ewings_sarcoma",
  "Askins_tumour",
  "desmoplastic_fibroma",
  "fibrosarcoma",
  "Overgrowth_syndrome",
  "sarcoma",
  "odontoameloblastoma",
  "odontogenic_keratocyst",
  "adenosis",
  "fibroadenoma",
  "fibrosis",
  "papilloma",
  "phyllodes_tumour",
  "glioma",
  "astroblastoma",
  "ependymoma",
  "gliosarcoma",
  "oligoastrocytoma",
  "gangliocytoma",
  "ganglioglioma",
  "anaplastic",
  "desmoplastic",
  "medullomyoblastoma",
  "astrocytoma",
  "liponeurocytoma",
  "angiocentric",
  "oligodendroglioma",
  "ependymoblastoma",
  "endometriosis",
  "malignant_melanoma",
  "retinoblastoma",
  "melanocytoma",
  "gastrinoma",
  "insulinoma",
  "choriocarcinoma",
  "teratoma",
  "yolk_sac_tumour",
  "non_seminoma",
  "seminoma",
  "Burkitt_lymphoma",
  "Hodgkin_lymphoma",
  "lymphoma",
  "acute_myeloid_leukaemia (AML)",
  "chronic_myeloid_leukaemia (CML)",
  "myelofibrosis",
  "acute_lymphoblastic_leukaemia (ALL)",
  "chronic_lymphocytic_leukaemia (CLL)",
  "plasmacytoma",
  "myeloma",
  "erythrocytosis",
  "lymphangioma",
  "Wilms_tumour",
  "angiomyoadenomatous_tumour",
  "angiomyolipoma",
  "cyst",
  "cystic_nephroma",
  "nephroblastoma",
  "serrated_polyp",
  "aberrant_crypt_foci",
  "carcinoid-endocrine_tumour",
  "dysplasia",
  "hamartoma",
  "carcinosarcoma",
  "dysplastic",
  "hyperplastic",
  "hepatoblastoma",
  "non_small_cell_carcinoma",
  "small_cell_carcinoma",
  "blastoma",
  "large_cell_carcinoma",
  "metaplasia",
  "adenofibroma",
  "endometrioid",
  "Krukenberg_tumour",
  "granulosa_cell_tumour",
  "gynandroblastoma",
  "somatostatinoma",
  "vipoma",
  "acinar-ductal_metaplasia",
  "acute_pancreatitis",
  "mesothelioma",
  "craniopharyngioma",
  "chorioangioma",
  "adenolymphoma_(Warthin_tumour)",
  "benign_melanocytic_nevus",
  "epidermal_nevus",
  "adnexal_tumour",
  "thymoma",
  "adenoma-nodule-goitre",
  "chronic_thyroiditis",
  "histiocytoma"
];

export const TUMOR_LOCATION = [
  "adrenal_gland",
  "bile_duct",
  "gallbladder",
  "bone",
  "breast",
  "central_nervous_system (Brain)",
  "cervix",
  "endometrium",
  "eye",
  "fallopian_tube",
  "gastrointestinal_tract",
  "genital_tract",
  "haematopoietic_and_lymphoid_tissue (Blood)",
  "kidney",
  "large_intestine",
  "liver",
  "lung",
  "oesophagus",
  "ovary",
  "pancreas",
  "parathyroid",
  "penis",
  "pericardium",
  "pituitary",
  "placenta",
  "pleura",
  "prostate",
  "salivary_gland",
  "skin",
  "small_intestine",
  "testis",
  "thymus",
  "thyroid",
  "bladder",
  "vagina",
  "vulva",
  "Syndrome",
  "Occult Primary",
  "Stomach",
  "Head and Neck",
  "Colon",
  "Uterus",
  "Lymph",
  "Cervical",
  "Endo-Cervical"
];

export const PRIORITY = {
  path: 13,
  tier1: 12,
  lpath: 11,
  tier2: 10,
  vus: 9,
  tier3: 8,
  unclassified: 7,
  lben: 6,
  unknown: 5,
  insignificant: 4,
  notReal: 3,
  ben: 2,
  tier4: 1
};
export const CHROMOSOME_OPTIONS = [
  ...[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22
  ].map(i => ({
    value: i.toString(),
    label: i.toString()
  })),
  { value: "X", label: "X" },
  { value: "Y", label: "Y" }
];

export const ALLELE_TYPES = {
  change: { value: "change", label: "Change" },
  insertion: { value: "insertion", label: "Insertion" },
  deletion: { value: "deletion", label: "Deletion" }
};

export const VALIDATION_FAILD_FIELDS = {
  gene: "gene",
  chromosome: "chromosome",
  position: "position",
  alleleReference: "alleleReference",
  alleleAlternative: "alleleAlternative",
  loadHgvs: "loadHgvs",
  primer: "primer",
  fragmentSize: "fragmentSize"
};

export const EC_VALUES = {
  publications: "publications",
  frequency: "frequency",
  silicoPredictor: "silicoPredictor",
  variantDB: "variantDB",
  drug: "drug",
  clinicalTrials: "clinicalTrials",
  indelNonsense: "indelNonsense",
  mechanismDisease: "mechanismDisease",
  segregation: "segregation",
  proteinStructure: "proteinStructure",
  other: "other"
};

export const EVIDENCE_CATEGORIES_OPTIONS = [
  { value: EC_VALUES.publications, label: "Publications" },
  { value: EC_VALUES.frequency, label: "Frequency" },
  { value: EC_VALUES.silicoPredictor, label: "In Silico predictor" },
  { value: EC_VALUES.variantDB, label: "Variant DB’s" },
  { value: EC_VALUES.drug, label: "Drug" },
  { value: EC_VALUES.clinicalTrials, label: "Clinical Trials" },
  { value: EC_VALUES.indelNonsense, label: "Indel/Nonsense" },
  { value: EC_VALUES.mechanismDisease, label: "Mechanism of disease" },
  { value: EC_VALUES.segregation, label: "Segregation" },
  { value: EC_VALUES.proteinStructure, label: "Protein structure" },
  { value: EC_VALUES.other, label: "Other" }
];

export const EVIDENCE_LEVEL_OPTIONS = [
  {
    value: "PVS1",
    label: "PVS1",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.indelNonsense]
  },
  {
    value: "PS1",
    label: "PS1",
    type: TEXTS.germline,
    category: [
      EC_VALUES.publications,
      EC_VALUES.variantDB,
      EC_VALUES.mechanismDisease
    ]
  },
  {
    value: "PS2",
    label: "PS2",
    type: TEXTS.germline,
    category: [
      EC_VALUES.publications,
      EC_VALUES.variantDB,
      EC_VALUES.segregation
    ]
  },
  {
    value: "PS3",
    label: "PS3",
    type: TEXTS.germline,
    category: [EC_VALUES.publications]
  },
  {
    value: "PS4",
    label: "PS4",
    type: TEXTS.germline,
    category: [EC_VALUES.publications]
  },
  {
    value: "PM1",
    label: "PM1",
    type: TEXTS.germline,
    category: [
      EC_VALUES.publications,
      EC_VALUES.proteinStructure,
      EC_VALUES.mechanismDisease
    ]
  },
  {
    value: "PM2",
    label: "PM2",
    type: TEXTS.germline,
    category: [EC_VALUES.frequency]
  },
  {
    value: "PM3",
    label: "PM3",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.mechanismDisease]
  },
  {
    value: "PM4",
    label: "PM4",
    type: TEXTS.germline,
    category: [EC_VALUES.indelNonsense]
  },
  {
    value: "PM5",
    label: "PM5",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.mechanismDisease]
  },
  {
    value: "PM6",
    label: "PM6",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.segregation]
  },
  {
    value: "PP1",
    label: "PP1",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.segregation]
  },
  {
    value: "PP2",
    label: "PP2",
    type: TEXTS.germline,
    category: [EC_VALUES.mechanismDisease]
  },
  {
    value: "PP3",
    label: "PP3",
    type: TEXTS.germline,
    category: [EC_VALUES.silicoPredictor]
  },
  {
    value: "PP4",
    label: "PP4",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.other]
  },
  {
    value: "BP7",
    label: "BP7",
    type: TEXTS.germline,
    category: [EC_VALUES.silicoPredictor]
  },
  {
    value: "BP5",
    label: "BP5",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.mechanismDisease]
  },
  {
    value: "BP4",
    label: "BP4",
    type: TEXTS.germline,
    category: [EC_VALUES.silicoPredictor]
  },
  {
    value: "BP3",
    label: "BP3",
    type: TEXTS.germline,
    category: [EC_VALUES.indelNonsense]
  },
  {
    value: "BP2",
    label: "BP2",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.mechanismDisease]
  },
  {
    value: "BP1",
    label: "BP1",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.mechanismDisease]
  },
  {
    value: "BS4",
    label: "BS4",
    type: TEXTS.germline,
    category: [EC_VALUES.publications, EC_VALUES.segregation]
  },
  {
    value: "BS3",
    label: "BS3",
    type: TEXTS.germline,
    category: [EC_VALUES.publications]
  },
  {
    value: "BS2",
    label: "BS2",
    type: TEXTS.germline,
    category: [EC_VALUES.frequency]
  },
  {
    value: "BS1",
    label: "BS1",
    type: TEXTS.germline,
    category: [EC_VALUES.frequency]
  },
  {
    value: "BA1",
    label: "BA1",
    type: TEXTS.germline,
    category: [EC_VALUES.frequency]
  },
  { value: "A1", label: "A1", type: TEXTS.somatic },
  { value: "A2", label: "A2", type: TEXTS.somatic },
  { value: "B", label: "B", type: TEXTS.somatic },
  { value: "C1", label: "C1", type: TEXTS.somatic },
  { value: "C2", label: "C2", type: TEXTS.somatic },
  { value: "D", label: "D", type: TEXTS.somatic },
  { value: "none", label: "None", type: TEXTS.somatic }
];

export const LEVEL_COLOR = {
  PVS1: "#D70513",
  PS1: "#F11E2C",
  PS2: "#F11E2C",
  PS3: "#F11E2C",
  PS4: "#F11E2C",
  PM1: "#FF835C",
  PM2: "#FE784D",
  PM3: "#FF6F41",
  PM4: "#FF5F2C",
  PM5: "#F94E18",
  PM6: "#ED3B03",
  PP1: "#FED955",
  PP2: "#FDD23B",
  PP3: "#FAC714",
  PP4: "#F1BD05",
  BP7: "#26D17F",
  BP5: "#16AD64",
  BP4: "#079F56",
  BP3: "#048B4A",
  BP2: "#01763E",
  BP1: "#01552D",
  BS4: "#21A0FA",
  BS3: "#0E8CE6",
  BS2: "#067ED3",
  BS1: "#026AB5",
  BA1: "#2D42FF",
  A1: "#D70513",
  A2: "#D70513",
  B: "#F11E2C",
  C1: "#FF835C",
  C2: "#FF835C",
  D: "#FED955",
  None: "#424D55"
};


export const EXTERNAL_RESOURCES_GERMLINE = [
  "UCSC",
  "ClinVar",
  "ICGC",
  "OncoKB",
  "PMKB",
  "Uniport",
  "Varsome",
  "dnSNP",
  "gnomAD",
  "Pubmed",
  "Google Scholar",
  "Damaging score"
];

export const EXTERNAL_RESOURCES_SOMATIC = [
  "UCSC",
  "ClinVar",
  "ICGC",
  "OncoKB",
  "PMKB",
  "Uniport",
  "Varsome",
  "dnSNP",
  "gnomAD",
  "COSMIC",
  "Pubmed",
  "Google Scholar",
  "Damaging score"
];

export const ROUTES = {
  isVariantPageRegex :"\\/tests\\/.+\\/variants\\/.+",
  isSingleTestPageRegex :"\\/tests\\/?\\w+$",
  isRootRegex: "^/$"
};

export const PANEL_TYPES = {
  solid: 'solid',
  hema: 'hema',
  risk: 'risk'
};

export const DEFAULT_FILTERS = {
  [PANEL_TYPES.solid]: {
    [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
    [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
    [FILTERS.gnomAD]: ['na', 'veryRare'],
    [FILTERS.vaf]: [1, 100],
    [FILTERS.snp]: [],
    [FILTERS.roi]: [],
    [FILTERS.cancerDBs]: [],
    [FILTERS.zygosity]: [],
    [FILTERS.effect]: [],
  },
  [PANEL_TYPES.hema]: {
    [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
    [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
    [FILTERS.gnomAD]: ['na', 'veryRare'],
    [FILTERS.vaf]: [1, 100],
    [FILTERS.snp]: [],
    [FILTERS.roi]: [],
    [FILTERS.cancerDBs]: [],
    [FILTERS.zygosity]: [],
    [FILTERS.effect]: [],
  },
  [PANEL_TYPES.risk]: {
    [FILTERS.variantClassGermline]: ['unclassified', 'path', 'lpath', 'vus', 'lben'],
    [FILTERS.variantClassSomatic]: ['unclassified', 'tier1', 'tier2', 'tier3'],
    [FILTERS.vaf]: [30, 100],
    [FILTERS.snp]: [],
    [FILTERS.roi]: [],
    [FILTERS.cancerDBs]: [],
    [FILTERS.zygosity]: [],
    [FILTERS.effect]: [],
  }
};
