import { TAG_COLORS } from "../../utils/constants";
import { Icon } from "antd";
import React from "react";
import {FILTERS} from "../../utils/constants";

export default  {
  [FILTERS.type]: {
    mode: "single",
    items: [
      { id:"somatic", label: "Somatic" },
      { id:"germline", label: "Germline" },
      { id:"acmg", label: "ACMG" }
    ],
  },

  [FILTERS.variantClass]: {
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

  [FILTERS.hotSpot]: {
    mode: "single",
    items: [
      { id: "true", label: "True", icon: <Icon type="check" /> },
      { id: "false", label: "False", icon: <Icon type="close" /> }
    ],
  },

  [FILTERS.snp]:{
    mode: "single",
    items: [
      { id: "true", label: "True", icon: <Icon type="check" /> },
      { id: "false", label: "False", icon: <Icon type="close" /> }
    ],
  }, 

  [FILTERS.roi]: {
    mode: "single",
    items: [
      {id: "true",  label: "True", icon: <Icon type="check" /> },
      { id: "false", label: "False", icon: <Icon type="close" /> }
    ]
  },

  [FILTERS.gnomId]: {
    mode: "single",
    items: [
      { id: "na", value: "na", label: "NA" },
      {id: "veryRare", value: "veryRare", label: "very rare(0-1%)" },
      { id: "rare", value: "rare", label: "rare (1-5%)" },
      { id: "common", value: "common", label: "common (>5%)" }
    ]
  }
};