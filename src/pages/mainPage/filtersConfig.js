import { Icon } from "antd";
import React from "react";
import { TAG_COLORS } from "Utils/constants";
import { FILTERS, VARIANT_CLASS } from "Utils/constants";

export default  {
  [FILTERS.type]: {
    mode: "single",
    items: [
      { id: "somatic", label: "Somatic" },
      { id: "germline", label: "Germline" },
      { id: "acmg", label: "ACMG" }
    ],
  },

  [FILTERS.variantClass]: {
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

  [FILTERS.hotSpot]: {
    mode: "single",
    items: [
      { id: true, label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ],
  },

  [FILTERS.snp]: {
    mode: "single",
    items: [
      { id: true, label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ],
  },

  [FILTERS.roi]: {
    mode: "single",
    items: [
      { id: true,  label: "True", icon: <Icon type="check" /> },
      { id: false, label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.gnomId]: {
    mode: "single",
    items: [
      { id: "na", value: "na", label: "NA" },
      { id: "veryRare", value: "veryRare", label: "very rare(0-1%)" },
      { id: "rare", value: "rare", label: "rare (1-5%)" },
      { id: "common", value: "common", label: "common (>5%)" }
    ]
  }
};
