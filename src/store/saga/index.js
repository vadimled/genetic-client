import { all, takeEvery, takeLatest } from "redux-saga/effects";
import types from "Store/actionsTypes";

import {
  fetchTableDataSaga,
  fetchTestMetadataSaga,
  fetchBAMFileSaga,
  goToChrPositionIgvSaga,
  sendForConfirmationSaga,
  resultConfigLoadHgvsSaga,
  resultConfigAddResultSaga,
  resultConfigEditResultSaga,
  fetchVariantMetadataDataSaga,
  sendVariantClassSaga,
  handleZygositySaga,
  fetchTestsSaga,
  addEvidenceEntrySaga,
  editEvidenceEntrySaga,
  fetchEvidenceDataSaga,
  deleteEvidenceEntrySaga,
  fetchClassificationHistorySaga,
  setNotesSaga,
  handleConfirmationStatusSaga,
  exportTableSaga,
  setTumorInfoSaga,
  saveUserPreferencesFiltersSaga,
  saveUserPreferencesSortingSaga,
  fetchUserPreferencesSaga,
  fetchConfirmationMetadataSaga,
  applyConfirmationSaga,
  fetchFinalReportActionableDataSaga,
  deleteFinalReportActionableRowSaga
} from "./sagas";

export function* watchSaga() {
  yield takeLatest(types.FETCH_BAM_FILE, fetchBAMFileSaga);
  yield takeLatest(types.GO_TO_CHR_POSITION_IGV, goToChrPositionIgvSaga);
  yield takeLatest(types.SEND_FOR_CONFIRMATION, sendForConfirmationSaga);
  yield takeEvery(types.HANDLE_ZYGOSITY, handleZygositySaga);
  yield takeEvery(types.SET_NOTES, setNotesSaga);
  yield takeEvery(types.HANDLE_CONFIRMATION_STATUS, handleConfirmationStatusSaga);
  yield takeLatest(
    types.RESULT_CONFIG_LOAD_HGVS,
    resultConfigLoadHgvsSaga
  );
  yield takeLatest(
    types.RESULT_CONFIG_ADD_RESULT,
    resultConfigAddResultSaga
  );
  yield takeLatest(
    types.RESULT_CONFIG_EDIT_RESULT,
    resultConfigEditResultSaga
  );
  yield takeLatest(types.SEND_VARIANT_CLASS, sendVariantClassSaga);
  yield takeEvery(types.FETCH_TESTS, fetchTestsSaga);
  yield takeLatest(types.ADD_EVIDENCE_ENTRY, addEvidenceEntrySaga);
  yield takeLatest(types.EDIT_EVIDENCE_ENTRY, editEvidenceEntrySaga);
  yield takeLatest(types.DELETE_EVIDENCE_ENTRY, deleteEvidenceEntrySaga);
  yield takeEvery(types.FETCH_TEST_METADATA, fetchTestMetadataSaga);
  yield takeEvery(types.FETCH_TABLE_DATA, fetchTableDataSaga);
  yield all([
    takeEvery(types.FETCH_VARIANT_METADATA, fetchVariantMetadataDataSaga),
    takeEvery(types.FETCH_EVIDENCE_DATA, fetchEvidenceDataSaga),
    takeEvery(types.FETCH_CLASSIFICATION_HISTORY, fetchClassificationHistorySaga)
  ]);
  yield takeEvery(types.EXPORT_TABLE, exportTableSaga);
  yield takeEvery(types.SET_TUMOR_INFO, setTumorInfoSaga);

  yield takeEvery(types.SAVE_USER_PREFERENCES_FILTERS, saveUserPreferencesFiltersSaga);
  yield takeEvery(types.SAVE_USER_PREFERENCES_SORTING, saveUserPreferencesSortingSaga);
  yield takeEvery(types.FETCH_USER_PREFERENCES, fetchUserPreferencesSaga);

  yield takeEvery(types.FETCH_CONFIRMATION_PAGE_METADATA, fetchConfirmationMetadataSaga);
  yield takeEvery(types.APPLY_CONFIRMATION, applyConfirmationSaga);
  
  yield takeEvery(types.FETCH_FINAL_REPORT_ACTIONABLE_DATA, fetchFinalReportActionableDataSaga);
  yield takeEvery(types.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE, deleteFinalReportActionableRowSaga);
}
