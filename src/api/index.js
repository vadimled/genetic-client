import axios from "axios";
import "Utils/axios-mock";
import config from "../config";

const {API_URL} = config;

axios.defaults.baseURL = API_URL;

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
  return axios.get(`/api/tests/${testId}/variant/${variantId}`);
}

export function updateVariantApi(data) {

  const temporaryUrl = "tests/5d4adfb6a1e39700120ad5f2/variants/5d4adfb6a1e39700120ad5f3";

  const { name, value } = data.payload;
  return axios.patch(temporaryUrl, {
    [name]: value
  });
}

export function fetchTestsApi() {
  return axios.get(`/tests/`);
}

export function fetchClassificationHistoryApi() {

  console.log("--here");

  return axios.get(`/class-history`);
}





