export default {
  fetchBAMFile() {
    const apiResponse = process?.env?.FETCH_BEM_FILE_RESPONSE;
    if (apiResponse !== undefined) {
      if (apiResponse === 'error') {
        throw new Error();
      }
      return apiResponse;
    }
    return true;
  },
  goToChrPositionIgv() {
    const apiResponse = process?.env?.GO_TO_CHR_POSITION_IGV_RESPONSE;
    if (apiResponse !== undefined) {
      if (apiResponse === 'error') {
        throw new Error();
      }
      return apiResponse;
    }
    return true;
  }
};
