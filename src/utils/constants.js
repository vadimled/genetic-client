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
