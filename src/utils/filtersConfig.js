import { Icon } from "antd";
import React from "react";
import { TAG_COLORS } from "Utils/constants";
import { FILTERS } from "Utils/constants";

export default  {
  [FILTERS.variantClass]: {
    title: "Type",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      { id: "unclassified", tagColor: TAG_COLORS.white, label: "Unclassified" },
      { id: "path", tagColor: TAG_COLORS.red, label: "PATH" },
      { id: "lath", tagColor: TAG_COLORS.orange, label: "LATH" },
      { id: "vus", tagColor: TAG_COLORS.yellow, label: "VUS" },
      { id: "lben", tagColor: TAG_COLORS.blueLight, label: "LBEN" },
      { id: "ben", tagColor: TAG_COLORS.blue, label: "BEN" }
    ]
  },

  [FILTERS.somaticClass]: {
    title: "Somatic Class",
    type: ["somatic"],
    mode: "multiple",
    items: [
      { id: "unclassified", tagColor: TAG_COLORS.white, label: "Unclassified" },
      { id: "1", tagColor: TAG_COLORS.red, label: "Tier1" },
      { id: "2", tagColor: TAG_COLORS.orange, label: "Tier2" },
      { id: "3", tagColor: TAG_COLORS.yellow, label: "Tier3" },
      { id: "4", tagColor: TAG_COLORS.blueLight, label: "Tier4" },
    ]
  },

  ['variantPanels']: {
    title: "Variant panels",
    type: ["somatic"],
    children: {
      [FILTERS.hotSpot]: {
        title: "Hot Spot",
        type: ["somatic"],
        mode: "multiple",
        items: [
          { id: true, label: "True", icon: <Icon type="check" /> },
          { id: false, label: "False", icon: <Icon type="close" /> }
        ],
      },

      [FILTERS.snp]: {
        title: "SNP",
        type: ["somatic"],
        mode: "multiple",
        items: [
          { id: true, label: "True", icon: <Icon type="check" /> },
          { id: false, label: "False", icon: <Icon type="close" /> }
        ],
      },
    }
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
      { id: "clinVarSIG", label: "clinVarSIG" },
      { id: "cosmic", label: "Cosmic" },
      { id: "OMIM", label: "OMIM" },
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
  }
};
