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
  unclassifiedUp: "Unclassified",
  unclassified: "unclassified",
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
  searchPlaceholder: "Search for Gene, Coding or Protein",
  reconfirm: "re-confirm",
  germlineClass:"germline_class",
  somaticClass:"somatic_class",
  noLink: "No link",
  noData: "No data",
  UNCHECK: "UNCHECK",
  System: "System",
  CNV: "cnv",
  geneDescription: "Gene Description",
  variantDescription: "Variant Description"
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
  silicoPredictor: "silico_predictor",
  variantDB: "variant_db",
  drug: "drug",
  clinicalTrials: "clinical_trials",
  indelNonsense: "indel_nonsense",
  mechanismDisease: "mechanism_disease",
  segregation: "segregation",
  proteinStructure: "protein_structure",
  other: "other"
};

export const EVIDENCE_CATEGORIES_OPTIONS = {
  [TEXTS.germline]: [
    { value: EC_VALUES.publications, label: "Publications" },
    { value: EC_VALUES.frequency, label: "Frequency" },
    { value: EC_VALUES.silicoPredictor, label: "In Silico predictor" },
    { value: EC_VALUES.variantDB, label: "Variant DB’s" },
    { value: EC_VALUES.indelNonsense, label: "Indel/Nonsense" },
    { value: EC_VALUES.mechanismDisease, label: "Mechanism of disease" },
    { value: EC_VALUES.segregation, label: "Segregation" },
    { value: EC_VALUES.proteinStructure, label: "Protein structure" },
    { value: EC_VALUES.other, label: "Other" }
  ],
  [TEXTS.somatic]: [
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
  ]
};

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

