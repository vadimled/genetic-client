import {
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchTableData,
  fetchTestDataGenerator,
  fetchBAMFileGenerator,
  goToChrPositionIgvGenerator,
  sendForConfirmationGenerator,
  resultConfigLoadHgvsGenerator,
  resultConfigAddResultGenerator,
  resultConfigEditResultGenerator,
  fetchVariantDataGenerator,
  sendVariantClassGenerator,
  handleZygositySaga
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_TEST_DATA, fetchTestDataGenerator);
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileGenerator);
  yield takeLatest(types.GO_TO_CHR_POSITION_IGV, goToChrPositionIgvGenerator);
  yield takeLatest(types.SEND_FOR_CONFIRMATION, sendForConfirmationGenerator);
  yield takeEvery(types.FETCH_TABLE_DATA, fetchTableData);
  yield takeEvery(types.HANDLE_ZYGOSITY, handleZygositySaga);
  yield takeLatest(types.RESULT_CONFIG_LOAD_HGVS, resultConfigLoadHgvsGenerator);
  yield takeLatest(types.RESULT_CONFIG_ADD_RESULT, resultConfigAddResultGenerator);
  yield takeLatest(types.RESULT_CONFIG_EDIT_RESULT, resultConfigEditResultGenerator);
  yield takeLatest(types.FETCH_VARIANT_DATA, fetchVariantDataGenerator);
  yield takeLatest(types.SEND_VARIANT_CLASS, sendVariantClassGenerator);
}
