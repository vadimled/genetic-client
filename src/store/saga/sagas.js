import { call, delay, put } from "redux-saga/effects";
import * as Sentry from "@sentry/browser";
import { ALERT_STATUSES, ALLELE_TYPES, DEFAULT_FILTERS, TEXTS, VALIDATION_FAILD_FIELDS } from "Utils/constants";
import {
  addEvidenceEntryApi,
  addResultApi,
  deleteEvidenceEntryApi,
  editEvidenceEntryApi,
  editResultApi,
  exportTableApi,
  fetchBAMFile,
  fetchClassificationHistoryApi,
  fetchConfirmationMetadataApi,
  fetchEvidenceDataApi,

  fetchTableDataApi,
  fetchTestMetadataApi,
  fetchTestsApi,
  fetchUserPreferencesApi,
  fetchVariantMetadataDataApi,
  goToChrPositionIgv,
  loadHgvsApi,
  sendVariantToConfirmation,
  // setTumorInfoApi,
  patchTestApi,
  updateUserPreferencesApi,
  updateVariantApi,

  getTestReportApi,
  fetchFinalReportVariantsApi,

  fetchActionableAlterationsApi,
  postAtionableAlterationsApi,
  deleteAtionableAlterationsApi,
  patchActionableAlterationsApi,
  patchActionableAlterationsDrugsApi,
  patchActionableAlterationsClinicalTrialsApi,

  fetchUncertainClinicalSignificanceApi,
  postUncertainClinicalSignificanceApi,
  deleteUncertainClinicalSignificanceApi,
} from "Api/index";
import {
  handleIgvAlertShow,
  setBamUrlToStore,
  setFetchBAMFileStatus,
  setIgvLastQuery
} from "Actions/igvActions";
import {
  applyConfirmation,
  applyConfirmationSuccess,
  fetchUserPreferences,
  setConfirmationStatusToStore,
  setParsedDataToStore,
  setServerDataToStore,
  setSort,
  setTableReducerLoading,
  tableDataAddResult,
  updateVariantInTableData
} from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import {
  setAlert
} from "Actions/alertActions";
import {
  handleResultConfigCoding,
  handleResultConfigIsHgvsLoaded,
  handleResultConfigProtein,
  handleResultConfigTranscript,
  handleResultConfigValidationFaildFields,
  resultConfigSetInitialState
} from "Actions/resultConfigActions";
import {
  setLoading,
  setTestData,
  setTumorInfoLoading
} from "Actions/testActions";
import {
  setTestsLoading,
  setTestsToStore
} from "Actions/testsActions";
import {
  setMutationType
} from "Actions/variantsActions";
import {
  deleteEvidenceFromStore,
  setClassificationHistoryToStore,
  setEditedEvidenceEntry,
  setEvidenceData,
  setExternalResources,
  setHistoryTableData,
  setNewEvidenceEntry,
  setServerVariantMetadataToStore,
  setVariantMetadataData
} from "Actions/variantPageActions";
import {
  createResourcesLinks,
  getConfirmationPageMetadata,
  getCurrentEvidenceTabKey,
  getEvidenceData,
  getHistoryTableData,
  parseTableData,
  parseTableDataObj
} from "Utils/helpers";
import {
  cleanEvidenceActionData,
  setCurrentEvidenceTab
} from "Actions/evidenceConfigActions";
import {
  setConfirmationPageMetadataToStore
} from "Actions/confirmationPageActions";
import {
  saveUserPreferencesFilters,
  setDefaultFilters
} from "Actions/filtersActions";
// import {
//   setVariantsDataToStore
// } from "Actions/finalReportAction";
import {
  deleteActionableAlterationFromStore,
  deleteUncertainClinicalSignificanceFromStore,
  setFinalReportUncertainClinicalSignificanceToStore,
  setActionableAlterations,
  setActionableAlterationExpandedInterpretationToStore,
  // setExpandedTextAreaContentSaved,
  setActionableAlterationDrugsDescriptionToStore,
  // setActionableAlterationDrugsDescriptionSaved,
  setActionableAlterationClinicalTrialToStore,
  setFinalReportDnaVariantsToStore,
} from "Actions/finalReportAction";

function* onDelay(time) {
  process?.env?.NODE_ENV === "test" ? yield true : yield delay(time);
}

