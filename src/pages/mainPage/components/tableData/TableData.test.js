import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TableData from './TableData';

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
});
