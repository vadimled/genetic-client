import {
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchData,
  fetchBAMFileGenerator,
  goToChrPositionIgvGenerator,
  sendForConfirmationGenerator,
  resultConfigLoadHgvsGenerator,
  resultConfigAddResultGenerator,
  resultConfigEditResultGenerator,
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileGenerator);
  yield takeLatest(types.GO_TO_CHR_POSITION_IGV, goToChrPositionIgvGenerator);
  yield takeLatest(types.SEND_FOR_CONFIRMATION, sendForConfirmationGenerator);
  yield takeEvery(types.FETCH_DATA, fetchData);
  yield takeLatest(types.RESULT_CONFIG_LOAD_HGVS, resultConfigLoadHgvsGenerator);
  yield takeLatest(types.RESULT_CONFIG_ADD_RESULT, resultConfigAddResultGenerator);
  yield takeLatest(types.RESULT_CONFIG_EDIT_RESULT, resultConfigEditResultGenerator);
}
