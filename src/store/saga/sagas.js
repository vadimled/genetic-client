import { call, put, delay } from "redux-saga/effects";
import * as Sentry from "@sentry/browser";
import {
  ALERT_STATUSES,
  ALLELE_TYPES,
  VALIDATION_FAILD_FIELDS,
  ZYGOSITY,
  VARIANT_CLASS_GERMLINE,
  VARIANT_CLASS_SOMATIC
} from 'Utils/constants';
import {
  fetchBAMFile,
  goToChrPositionIgv,
  loadHgvs,
  addResult,
  editResult,
  fetchCaseDataApi,
  fetchVariantDataApi
} from "Api/index";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
  setIgvLastQuery
} from "Actions/igvActions";
import {
  applyConfirmation,
  tableDataAddResult,
  tableDataEditResult,
  setDataToStore
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
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { setCaseData } from "Actions/testActions";
import { setMutationType } from "Actions/variantsActions";
import { setVariantData, setZygosityType } from "Actions/variantPageActions";
import { zygosityType } from "Utils/helpers";

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

export function* fetchBAMFileGenerator(data) {
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
      scope.setFingerprint(["fetchBAMFileGenerator"]);
      Sentry.captureException(e);
    });
    yield consoleErrors(e);
    yield put(handleIgvAlertShow(true));
  }
}

export function* goToChrPositionIgvGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: "CHR_POS", data: data.payload }));
    yield call(goToChrPositionIgv, data.payload);
    yield put(setIgvLastQuery(null));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["goToChrPositionIgvGenerator"]);
      Sentry.captureException(e);
    });
    yield consoleErrors(e);
    yield put(handleIgvAlertShow(true));
  }
}

export function* sendForConfirmationGenerator(data) {
  try {
    // -> API request

    yield confirmationDataValidation(data.payload);

    yield put(applyConfirmation(data.payload));
    yield put(setConfirmationData(null));
    yield put(handleOnConfirmation(false)); // hide confirmation popup
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["sendForConfirmationGenerator"]);
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

export function* resultConfigLoadHgvsGenerator(data) {
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

export function* resultConfigAddResultGenerator(data) {
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

export function* resultConfigEditResultGenerator(data) {
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

export function* fetchData() {
  try {
    const result = generateDNAVariantTableMockData(2000);

    for(let item in result){

      const record = result[item];

      // if(record?.variantClassGermline === "ben" && record?.variantClassSomatic === "tier4"){
      //   record.priority = 14;
      // }
      // else if(record?.variantClassGermline === "path"){
      //   record.priority = 1;
      // }
      // else {
      //   record.priority = 7;
      // }

      if(record.zygosity === ZYGOSITY.notDefined.value){
        if((record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
          && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value)
          || (record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
            && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value)
          || (record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
            && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value)
        ){
          record.priority = 10;
        }
        else if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
          && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
          record.priority = 5;
        }
        else if(
          [
            VARIANT_CLASS_GERMLINE.path.value,
            VARIANT_CLASS_GERMLINE.lpath.value,
            VARIANT_CLASS_GERMLINE.vus.value,
            VARIANT_CLASS_GERMLINE.lben.value
          ].includes(record.variantClassGermline)
          || [
            VARIANT_CLASS_SOMATIC.tier1.value,
            VARIANT_CLASS_SOMATIC.tier2.value,
            VARIANT_CLASS_SOMATIC.tier3.value
          ].includes(record.variantClassSomatic)){
          record.priority = 3;
        }
        else {
          record.priority = 7;
        }
      }
      else if(
        [
          ZYGOSITY.unknown.value,
          ZYGOSITY.insignificant.value,
          ZYGOSITY.notReal.value
        ].includes(record?.zygosity)){
        if(record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
          && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
          record.priority = 31;
        }
        else if (record.variantClassGermline === VARIANT_CLASS_GERMLINE.unclassified.value
          && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
          record.priority = 32;
        }
        else if (record.variantClassGermline === VARIANT_CLASS_GERMLINE.ben.value
          && record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
          record.priority = 33;
        }
        else {
          record.priority = 7;
        }
      }
      else if(record.zygosity === ZYGOSITY.somatic.value){
        if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.tier4.value){
          record.priority = 38;
        }
        else if(record.variantClassSomatic === VARIANT_CLASS_SOMATIC.unclassified.value){
          record.priority = 21;
        }
        else {
          record.priority = 7;
        }
      }
      else {
        record.priority = 7;
      }


      // if(["homo", "hetro", "hemi", "somatic"].includes(record?.zygosity)){
      //   record.priority = 1;
      // }


    }

    yield put(setDataToStore(result));
    // yield put(setLoading(false));
  } catch (error) {
    console.log("---error: ", error);
  }
}

export function* fetchCaseDataGenerator(id) {
  try {
    const result = yield call(fetchCaseDataApi, id);
    yield put(setCaseData(result?.data));
    yield put(setMutationType(result?.data?.mutation_types[0]));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchCaseDataGenerator"]);
      Sentry.captureException(e);
    });
  }
}

export function* fetchVariantDataGenerator() {
  try {
    const
      result = yield call(fetchVariantDataApi),
      newData = zygosityType(result?.data),
      { currentZygosity } = newData;

    yield put(setVariantData(newData));

    yield put(setZygosityType(currentZygosity.toLowerCase()));
  } catch (e) {
    Sentry.withScope(scope => {
      scope.setFingerprint(["fetchVariantDataGenerator"]);
      Sentry.captureException(e);
    });
  }
}
