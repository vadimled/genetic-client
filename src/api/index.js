import axios from "axios";
import "Utils/axios-mock";

export function fetchBAMFile (BAMFileUrl) {
  return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
}

export function goToChrPositionIgv (chrPosition) {
  return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
}

export function loadHgvs (data) {
  // -> API request
  const mockResult = {
    ...data,
    coding: 'c.2637 A>G',
    protein: 'p.Pro871Leu'
  };
  return mockResult;
}

export function addResult (data) {
  // -> API request
  const mockResult = {
    ...data,
    id: Math.random().toString(),
    chrPosition: `Chr${data.chromosome}:${data.position}`,
    alleleChange: `${data.alleleReference} > ${data.alleleAlternative}`,
    transcript: 'NM_939778.7',
    zygosity: "",
    variantClassGermline: "unclassified",
    variantClassSomatic: "unclassified",
  };
  return mockResult;
}

export function editResult (data) {
  // -> API request
  const mockResult = {
    ...data,
    chrPosition: `Chr${data.chromosome}:${data.position}`,
    alleleChange: `${data.alleleReference} > ${data.alleleAlternative}`,
    transcript: 'NM_939778.7',
  };
  return mockResult;
}

export function fetchTestDataApi(id) {
  return axios.get(`/api/tests/${id.payload}`);
}

export function fetchVariantDataApi(data) {
  const { testId, variantId } = data.payload;
  return axios.get(`/api/tests/${testId}/variants/${variantId}/`);
}

export function sendVariantClassApi(data) {
  const { testId, variantId, name, value } = data.payload;
  return axios.patch(`/api/tests/${testId}/variants/${variantId}`, {
    [name]: value
  });
}

export function addEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId },
    data
  } = action.payload;

  return axios.post(`/api/tests/${testId}/variants/${variantId}/evidences`, {
    data
  });
}

export function editEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId },
    data
  } = action.payload;

  return axios.put(`/api/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`, {
    data
  });
}

export function fetchEvidenceDataApi(action) {
  const { testId, variantId } = action.payload;
  return axios.get(`/api/tests/${testId}/variants/${variantId}/evidences`);
}


// export function handleZygosityApi(data) {
//
//   const { item, value, testId } = data.payload;
//
//   console.log(item, value, testId);
//
//   return axios.patch(`/api/tests/${testId}/variants/${item.id}`, {
//     zygosity: value
//   });
// }
