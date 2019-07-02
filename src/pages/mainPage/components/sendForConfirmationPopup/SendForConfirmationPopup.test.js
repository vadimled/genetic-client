import React from "react";
// import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import SendForConfirmationPopup from "./SendForConfirmationPopup";
import { handleSelectedRow } from "Actions/tableActions";
import { handleOnConfirmation, setConfirmationData } from "Actions/confirmationActions";
import { getSelectedRows, getOnConfirmation, getConfirmationData } from "Store/selectors";

describe('Toolbar', () => {

  it('SendForConfirmationPopup', () => {
    const { store } = renderWithRedux(<SendForConfirmationPopup />);

    // before starting work with confirmation data, first of all we should define confirmation data
    // the way to do this
    // 1) get row from table data
    // 2) establish select field to true in this row
    // 3) get selected data from table
    // 4) turn this data to confirmation reducers
    // 6) establish isOnConfirmationData to true

    // 1) ->
    const selectedRows1 = getSelectedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);

    // 2) ->
    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    const firstItemId = tableData1[Object.keys(tableData1)[0]].id;
    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
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
  });

});
