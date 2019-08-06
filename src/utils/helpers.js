import {
  VARIANT_CLASS_SOMATIC,
  TAG_COLORS,
  VARIANT_CLASS_GERMLINE,
  ZYGOSITY_OPTIONS,
  ZYGOSITY_TYPES, ZYGOSITY
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
        return {...data,  currentZygosity: label };
      }
    }
  }
  return "";
};

export const setPriority = record => {

  if(record.zygosity === ZYGOSITY.somatic.value){
    if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 143;
    }
    else if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 71;
    }
    else if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 12;
    }
    else if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 8;
    }
    else if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 4;
    }
  }

  else if(record.zygosity === ZYGOSITY.hetro.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value){
      record.priority = 142;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value){
      record.priority = 70;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value){
      record.priority = 15;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value){
      record.priority = 11;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value){
      record.priority = 7;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value){
      record.priority = 3;
    }
  }

  else if(record.zygosity === ZYGOSITY.hemi.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value){
      record.priority = 141;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value){
      record.priority = 69;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value){
      record.priority = 14;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value){
      record.priority = 10;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value){
      record.priority = 6;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value){
      record.priority = 2;
    }
  }

  else if(record.zygosity === ZYGOSITY.homo.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value){
      record.priority = 140;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value){
      record.priority = 68;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value){
      record.priority = 13;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value){
      record.priority = 9;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value){
      record.priority = 5;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value){
      record.priority = 1;
    }
  }

  else if(record.zygosity === ZYGOSITY.notDefined.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value
    ){
      record.priority = 137;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 138;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 139;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 72;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 67;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 66;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 65;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 64;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 63;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 62;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 61;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 60;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 59;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 58;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 57;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 56;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 55;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 54;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 53;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 52;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 51;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 50;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 49;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 48;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 47;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 46;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 45;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 44;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 43;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 42;
    }
  }

  else if(record.zygosity === ZYGOSITY.notReal.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value
    ){
      record.priority = 136;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 135;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 134;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 127;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 125;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 124;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 123;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 122;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 121;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 120;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 119;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 118;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 117;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 116;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 115;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 114;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 113;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 112;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 111;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 110;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 109;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 108;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 107;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 106;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 105;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 104;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 103;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 102;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 101;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 100;
    }
  }

  else if(record.zygosity === ZYGOSITY.insignificant.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value
    ){
      record.priority = 133;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 132;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 131;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 136;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 99;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 98;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 97;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 96;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 95;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 94;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 93;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 92;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 91;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 90;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 89;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 88;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 87;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 86;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 85;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 84;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 83;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 82;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 81;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 80;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 79;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 78;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 77;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 76;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 75;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 74;
    }
  }

  else if(record.zygosity === ZYGOSITY.unknown.value){
    if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value
    ){
      record.priority = 130;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 132;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 129;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 128;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 73;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 41;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 40;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 39;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 38;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 37;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 36;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 35;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 34;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 33;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 32;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 31;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 30;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 29;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 28;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 27;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 26;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 25;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
      record.priority = 24;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 23;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
      record.priority = 22;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lben.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 21;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.vus.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 20;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier3.value){
      record.priority = 19;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.lpath.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 18;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier2.value){
      record.priority = 17;
    }
    else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.path.value
      && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier1.value){
      record.priority = 16;
    }
  }

  return record;
};