function* handleErrors(e) {
  process?.env?.NODE_ENV === "test" ? yield true : console.error("e", e);
  let errorMessage = e.toString();
  if (e?.response?.data?.message) errorMessage = e.response.data.message;
  else if (e?.response?.data?.error) errorMessage = e.response.data.error;
  yield put(
    setAlert({
      status: ALERT_STATUSES.error,
      title: "Error",
      message: errorMessage
    })
  );
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

    handleErrors(e);
    throw new Error(e);
  }
}

function* resultConfigValidation(data, isOnAddOrEditResult) {
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

    if (isOnAddOrEditResult) {
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
    handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
    yield put(handleIgvAlertShow(true));
    yield put(setLoading(false));
  }
}

export function* sendForConfirmationSaga(data) {
  try {
    yield confirmationDataValidation(data.payload.variants);

    yield put(applyConfirmation(data.payload));
    yield put(setConfirmationData(null));
    yield put(handleOnConfirmation(false)); // hide confirmation popup
    yield put(
      setAlert({
        status: ALERT_STATUSES.success,
        title: "Form has been sent successfully",
      })
    );
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
    }
  }
}

export function* handleConfirmationStatusSaga(data) {
  const newData = Object.assign({}, data);
  newData.payload = {
    ...data.payload,
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
    yield handleErrors(e);
    Sentry.withScope(scope => {
      scope.setFingerprint(["handleConfirmationStatusSaga"]);
      Sentry.captureException(e);
    });
  }
}

export function* resultConfigLoadHgvsSaga(data) {
  try {
    yield resultConfigValidation(data.payload, false);

    const result = yield call(loadHgvsApi, data.payload);
    const resultData = result.data;
    let coding = resultData["snpeff.ann.hgvs_c"];
    let protein = resultData["snpeff.ann.hgvs_p"];
    let transcript = resultData["snpeff.ann.feature_id"];
    if (Array.isArray(coding)) coding = coding[0];
    if (Array.isArray(protein)) protein = protein[0];
    if (Array.isArray(transcript)) transcript = transcript[0];

    yield put(handleResultConfigCoding(coding));
    yield put(handleResultConfigProtein(protein));
    yield put(handleResultConfigTranscript(transcript));
    yield put(handleResultConfigIsHgvsLoaded(true));
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield handleErrors(e);
    }
  }
}

export function* resultConfigAddResultSaga(data) {
  try {
    yield resultConfigValidation(data.payload, true);

    const result = yield call(addResultApi, data.payload);

    const parsedData = parseTableDataObj(result.data);
    yield put(tableDataAddResult(parsedData));

    yield put(resultConfigSetInitialState());
    yield put(
      setAlert({
        status: ALERT_STATUSES.success,
        title: "New result added."
      })
    );
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield handleErrors(e);
    }
  }
}

export function* resultConfigEditResultSaga(data) {
  try {
    yield resultConfigValidation(data.payload, true);

    const result = yield call(editResultApi, data.payload);

    const parsedData = parseTableDataObj(result.data);
    yield put(updateVariantInTableData(parsedData));

    yield put(resultConfigSetInitialState());
    yield put(
      setAlert({
        status: ALERT_STATUSES.success,
        title: "Result updated."
      })
    );
  } catch (e) {
    if (e.message !== "Error: Validation error") {
      yield handleErrors(e);
    }
  }
}

export function* fetchTestsSaga() {
  try {
    yield put(setLoading(true));
    yield put(setTestsLoading(true));
    const result = yield call(fetchTestsApi);

    if (result?.status === 200) {
      yield put(setTestsToStore(result.data));
    }

    yield put(setTestsLoading(false));
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchTestsSaga"]);
      Sentry.captureException(e);
    });
    yield put(setTestsLoading(false));
    yield put(setLoading(false));
    yield handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
  }
}

export function* fetchTestMetadataSaga(action) {
  try {
    yield put(setLoading(true));
    const { payload } = action;
    const { data } = yield call(fetchTestMetadataApi, { id: payload });
    yield put(setTestData(data));
    yield put(setMutationType(data?.mutation_types[0]));
    yield put(setBamUrlToStore(data));
    yield put(
      fetchUserPreferences({ testId: data.id, panelType: data.panel_type })
    );
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchTestMetadataSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
    yield handleErrors(e);
  }
}

