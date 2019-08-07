import actionsTypes from "../actionsTypes";

export const setFilterType = data => {
  return {
    type: actionsTypes.SET_FILTER_TYPE,
    payload: data
  };
};

export const setFilterVariantClassGermline = data => {
  return {
    type: actionsTypes.SET_FILTER_VARIANT_CLASS_GERMLINE,
    payload: data
  };
};

export const setFilterVariantClassSomatic = data => {
  return {
    type: actionsTypes.SET_FILTER_VARIANT_CLASS_SOMATIC,
    payload: data
  };
};

export const setFilterHotSpot = data => {
  return {
    type: actionsTypes.SET_FILTER_HOT_SPOT,
    payload: data
  };
};

export const setFilterSnp = data => {
  return {
    type: actionsTypes.SET_FILTER_SNP,
    payload: data
  };
};

export const setFilterRoi = data => {
  return {
    type: actionsTypes.SET_FILTER_ROI,
    payload: data
  };
};

export const setFilterVaf = data => {
  return {
    type: actionsTypes.SET_FILTER_VAF,
    payload: data
  };
};

export const setFilterCancerDBs = data => {
  return {
    type: actionsTypes.SET_FILTER_CANCER_DBS,
    payload: data
  };
};

export const setFilterGnomId = data => {
  return {
    type: actionsTypes.SET_FILTER_GNOM_ID,
    payload: data
  };
};

export const setFilterZygosity = data => {
  return {
    type: actionsTypes.SET_FILTER_ZYGOSITY,
    payload: data
  };
};

export const setFilterEffect = data => {
  return {
    type: actionsTypes.SET_FILTER_EFFECT,
    payload: data
  };
};

export const getFilteredData = data => {
  return {
    type: actionsTypes.GET_FILTERED_DATA,
    payload: data
  };
};

export const clearFilterSection = data => {
  return {
    type: actionsTypes.CLEAR_FILTER_SECTION,
    payload: data
  };
};

export const setDefaultFilters = data =>{
  return {
    type: actionsTypes.SET_DEFAULT_FILTERS,
    payload: data
  };
};