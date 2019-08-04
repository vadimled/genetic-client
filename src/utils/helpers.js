import {
  VARIANT_CLASS_SOMATIC,
  TAG_COLORS,
  VARIANT_CLASS_GERMLINE,
  ZYGOSITY_OPTIONS,
  ZYGOSITY_TYPES
} from "./constants";
import has from "lodash.has";

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

export const getTitlePrev = (type, record) => {
  let titlePrev = "";

  if (type === "variantClass") {
    titlePrev =
      VARIANT_CLASS_GERMLINE[record.titlePrev]?.label ||
      VARIANT_CLASS_SOMATIC[record.titlePrev]?.label;
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

export const getTitleCurr = (type, record) => {
  let titleCurr = "";

  if (type === "variantClass") {
    titleCurr =
      VARIANT_CLASS_GERMLINE[record.titleCurr]?.label ||
      VARIANT_CLASS_SOMATIC[record.titleCurr]?.label;
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

const getLinksArray = (data, link) => {
  return Array.isArray(data)
    ? data.map(code => {
      return {
        title: code,
        link: `${link}${[...code].slice(4).join("")}`
      };
    })
    : `${link}${[...data].slice(4).join("")}`;
};

export const createResourcesLinks = variantData => {
  let externalResources = [];

  const {
    coding,
    AminoAcidChange,
    dbSNP,
    clinvarVariationId,
    ref,
    protein,
    gene,
    DamagingScore,
    transcript,
    chrPosition,
    alt,
    COSMIC
  } = variantData || {};
  const variantDBs = {
    title: "Variant DBs",
    UCSC:
      `https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&lastVirtModeType=default&` +
      `lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=${encodeURIComponent(
        chrPosition
      )}&hgsid=731360955_9ebZL49sAeyPO3PxgbWCQ1DZ5e4N`,
    gnomAD: `https://gnomad.broadinstitute.org/variant/${[
      ...chrPosition.split(":")[0]
    ]
      .slice(3)
      .join("")}-${chrPosition.split(":")[1]}-${ref}-${alt}`,
    dbSNP: `https://www.ncbi.nlm.nih.gov/snp/?term=${dbSNP}`,
    ClinVar: `https://www.ncbi.nlm.nih.gov/clinvar/variation/${clinvarVariationId}`,
    COSMIC: getLinksArray(
      COSMIC,
      "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id="
    ),
    OncoKB: `https://oncokb.org/gene/${gene}`,
    PMKB: `https://pmkb.weill.cornell.edu/search?utf8=%E2%9C%93&search=${gene}`,
    Varsome: `https://varsome.com/variant/hg19/${[...chrPosition.split(":")[0]]
      .slice(3)
      .join("")}-${chrPosition.split(":")[1]}-${ref}-${alt}`,
    ICGC: `https://dcc.icgc.org/q?q=${encodeURIComponent(
      `${gene} ${AminoAcidChange}`
    )}`,
    Uniprot: `https://www.uniprot.org/uniprot/?query=${transcript}+AND+reviewed%3Ayes&sort=score`
  };
  externalResources.push(variantDBs);

  const publications = {
    title: "Publications",
    Pubmed: `https://www.ncbi.nlm.nih.gov/pubmed/?term=${gene}+AND+(${encodeURIComponent(
      protein
    )}+OR+${encodeURIComponent(coding)}+OR+${encodeURIComponent(
      AminoAcidChange
    )})`,
    "Google Scholar": `https://scholar.google.co.il/scholar?start=50&q=${gene}+AND+(${encodeURIComponent(
      protein
    )}+OR+${encodeURIComponent(coding)}+OR+${encodeURIComponent(
      AminoAcidChange
    )})&hl=en&as_sdt=0,5`
  };

  externalResources.push(publications);

  const inSilicoPredictors = {
    title: "In Silico predictors",
    "Damaging score": DamagingScore
  };
  externalResources.push(inSilicoPredictors);

  return externalResources;
};

export const getDataArray = data => {
  let arrayData = [];
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      arrayData.push(data[key]);
    }
  }
  return arrayData;
};

export const zygosityType = data => {
  /* Germline - for Homo, Hetro and Hemi.
    Somatic - for Somatic.
    Insignificant - for Insignificant.
    Unkown - for Unkown.
    Not-Real - for Not-Real.
  */
  if (has(data, "currentZygosity")) {
    for (let key in ZYGOSITY_TYPES) {
      const { label, value } = ZYGOSITY_TYPES[key];
      if (value.toLowerCase() === data.currentZygosity.toLowerCase()) {
        return { ...data, currentZygosity: label };
      }
    }
  }
  return "";
};
export const createTableData = (category, tabContent) => {
  const obj = Object.keys(tabContent).reduce((accum, val) => {
    if (tabContent[val].category === category) {
      const newObj = Object.assign(
        {},
        tabContent[val],
        { source_description: "" },
        { actions: "" }
      );
      return { ...accum, [val]: newObj };
    }
    return accum;
  }, {});
  return getDataArray(obj);
};
