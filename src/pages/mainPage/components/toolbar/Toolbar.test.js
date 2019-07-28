import React from "react";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import reducers from "Store/reducers";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import MainPage from "Pages/mainPage/MainPage";
// import Toolbar from "./Toolbar";
import {
  updateSearch
} from "Store/actions/tableActions";
import {
  handleSelectedRow,
  handleSelectAllRows,
  tableDataAddResult,
  fetchData
} from "Actions/tableActions";
import {
  getSelectedRows,
  getSelectedIsAddedRows,
  getOnConfirmation,
  getConfirmationData,
  getResultConfigIsOpen,
  // getResultConfigIsOnEdit
} from "Store/selectors";
import { BrowserRouter as Router } from "react-router-dom";

// import { handleOnConfirmation, setConfirmationData } from "../../../../store/actions/confirmationActions";


const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { getByTestId, store, getAllByTestId } = renderWithRedux(
    <Router>
      <MainPage />
    </Router>,
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

  store.dispatch(fetchData());
  // store.dispatch(handleSelectAllRows(false));

  // 1) - 2) ->
  // const selectedRows1 = getSelectedRows(store.getState());
  // expect(selectedRows1.length).toEqual(0);

  // find first item with no status in table data and select one
  // const tableData1 = store.getState().table.data;
  // let itemId; // = tableData1[Object.keys(tableData1)[0]].id;
  // for (let key in tableData1) {
  //   if (tableData1.hasOwnProperty(key)) {
  //     // if an item has already status we cannot select or unselect it to send for confirmation
  //     if (!tableData1[key].status) {
  //       itemId = tableData1[key].id;
  //       break;
  //     }
  //   }
  // }

  // store.dispatch(handleSelectedRow({
  //   item: { id: itemId }, // other information in item are not required
  //   value: true
  // }));
  //
  // // 3) ->
  // const selectedRows2 = getSelectedRows(store.getState());
  // expect(selectedRows2.length).toEqual(1);
  //
  // // 4) - 5) ->
  // const confirmationData1 = getConfirmationData(store.getState());
  // const isOnConfirmation1 = getOnConfirmation(store.getState());
  //
  // expect(isOnConfirmation1).toEqual(false);
  // expect(confirmationData1.length).toEqual(0);
  //
  // store.dispatch(setConfirmationData(selectedRows2));
  // store.dispatch(handleOnConfirmation(true));
  //
  // const confirmationData2 = getConfirmationData(store.getState());
  // const isOnConfirmation2 = getOnConfirmation(store.getState());
  //
  // expect(isOnConfirmation2).toEqual(true);
  // expect(confirmationData2.length).toEqual(1);

  return {store, getByTestId, getAllByTestId};
};


