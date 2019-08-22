import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import reducers from "Store/reducers";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TestsPage from './TestsPage';
import { BrowserRouter as Router } from "react-router-dom";
import { fetchTests } from "Actions/testsActions";
import { waitForElement, wait } from "@testing-library/react";


const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { getByTestId, store, asFragment } = renderWithRedux(
    <Router>
      <TestsPage />
    </Router>,
    createStore(reducers, applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchSaga);


  wait(()=> store.dispatch(fetchTests()));

  return {store, getByTestId, asFragment};
};

describe('TestsPage', () => {
  xit("init", async () => {

    wait(()=> store.dispatch(fetchTests()));

    const { getByTestId, store } = initSteps();
    const test = await waitForElement(() => store.getState().tests.tests);

    console.log("--test: ", test);

    const testElem = await waitForElement(() => getByTestId('tests-5d4adfb6a1e39700120ad5f2'));

    console.log("--testElem: ", testElem);
  });

});
