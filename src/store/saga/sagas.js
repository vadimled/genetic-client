import { call, put, delay } from "redux-saga/effects";
import * as Sentry from "@sentry/browser";
import {
  ALERT_STATUSES,
  ALLELE_TYPES,
  VALIDATION_FAILD_FIELDS,
  TEXTS
} from "Utils/constants";
import {
  fetchBAMFile,
  goToChrPositionIgv,
  loadHgvs,
  addResult,
  editResult,
  fetchTestMetadataApi,
  fetchVariantMetadataDataApi,
  updateVariantApi,
  fetchTestsApi,
  addEvidenceEntryApi,
  editEvidenceEntryApi,
  fetchEvidenceDataApi,
  deleteEvidenceEntryApi,
  fetchTableDataApi,
  exportTableApi,
  setTumorInfoApi,
  fetchConfirmationMetadataApi
} from "Api/index";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
  setIgvLastQuery,
  setBamUrlToStore
} from "Actions/igvActions";
import {
  applyConfirmation,
  tableDataAddResult,
  tableDataEditResult,
  setParsedDataToStore,
  setServerDataToStore,
  setTableReducerLoading,
  setConfirmationStatusToStore,
  updateVariantInTableData
} from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import { setAlert } from "Actions/alertActions";
import {
  handleResultConfigCoding,
  handleResultConfigProtein,
  handleResultConfigValidationFaildFields,
  handleResultConfigIsHgvsLoaded,
  resultConfigSetInitialState
} from "Actions/resultConfigActions";
import { setTestData, setLoading } from "Actions/testActions";
import { setTestsToStore, setTestsLoading } from "Actions/testsActions";
import { setMutationType } from "Actions/variantsActions";
import {
  setVariantMetadataData,
  setNewEvidenceEntry,
  setEditedEvidenceEntry,
  setEvidenceData,
  deleteEvidenceFromStore,
  setHistoryTableData
} from "Actions/variantPageActions";
import {
  // setPriority,
  getEvidenceData,
  parseTableData,
  parseTableDataObj,
  createResourcesLinks,
  getHistoryTableData,
  getCurrentEvidenceTabKey
} from "Utils/helpers";
import {
  setClassificationHistoryToStore,
  setServerVariantMetadataToStore,
  setExternalResources
} from "Actions/variantPageActions";
import { fetchClassificationHistoryApi } from "../../api";
import {
  cleanEvidenceActionData,
  setCurrentEvidenceTab
} from "Actions/evidenceConfigActions";
import { setConfirmationPageMetadataToStore } from "Actions/confirmationPageActions";

function* onDelay(time) {
  process?.env?.NODE_ENV === "test" ? yield true : yield delay(time);
}

function* consoleErrors(e) {
  process?.env?.NODE_ENV === "test" ? yield true : console.log("e", e);
}

function* confirmationDataValidation(data) {
  try {
    let alertData = null;

    data.forEach(item => {
      item.additionConfirmationData.forEach(cRow => {
        cRow.validationFaildFields = [];
        if (!cRow.primer) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: "Data is missing",
            message: "Please fill the Primer field"
          };
          cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.primer);
        }
        if (!/^[\d]*$/.test(cRow.primer)) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: "Data is not valid",
            message: "Primer field must be a number"
          };
          cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.primer);
        }
        if (!cRow.fragmentSize) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: "Data is missing",
            message: "Please fill the Fragment size field"
          };
          cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.fragmentSize);
        }
        if (!/^[\d]*$/.test(cRow.fragmentSize)) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: "Data is not valid",
            message: "Fragment size field must be a number"
          };
          cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.fragmentSize);
        }
      });
    });

    if (alertData) {
      // apply new data with validation errors
      yield put(setConfirmationData(data));
      // show appropriate alert
      yield put(setAlert(alertData));

      throw new Error("Validation error");
    }
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["confirmationDataValidation"]);
      Sentry.captureException(e);
    });

    consoleErrors(e);
    throw new Error(e);
  }
}

function* resultConfigValidation(data, isOnAddResult) {
  try {
    let validationFaildFields = [];
    const {
      gene,
      chromosome,
      position,
      alleleType,
      alleleReference,
      alleleAlternative,
      isHgvsLoaded
    } = data;

    if (!gene) {
      validationFaildFields.push(VALIDATION_FAILD_FIELDS.gene);
    }
    if (!chromosome) {
      validationFaildFields.push(VALIDATION_FAILD_FIELDS.chromosome);
    }
    if (position === null || position === undefined || position === "") {
      validationFaildFields.push(VALIDATION_FAILD_FIELDS.position);
    }
    if (alleleType === ALLELE_TYPES.change.value) {
      if (!alleleReference) {
        validationFaildFields.push(VALIDATION_FAILD_FIELDS.alleleReference);
      }
      if (!alleleAlternative) {
        validationFaildFields.push(VALIDATION_FAILD_FIELDS.alleleAlternative);
      }
    } else if (alleleType === ALLELE_TYPES.insertion.value) {
      if (!alleleAlternative) {
        validationFaildFields.push(VALIDATION_FAILD_FIELDS.alleleAlternative);
      }
    } else if (alleleType === ALLELE_TYPES.deletion.value) {
      if (!alleleReference) {
        validationFaildFields.push(VALIDATION_FAILD_FIELDS.alleleReference);
      }
    }

    if (isOnAddResult) {
      if (!isHgvsLoaded) {
        validationFaildFields.push(VALIDATION_FAILD_FIELDS.loadHgvs);
      }
    }

    if (validationFaildFields.length) {
      // set validation faild fields
      yield put(handleResultConfigValidationFaildFields(validationFaildFields));

      throw new Error("Validation error");
    }
  } catch (e) {
    consoleErrors(e);
    throw new Error(e);
  }
}

