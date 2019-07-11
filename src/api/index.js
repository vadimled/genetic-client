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
    protein: 'p.Pro871Leu'
  };
  return Promise.resolve(mockResult);
}

export function addResult (data) {
  console.log("data", data);
  // -> API request
  const mockResult = {
    id: Math.random().toString(),
    gene: data.gene,
    chrPosition: `Chr${data.chromosome}:${data.position}`,
    alleleChange: `${data.alleleReference} > ${data.alleleAlternative}`,
    transcript: 'NM_939778.7',
    vaf: data.vaf,
    coverage: data.coverage,
    coding: data.coding,
    protein: data.protein
  };
  return Promise.resolve(mockResult);
}
