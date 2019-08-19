import axios from "axios";
import axios_based from "./axios-base";
import "Utils/axios-mock";

export function fetchBAMFile(BAMFileUrl) {
  return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
}

export function goToChrPositionIgv(chrPosition) {
  return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
}

export function loadHgvs(data) {
  // -> API request
  const mockResult = {
    ...data,
    coding: "c.2637 A>G",
    protein: "p.Pro871Leu"
  };
  return mockResult;
}

export function addResult(data) {
  // -> API request
  const mockResult = {
    ...data,
    id: Math.random().toString(),
    chrPosition: `Chr${data.chromosome}:${data.position}`,
    alleleChange: `${data.alleleReference} > ${data.alleleAlternative}`,
    transcript: "NM_939778.7",
    zygosity: "",
    variantClassGermline: "unclassified",
    variantClassSomatic: "unclassified"
  };
  return mockResult;
}

export function editResult(data) {
  // -> API request
  const mockResult = {
    ...data,
    chrPosition: `Chr${data.chromosome}:${data.position}`,
    alleleChange: `${data.alleleReference} > ${data.alleleAlternative}`,
    transcript: "NM_939778.7"
  };
  return mockResult;
}

export function fetchTestMetadataApi(id) {
  return axios_based.get(`/tests/${id.payload}`);
}

export function fetchVariantMetadataDataApi(data) {
  const { testId, variantId } = data.payload;
  return axios_based.get(`/tests/${testId}/variants/${variantId}/`);
}

export function updateVariantApi(data) {
  const temporaryUrl =
    "/tests/5d4adfb6a1e39700120ad5f2/variants/5d4adfb6a1e39700120ad5f3";

  const { name, value } = data.payload;
  return axios_based.patch(temporaryUrl, {
    [name]: value
  });
}

export function fetchTestsApi() {
  return axios_based.get(`/tests/`);
}

export function fetchClassificationHistoryApi() {

  console.log("--here");
  const { testId, variantId } = action.payload;

  return axios.get(`/api/tests/${testId}/variants/${variantId}/classification-history`);
}

export function addEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId },
    data
  } = action.payload;

  return axios_based.post(`/tests/${testId}/variants/${variantId}/evidences`, {
    ...data
  });
}

export function editEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId },
    data
  } = action.payload;

  return axios_based.put(
    `/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`,
    {
      ...data
    }
  );
}

export function deleteEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId }
  } = action.payload;
  return axios_based.delete(
    `/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`
  );
}

export function fetchEvidenceDataApi(action) {
  return axios_based.get(`/variants/${action.payload}/evidences`);
}

export function fetchTableDataApi(action) {
  const { testId, mutation } = action.payload;
  return axios_based.get(`/tests/${testId}/variants`, {
    params: {
      mutation
    }
  });
}
