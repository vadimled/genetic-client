import actionsTypes from "../actionsTypes";

export const handleResultConfigIsOpen = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_IS_OPEN,
    payload: data
  };
};

export const handleResultConfigGene = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_GENE,
    payload: data
  };
};

export const handleResultConfigChromosome = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_CHROMOSOME,
    payload: data
  };
};

export const handleResultConfigPosition = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_POSITION,
    payload: data
  };
};

export const handleResultConfigAlleleType = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_TYPE,
    payload: data
  };
};

export const handleResultConfigAlleleReference = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_REFERENCE,
    payload: data
  };
};

export const handleResultConfigAlleleAlternative = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE,
    payload: data
  };
};

export const handleResultConfigVaf = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_VAF,
    payload: data
  };
};

export const handleResultConfigCoverage = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_COVERAGE,
    payload: data
  };
};

export const handleResultConfigCoding = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_CODING,
    payload: data
  };
};

export const handleResultConfigProtein = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_PROTEIN,
    payload: data
  };
};

export const resultConfigLoadHgvs = data => {
  return {
    type: actionsTypes.RESULT_CONFIG_LOAD_HGVS,
    payload: data
  };
};

export const handleResultConfigValidationFaildFields = data => {
  return {
    type: actionsTypes.HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS,
    payload: data
  };
};
