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

export function fetchCaseDataApi(id) {
  return axios.get(`/api/tests/${id}`);
}

export function fetchVariantDataApi(data) {
  return axios.get(`/api/tests/${data.testId}/variant/${data.variantId}`);
}

export function sendVariantClassApi(data) {
  return axios.patch(`/api/tests/${data.testId}/variant/${data.variantId}`, {
    [data.name]: data.value
  });
}
