import { SOMATIC_CLASS, TAG_COLORS, VARIANT_CLASS, ZYGOSITY_OPTIONS } from "./constants";

export const getPrevTagColor = title => {
  let prevTagColor = "";

  switch (title) {
    case "unclassified":
      prevTagColor = TAG_COLORS.white;
      break;
    case "path":
    case "tier1":
      prevTagColor = TAG_COLORS.red;
      break;
    case "lpath":
    case "tier2":
      prevTagColor = TAG_COLORS.orange;
      break;
    case "vus":
    case "tier3":
      prevTagColor = TAG_COLORS.yellow;
      break;
    case "lben":
    case "tier4":
      prevTagColor = TAG_COLORS.blueLight;
      break;
    case "ben":
      prevTagColor = TAG_COLORS.blue;
      break;
  }

  return prevTagColor;
};

export const getCurrTagColor = title => {
  let currTagColor = "";

  switch (title) {
    case "unclassified":
      currTagColor = TAG_COLORS.white;
      break;
    case "path":
    case "tier1":
      currTagColor = TAG_COLORS.red;
      break;
    case "lpath":
    case "tier2":
      currTagColor = TAG_COLORS.orange;
      break;
    case "vus":
    case "tier3":
      currTagColor = TAG_COLORS.yellow;
      break;
    case "lben":
    case "tier4":
      currTagColor = TAG_COLORS.blueLight;
      break;
    case "ben":
      currTagColor = TAG_COLORS.blue;
      break;
  }

  return currTagColor;
};

export const getTitlePrev = (type, record) =>{
  let titlePrev = "";

  if (type === "variantClass") {
    titlePrev =
      VARIANT_CLASS[record.titlePrev]?.label ||
      SOMATIC_CLASS[record.titlePrev]?.label;

  } else if (type === "zygosity") {
    if (record.titlePrev) {
      titlePrev = ZYGOSITY_OPTIONS.find(
        option => option.value === record.titlePrev
      )?.label;
    }
  } else if (type === "notes") {
    if (record.titlePrev) {
      titlePrev = record.titlePrev;
    }
  }

  return titlePrev;
};

export const getTitleCurr = (type, record) =>{
  let titleCurr = "";

  if (type === "variantClass") {
    titleCurr =
      VARIANT_CLASS[record.titleCurr]?.label ||
      SOMATIC_CLASS[record.titleCurr]?.label;
  } else if (type === "zygosity") {
    if (record.titlePrev) {
      titleCurr = ZYGOSITY_OPTIONS.find(
        option => option.value === record.titleCurr
      ).label;
    } else {
      titleCurr = ZYGOSITY_OPTIONS.find(
        option => option.value === record.titleCurr
      )?.label;
    }
  } else if (type === "notes") {
    if (record.titlePrev) {
      titleCurr = record.titleCurr;
    } else {
      titleCurr = record.titleCurr;
    }
  }

  return titleCurr;

};