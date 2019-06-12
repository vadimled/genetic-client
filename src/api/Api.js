import axios from 'axios';

export const fetchBAMFile = (BAMFileUrl) => {
  return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
};
