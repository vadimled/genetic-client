import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock =
  process.env.REACT_APP_AXIOS_MOCK_ENABLED === "true" &&
  new MockAdapter(axios, { delayResponse: 2000 });

export function fetchBAMFile(BAMFileUrl) {
  mock && mock.onGet(`http://localhost:60151/load?file=${BAMFileUrl}`).reply(200, {
    users: [{ id: 1, name: "John Smith" }]
  });
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
    transcript: "NM_939778.7"
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
