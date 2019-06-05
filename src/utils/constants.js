export const TAG_COLORS = {
  white: "#fff",
  red: "#F11E2C",
  yellow: "#FED955",
  blue: "#559FD5",
  blueLight: "#7CD8FF",
  orange: "#FF835C"
};

export const FILTERS = {
  type: "Type",
  variantClass: "Variant Class",
  hotSpot: "Hot Spot",
  snp: "SNP",
  roi: "ROI",
  gnomId: "Gnom ID"
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
  {value: 'homo', label: 'Homo'},
  {value: 'hetro', label: 'Hetro'},
  {value: 'hemi', label: 'Hemi'},
  {value: 'insignificant', label: 'Insignificant'},
  {value: 'somatic', label: 'Somatic'},
  {value: 'notReal', label: 'Not-Real'},
  {value: 'unknown', label: 'Unknown'},
];

export const VARIANT_CLASS = {
  unclassified: {value: 'unclassified', label: 'unclassified'},
  path: {value: 'path', label: 'PATH'},
  lpath: {value: 'lpath', label: 'LPATH'},
  vus: {value: 'vus', label: 'VUS'},
  ben: {value: 'ben', label: 'BEN'},
  lben: {value: 'lben', label: 'LBEN'}
};

export const SOMATIC_CLASS = {
  unclassified: {value: 'unclassified', label: 'unclassified'},
  tier1: {value: 'tier1', label: 'Tier1'},
  tier2: {value: 'tier2', label: 'Tier2'},
  tier3: {value: 'tier3', label: 'Tier3'},
  tier4: {value: 'tier4', label: 'Tier4'}
};

export const GERMLINE_VARIANT_CLASS_OPTIONS = [
  {...VARIANT_CLASS.vus},
  {...VARIANT_CLASS.path},
  {...VARIANT_CLASS.lpath},
  {...VARIANT_CLASS.ben},
  {...VARIANT_CLASS.lben},
  {...VARIANT_CLASS.unclassified},
];

export const SOMATIC_VARIANT_CLASS_OPTIONS = [
  {...SOMATIC_CLASS.tier1},
  {...SOMATIC_CLASS.tier2},
  {...SOMATIC_CLASS.tier3},
  {...SOMATIC_CLASS.tier4},
  {...SOMATIC_CLASS.unclassified},
];
