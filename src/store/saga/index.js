import {
  // takeEvery,
  takeLatest
} from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchBAMFileGenerator
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileGenerator);
}
