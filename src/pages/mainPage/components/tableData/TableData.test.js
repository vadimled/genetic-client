import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TableData from './TableData';
import { CONFIRMATION_VALUES } from 'Utils/constants';
import {
  handleConfirmationStatus
} from "Actions/tableActions";
import {
  getUncheckConfirmationData
} from "Store/selectors";

import { renderWithRedux } from "Utils/test_helpers";

describe('IgvAlertPopup', () => {

  it('handle selection-checkbox', () => {
    const { getAllByTestId, store } = renderWithRedux(<TableData />);
    const chbxs = getAllByTestId('selection-checkbox');
    const firstChbx = chbxs[0];
    const rowId = firstChbx.dataset['testitemid'];

    const row1 = store.getState().table.data[rowId];
    expect(row1.selected).toBeUndefined();

    fireEvent.click(firstChbx);

    const row2 = store.getState().table.data[rowId];
    expect(row2.selected).toEqual(true);
  });

  it('handle confirmation status', () => {
    const { store } = renderWithRedux(<TableData />);

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

    // CONFIRMED
    store.dispatch(handleConfirmationStatus({
      id: itemId,
      status: CONFIRMATION_VALUES.CONFIRMED.value
    }));

    const tableData2 = store.getState().table.data;
    const item2 = tableData2[itemId];
    expect(item2.status).toEqual(CONFIRMATION_VALUES.CONFIRMED.value);

    // NOT_CONFIRMED
    store.dispatch(handleConfirmationStatus({
      id: itemId,
      status: CONFIRMATION_VALUES.NOT_CONFIRMED.value
    }));

    const tableData3 = store.getState().table.data;
    const item3 = tableData3[itemId];
    expect(item3.status).toEqual(CONFIRMATION_VALUES.NOT_CONFIRMED.value);

    // PENDING
    store.dispatch(handleConfirmationStatus({
      id: itemId,
      status: CONFIRMATION_VALUES.PENDING.value
    }));

    const tableData4 = store.getState().table.data;
    const item4 = tableData4[itemId];
    expect(item4.status).toEqual(CONFIRMATION_VALUES.PENDING.value);

    // null
    const uncheckConfirmationData1 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData1).toEqual(null);

    store.dispatch(handleConfirmationStatus({
      id: itemId,
      status: null
    }));

    const uncheckConfirmationData2 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData2).toBeDefined();
  });
});
