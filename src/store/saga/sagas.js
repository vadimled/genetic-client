import { call, put, delay } from "redux-saga/effects";
// import types from "Store/actionsTypes";
import {
  fetchBAMFile,
  goToChrPositionIgv,
} from "Api";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
  setIgvLastQuery,
} from 'Actions/igvActions';

export function* fetchBAMFileGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: 'BAM_FILE', data: data.payload }));
    yield put(setFetchBAMFileStatus(1));
    yield call(fetchBAMFile, data.payload);
    yield delay(1000);
    yield put(setFetchBAMFileStatus(2));
    yield delay(2000);
    yield put(setFetchBAMFileStatus(3));
    yield delay(3000);
    yield put(setFetchBAMFileStatus(null));
    yield put(setIgvLastQuery(null));
  } catch (e) {
    console.log("e", e);
    yield put(handleIgvAlertShow(true));
  }
}
export function* goToChrPositionIgvGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: 'CHR_POS', data: data.payload }));
    yield call(goToChrPositionIgv, data.payload);
    yield put(setIgvLastQuery(null));
  } catch (e) {
    console.log("e", e);
    yield put(handleIgvAlertShow(true));
  }
}
