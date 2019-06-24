import { call, put, delay } from "redux-saga/effects";
// import types from "Store/actionsTypes";
import Api from "Api/index";
import {
  handleIgvAlertShow,
  setFetchBAMFileStatus,
  setIgvLastQuery,
} from 'Actions/igvActions';

function* onDelay(time) {
  process?.env?.NODE_ENV === 'test'
    ? yield true
    : yield delay(time);
}

export function* fetchBAMFileGenerator(data) {
  try {
    yield put(setIgvLastQuery({ type: 'BAM_FILE', data: data.payload }));
    yield put(setFetchBAMFileStatus(1));
    yield call(Api.fetchBAMFile, data.payload);
    yield onDelay(1000);
    yield put(setFetchBAMFileStatus(2));
    yield onDelay(2000);
    yield put(setFetchBAMFileStatus(3));
    yield onDelay(3000);
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
    yield call(Api.goToChrPositionIgv, data.payload);
    yield put(setIgvLastQuery(null));
  } catch (e) {
    console.log("e", e);
    yield put(handleIgvAlertShow(true));
  }
}