describe('Toolbar', () => {
  it("if some text inserted to Autocomplete and button close clicked on its indicator", () => {
    const { getByTestId, store } = initSteps();

    store.dispatch(updateSearch("a"));


    const indicator = getByTestId("filter-searchText-a");
    expect(indicator).toBeInTheDocument();

    fireEvent.click(getByTestId("button-searchText"));
    expect(indicator).not.toBeInTheDocument();
  });

  it("if some text inserted to Autocomplete and 'clear-filters-button' clicked", () => {
    const { getByTestId, store } = renderWithRedux(<MainPage />);

    store.dispatch(updateSearch("a"));

    const indicator = getByTestId("filter-searchText-a");
    expect(indicator).toBeInTheDocument();

    fireEvent.click(getByTestId("clear-filters-button"));
    expect(indicator).not.toBeInTheDocument();
    expect(store.getState().filters.searchText).toEqual("");
  });

  it('showing send-for-confirmation-popup and handle confirmation-button btn', () => {
    const { getByTestId, store } = initSteps();

    // drop all selected rows
    store.dispatch(handleSelectAllRows(false));

    const selectedRows1 = getSelectedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);

    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    let firstItemId;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (!tableData1[key].status) {
          firstItemId = tableData1[key].id;
          break;
        }
      }
    }

    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
      value: true
    }));

    const selectedRows2 = getSelectedRows(store.getState());
    const confirmationButton = getByTestId('confirmation-button');
    expect(selectedRows2.length).toEqual(1);
    expect(confirmationButton).toBeDefined();

    // test for handle confirmationButton
    const confirmationData1 = getConfirmationData(store.getState());
    const isOnConfirmation1 = getOnConfirmation(store.getState());

    expect(isOnConfirmation1).toEqual(false);
    expect(confirmationData1.length).toEqual(0);

    fireEvent.click(confirmationButton);

    const confirmationData2 = getConfirmationData(store.getState());
    const isOnConfirmation2 = getOnConfirmation(store.getState());

    expect(isOnConfirmation2).toEqual(true);
    expect(confirmationData2.length).toEqual(1);
  });

  it('showing and hiding add-result-btn according with selected rows', () => {
    const { getByTestId, store } = initSteps();

    // drop all selected rows
    store.dispatch(handleSelectAllRows(false));

    const selectedRows1 = getSelectedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);

    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    let firstItemId;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (!tableData1[key].status) {
          firstItemId = tableData1[key].id;
          break;
        }
      }
    }

    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
      value: true
    }));

    const selectedRows2 = getSelectedRows(store.getState());
    const addResultButton = getByTestId('add-result-btn');
    expect(selectedRows2.length).toEqual(1);
    expect(addResultButton).toBeInTheDocument();

    // find second item and select one
    const tableData2 = store.getState().table.data;
    let secondItemId;
    for (let key in tableData2) {
      if (tableData2.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (
          !tableData2[key].status
          // and search no recently selected item
          && !tableData2[key].selected
        ) {
          secondItemId = tableData2[key].id;
          break;
        }
      }
    }

    store.dispatch(handleSelectedRow({
      item: { id: secondItemId }, // other information in item is not required
      value: true
    }));

    const selectedRows3 = getSelectedRows(store.getState());
    expect(selectedRows3.length).toEqual(2);
    expect(addResultButton).not.toBeInTheDocument();
  });

  it('showing and handle add-result-btn', () => {
    const { getByTestId, store } = initSteps();

    // drop all selected rows
    store.dispatch(handleSelectAllRows(false));

    const selectedRows1 = getSelectedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);

    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    let firstItemId;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (!tableData1[key].status) {
          firstItemId = tableData1[key].id;
          break;
        }
      }
    }

    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
      value: true
    }));

    const selectedRows2 = getSelectedRows(store.getState());
    const addResultButton = getByTestId('add-result-btn');
    expect(selectedRows2.length).toEqual(1);
    expect(addResultButton).toBeInTheDocument();

    const resultConfigIsOpen1 = getResultConfigIsOpen(store.getState());
    expect(resultConfigIsOpen1).toEqual(false);

    fireEvent.click(addResultButton);

    const resultConfigIsOpen2 = getResultConfigIsOpen(store.getState());
    expect(resultConfigIsOpen2).toEqual(true);
  });

  it('showing and hiding edit-result-btn according with selected rows', () => {
    // const { getByTestId, store } = initSteps();
    const { store } = initSteps();

    // first we should add one variant
    // add some mock item data
    store.dispatch(tableDataAddResult({
      id: Math.random().toString(),
      alleleAlternative: "W",
      alleleReference: "Q",
      alleleType: "change",
      chromosome: "1",
      coding: "c.2637 A>G",
      coverage: 0,
      gene: "ACTP1",
      isHgvsLoaded: true,
      position: 123,
      protein: "p.Pro871Leu",
      vaf: 0,
    }));

    // drop all selected rows
    store.dispatch(handleSelectAllRows(false));

    const selectedRows1 = getSelectedRows(store.getState());
    const selectedIsAddedRows = getSelectedIsAddedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);
    expect(selectedIsAddedRows.length).toEqual(0);

    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    let firstItemId;
    for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        // if an item has already status we cannot select or unselect it to send for confirmation
        if (
          !tableData1[key].status
          // and item should be added
          && tableData1[key].isAdded
        ) {
          firstItemId = tableData1[key].id;
          break;
        }
      }
    }

    // and select the row which has added
    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
      value: true
    }));

    // const selectedRows2 = getSelectedRows(store.getState());
    // const selectedIsAddedRows2 = getSelectedIsAddedRows(store.getState());
    // const editResultButton = getByTestId('edit-result-btn');
    // expect(selectedRows2.length).toEqual(1);
    // expect(selectedIsAddedRows2.length).toEqual(1);
    // expect(editResultButton).toBeInTheDocument();
    //
    // // then we should add another variant
    // // add some mock item data
    // store.dispatch(tableDataAddResult({
    //   id: Math.random().toString(),
    //   alleleAlternative: "W",
    //   alleleReference: "Q",
    //   alleleType: "change",
    //   chromosome: "1",
    //   coding: "c.2637 A>G",
    //   coverage: 0,
    //   gene: "ACTP1",
    //   isHgvsLoaded: true,
    //   position: 123,
    //   protein: "p.Pro871Leu",
    //   vaf: 0,
    // }));
    //
    // // find first item in table data and select one
    // const tableData2 = store.getState().table.data;
    // let secondItemId;
    // for (let key in tableData2) {
    //   if (tableData2.hasOwnProperty(key)) {
    //     // if an item has already status we cannot select or unselect it to send for confirmation
    //     if (
    //       !tableData2[key].status
    //       // and item should be added
    //       && tableData2[key].isAdded
    //       // and search no recently selected item
    //       && !tableData2[key].selected
    //     ) {
    //       secondItemId = tableData2[key].id;
    //       break;
    //     }
    //   }
    // }
    //
    // // and select the row which has added
    // store.dispatch(handleSelectedRow({
    //   item: { id: secondItemId }, // other information in item is not required
    //   value: true
    // }));
    //
    // const selectedRows3 = getSelectedRows(store.getState());
    // const selectedIsAddedRows3 = getSelectedIsAddedRows(store.getState());
    // expect(selectedRows3.length).toEqual(2);
    // expect(selectedIsAddedRows3.length).toEqual(2);
    // expect(editResultButton).not.toBeInTheDocument();
    //
    // // then discard the second selected row to show editResultButton again
    // store.dispatch(handleSelectedRow({
    //   item: { id: secondItemId }, // other information in item is not required
    //   value: false
    // }));
    //
    // const selectedRows4 = getSelectedRows(store.getState());
    // const selectedIsAddedRows4 = getSelectedIsAddedRows(store.getState());
    // const editResultButton2 = getByTestId('edit-result-btn');
    // expect(selectedRows4.length).toEqual(1);
    // expect(selectedIsAddedRows4.length).toEqual(1);
    // expect(editResultButton2).toBeInTheDocument();
    //
    // const resultConfigIsOpen1 = getResultConfigIsOpen(store.getState());
    // const resultConfigIsOnEdit1 = getResultConfigIsOnEdit(store.getState());
    // expect(resultConfigIsOpen1).toEqual(false);
    // expect(resultConfigIsOnEdit1).toEqual(false);
    //
    // fireEvent.click(editResultButton2);
    //
    // const resultConfigIsOpen2 = getResultConfigIsOpen(store.getState());
    // const resultConfigIsOnEdit2 = getResultConfigIsOnEdit(store.getState());
    // expect(resultConfigIsOpen2).toEqual(true);
    // expect(resultConfigIsOnEdit2).toEqual(true);
  });

});
