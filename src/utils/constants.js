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
  done: "Done"
};

export const LIMITS = {
  maxNotesChar: 150
};

export const MUTATION = [
  { value: "dna", label: "DNA" },
  { value: "rna", label: "RNA" },
  { value: "agena", label: "Agena" }
];

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

export const TUMOR_TYPE = {
  adenoma: "adenoma",
  carcinoma: "carcinoma",
  hyperplasia: "hyperplasia",
  neoplasm: "neoplasm",
  pheochromocytoma: "pheochromocytoma",
  adenocarcinoma: "adenocarcinoma",
  dysplasiaCarcinoma: "dysplasia-carcinoma_in_situ",
  osteosarcoma: "osteosarcoma",
  chondrosarcoma: "chondrosarcoma",
  ewingsSarcoma: "Ewings_sarcoma",
  askinsTumour: "Askins_tumour",
  desmoplasticFibroma: "desmoplastic_fibroma",
  fibrosarcoma: "fibrosarcoma",
  OvergrowthSyndrome: "Overgrowth_syndrome",
  sarcoma: "sarcoma",
  odontoameloblastoma: "odontoameloblastoma",
  odontogenicKeratocyst: "odontogenic_keratocyst",
  adenosis: "adenosis",
  fibroadenoma: "fibroadenoma",
  fibrosis: "fibrosis",
  papilloma: "papilloma",
  phyllodesTumour: "phyllodes_tumour",
  glioma: "glioma",
  astroblastoma: "astroblastoma",
  ependymoma: "ependymoma",
  gliosarcoma: "gliosarcoma",
  oligoastrocytoma: "oligoastrocytoma",
  gangliocytoma: "gangliocytoma",
  ganglioglioma: "ganglioglioma",
  anaplastic: "anaplastic",
  desmoplastic: "desmoplastic",
  medullomyoblastoma: "medullomyoblastoma",
  astrocytoma: "astrocytoma",
  liponeurocytoma: "liponeurocytoma",
  angiocentric: "angiocentric",
  oligodendroglioma: "oligodendroglioma",
  ependymoblastoma: "ependymoblastoma",
  endometriosis: "endometriosis",
  malignantMelanoma: "malignant_melanoma",
  retinoblastoma: "retinoblastoma",
  melanocytoma: "melanocytoma",
  gastrinoma: "gastrinoma",
  insulinoma: "insulinoma",
  choriocarcinoma: "choriocarcinoma",
  teratoma: "teratoma",
  yolkSacTumour: "yolk_sac_tumour",
  nonSeminoma: "non_seminoma",
  seminoma: "seminoma",
  burkittLymphoma: "Burkitt_lymphoma",
  hodgkinLymphoma: "Hodgkin_lymphoma",
  lymphoma: "lymphoma",
  aml: "acute_myeloid_leukaemia (AML)",
  cml: "chronic_myeloid_leukaemia (CML)",
  myelofibrosis: "myelofibrosis",
  all: "acute_lymphoblastic_leukaemia (ALL)",
  cll: "chronic_lymphocytic_leukaemia (CLL)",
  plasmacytoma: "plasmacytoma",
  myeloma: "myeloma",
  erythrocytosis: "erythrocytosis",
  lymphangioma: "lymphangioma",
  milmsTumour: "Wilms_tumour",
  angiomyoadenomatousTumour: "angiomyoadenomatous_tumour",
  angiomyolipoma: "angiomyolipoma",
  cyst: "cyst",
  cysticNephroma: "cystic_nephroma",
  nephroblastoma: "nephroblastoma",
  serratedPolyp: "serrated_polyp",
  aberrantCryptFoci: "aberrant_crypt_foci",
  carcinoidEndocrineTumour: "carcinoid-endocrine_tumour",
  dysplasia: "dysplasia",
  hamartoma: "hamartoma",
  carcinosarcoma: "carcinosarcoma",
  dysplastic: "dysplastic",
  hyperplastic: "hyperplastic",
  hepatoblastoma: "hepatoblastoma",
  nonSmallCellCarcinoma: "non_small_cell_carcinoma",
  smallCellCarcinoma: "small_cell_carcinoma",
  blastoma: "blastoma",
  largeCellCarcinoma: "large_cell_carcinoma",
  metaplasia: "metaplasia",
  adenofibroma: "adenofibroma",
  endometrioid: "endometrioid",
  KrukenbergTumour: "Krukenberg_tumour",
  granulosaCellTumour: "granulosa_cell_tumour",
  gynandroblastoma: "gynandroblastoma",
  somatostatinoma: "somatostatinoma",
  vipoma: "vipoma",
  acinarDuctalMetaplasia: "acinar-ductal_metaplasia",
  acutePancreatitis: "acute_pancreatitis",
  mesothelioma: "mesothelioma",
  craniopharyngioma: "craniopharyngioma",
  chorioangioma: "chorioangioma",
  adenolymphoma: "adenolymphoma_(Warthin_tumour)",
  benignMelanocyticNevus: "benign_melanocytic_nevus",
  epidermalNevus: "epidermal_nevus",
  adnexalTumour: "adnexal_tumour",
  thymoma: "thymoma",
  adenomaNoduleGoitre: "adenoma-nodule-goitre",
  chronicThyroiditis: "chronic_thyroiditis",
  histiocytoma: "histiocytoma"
};

export const TUMOR_LOCATION = {
  adrenalGland: "adrenal_gland",
  bileDuct: "bile_duct",
  gallbladder: "gallbladder",
  bone: "bone",
  breast: "breast",
  centralNervousSystem: "central_nervous_system (Brain)",
  cervix: "cervix",
  endometrium: "endometrium",
  eye: "eye",
  fallopianTube: "fallopian_tube",
  gastrointestinalTract: "gastrointestinal_tract",
  genitalTract: "genital_tract",
  haematopoieticLymphoidTissue: "haematopoietic_and_lymphoid_tissue (Blood)",
  kidney: "kidney",
  largeIntestine: "large_intestine",
  liver: "liver",
  lung: "lung",
  oesophagus: "oesophagus",
  ovary: "ovary",
  pancreas: "pancreas",
  parathyroid: "parathyroid",
  penis: "penis",
  pericardium: "pericardium",
  pituitary: "pituitary",
  placenta: "placenta",
  pleura: "pleura",
  prostate: "prostate",
  salivaryGland: "salivary_gland",
  skin: "skin",
  smallIntestine: "small_intestine",
  testis: "testis",
  thymus: "thymus",
  thyroid: "thyroid",
  bladder: "bladder",
  vagina: "vagina",
  vulva: "vulva",
  syndrome: "Syndrome",
  occultPrimary: "Occult Primary",
  stomach: "Stomach",
  headNeck: "Head and Neck",
  colon: "Colon",
  uterus: "Uterus",
  lymph: "Lymph",
  cervical: "Cervical",
  endoCervical: "Endo-Cervical"
};
