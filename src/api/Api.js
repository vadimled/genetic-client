import axios from 'axios';

export const ApiMock = {
  fetchBAMFile() {
    return true;
  },
  goToChrPositionIgv() {
    return true;
  }
};

export const ApiReal = {
  fetchBAMFile (BAMFileUrl) {
    return axios.get(`http://localhost:60151/load?file=${BAMFileUrl}`);
  },
  goToChrPositionIgv (chrPosition) {
    return axios.get(`http://localhost:60151/goto?locus=${chrPosition}`);
  }
};

export default process?.env?.NODE_ENV === 'test' ? ApiMock : ApiReal;
