import { call, put } from "redux-saga/effects";
import types from "Store/actionsTypes";
import {
  fetchBAMFile,
} from "Api";

export function* fetchBAMFileGenerator(data) {
  try {
    // yield put(setLoading(true));
    const response = yield call(fetchBAMFile, data.payload);
    const respData = yield response.json();
    console.log("respData", respData);
    // if (respData.apiKey) {
    //   setToken(respData.apiKey);
    // }
    // yield put(setLoginResultToStore(respData));
    // if (!_.has(respData, "message")) {
    //   document.location = "/";
    // }
    // yield put(setLoading(false));
  } catch (e) {
    console.log("e", e);
    yield put({ type: types.FETCH_BAM_FILE_FAILED, payload: e.message });
  }
}
