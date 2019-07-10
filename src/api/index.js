import axios from 'axios';

export function fetchBAMFile (BAMFileUrl) {
  return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
}

export function goToChrPositionIgv (chrPosition) {
  return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
}

export function loadHgvs (data) {
  console.log("data", data);
  // -> API request
  const mockResult = {
    coding: 'c.2637 A>G',
    proteint: 'p.Pro871Leu'
  };
  return Promise.resolve(mockResult);
}
