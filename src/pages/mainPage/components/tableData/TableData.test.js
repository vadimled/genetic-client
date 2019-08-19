import React from "react";
import { fireEvent, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithReduxAndRouter } from "Utils/test_helpers";
import App from "src/App";
import {
  handleZygosity,
  handleVariantClass,
  handleConfirmationStatus,
  handleUncheckConfirmationData
} from "Actions/tableActions";
import {
  CONFIRMATION_VALUES,
  ZYGOSITY_OPTIONS,
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";
import { getUncheckConfirmationData } from "Store/selectors";

describe("TableData", () => {
  it("handle selection-checkbox", async () => {
    const { getAllByTestId, store } = renderWithReduxAndRouter(<App />, {
      route: "/tests/5d511f574651a20020a0ab50"
    });
    await waitForElement(() => {
      return getAllByTestId("selection-checkbox");
    });
    const chbxs = getAllByTestId("selection-checkbox");

    const firstChbx = chbxs[0];
    const rowId = firstChbx.dataset["testitemid"];

    const row1 = store.getState().table?.data[rowId];
    expect(row1.selected).toBeUndefined();

    fireEvent.click(firstChbx);

    const row2 = store.getState().table?.data[rowId];
    expect(row2.selected).toEqual(true);
  });

  it("handle confirmation status", async () => {
    const { store, getAllByTestId } = renderWithReduxAndRouter(<App />, {
      route: "/tests/5d511f574651a20020a0ab50"
    });

    await waitForElement(() => {
      return getAllByTestId("selection-checkbox");
    });
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
    store.dispatch(
      handleConfirmationStatus({
        id: itemId,
        status: CONFIRMATION_VALUES.CONFIRMED.value
      })
    );

    const tableData2 = store.getState().table.data;
    const item2 = tableData2[itemId];
    expect(item2.status).toEqual(CONFIRMATION_VALUES.CONFIRMED.value);

    // NOT_CONFIRMED
    store.dispatch(
      handleConfirmationStatus({
        id: itemId,
        status: CONFIRMATION_VALUES.NOT_CONFIRMED.value
      })
    );

    const tableData3 = store.getState().table.data;
    const item3 = tableData3[itemId];
    expect(item3.status).toEqual(CONFIRMATION_VALUES.NOT_CONFIRMED.value);

    // PENDING
    store.dispatch(
      handleConfirmationStatus({
        id: itemId,
        status: CONFIRMATION_VALUES.PENDING.value
      })
    );

    const tableData4 = store.getState().table.data;
    const item4 = tableData4[itemId];
    expect(item4.status).toEqual(CONFIRMATION_VALUES.PENDING.value);

    // null
    const uncheckConfirmationData1 = getUncheckConfirmationData(
      store.getState()
    );
    expect(uncheckConfirmationData1).toEqual(null);

    store.dispatch(
      handleUncheckConfirmationData({
        id: itemId,
        status: null
      })
    );

    const uncheckConfirmationData2 = getUncheckConfirmationData(
      store.getState()
    );
    expect(uncheckConfirmationData2).toEqual({
      id: itemId,
      status: null
    });
  });

  it("zygosity and variant class change", async () => {
    const { getAllByTestId, store } = renderWithReduxAndRouter(<App />, {
      route: "/tests/5d511f574651a20020a0ab50"
    });

    await waitForElement(() => {
      return getAllByTestId("zygosity-select");
    });

    const select = getAllByTestId("zygosity-select");
    const firstSelect = select[0];
    const rowId = firstSelect.dataset["testitemid"];
    const zygosityValue = ZYGOSITY_OPTIONS?.[0]?.value;
    const notReal = ZYGOSITY_OPTIONS?.[5]?.value;
    const germlineVariantClassValue =
      GERMLINE_VARIANT_CLASS_OPTIONS?.[0]?.value;
    const somaticVariantClassValue = SOMATIC_VARIANT_CLASS_OPTIONS?.[0]?.value;
    const tier2 = SOMATIC_VARIANT_CLASS_OPTIONS?.[2]?.value;
    const path = GERMLINE_VARIANT_CLASS_OPTIONS?.[1]?.value;

    expect(firstSelect).toBeDefined();
    expect(rowId).toBeDefined();
    expect(zygosityValue).toBeDefined();

    store.dispatch(
      handleZygosity({ item: { id: rowId }, value: zygosityValue })
    );

    // const row2 = store.getState().table.data[rowId];
    // expect(row2.zygosity).toEqual(zygosityValue);

    store.dispatch(
      handleVariantClass({
        item: { id: rowId },
        value: germlineVariantClassValue
      })
    );

    const row3 = store.getState().table.data[rowId];

    // expect(row3.priority).toEqual(PRIORITY[germlineVariantClassValue]);

    expect(row3.variantClassGermline).toEqual(germlineVariantClassValue);

    store.dispatch(
      handleVariantClass({
        item: { id: rowId },
        value: somaticVariantClassValue
      })
    );

    const row4 = store.getState().table.data[rowId];
    expect(row4.variantClassGermline).toEqual(somaticVariantClassValue);

    store.dispatch(handleVariantClass({ item: { id: rowId }, value: notReal }));

    // const row5 = store.getState().table.data[rowId];
    // expect(row5.priority).toEqual(PRIORITY[notReal]);

    store.dispatch(handleVariantClass({ item: { id: rowId }, value: tier2 }));

    // const row6 = store.getState().table.data[rowId];
    // expect(row6.priority).toEqual(PRIORITY[tier2]);

    store.dispatch(handleVariantClass({ item: { id: rowId }, value: path }));

    // const row7 = store.getState().table.data[rowId];
    // expect(row7.priority).toEqual(PRIORITY[path]);
  });
});