export function* fetchTableDataSaga(action) {
  try {
    const result = yield call(fetchTableDataApi, action);
    yield put(setServerDataToStore(result?.data));
    const newData = parseTableData(result?.data);
    console.log(newData);
    yield put(setParsedDataToStore(newData));
    yield put(setLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchTableDataSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
    yield handleErrors(e);
  }
}

export function* setTumorInfoSaga(action) {
  try {
    const { payload: { testId, name, value }} = action;

    yield put(setTumorInfoLoading(true));

    const { data } = yield call(patchTestApi, {
      testId,
      data: {
        tumor_info: {
          [name]: value
        }
      }
    });

    yield put(setTestData(data));
    yield put(setTumorInfoLoading(false));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setTumorInfoSaga"]);
      Sentry.captureException(e);
    });
    yield put(setTumorInfoLoading(false));
    yield handleErrors(e);
  }
}

export function* saveTestPhenotypeSaga(action) {
  try {
    const { payload: { testId, phenotype }} = action;

    yield put(setLoading(true));
    const { data } = yield call(patchTestApi, {
      testId,
      data: {
        phenotype
      }
    });

    yield put(setTestData(data));

    yield put(setLoading(false));
  }
  catch(err) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["saveTestPhenotypeSaga"]);
      Sentry.captureException(e);
    });
    yield put(setLoading(false));
    yield handleErrors(e);
  }
}

// --------------- VARIANT PAGE ---------------
export function* fetchVariantMetadataDataSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchVariantMetadataDataApi, action);
    console.log(data);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
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
    yield handleErrors(e);
  }
}

