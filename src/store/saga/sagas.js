import { call, put, delay } from "redux-saga/effects";
// import types from "Store/actionsTypes";
import {
  fetchBAMFile,
} from "Api";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
} from 'Actions/igvActions';

export function* fetchBAMFileGenerator(data) {
  try {
    yield put(setFetchBAMFileStatus(1));
    yield call(fetchBAMFile, data.payload);
    yield delay(1000);
    yield put(setFetchBAMFileStatus(2));
    yield delay(2000);
    yield put(setFetchBAMFileStatus(3));
    yield delay(3000);
    yield put(setFetchBAMFileStatus(null));
  } catch (e) {
    console.log("e", e);
    yield put(handleIgvAlertShow(true));
  }
}
