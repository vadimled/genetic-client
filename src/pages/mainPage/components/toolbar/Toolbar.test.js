import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import Toolbar from './Toolbar';
import reducers from "Store/reducers";

import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";

afterEach(cleanup);

function renderWithRedux(
  component,
  store = createStore(reducers)
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}

describe('Toolbar', () => {
  it('open igv btn', () => {
    const { getByTestId } = renderWithRedux(<Toolbar />);
    const openIgvBtn = getByTestId('open-igv-btn');

    expect(openIgvBtn).toHaveTextContent("Load BAM");
  });

  it('handle open-igv-btn true', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(<Toolbar />, createStore(reducers, applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watchSaga);

    const openIgvBtn = getByTestId('open-igv-btn');

    // define the api response
    process.env.FETCH_BEM_FILE_RESPONSE = true;

    fireEvent.click(openIgvBtn);

    // remove defined api response
    delete process.env.FETCH_BEM_FILE_RESPONSE;

    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(false);
    expect(igvStore.fetchBAMFileStatus).toEqual(null);
    expect(igvStore.igvLastQuery).toEqual(null);
  });

  it('handle open-igv-btn false', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(<Toolbar />, createStore(reducers, applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(watchSaga);

    const openIgvBtn = getByTestId('open-igv-btn');

    // define the api response
    process.env.FETCH_BEM_FILE_RESPONSE = 'error';

    fireEvent.click(openIgvBtn);

    // remove defined api response
    delete process.env.FETCH_BEM_FILE_RESPONSE;

    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);
    expect(igvStore.fetchBAMFileStatus).toEqual(null);
    expect(igvStore.igvLastQuery).toBeDefined();
  });
});