export function* fetchClassificationHistorySaga(action) {
  try {
    yield put(setLoading(true));
    const result = yield call(fetchClassificationHistoryApi, action);
    if (result?.status === 200) {
      const { testsList } = action.payload;
      yield put(setClassificationHistoryToStore(result.data));
      yield put(
        setHistoryTableData({
          data: getHistoryTableData(result.data, TEXTS.somatic, testsList),
          type: TEXTS.somatic
        })
      );
      yield put(
        setHistoryTableData({
          data: getHistoryTableData(result.data, TEXTS.germline, testsList),
          type: TEXTS.germline
        })
      );
    }
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchClassificationHistorySaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* exportTableSaga(action) {
  try {
    const testId = action.payload;

    yield put(setTableReducerLoading(true));
    yield call(exportTableApi, testId);

    // update test data
    const { data } = yield call(fetchTestMetadataApi, { id: testId });
    yield put(setTestData(data));

    yield put(setTableReducerLoading(false));
  } catch (e) {
    yield put(setTableReducerLoading(false));
    yield handleErrors(e);
  }
}

export function* saveUserPreferencesFiltersSaga({ payload }) {
  try {
    const { testId, filters } = payload;
    yield call(updateUserPreferencesApi, {
      testId,
      preferences: { filters }
    });
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["saveUserPreferencesFiltersSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* saveUserPreferencesSortingSaga({ payload }) {
  try {
    const { testId, sorting } = payload;
    yield call(updateUserPreferencesApi, {
      testId,
      preferences: { sorting }
    });
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["saveUserPreferencesSortingSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* fetchUserPreferencesSaga({ payload }) {
  try {
    const { testId, panelType } = payload;
    yield call(fetchUserPreferencesApi, { testId });
    // const {
    //   preferences: { filters, sorting }
    // } = response.data;
    let filters = {}, sorting = {}
    
    if (filters) {
      yield put(setDefaultFilters(filters));
    } else {
      yield put(setDefaultFilters(DEFAULT_FILTERS[panelType]));
      yield put(
        saveUserPreferencesFilters({
          testId,
          filters: DEFAULT_FILTERS[panelType]
        })
      );
    }

    if (sorting) {
      yield put(setSort(sorting));
    }
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchUserPreferencesSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* applyConfirmationSaga(data) {
  try {
    const newData = Object.assign({}, data);

    const variants = newData.payload.variants.map(variant => {
      return {
        variant_id: variant.id,
        primers: variant.additionConfirmationData.map(item => {
          return {
            primer: item.primer,
            fragment_size: item.fragmentSize,
            instructions: item.notes
          };
        })
      };
    });

    const { testId } = newData.payload;

    const dataToSend = {
      variants: variants,
      testId: testId
    };

    yield put(setTableReducerLoading(true));

    yield call(sendVariantToConfirmation, dataToSend);

    yield put(
      applyConfirmationSuccess(
        // check why notes does not return from server
        newData.payload.variants
      )
    );

    yield put(setTableReducerLoading(false));
  } catch (e) {
    yield put(setTableReducerLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["applyConfirmationSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

// --------------- CONFIRMATION PAGE ---------------
export function* fetchConfirmationMetadataSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchConfirmationMetadataApi, action);
    const newData = getConfirmationPageMetadata(data);
    yield put(setConfirmationPageMetadataToStore(newData));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchConfirmationMetadataSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

// --------------- FINAL REPORT PAGE ---------------

export function* getTestReportSaga(action) {
  console.log("action", action);
  try {
    const testId = action.payload;
    yield call(getTestReportApi, { testId });
  }
  catch(e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["getTestReportSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* fetchFinalReportVariantsSaga(action) {
  try {
    const { testId, mutation } = action.payload;
    const { data } = yield call(fetchFinalReportVariantsApi, {
      testId, mutation
    });
    const newData = parseTableData(data);

    yield put(setFinalReportDnaVariantsToStore(newData));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchFinalReportVariantsSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* postAtionableAlterationsSaga(action) {
  try {
    const { testId, mutation, variants_ids } = action.payload;
    const { data } = yield call(postAtionableAlterationsApi, { testId, mutation, variants_ids });
    yield put(setActionableAlterations(data));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["postAtionableAlterationsSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* fetchActionableAlterationsSaga(action) {
  try {
    const testId = action.payload;
    const { data } = yield call(fetchActionableAlterationsApi, { testId });
    yield put(setActionableAlterations(data));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchActionableAlterationsSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* deleteActionableAlterationSaga(action){
  try {
    yield call(deleteAtionableAlterationsApi, action);

    const { id } = action.payload;
    yield put(deleteActionableAlterationFromStore(id));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["deleteActionableAlterationSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* setActionableAlterationExpandedInterpretationSaga(action){
  try {
    const { testId, actionableAlterationId, field, value } = action.payload;
    yield put(setActionableAlterationExpandedInterpretationToStore(action.payload));

    yield call(patchActionableAlterationsApi, {
      testId,
      actionableAlterationId,
      body: {
        expanded_interpretation: {
          [field]: value
        }
      }
    });

    // yield put(setExpandedTextAreaContentSaved(action.payload?.name));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setActionableAlterationExpandedInterpretationSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }

}

export function* setActionableAlterationDrugsDescriptionSaga(action){
  try {
    const { testId, actionableAlterationId, actionablealterationDrugId, value } = action.payload;
    yield put(setActionableAlterationDrugsDescriptionToStore(action.payload));

    yield call(patchActionableAlterationsDrugsApi, {
      testId,
      actionableAlterationId,
      actionablealterationDrugId,
      body: {
        description: value
      }
    });

    // yield put(setActionableAlterationDrugsDescriptionSaved(action.payload?.id));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setActionableAlterationDrugsDescriptionSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* setActionableAlterationClinicalTrialSaga(action){
  try {
    const { testId, actionableAlterationId, actionablealterationClinicalTrialId, field, value } = action.payload;
    yield put(setActionableAlterationClinicalTrialToStore(action.payload));

    yield call(patchActionableAlterationsClinicalTrialsApi, {
      testId,
      actionableAlterationId,
      actionablealterationClinicalTrialId,
      body: {
        [field]: value
      }
    });
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["setActionableAlterationClinicalTrialSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* fetchUncertainClinicalSignificanceSaga(action) {
  try {
    const testId = action.payload;
    const { data } = yield call(fetchUncertainClinicalSignificanceApi, { testId });
    yield put(setFinalReportUncertainClinicalSignificanceToStore(data));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchUncertainClinicalSignificanceSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* postUncertainClinicalSignificanceSaga(action) {
  try {
    const { testId, mutation, variants_ids } = action.payload;
    const { data } = yield call(postUncertainClinicalSignificanceApi, { testId, mutation, variants_ids });
    yield put(setFinalReportUncertainClinicalSignificanceToStore(data));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["postUncertainClinicalSignificanceSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

export function* deleteUncertainClinicalSignificanceSaga(action){
  try {
    yield call(deleteUncertainClinicalSignificanceApi, action);

    const { id } = action.payload;
    yield put(deleteUncertainClinicalSignificanceFromStore(id));
  }
  catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["deleteUncertainClinicalSignificanceSaga"]);
      Sentry.captureException(e);
    });
    yield handleErrors(e);
  }
}

