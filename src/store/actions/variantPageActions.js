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

export const setVariantMetadataData = data => {
  return {
    type: actionsTypes.SET_VARIANT_METADATA,
    payload: data
  };
};

export const setServerVariantMetadataToStore = data => {
  return {
    type: actionsTypes.SET_SERVER_VARIANT_METADATA,
    payload: data
  };
};

export const fetchVariantMetadataData = data => {
  return {
    type: actionsTypes.FETCH_VARIANT_METADATA,
    payload: data
  };
};

export const fetchEvidenceData = data => {
  return {
    type: actionsTypes.FETCH_EVIDENCE_DATA,
    payload: data
  };
};

export const setEvidenceData = data => {
  return {
    type: actionsTypes.SET_EVIDENCE_DATA,
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

export const setNewEvidenceEntry = data => {
  return {
    type: actionsTypes.SET_NEW_EVIDENCE_ENTRY,
    payload: data
  };
};

export const setEditedEvidenceEntry = data => {
  return {
    type: actionsTypes.SET_EDITED_EVIDENCE_ENTRY,
    payload: data
  };
};

export const deleteEvidenceFromStore = data => {
  return {
    type: actionsTypes.DELETE_EVIDENCE_ENTRY_FROM_STORE,
    payload: data
  };
};

export const setVariantLoading = data => {
  return {
    type: actionsTypes.SET_VARIANT_LOADING,
    payload: data
  };
};


