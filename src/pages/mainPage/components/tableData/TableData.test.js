import React from "react";
// import { createStore, applyMiddleware } from "redux";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TableData from './TableData';
// import reducers from "Store/reducers";
// import { handleIgvAlertShow, setIgvLastQuery } from 'Actions/igvActions';
// import axiosMock from 'axios';

// import createSagaMiddleware from 'redux-saga';
// import { watchSaga } from "Store/saga";

import { renderWithRedux } from "Utils/test_helpers";

describe('IgvAlertPopup', () => {

  it('handle header close btn', () => {
    const { getByTestId, store } = renderWithRedux(<TableData />);
    const closeBtn = getByTestId('header-close-btn');

    // when popup has opened, isIgvAlertShow must be true
    store.dispatch(handleIgvAlertShow(true));
    const igvStore = store.getState().igv;
    expect(igvStore.isIgvAlertShow).toEqual(true);

    fireEvent.click(closeBtn);

    const updatedIgvStore = store.getState().igv;
    expect(updatedIgvStore.isIgvAlertShow).toEqual(false);
  });
});
