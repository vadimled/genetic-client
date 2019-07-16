import { call, put, delay } from "redux-saga/effects";
import { ALERT_STATUSES } from 'Utils/constants';
import {
  fetchBAMFile,
  goToChrPositionIgv
} from "Api/index";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
  setIgvLastQuery,
} from "Actions/igvActions";
import {
  applyConfirmation,
} from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import {
  setAlert
} from "Actions/alertActions";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { setDataToStore } from "../actions/tableActions";
import { PRIORITY } from "../../utils/constants";


function* onDelay(time) {
  process?.env?.NODE_ENV === 'test'
    ? yield true
    : yield delay(time);
}

function* consoleErrors(e) {
  process?.env?.NODE_ENV === 'test'
    ? yield true
    : console.log("e", e);
}

function* confirmationDataValidation(data) {
  try {
    let alertData = null;

    data.forEach((item) => {
      item.additionConfirmationData.forEach((cRow) => {
        cRow.validationFaildFields = [];
        if (!cRow.primer) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: 'Data is missing',
            message: 'Please fill the Primer field'
          };
          cRow.validationFaildFields.push('primer');
        }
        if (!/^[\d]*$/.test(cRow.primer)) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: 'Data is not valid',
            message: 'Primer field must be a number'
          };
          cRow.validationFaildFields.push('primer');
        }
        if (!cRow.fragmentSize) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: 'Data is missing',
            message: 'Please fill the Fragment size field'
          };
          cRow.validationFaildFields.push('fragmentSize');
        }
        if (!/^[\d]*$/.test(cRow.fragmentSize)) {
          alertData = {
            status: ALERT_STATUSES.warning,
            title: 'Data is not valid',
            message: 'Fragment size field must be a number'
          };
          cRow.validationFaildFields.push('fragmentSize');
        }
      });
    });

    if (alertData) {
      // apply new data with validation errors
      yield put(setConfirmationData(data));
      // show appropriate alert
      yield put(setAlert(alertData));

      throw new Error('Validation error');
    }
  }
  catch(e) {
    consoleErrors(e);
    throw new Error(e);
  }
}

export function* fetchBAMFileGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: 'BAM_FILE', data: data.payload }));
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
    consoleErrors(e);
    yield put(handleIgvAlertShow(true));
  }
}
export function* goToChrPositionIgvGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: 'CHR_POS', data: data.payload }));
    yield call(goToChrPositionIgv, data.payload);
    yield put(setIgvLastQuery(null));
  } catch (e) {
    consoleErrors(e);
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
  }
  catch(e) {
    if (e.message !== 'Error: Validation error') {
      yield put(setAlert({
        status: ALERT_STATUSES.error,
        title: 'Sending email is failed,',
        message: 'Please try again.'
      }));
    }
    consoleErrors(e);
  }
}

export function* fetchData() {
  try {
    const result = generateDNAVariantTableMockData(200);

    // let res = result.map(record => record.priority = PRIORITY[record.variantClass])

    console.log(result);

    for(let record in result){
      // result[record].priority = PRIORITY[record.variantClass]
      // console.log(record);
      result[record].priority = PRIORITY[result[record].variantClass]
    }

    yield put(setDataToStore(result));
    // yield put(setLoading(false));
  } catch (error) {
    console.log("---error: ", error);
  }
}