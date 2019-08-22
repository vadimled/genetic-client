import React from "react";
import { createStore, applyMiddleware } from "redux";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import IgvLoadBAM from './IgvLoadBAM';
import reducers from "Store/reducers";
// import axiosMock from 'axios';

import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";

import { renderWithRedux } from "Utils/test_helpers";

describe('IgvLoadBAM', () => {
  xit('IgvLoadBAM snapshot', () => {
    const { asFragment } = renderWithRedux(<IgvLoadBAM />);
    expect(asFragment()).toMatchSnapshot();
  });

  xit('open igv btn', () => {
    const { getByTestId } = renderWithRedux(<IgvLoadBAM />);
    const openIgvBtn = getByTestId('open-igv-btn');

    expect(openIgvBtn).toHaveTextContent("Load BAM");
  });

  xit('handle open-igv-btn true', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvLoadBAM />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    const openIgvBtn = getByTestId('open-igv-btn');

    axiosMock.get = () => true;

    fireEvent.click(openIgvBtn);

    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(false);
    expect(igvStore.fetchBAMFileStatus).toEqual(null);
    expect(igvStore.igvLastQuery).toEqual(null);
  });

  xit('handle open-igv-btn false', () => {
    const sagaMiddleware = createSagaMiddleware();
    const { getByTestId, store } = renderWithRedux(
      <IgvLoadBAM />,
      createStore(reducers, applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSaga);

    const openIgvBtn = getByTestId('open-igv-btn');

    axiosMock.get = () => {throw new Error();};

    fireEvent.click(openIgvBtn);

    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);
    expect(igvStore.fetchBAMFileStatus).toEqual(null);
    expect(igvStore.igvLastQuery).toBeDefined();
  });
});