export function* fetchBAMFileSaga(data) {
  try {
    yield put(setIgvLastQuery({ type: "BAM_FILE", data: data.payload }));
    yield put(setFetchBAMFileStatus(1));
    yield call(fetchBAMFile, data.payload);
    yield onDelay(1000);
    yield put(setFetchBAMFileStatus(2));
    yield onDelay(2000);
    yield put(setFetchBAMFileStatus(3));
    yield onDelay(3000);
    yield put(setFetchBAMFileStatus(null));
    yield put(setIgvLastQuery(null));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchBAMFileSaga"]);
      Sentry.captureException(e);
    });
    yield consoleErrors(e);
    yield put(handleIgvAlertShow(true));
  }
}

export function* goToChrPositionIgvSaga(data) {
  try {
    yield put(setLoading(true));
    yield put(setIgvLastQuery({ type: "CHR_POS", data: data.payload }));
    yield call(goToChrPositionIgv, data.payload);
    yield put(setIgvLastQuery(null));
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["goToChrPositionIgvSaga"]);
      Sentry.captureException(e);
    });
    yield consoleErrors(e);
    yield put(handleIgvAlertShow(true));
    yield put(setLoading(false));
  }
}

export function* sendForConfirmationSaga(data) {
  try {
    // -> API request

    yield confirmationDataValidation(data.payload);

    yield put(applyConfirmation(data.payload));
    yield put(setConfirmationData(null));
    yield put(handleOnConfirmation(false)); // hide confirmation popup
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["sendForConfirmationSaga"]);
      Sentry.captureException(e);
    });
    if (e.message !== "Error: Validation error") {
      yield put(
        setAlert({
          status: ALERT_STATUSES.error,
          title: "Sending email is failed,",
          message: "Please try again."
        })
      );
      yield consoleErrors(e);
    }
  }
}

export function* resultConfigLoadHgvsSaga(data) {
  try {
    yield resultConfigValidation(data.payload, false);

    const result = yield call(loadHgvs, data.payload);

    yield put(handleResultConfigCoding(result.coding));
    yield put(handleResultConfigProtein(result.protein));
    yield put(handleResultConfigIsHgvsLoaded(true));
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield consoleErrors(e);
    }
  }
}

export function* resultConfigAddResultSaga(data) {
  try {
    yield resultConfigValidation(data.payload, true);

    const result = yield call(addResult, data.payload);

    yield put(tableDataAddResult(result));
    yield put(resultConfigSetInitialState());
    yield put(
      setAlert({
        status: ALERT_STATUSES.success,
        title: "New result added."
      })
    );
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield consoleErrors(e);
    }
  }
}

export function* resultConfigEditResultSaga(data) {
  try {
    yield resultConfigValidation(data.payload, true);

    const result = yield call(editResult, data.payload);

    yield put(tableDataEditResult(result));
    yield put(resultConfigSetInitialState());
    yield put(
      setAlert({
        status: ALERT_STATUSES.success,
        title: "Result updated."
      })
    );
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield consoleErrors(e);
    }
  }
}

export function* fetchTestsSaga() {
  try {
    yield put(setTestsLoading(true));

    const result = yield call(fetchTestsApi);

    if (result?.status === 200) {
      yield put(setTestsToStore(result.data));
    }

    yield put(setTestsLoading(false));
  } catch (error) {
    yield put(setTestsLoading(false));
  }
}

export function* handleZygositySaga(data) {
  try {
    const result = yield call(updateVariantApi, data);

    if (result?.status === 200) {
      const parsedData = parseTableDataObj(result.data);
      yield put(updateVariantInTableData(parsedData));
    }
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["handleZygositySaga"]);
      Sentry.captureException(e);
    });
  }
}