export const COUNTRIES = [
  { label: 'Afghanistan', value: 'AF' },
  { label: 'Åland Islands', value: 'AX' },
  { label: 'Albania', value: 'AL' },
  { label: 'Algeria', value: 'DZ' },
  { label: 'American Samoa', value: 'AS' },
  { label: 'AndorrA', value: 'AD' },
  { label: 'Angola', value: 'AO' },
  { label: 'Anguilla', value: 'AI' },
  { label: 'Antarctica', value: 'AQ' },
  { label: 'Antigua and Barbuda', value: 'AG' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Armenia', value: 'AM' },
  { label: 'Aruba', value: 'AW' },
  { label: 'Australia', value: 'AU' },
  { label: 'Austria', value: 'AT' },
  { label: 'Azerbaijan', value: 'AZ' },
  { label: 'Bahamas', value: 'BS' },
  { label: 'Bahrain', value: 'BH' },
  { label: 'Bangladesh', value: 'BD' },
  { label: 'Barbados', value: 'BB' },
  { label: 'Belarus', value: 'BY' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Belize', value: 'BZ' },
  { label: 'Benin', value: 'BJ' },
  { label: 'Bermuda', value: 'BM' },
  { label: 'Bhutan', value: 'BT' },
  { label: 'Bolivia', value: 'BO' },
  { label: 'Bosnia and Herzegovina', value: 'BA' },
  { label: 'Botswana', value: 'BW' },
  { label: 'Bouvet Island', value: 'BV' },
  { label: 'Brazil', value: 'BR' },
  { label: 'British Indian Ocean Territory', value: 'IO' },
  { label: 'Brunei Darussalam', value: 'BN' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Burkina Faso', value: 'BF' },
  { label: 'Burundi', value: 'BI' },
  { label: 'Cambodia', value: 'KH' },
  { label: 'Cameroon', value: 'CM' },
  { label: 'Canada', value: 'CA' },
  { label: 'Cape Verde', value: 'CV' },
  { label: 'Cayman Islands', value: 'KY' },
  { label: 'Central African Republic', value: 'CF' },
  { label: 'Chad', value: 'TD' },
  { label: 'Chile', value: 'CL' },
  { label: 'China', value: 'CN' },
  { label: 'Christmas Island', value: 'CX' },
  { label: 'Cocos (Keeling) Islands', value: 'CC' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Comoros', value: 'KM' },
  { label: 'Congo', value: 'CG' },
  { label: 'Congo, The Democratic Republic of the', value: 'CD' },
  { label: 'Cook Islands', value: 'CK' },
  { label: 'Costa Rica', value: 'CR' },
  { label: 'Cote D\'Ivoire', value: 'CI' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cuba', value: 'CU' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Djibouti', value: 'DJ' },
  { label: 'Dominica', value: 'DM' },
  { label: 'Dominican Republic', value: 'DO' },
  { label: 'Ecuador', value: 'EC' },
  { label: 'Egypt', value: 'EG' },
  { label: 'El Salvador', value: 'SV' },
  { label: 'Equatorial Guinea', value: 'GQ' },
  { label: 'Eritrea', value: 'ER' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Ethiopia', value: 'ET' },
  { label: 'Falkland Islands (Malvinas)', value: 'FK' },
  { label: 'Faroe Islands', value: 'FO' },
  { label: 'Fiji', value: 'FJ' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'French Guiana', value: 'GF' },
  { label: 'French Polynesia', value: 'PF' },
  { label: 'French Southern Territories', value: 'TF' },
  { label: 'Gabon', value: 'GA' },
  { label: 'Gambia', value: 'GM' },
  { label: 'Georgia', value: 'GE' },
  { label: 'Germany', value: 'DE' },
  { label: 'Ghana', value: 'GH' },
  { label: 'Gibraltar', value: 'GI' },
  { label: 'Greece', value: 'GR' },
  { label: 'Greenland', value: 'GL' },
  { label: 'Grenada', value: 'GD' },
  { label: 'Guadeloupe', value: 'GP' },
  { label: 'Guam', value: 'GU' },
  { label: 'Guatemala', value: 'GT' },
  { label: 'Guernsey', value: 'GG' },
  { label: 'Guinea', value: 'GN' },
  { label: 'Guinea-Bissau', value: 'GW' },
  { label: 'Guyana', value: 'GY' },
  { label: 'Haiti', value: 'HT' },
  { label: 'Heard Island and Mcdonald Islands', value: 'HM' },
  { label: 'Holy See (Vatican City State)', value: 'VA' },
  { label: 'Honduras', value: 'HN' },
  { label: 'Hong Kong', value: 'HK' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Iceland', value: 'IS' },
  { label: 'India', value: 'IN' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Iran, Islamic Republic Of', value: 'IR' },
  { label: 'Iraq', value: 'IQ' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Isle of Man', value: 'IM' },
  { label: 'Israel', value: 'IL' },
  { label: 'Italy', value: 'IT' },
  { label: 'Jamaica', value: 'JM' },
  { label: 'Japan', value: 'JP' },
  { label: 'Jersey', value: 'JE' },
  { label: 'Jordan', value: 'JO' },
  { label: 'Kazakhstan', value: 'KZ' },
  { label: 'Kenya', value: 'KE' },
  { label: 'Kiribati', value: 'KI' },
  { label: 'Korea, Democratic People\'S Republic of', value: 'KP' },
  { label: 'Korea, Republic of', value: 'KR' },
  { label: 'Kuwait', value: 'KW' },
  { label: 'Kyrgyzstan', value: 'KG' },
  { label: 'Lao People\'S Democratic Republic', value: 'LA' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lebanon', value: 'LB' },
  { label: 'Lesotho', value: 'LS' },
  { label: 'Liberia', value: 'LR' },
  { label: 'Libyan Arab Jamahiriya', value: 'LY' },
  { label: 'Liechtenstein', value: 'LI' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Macao', value: 'MO' },
  { label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
  { label: 'Madagascar', value: 'MG' },
  { label: 'Malawi', value: 'MW' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Maldives', value: 'MV' },
  { label: 'Mali', value: 'ML' },
  { label: 'Malta', value: 'MT' },
  { label: 'Marshall Islands', value: 'MH' },
  { label: 'Martinique', value: 'MQ' },
  { label: 'Mauritania', value: 'MR' },
  { label: 'Mauritius', value: 'MU' },
  { label: 'Mayotte', value: 'YT' },
  { label: 'Mexico', value: 'MX' },
  { label: 'Micronesia, Federated States of', value: 'FM' },
  { label: 'Moldova, Republic of', value: 'MD' },
  { label: 'Monaco', value: 'MC' },
  { label: 'Mongolia', value: 'MN' },
  { label: 'Montserrat', value: 'MS' },
  { label: 'Morocco', value: 'MA' },
  { label: 'Mozambique', value: 'MZ' },
  { label: 'Myanmar', value: 'MM' },
  { label: 'Namibia', value: 'NA' },
  { label: 'Nauru', value: 'NR' },
  { label: 'Nepal', value: 'NP' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Netherlands Antilles', value: 'AN' },
  { label: 'New Caledonia', value: 'NC' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'Nicaragua', value: 'NI' },
  { label: 'Niger', value: 'NE' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Niue', value: 'NU' },
  { label: 'Norfolk Island', value: 'NF' },
  { label: 'Northern Mariana Islands', value: 'MP' },
  { label: 'Norway', value: 'NO' },
  { label: 'Oman', value: 'OM' },
  { label: 'Pakistan', value: 'PK' },
  { label: 'Palau', value: 'PW' },
  { label: 'Palestinian Territory, Occupied', value: 'PS' },
  { label: 'Panama', value: 'PA' },
  { label: 'Papua New Guinea', value: 'PG' },
  { label: 'Paraguay', value: 'PY' },
  { label: 'Peru', value: 'PE' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Pitcairn', value: 'PN' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Puerto Rico', value: 'PR' },
  { label: 'Qatar', value: 'QA' },
  { label: 'Reunion', value: 'RE' },
  { label: 'Romania', value: 'RO' },
  { label: 'Russian Federation', value: 'RU' },
  { label: 'RWANDA', value: 'RW' },
  { label: 'Saint Helena', value: 'SH' },
  { label: 'Saint Kitts and Nevis', value: 'KN' },
  { label: 'Saint Lucia', value: 'LC' },
  { label: 'Saint Pierre and Miquelon', value: 'PM' },
  { label: 'Saint Vincent and the Grenadines', value: 'VC' },
  { label: 'Samoa', value: 'WS' },
  { label: 'San Marino', value: 'SM' },
  { label: 'Sao Tome and Principe', value: 'ST' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'Senegal', value: 'SN' },
  { label: 'Serbia and Montenegro', value: 'CS' },
  { label: 'Seychelles', value: 'SC' },
  { label: 'Sierra Leone', value: 'SL' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Solomon Islands', value: 'SB' },
  { label: 'Somalia', value: 'SO' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'South Georgia and the South Sandwich Islands', value: 'GS' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sri Lanka', value: 'LK' },
  { label: 'Sudan', value: 'SD' },
  { label: 'Suri label', value: 'SR' },
  { label: 'Svalbard and Jan Mayen', value: 'SJ' },
  { label: 'Swaziland', value: 'SZ' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Switzerland', value: 'CH' },
  { label: 'Syrian Arab Republic', value: 'SY' },
  { label: 'Taiwan, Province of China', value: 'TW' },
  { label: 'Tajikistan', value: 'TJ' },
  { label: 'Tanzania, United Republic of', value: 'TZ' },
  { label: 'Thailand', value: 'TH' },
  { label: 'Timor-Leste', value: 'TL' },
  { label: 'Togo', value: 'TG' },
  { label: 'Tokelau', value: 'TK' },
  { label: 'Tonga', value: 'TO' },
  { label: 'Trinidad and Tobago', value: 'TT' },
  { label: 'Tunisia', value: 'TN' },
  { label: 'Turkey', value: 'TR' },
  { label: 'Turkmenistan', value: 'TM' },
  { label: 'Turks and Caicos Islands', value: 'TC' },
  { label: 'Tuvalu', value: 'TV' },
  { label: 'Uganda', value: 'UG' },
  { label: 'Ukraine', value: 'UA' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'United States', value: 'US' },
  { label: 'United States Minor Outlying Islands', value: 'UM' },
  { label: 'Uruguay', value: 'UY' },
  { label: 'Uzbekistan', value: 'UZ' },
  { label: 'Vanuatu', value: 'VU' },
  { label: 'Venezuela', value: 'VE' },
  { label: 'Viet Nam', value: 'VN' },
  { label: 'Virgin Islands, British', value: 'VG' },
  { label: 'Virgin Islands, U.S.', value: 'VI' },
  { label: 'Wallis and Futuna', value: 'WF' },
  { label: 'Western Sahara', value: 'EH' },
  { label: 'Yemen', value: 'YE' },
  { label: 'Zambia', value: 'ZM' },
  { label: 'Zimbabwe', value: 'ZW' }
];

export const LEVEL_COLOR = {
  PVS1: "#CD0025",
  PS1: "#D42B1F",
  PS2: "#DF3125",
  PS3: "#EB3629",
  PS4: "#F44336",
  PM1: "#FD502A",
  PM2: "#FF613E",
  PM3: "#FF763B",
  PM4: "#FC8F52",
  PM5: "#FC9F5C",
  PM6: "#FEB16A",
  PP1: "#FFBE5C",
  PP2: "#FFCA62",
  PP3: "#FFD772",
  PP4: "#FCE673",
  PP5: "#FEF17D",
  BP1: "#D4F575",
  BP2: "#A3EF58",
  BP3: "#7BEB54",
  BP4: "#4BE748",
  BP5: "#59DE6E",
  BP6: "#4ACD7F",
  BP7: "#3EBF79",
  BS1: "#78E8DA",
  BS2: "#63DBEC",
  BS3: "#49B7E6",
  BS4: "#5389DA",
  BA1: "#8D7DED",
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
  "dbSNP",
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
  "dbSNP",
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

export const NAV_STATUS = {
  alterations :" Actionable alterations",
  clinical: "Uncertain clinical significance"
};

export const ACTIONABLE_TABS_VALUES = {
  expanded: "expanded_interpretation",
  therapies: "therapies",
  clinicalTrials: "clinical_trials"
};

export const ACTIONABLE_CATEGORIES_OPTIONS = [
  { value: ACTIONABLE_TABS_VALUES.expanded, label: "Expanded interpretation" },
  { value: ACTIONABLE_TABS_VALUES.therapies, label: "Therapies" },
  { value: ACTIONABLE_TABS_VALUES.clinicalTrials, label: "Clinical trials" },
];

export const TEXTAREA_NAME = {
  geneDescription: "geneDescriptionTextarea",
  variantDescription: "variantDescriptionTextarea"
};
