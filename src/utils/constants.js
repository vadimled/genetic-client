export const TAG_COLORS = {
  white: "#fff",
  red: "#F11E2C",
  yellow: "#FED955",
  blue: "#559FD5",
  blueLight: "#7CD8FF",
  orange: "#FF835C",
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
};

export const TEXTS = {
  addNote: "Add a note",
  cancel: "Cancel",
  done: "Done"
};

export const LIMITS = {
  maxNotesChar: 150,
};

export const MUTATION = [
  { value: "dna", label: "DNA" },
  { value: "rna", label: "RNA" },
  { value: "agena", label: "Agena" }
];

export const ZYGOSITY_OPTIONS = [
  { value: '__reset__', label: 'Clear' },
  { value: 'homo', label: 'Homo' },
  { value: 'hetro', label: 'Hetro' },
  { value: 'hemi', label: 'Hemi' },
  { value: 'insignificant', label: 'Insignificant' },
  { value: 'somatic', label: 'Somatic' },
  { value: 'notReal', label: 'Not-Real' },
  { value: 'unknown', label: 'Unknown' },
];

export const VARIANT_CLASS = {
  unclassified: { value: 'unclassified', label: 'Unclassified', tagColor: TAG_COLORS.white },
  path: { value: 'path', label: 'PATH', tagColor: TAG_COLORS.red },
  lpath: { value: 'lpath', label: 'LPATH', tagColor: TAG_COLORS.orange },
  vus: { value: 'vus', label: 'VUS', tagColor: TAG_COLORS.yellow },
  ben: { value: 'ben', label: 'BEN', tagColor: TAG_COLORS.blueLight },
  lben: { value: 'lben', label: 'LBEN', tagColor: TAG_COLORS.blue }
};

export const SOMATIC_CLASS = {
  unclassified: { value: 'unclassified', label: 'Unclassified', tagColor: TAG_COLORS.white },
  tier1: { value: 'tier1', label: 'Tier1', tagColor: TAG_COLORS.red },
  tier2: { value: 'tier2', label: 'Tier2', tagColor: TAG_COLORS.orange },
  tier3: { value: 'tier3', label: 'Tier3', tagColor: TAG_COLORS.yellow },
  tier4: { value: 'tier4', label: 'Tier4', tagColor: TAG_COLORS.blueLight }
};

export const GERMLINE_VARIANT_CLASS_OPTIONS = [
  { ...VARIANT_CLASS.unclassified },
  { ...VARIANT_CLASS.path },
  { ...VARIANT_CLASS.lpath },
  { ...VARIANT_CLASS.vus },
  { ...VARIANT_CLASS.ben },
  { ...VARIANT_CLASS.lben },
];

export const SOMATIC_VARIANT_CLASS_OPTIONS = [
  { ...SOMATIC_CLASS.unclassified },
  { ...SOMATIC_CLASS.tier1 },
  { ...SOMATIC_CLASS.tier2 },
  { ...SOMATIC_CLASS.tier3 },
  { ...SOMATIC_CLASS.tier4 },
];

export const GNOM_AD = {
  na: "na",
  veryRare: "veryRare",
  rare: "rare",
  common: "common"
};