export function* setNotesSaga(data) {
  const newData = { ...data },
    { notes, testId, variantId } = data.payload;

  newData.payload = {
    value: notes,
    name: "notes",
    testId,
    variantId
  };
  try {
    yield put(setLoading(true));
    const result = yield call(updateVariantApi, newData);
    if (result?.status === 200) {
      const parsedData = parseTableDataObj(result.data);
      yield put(updateVariantInTableData(parsedData));
    }
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setNotesSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* fetchTestMetadataSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchTestMetadataApi, action);
    yield put(setTestData(data));
    yield put(setMutationType(data?.mutation_types[0]));
    yield put(setBamUrlToStore(data));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchTestMetadataSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* fetchTableDataSaga(action) {
  try {
    const result = yield call(fetchTableDataApi, action);
    yield put(setServerDataToStore(result?.data));
    const newData = parseTableData(result?.data);

    yield put(setParsedDataToStore(newData));
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchTableDataSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* setTumorInfoSaga(action) {
  try {
    yield put(setLoading(true));
    const { status, data } = yield call(setTumorInfoApi, action);
    if (status === 200) {
      yield put(setTestData(data));
    }
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setTumorInfoSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

// --------------- VARIANT PAGE ---------------
export function* fetchVariantMetadataDataSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchVariantMetadataDataApi, action);
    yield put(setServerVariantMetadataToStore(data));
    const newData = parseTableDataObj(data);
    yield put(setVariantMetadataData(newData));
    yield put(setExternalResources(createResourcesLinks(data)));
  } catch (e) {
    yield put(setLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchVariantMetadataDataSaga"]);
      Sentry.captureException(e);
    });
  }
}

export function* sendVariantClassSaga(action) {
  try {
    const { status, data } = yield call(updateVariantApi, action);
    if (status === 200) {
      yield put(setServerVariantMetadataToStore(data));
      const newData = parseTableDataObj(data);
      yield put(setVariantMetadataData(newData));
      yield put(setExternalResources(createResourcesLinks(data)));
    }
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["sendVariantClassSaga"]);
      Sentry.captureException(e);
    });
  }
}

export function* fetchEvidenceDataSaga(data) {
  try {
    yield put(setLoading(true));
    const result = yield call(fetchEvidenceDataApi, data),
      newData = getEvidenceData(result.data);
    yield put(setEvidenceData(newData));
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchEvidenceDataSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* addEvidenceEntrySaga(action) {
  try {
    yield put(setLoading(true));
    const result = yield call(addEvidenceEntryApi, action);
    yield put(setNewEvidenceEntry(result.data));
    yield put(setCurrentEvidenceTab(getCurrentEvidenceTabKey(action.payload)));
    yield put(cleanEvidenceActionData());
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["addEvidenceEntrySaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* editEvidenceEntrySaga(action) {
  try {
    yield put(setLoading(true));
    const result = yield call(editEvidenceEntryApi, action);
    yield put(setEditedEvidenceEntry(result.data));
    yield put(setCurrentEvidenceTab(getCurrentEvidenceTabKey(action.payload)));
    yield put(cleanEvidenceActionData());
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["editEvidenceEntrySaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* deleteEvidenceEntrySaga(action) {
  try {
    yield put(setLoading(true));
    const result = yield call(deleteEvidenceEntryApi, action);
    if (result?.status === 200) {
      yield put(cleanEvidenceActionData());
      yield put(deleteEvidenceFromStore(action.payload));
    }
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["deleteEvidenceEntrySaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
  }
}

export function* fetchClassificationHistorySaga(action) {
  try {
    yield put(setLoading(true));
    const result = yield call(fetchClassificationHistoryApi, action);
    if (result?.status === 200) {
      yield put(setClassificationHistoryToStore(result.data));
      yield put(
        setHistoryTableData({
          data: getHistoryTableData(result.data, TEXTS.somatic),
          type: TEXTS.somatic
        })
      );
      yield put(
        setHistoryTableData({
          data: getHistoryTableData(result.data, TEXTS.germline),
          type: TEXTS.germline
        })
      );
    }
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchClassificationHistorySaga"]);
      Sentry.captureException(error);
    });
  }
}

export function* handleConfirmationStatusSaga(data) {
  const newData = Object.assign({}, data);

  newData.payload = {
    value: data.payload.status,
    name: "status"
  };

  try {
    yield put(setTableReducerLoading(true));

    const result = yield call(updateVariantApi, newData);

    const variant = result.data;

    if (result?.status === 200) {
      yield put(
        setConfirmationStatusToStore({
          // check why notes does not return from server
          ...data.payload,
          record: variant
        })
      );
    }

    yield put(setTableReducerLoading(false));
  } catch (e) {
    yield put(setTableReducerLoading(false));
    console.log("-err: ", e);
  }
}

export function* exportTableSaga(action) {
  const testId = action.payload;

  try {
    yield put(setTableReducerLoading(true));

    const result = yield call(exportTableApi, testId);

    if (result.status === 200) {
      yield put(setTableReducerLoading(false));
    }
  } catch (e) {
    yield put(setTableReducerLoading(false));
    console.log("-err: ", e);
  }
}

// --------------- CONFIRMATION PAGE ---------------
export function* fetchConfirmationMetadataSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchConfirmationMetadataApi, action);
    console.log(data);
    yield put(setConfirmationPageMetadataToStore(data));
  } catch (e) {
    yield put(setLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchConfirmationMetadataSaga"]);
      Sentry.captureException(e);
    });
  }
}
