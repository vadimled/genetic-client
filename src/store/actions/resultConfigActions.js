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
