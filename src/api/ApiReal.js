import axios from 'axios';

export default {
  fetchBAMFile (BAMFileUrl) {
    return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
  },
  goToChrPositionIgv (chrPosition) {
    return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
  }
};
