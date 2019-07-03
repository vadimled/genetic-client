import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import SendForConfirmationPopup from "./SendForConfirmationPopup";
import reducers from "Store/reducers";
import { ALERT_STATUSES } from 'Utils/constants';
import {
  handleSelectedRow,
  handleSelectAllRows
} from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import {
  getSelectedRows,
  getOnConfirmation,
  getConfirmationData,
  getAlertStatus,
  getAlertTitle,
  getAlertMessage
} from "Store/selectors";

const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { getByTestId, store, getAllByTestId } = renderWithRedux(
    <SendForConfirmationPopup />,
    createStore(reducers, applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchSaga);

  // before starting work with confirmation data, first of all we should define confirmation data
  // the way to do this
  // 1) get row from table data
  // 2) establish select field to true in this row
  // 3) get selected data from table
  // 4) turn this data to confirmation reducers
  // 6) establish isOnConfirmationData to true

  // drop all selected rows
  store.dispatch(handleSelectAllRows(true));

  // 1) - 2) ->
  const selectedRows1 = getSelectedRows(store.getState());
  expect(selectedRows1.length).toEqual(0);

  // find first item with no status in table data and select one
  const tableData1 = store.getState().table.data;
  let itemId; // = tableData1[Object.keys(tableData1)[0]].id;
  for (let key in tableData1) {
    if (tableData1.hasOwnProperty(key)) {
      // if an item has already status we cannot select or unselect it to send for confirmation
      if (!tableData1[key].status) {
        itemId = tableData1[key].id;
        break;
      }
    }
  }

  store.dispatch(handleSelectedRow({
    item: { id: itemId }, // other information in item are not required
    value: true
  }));

  // 3) ->
  const selectedRows2 = getSelectedRows(store.getState());
  expect(selectedRows2.length).toEqual(1);

  // 4) - 5) ->
  const confirmationData1 = getConfirmationData(store.getState());
  const isOnConfirmation1 = getOnConfirmation(store.getState());

  expect(isOnConfirmation1).toEqual(false);
  expect(confirmationData1.length).toEqual(0);

  store.dispatch(setConfirmationData(selectedRows2));
  store.dispatch(handleOnConfirmation(true));

  const confirmationData2 = getConfirmationData(store.getState());
  const isOnConfirmation2 = getOnConfirmation(store.getState());

  expect(isOnConfirmation2).toEqual(true);
  expect(confirmationData2.length).toEqual(1);

  return {store, getByTestId, getAllByTestId};
};

