import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import IgvAlertPopup from './IgvAlertPopup';
import reducers from "Store/reducers";
import { handleIgvAlertShow, setIgvLastQuery } from 'Actions/igvActions';
import axiosMock from 'axios';

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

describe('IgvAlertPopup', () => {

  it('IgvAlertPopup snapshot', () => {
    const { asFragment } = renderWithRedux(<IgvAlertPopup />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handle header close btn', () => {
    const { getByTestId, store } = renderWithRedux(<IgvAlertPopup />);
    const closeBtn = getByTestId('header-close-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    fireEvent.click(closeBtn);

    const updatedIgvStore = store.getState().igv;
    expect(updatedIgvStore.isIgvAlertShow).toEqual(false);
  });

  it('handle close btn', () => {
    const { getByTestId, store } = renderWithRedux(<IgvAlertPopup />);
    const closeBtn = getByTestId('close-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    fireEvent.click(closeBtn);

    const updatedIgvStore = store.getState().igv;
    expect(updatedIgvStore.isIgvAlertShow).toEqual(false);
  });

  it('IgvAlertPopup dont show alert chbx again', () => {
    const { getByTestId, store } = renderWithRedux(<IgvAlertPopup />);
    const checkbox = getByTestId('igv-alert-dont-show-again-chbx');

    const igvStore = store.getState().igv;
    expect(checkbox.checked).toEqual(false);
    expect(igvStore.isIgvAlertShowAgaing).toEqual(true);

    fireEvent.click(checkbox);

    const updatedIgvStore = store.getState().igv;
    expect(checkbox.checked).toEqual(true);
    expect(updatedIgvStore.isIgvAlertShowAgaing).toEqual(false);
  });

  it('handle retry btn with BAM_FILE', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvAlertPopup />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    axiosMock.get = () => true;

    const retryBtn = getByTestId('retry-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    const mockIgvQuery = 'http://mock.bam';
    store.dispatch(setIgvLastQuery({ type: 'BAM_FILE', data: mockIgvQuery }));
    const igvStore2 = store.getState().igv;
    expect(igvStore2.igvLastQuery).toEqual({type: "BAM_FILE", data: "http://mock.bam"});

    fireEvent.click(retryBtn);

    const igvStore3 = store.getState().igv;
    expect(igvStore3.isIgvAlertShow).toEqual(false);
    expect(igvStore3.fetchBAMFileStatus).toEqual(null);
    expect(igvStore3.igvLastQuery).toEqual(null);
  });

  it('handle retry btn with CHR_POS', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvAlertPopup />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    const retryBtn = getByTestId('retry-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    const mockIgvQuery = 'http://mock2.bam?locus=Chr5:341309';
    store.dispatch(setIgvLastQuery({ type: 'CHR_POS', data: mockIgvQuery }));
    const igvStore2 = store.getState().igv;
    expect(igvStore2.igvLastQuery).toEqual({type: "CHR_POS", data: "http://mock2.bam?locus=Chr5:341309"});

    axiosMock.get = () => true;

    fireEvent.click(retryBtn);

    const igvStore3 = store.getState().igv;
    expect(igvStore3.isIgvAlertShow).toEqual(false);
    expect(igvStore3.fetchBAMFileStatus).toEqual(null);
    expect(igvStore3.igvLastQuery).toEqual(null);
  });

  it('handle retry btn with BAM_FILE with no working api', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvAlertPopup />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    const retryBtn = getByTestId('retry-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    const mockIgvQuery = 'http://mock.bam';
    store.dispatch(setIgvLastQuery({ type: 'BAM_FILE', data: mockIgvQuery }));
    const igvStore2 = store.getState().igv;
    expect(igvStore2.igvLastQuery).toEqual({type: "BAM_FILE", data: "http://mock.bam"});

    axiosMock.get = () => {throw new Error();}

    fireEvent.click(retryBtn);

    const igvStore3 = store.getState().igv;
    expect(igvStore3.isIgvAlertShow).toEqual(true);
    expect(igvStore3.fetchBAMFileStatus).toEqual(null);
    expect(igvStore3.igvLastQuery).toBeDefined();
  });

  it('handle retry btn with CHR_POS with no working api', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvAlertPopup />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    const retryBtn = getByTestId('retry-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    const mockIgvQuery = 'http://mock2.bam?locus=Chr5:341309';
    store.dispatch(setIgvLastQuery({ type: 'CHR_POS', data: mockIgvQuery }));
    const igvStore2 = store.getState().igv;
    expect(igvStore2.igvLastQuery).toEqual({type: "CHR_POS", data: "http://mock2.bam?locus=Chr5:341309"});

    axiosMock.get = () => {throw new Error();}

    fireEvent.click(retryBtn);

    const igvStore3 = store.getState().igv;
    expect(igvStore3.isIgvAlertShow).toEqual(true);
    expect(igvStore3.fetchBAMFileStatus).toEqual(null);
    expect(igvStore3.igvLastQuery).toBeDefined();
  });

});

