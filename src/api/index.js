import axios from "axios";
import axios_based from "./axios-base";
import "Utils/axios-mock";

export function fetchBAMFile({BAMFileUrl, BAMIndexFileUrl}) {
  return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}&index=${BAMIndexFileUrl}`);
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

export function setTumorInfoApi(data) {
  const { testId,  name, value } = data.payload;
  return axios_based.patch(`/tests/${testId}`, {
    tumor_info:{
      [name]: value
    }
  });
}

export function fetchVariantMetadataDataApi(data) {
  const { testId, variantId } = data.payload;
  return axios_based.get(`/tests/${testId}/variants/${variantId}/`);
}

export function updateVariantApi(data) {
  const { name, value, testId, variantId } = data.payload;
  return axios_based.patch(`/tests/${testId}/variants/${variantId}`, {
    [name]: value
  });
}

export function fetchTestsApi() {
  return axios_based.get(`/tests/`);
}

export function fetchClassificationHistoryApi(action) {
  return axios_based.get(`/variants/${action.payload}/classification`);
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
    ids: { variantId, evidenceId }
  } = action.payload;
  return axios_based.delete(
    `/variants/${variantId}/evidences/${evidenceId}`
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

export function exportTableApi(testId) {
  return axios_based.post(`/tests/${testId}/export`, {gsId: testId}, {responseType: 'blob'}).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${testId}.tsv`);
    document.body.appendChild(link);
    link.click();
  });
}

export function fetchConfirmationMetadataApi(data) {
  return axios_based.get(`/confirmations/${data.payload}`);
}