describe('SendForConfirmationPopup', () => {

  it('SendForConfirmationPopup close by header-close btn', () => {
    const { store, getByTestId } = initSteps();
    const headerClose = getByTestId('header-close');

    fireEvent.click(headerClose);

    const confirmationData3 = getConfirmationData(store.getState());
    const isOnConfirmation3 = getOnConfirmation(store.getState());
    expect(isOnConfirmation3).toEqual(false);
    expect(confirmationData3.length).toEqual(0);
  });

  it('SendForConfirmationPopup close by footer-close btn', () => {
    const { store, getByTestId } = initSteps();
    const footerClose = getByTestId('footer-close');

    fireEvent.click(footerClose);

    const confirmationData4 = getConfirmationData(store.getState());
    const isOnConfirmation4 = getOnConfirmation(store.getState());
    expect(isOnConfirmation4).toEqual(false);
    expect(confirmationData4.length).toEqual(0);
  });

  it('SendForConfirmationPopup data flow success', () => {
    const { store, getByTestId, getAllByTestId } = initSteps();
    const sendBtn = getByTestId('send-btn');

    // primer test
    const primerInputs = getAllByTestId('primer-input');
    const primerFirstInput = primerInputs[0];
    const primerFirstInputRowId = primerFirstInput.dataset['testrowid'];
    const primerFirstInputindex = primerFirstInput.dataset['testindex'];

    const confirmationData5 = getConfirmationData(store.getState());
    const row1 = confirmationData5.find((row) => row.id === primerFirstInputRowId);
    expect(row1.additionConfirmationData[primerFirstInputindex].primer).toEqual('');

    fireEvent.change(primerFirstInput, { target: { value: 123 } });

    const confirmationData6 = getConfirmationData(store.getState());
    const row2 = confirmationData6.find((row) => row.id === primerFirstInputRowId);
    expect(row2.additionConfirmationData[primerFirstInputindex].primer).toEqual('123');

    // fragment size test
    const fSizeInputs = getAllByTestId('fragmentSize-input');
    const fSizeFirstInput = fSizeInputs[0];
    const fSizeFirstInputRowId = fSizeFirstInput.dataset['testrowid'];
    const fSizeFirstInputindex = fSizeFirstInput.dataset['testindex'];

    const confirmationData7 = getConfirmationData(store.getState());
    const row3 = confirmationData7.find((row) => row.id === fSizeFirstInputRowId);
    expect(row3.additionConfirmationData[fSizeFirstInputindex].fragmentSize).toEqual('');

    fireEvent.change(fSizeFirstInput, { target: { value: 123 } });

    const confirmationData8 = getConfirmationData(store.getState());
    const row4 = confirmationData8.find((row) => row.id === fSizeFirstInputRowId);
    expect(row4.additionConfirmationData[fSizeFirstInputindex].fragmentSize).toEqual('123');

    // when all required fields have filled out, try to send
    fireEvent.click(sendBtn);
    const confirmationData9 = getConfirmationData(store.getState());
    const isOnConfirmation9 = getOnConfirmation(store.getState());
    expect(isOnConfirmation9).toEqual(false);
    expect(confirmationData9.length).toEqual(0);

    // after all selectedRows should be empty
    const selectedRows9 = getSelectedRows(store.getState());
    expect(selectedRows9.length).toEqual(0);
  });

  it('SendForConfirmationPopup data flow validation failed on no fragmentSize', () => {
    const { store, getByTestId, getAllByTestId } = initSteps();
    const sendBtn = getByTestId('send-btn');

    // primer test
    const primerInputs = getAllByTestId('primer-input');
    const primerFirstInput = primerInputs[0];
    const primerFirstInputRowId = primerFirstInput.dataset['testrowid'];
    const primerFirstInputindex = primerFirstInput.dataset['testindex'];

    const confirmationData5 = getConfirmationData(store.getState());
    const row1 = confirmationData5.find((row) => row.id === primerFirstInputRowId);
    expect(row1.additionConfirmationData[primerFirstInputindex].primer).toEqual('');

    fireEvent.change(primerFirstInput, { target: { value: 123 } });

    const confirmationData6 = getConfirmationData(store.getState());
    const row2 = confirmationData6.find((row) => row.id === primerFirstInputRowId);
    expect(row2.additionConfirmationData[primerFirstInputindex].primer).toEqual('123');

    // when only primer field has filled out, try to send
    fireEvent.click(sendBtn);
    const confirmationData9 = getConfirmationData(store.getState());
    const isOnConfirmation9 = getOnConfirmation(store.getState());
    expect(isOnConfirmation9).toEqual(true);
    expect(confirmationData9.length).toEqual(1);

    // after all selectedRows should be empty
    const selectedRows9 = getSelectedRows(store.getState());
    expect(selectedRows9.length).toEqual(1);

    // check alert information
    const alertStatus = getAlertStatus(store.getState());
    const alertTitle = getAlertTitle(store.getState());
    const alertMessage = getAlertMessage(store.getState());
    expect(alertStatus).toEqual(ALERT_STATUSES.warning);
    expect(alertTitle).toEqual('Data is missing');
    expect(alertMessage).toEqual('Please fill the Fragment size field');
  });

  it('SendForConfirmationPopup data flow validation failed on no primer', () => {
    const { store, getByTestId, getAllByTestId } = initSteps();
    const sendBtn = getByTestId('send-btn');

    // fragment size test
    const fSizeInputs = getAllByTestId('fragmentSize-input');
    const fSizeFirstInput = fSizeInputs[0];
    const fSizeFirstInputRowId = fSizeFirstInput.dataset['testrowid'];
    const fSizeFirstInputindex = fSizeFirstInput.dataset['testindex'];

    const confirmationData7 = getConfirmationData(store.getState());
    const row3 = confirmationData7.find((row) => row.id === fSizeFirstInputRowId);
    expect(row3.additionConfirmationData[fSizeFirstInputindex].fragmentSize).toEqual('');

    fireEvent.change(fSizeFirstInput, { target: { value: 123 } });

    const confirmationData8 = getConfirmationData(store.getState());
    const row4 = confirmationData8.find((row) => row.id === fSizeFirstInputRowId);
    expect(row4.additionConfirmationData[fSizeFirstInputindex].fragmentSize).toEqual('123');

    // when only primer field has filled out, try to send
    fireEvent.click(sendBtn);
    const confirmationData9 = getConfirmationData(store.getState());
    const isOnConfirmation9 = getOnConfirmation(store.getState());
    expect(isOnConfirmation9).toEqual(true);
    expect(confirmationData9.length).toEqual(1);

    // after all selectedRows should be empty
    const selectedRows9 = getSelectedRows(store.getState());
    expect(selectedRows9.length).toEqual(1);

    // check alert information
    const alertStatus = getAlertStatus(store.getState());
    const alertTitle = getAlertTitle(store.getState());
    const alertMessage = getAlertMessage(store.getState());
    expect(alertStatus).toEqual(ALERT_STATUSES.warning);
    expect(alertTitle).toEqual('Data is missing');
    expect(alertMessage).toEqual('Please fill the Primer field');
  });

  it('SendForConfirmationPopup remove row', () => {
    const { store, getByTestId } = initSteps();
    const removeRowBtn = getByTestId('remove-row');
    const sendBtn = getByTestId('send-btn');

    expect(sendBtn.hasAttribute('disabled')).toEqual(false);

    fireEvent.click(removeRowBtn);

    const confirmationData = getConfirmationData(store.getState());
    expect(confirmationData.length).toEqual(0);
    expect(sendBtn.hasAttribute('disabled')).toEqual(true);
    expect(getByTestId('empty-state')).toBeDefined();
  });

  it('SendForConfirmationPopup add and remove additionalRows', () => {
    const { store, getAllByTestId } = initSteps();

    // add test
    const pluses = getAllByTestId('additional-plus');
    const firstPlus = pluses[0];
    const firstPlusRowId = firstPlus.dataset['testrowid'];

    const confirmationData1 = getConfirmationData(store.getState());
    const row1 = confirmationData1.find((row) => row.id === firstPlusRowId);
    expect(row1.additionConfirmationData.length).toEqual(1);

    fireEvent.click(firstPlus);

    const confirmationData2 = getConfirmationData(store.getState());
    const row2 = confirmationData2.find((row) => row.id === firstPlusRowId);
    expect(row2.additionConfirmationData.length).toEqual(2);

    // remove test
    const minuses = getAllByTestId('additional-minus');
    const firstMinus = minuses[0];
    const firstMinusRowId = firstMinus.dataset['testrowid'];

    fireEvent.click(firstMinus);

    const confirmationData3 = getConfirmationData(store.getState());
    const row3 = confirmationData3.find((row) => row.id === firstMinusRowId);
    expect(row3.additionConfirmationData.length).toEqual(1);
  });

});
