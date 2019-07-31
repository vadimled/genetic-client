import { Icon } from "antd";
import React from "react";
import { FILTERS, VARIANT_CLASS_GERMLINE, VARIANT_CLASS_SOMATIC } from "Utils/constants";
import { ZYGOSITY } from "./constants";

export default {
  [FILTERS.zygosity]: {
    title: "Zygosity",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      {
        id: ZYGOSITY.unknown.value,
        label: ZYGOSITY.unknown.label
      },
      {
        id: ZYGOSITY.notReal.value,
        label: ZYGOSITY.notReal.label
      },
      {
        id: ZYGOSITY.insignificant.value,
        label: ZYGOSITY.insignificant.label
      },
      {
        id: ZYGOSITY.homo.value,
        label: ZYGOSITY.homo.label
      },
      {
        id: ZYGOSITY.hetro.value,
        label: ZYGOSITY.hetro.label
      },
      {
        id: ZYGOSITY.hemi.value,
        label: ZYGOSITY.hemi.label
      },
      {
        id: ZYGOSITY.somatic.value,
        label: ZYGOSITY.somatic.label
      }
    ]
  },

  [FILTERS.variantClassGermline]: {
    title: "Germline Class",
    type: ["somatic", "germline"],
    mode: "multiple",
    items: [
      {
        id: VARIANT_CLASS_GERMLINE.unclassified.value,
        tagColor: VARIANT_CLASS_GERMLINE.unclassified.tagColor,
        label: VARIANT_CLASS_GERMLINE.unclassified.label
      },
      {
        id: VARIANT_CLASS_GERMLINE.path.value,
        tagColor: VARIANT_CLASS_GERMLINE.path.tagColor,
        label: VARIANT_CLASS_GERMLINE.path.label
      },
      {
        id: VARIANT_CLASS_GERMLINE.lpath.value,
        tagColor: VARIANT_CLASS_GERMLINE.lpath.tagColor,
        label: VARIANT_CLASS_GERMLINE.lpath.label
      },
      {
        id: VARIANT_CLASS_GERMLINE.vus.value,
        tagColor: VARIANT_CLASS_GERMLINE.vus.tagColor,
        label: VARIANT_CLASS_GERMLINE.vus.label
      },
      {
        id: VARIANT_CLASS_GERMLINE.lben.value,
        tagColor: VARIANT_CLASS_GERMLINE.lben.tagColor,
        label: VARIANT_CLASS_GERMLINE.lben.label
      },
      {
        id: VARIANT_CLASS_GERMLINE.ben.value,
        tagColor: VARIANT_CLASS_GERMLINE.ben.tagColor,
        label: VARIANT_CLASS_GERMLINE.ben.label
      }
    ]
  },

  [FILTERS.variantClassSomatic]: {
    title: "Somatic Class",
    type: ["somatic"],
    mode: "multiple",
    items: [
      {
        id: VARIANT_CLASS_SOMATIC.unclassified.value,
        tagColor: VARIANT_CLASS_SOMATIC.unclassified.tagColor,
        label: VARIANT_CLASS_SOMATIC.unclassified.label
      },
      {
        id: VARIANT_CLASS_SOMATIC.tier1.value,
        tagColor: VARIANT_CLASS_SOMATIC.tier1.tagColor,
        label: VARIANT_CLASS_SOMATIC.tier1.label
      },
      {
        id: VARIANT_CLASS_SOMATIC.tier2.value,
        tagColor: VARIANT_CLASS_SOMATIC.tier2.tagColor,
        label: VARIANT_CLASS_SOMATIC.tier2.label
      },
      {
        id: VARIANT_CLASS_SOMATIC.tier3.value,
        tagColor: VARIANT_CLASS_SOMATIC.tier3.tagColor,
        label: VARIANT_CLASS_SOMATIC.tier3.label
      },
      {
        id: VARIANT_CLASS_SOMATIC.tier4.value,
        tagColor: VARIANT_CLASS_SOMATIC.tier4.tagColor,
        label: VARIANT_CLASS_SOMATIC.tier4.label
      }
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
