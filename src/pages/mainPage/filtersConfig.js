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
