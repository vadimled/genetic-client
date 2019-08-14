import {
  all,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchTableDataSaga,
  fetchTestMetadataGenerator,
  fetchBAMFileGenerator,
  goToChrPositionIgvGenerator,
  sendForConfirmationGenerator,
  resultConfigLoadHgvsGenerator,
  resultConfigAddResultGenerator,
  resultConfigEditResultGenerator,
  fetchVariantDataGenerator,
  sendVariantClassGenerator,
  handleZygositySaga,
  fetchTestsSaga,
  addEvidenceEntrySaga,
  editEvidenceEntrySaga,
  fetchEvidenceDataSaga,
  deleteEvidenceEntrySaga
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_TEST_METADATA, fetchTestMetadataGenerator);
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileGenerator);
  yield takeLatest(types.GO_TO_CHR_POSITION_IGV, goToChrPositionIgvGenerator);
  yield takeLatest(types.SEND_FOR_CONFIRMATION, sendForConfirmationGenerator);
  yield takeEvery(types.FETCH_TABLE_DATA, fetchTableDataSaga);
  yield takeEvery(types.HANDLE_ZYGOSITY, handleZygositySaga);
  yield takeLatest(types.RESULT_CONFIG_LOAD_HGVS, resultConfigLoadHgvsGenerator);
  yield takeLatest(types.RESULT_CONFIG_ADD_RESULT, resultConfigAddResultGenerator);
  yield takeLatest(types.RESULT_CONFIG_EDIT_RESULT, resultConfigEditResultGenerator);
  yield takeLatest(types.FETCH_VARIANT_DATA, fetchVariantDataGenerator);
  yield takeLatest(types.SEND_VARIANT_CLASS, sendVariantClassGenerator);
  yield takeEvery(types.FETCH_TESTS, fetchTestsSaga);
  yield takeLatest(types.ADD_EVIDENCE_ENTRY, addEvidenceEntrySaga);
  yield takeLatest(types.EDIT_EVIDENCE_ENTRY, editEvidenceEntrySaga);
  yield takeLatest(types.DELETE_EVIDENCE_ENTRY, deleteEvidenceEntrySaga);
  yield all([
    takeEvery(types.FETCH_VARIANT_DATA, fetchVariantDataGenerator),
    takeEvery(types.FETCH_EVIDENCE_DATA, fetchEvidenceDataSaga)
  ]);
}
