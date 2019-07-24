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
  variantClass: "variantClass",
  somaticClass: "somaticClass",
  hotSpot: "hotSpot",
  snp: "snp",
  roi: "roi",
  vaf: "vaf",
  gnomAD: "gnomAD",
  cancerDBs: "canserBDs",
  searchText: "searchText"
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
  seeLess: "See Less"
};

export const LIMITS = {
  maxNotesChar: 150
};

export const MUTATION = {
  dna: "DNA" ,
  rna: "RNA" ,
  agena: "Agena"
};

export const ZYGOSITY_OPTIONS = [
  { value: "homo", label: "Homo" },
  { value: "hetro", label: "Hetro" },
  { value: "hemi", label: "Hemi" },
  { value: "insignificant", label: "Insignificant" },
  { value: "somatic", label: "Somatic" },
  { value: "notReal", label: "Not-Real" },
  { value: "unknown", label: "Unknown" }
];

export const VARIANT_CLASS = {
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

export const SOMATIC_CLASS = {
  unclassified: {
    value: "unclassified",
    label: "Unclassified",
    tagColor: TAG_COLORS.white
  },
  tier1: { value: "tier1", label: "Tier1", tagColor: TAG_COLORS.red },
  tier2: { value: "tier2", label: "Tier2", tagColor: TAG_COLORS.orange },
  tier3: { value: "tier3", label: "Tier3", tagColor: TAG_COLORS.yellow },
  tier4: { value: "tier4", label: "Tier4", tagColor: TAG_COLORS.blueLight }
};

export const GERMLINE_VARIANT_CLASS_OPTIONS = [
  { ...VARIANT_CLASS.unclassified },
  { ...VARIANT_CLASS.path },
  { ...VARIANT_CLASS.lpath },
  { ...VARIANT_CLASS.vus },
  { ...VARIANT_CLASS.lben },
  { ...VARIANT_CLASS.ben }
];

export const SOMATIC_VARIANT_CLASS_OPTIONS = [
  { ...SOMATIC_CLASS.unclassified },
  { ...SOMATIC_CLASS.tier1 },
  { ...SOMATIC_CLASS.tier2 },
  { ...SOMATIC_CLASS.tier3 },
  { ...SOMATIC_CLASS.tier4 }
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
  PENDING: { value: "PENDING", label: "Pending", iconImg: ImgCircleClock }
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
