import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import reducers from "Store/reducers";
import { renderWithRedux } from "Utils/test_helpers";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import UncheckConfirmationPopup from './UncheckConfirmationPopup';
import {
  fetchTableData,
  handleUncheckConfirmationData
} from "Actions/tableActions";
import {
  getUncheckConfirmationData
} from "Store/selectors";


const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { getByTestId, store, getAllByTestId, asFragment } = renderWithRedux(
    <UncheckConfirmationPopup />,
    createStore(reducers, applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchSaga);


  store.dispatch(fetchTableData());

  return {store, getByTestId, getAllByTestId, asFragment};
};

describe('UncheckConfirmationPopup', () => {

  it('UncheckConfirmationPopup snapshot', () => {
    const { asFragment } = initSteps();
    expect(asFragment()).toMatchSnapshot();
  });

  it('handle no btn', () => {
    const { getByTestId, store } = initSteps();

    // UncheckConfirmationPopup is only visible when uncheckConfirmationData2 has defined

    // find first item with status in table data and select one
    const tableData1 = store.getState().table.data;
    let itemId; // = tableData1[Object.keys(tableData1)[0]].id;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (tableData1[key].status) {
          itemId = tableData1[key].id;
          break;
        }
      }
    }

    store.dispatch(handleUncheckConfirmationData({
      id: itemId,
      status: null
    }));

    const uncheckConfirmationData1 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData1).toEqual({
      id: itemId,
      status: null
    });

    // and test no btn
    const noBtn = getByTestId('no-btn');

    fireEvent.click(noBtn);

    const uncheckConfirmationData2 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData2).toEqual(null);
  });


  it('handle yes btn', () => {
    const { getByTestId, store } = initSteps();

    // UncheckConfirmationPopup is only visible when uncheckConfirmationData2 has defined

    // find first item with status in table data and select one
    const tableData1 = store.getState().table.data;
    let itemId; // = tableData1[Object.keys(tableData1)[0]].id;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (tableData1[key].status) {
          itemId = tableData1[key].id;
          break;
        }
      }
    }

    store.dispatch(handleUncheckConfirmationData({
      id: itemId,
      status: null
    }));

    const uncheckConfirmationData1 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData1).toEqual({
      id: itemId,
      status: null
    });

    // and test yes btn
    const yesBtn = getByTestId('yes-btn');

    fireEvent.click(yesBtn);

    const uncheckConfirmationData2 = getUncheckConfirmationData(store.getState());

    expect(uncheckConfirmationData2).toEqual(null);

    // status in row in tableData should be null
    const tableData2 = store.getState().table.data;
    const row2 = tableData2[itemId];
    expect(row2.status).toEqual(null);
  });
});
