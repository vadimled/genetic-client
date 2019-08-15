import axios from "axios";
import axios_based from "./axios-base";
import "Utils/axios-mock";

const isMock = process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true";
console.log("isMock = ", isMock);

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
  return !isMock
    ? axios_based.get(`/tests/${id.payload}`)
    : axios.get(`/api/tests/${id.payload}`);
}

export function fetchVariantDataApi(data) {
  const { testId, variantId } = data.payload;
  return !isMock
    ? axios_based.get(`/tests/${testId}/variants/${variantId}/`)
    : axios.get(`/api/tests/${testId}/variants/${variantId}/`);
}

export function updateVariantApi(data) {
  const temporaryUrlMock =
      "/api/tests/5d4adfb6a1e39700120ad5f2/variants/5d4adfb6a1e39700120ad5f3",
    temporaryUrl =
      "/tests/5d4adfb6a1e39700120ad5f2/variants/5d4adfb6a1e39700120ad5f3";

  const { name, value } = data.payload;

  return !isMock
    ? axios_based.patch(temporaryUrl, {
      [name]: value
    })
    : axios.patch(temporaryUrlMock, {
      [name]: value
    });
}

export function fetchTestsApi() {
  return axios_based.get(`/tests/`);
}

export function addEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId },
    data
  } = action.payload;

  return !isMock
    ? axios_based.post(`/tests/${testId}/variants/${variantId}/evidences`, {
      data
    })
    : axios.post(`/api/tests/${testId}/variants/${variantId}/evidences`, {
      data
    });
}

export function editEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId },
    data
  } = action.payload;

  return !isMock
    ? axios_based.put(
      `/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`,
      {
        data
      }
    )
    : axios.put(
      `/api/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`,
      {
        data
      }
    );
}

export function deleteEvidenceEntryApi(action) {
  const {
    ids: { testId, variantId, evidenceId }
  } = action.payload;
  return !isMock
    ? axios_based.delete(
      `tests/${testId}/variants/${variantId}/evidences/${evidenceId}`
    ):
    axios.delete(
      `/api/tests/${testId}/variants/${variantId}/evidences/${evidenceId}`
    )  ;
}

export function fetchEvidenceDataApi(action) {
  const { testId, variantId } = action.payload;
  return !isMock
    ? axios_based.get(
      `/tests/${testId}/variants/${variantId}/evidences`
    ):
    axios.get(
      `/api/tests/${testId}/variants/${variantId}/evidences`
    )  ;
}
