import { Icon } from "antd";
import React from "react";
import { TAG_COLORS } from "Utils/constants";
import { FILTERS, VARIANT_CLASS, SOMATIC_CLASS } from "Utils/constants";

export default {
  [FILTERS.variantClass]: {
    title: "Germline Class",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      { id: VARIANT_CLASS.unclassified.value, tagColor: TAG_COLORS.white, label: VARIANT_CLASS.unclassified.label },
      { id: VARIANT_CLASS.path.value, tagColor: TAG_COLORS.red, label: VARIANT_CLASS.path.label },
      { id: VARIANT_CLASS.lpath.value, tagColor: TAG_COLORS.orange, label: VARIANT_CLASS.lpath.label },
      { id: VARIANT_CLASS.vus.value, tagColor: TAG_COLORS.yellow, label: VARIANT_CLASS.vus.label },
      { id: VARIANT_CLASS.lben.value, tagColor: TAG_COLORS.blueLight, label: VARIANT_CLASS.lben.label },
      { id: VARIANT_CLASS.ben.value, tagColor: TAG_COLORS.blue, label: VARIANT_CLASS.ben.label }
    ]
  },

  [FILTERS.somaticClass]: {
    title: "Somatic Class",
    type: ["somatic"],
    mode: "multiple",
    items: [
      { id: SOMATIC_CLASS.unclassified.value, tagColor: TAG_COLORS.white, label: SOMATIC_CLASS.unclassified.label },
      { id: SOMATIC_CLASS.tier1.value, tagColor: TAG_COLORS.red, label: SOMATIC_CLASS.tier1.label },
      { id: SOMATIC_CLASS.tier2.value, tagColor: TAG_COLORS.orange, label: SOMATIC_CLASS.tier2.label },
      { id: SOMATIC_CLASS.tier3.value, tagColor: TAG_COLORS.yellow, label: SOMATIC_CLASS.tier3.label },
      { id: SOMATIC_CLASS.tier4.value, tagColor: TAG_COLORS.blueLight, label: SOMATIC_CLASS.tier4.label }
    ]
  },

  [FILTERS.hotSpot]: {
    title: "Hot Spot",
    type: ["somatic"],
    mode: "multiple",
    items: [
      { id: true, label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.snp]: {
    title: "SNP",
    type: ["somatic"],
    mode: "multiple",
    items: [
      { id: true, label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.roi]: {
    title: "ROI",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      { id: true, label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.vaf]: {
    title: "VAF",
    type: ["somatic"],
    mode: "range"
  },

  [FILTERS.cancerDBs]: {
    title: "Cancer DBs",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      { id: "clinvar", label: "Clinvar" },
      { id: "cosmic", label: "Cosmic" },
      { id: "omim", label: "Omim" }
    ]
  },

  [FILTERS.gnomAD]: {
    title: "GnomAD",
    type: ["somatic"],
    mode: "multiple",
    items: [
      { id: "na", value: "na", label: "NA" },
      { id: "veryRare", value: "veryRare", label: "very rare(0-1%)" },
      { id: "rare", value: "rare", label: "rare (1-5%)" },
      { id: "common", value: "common", label: "common (>5%)" }
    ]
  },

  [FILTERS.searchText]: {
    title: "Query"
  }
};
