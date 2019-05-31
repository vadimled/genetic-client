import { Icon } from "antd";
import React from "react";
import { TAG_COLORS } from "Utils/constants";
import { FILTERS } from "Utils/constants";

export default  {
  [FILTERS.variantClass]: {
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
    type: ["somatic"],
    mode: "single",
    items: [
      { id: "unclassified", tagColor: TAG_COLORS.white, label: "Unclassified" },
      { id: "1", tagColor: TAG_COLORS.tier1, label: "Tier1" },
      { id: "2", tagColor: TAG_COLORS.tier2, label: "Tier2" },
      { id: "3", tagColor: TAG_COLORS.tier3, label: "Tier3" },
      { id: "4", tagColor: TAG_COLORS.tier4, label: "Tier4" },
    ]
  },

  ['Variant panels']: {
    type: ["somatic"],
    children: {
      [FILTERS.hotSpot]: {
        type: ["somatic"],
        mode: "single",
        items: [
          { id: true, label: "True", icon: <Icon type="check" /> },
          { id: false, label: "False", icon: <Icon type="close" /> }
        ],
      },

      [FILTERS.snp]: {
        type: ["somatic"],
        mode: "single",
        items: [
          { id: true, label: "True", icon: <Icon type="check" /> },
          { id: false, label: "False", icon: <Icon type="close" /> }
        ],
      },
    }
  },

  [FILTERS.roi]: {
    type: ["somatic", "germline"],
    mode: "single",
    items: [
      { id: true,  label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.gnomId]: {
    type: ["somatic"],
    mode: "single",
    items: [
      { id: "na", value: "na", label: "NA" },
      { id: "veryRare", value: "veryRare", label: "very rare(0-1%)" },
      { id: "rare", value: "rare", label: "rare (1-5%)" },
      { id: "common", value: "common", label: "common (>5%)" }
    ]
  }
};
