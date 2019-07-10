import {
  // takeEvery,
  takeLatest
} from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchBAMFileGenerator,
  goToChrPositionIgvGenerator,
  sendForConfirmationGenerator,
  resultConfigLoadHgvsGenerator,
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileGenerator);
  yield takeLatest(types.GO_TO_CHR_POSITION_IGV, goToChrPositionIgvGenerator);
  yield takeLatest(types.SEND_FOR_CONFIRMATION, sendForConfirmationGenerator);
  yield takeLatest(types.RESULT_CONFIG_LOAD_HGVS, resultConfigLoadHgvsGenerator);
}
