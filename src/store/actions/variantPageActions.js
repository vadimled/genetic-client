import actionsTypes from "../actionsTypes";

export const setVariantClassification = data => {
  return {
    type: actionsTypes.SET_VARIANT_CLASSIFICATION,
    payload: data
  };
};

export const setSelectedZygosityType = data => {
  return {
    type: actionsTypes.SET_VARIANT_ZYGOSITY_TYPE,
    payload: data
  };
};

export const setExternalResources = data => {
  return {
    type: actionsTypes.SET_EXTERNAL_RESOURCES,
    payload: data
  };
};

export const setVariantData = data => {
  return {
    type: actionsTypes.SET_VARIANT_DATA,
    payload: data
  };
};

export const fetchVariantData = data => {
  return {
    type: actionsTypes.FETCH_VARIANT_DATA,
    payload: data
  };
};

export const sendVariantClass = variantClass => {
  return {
    type: actionsTypes.SEND_VARIANT_CLASS,
    payload: variantClass
  };
};

export const setTestInformation = data => {
  return {
    type: actionsTypes.SET_TEST_INFORMATION,
    payload: data
  };
};

export const fetchClassificationHistory = data => {
  return {
    type: actionsTypes.FETCH_CLASSIFICATION_HISTORY,
    payload: data
  };
};

export const setClassificationHistoryToStore = data => {
  return {
    type: actionsTypes.SET_CLASSIFICATION_HISTORY_TO_STORE,
    payload: data
  };
};

export const setVariantPageLoading = data => {
  return {
    type: actionsTypes.SET_VARIANT_PAGE_LOADING,
    payload: data
  };
};




