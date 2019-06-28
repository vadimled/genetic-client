import React from "react";
// import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TableData from './TableData';
import { renderWithRedux } from "Utils/test_helpers";
import {
  handleZygosity,
  // handleVariantClass,
} from "Actions/tableActions";
import {
  ZYGOSITY_OPTIONS,
  // GERMLINE_VARIANT_CLASS_OPTIONS,
  // SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";

describe('TableData', () => {
  it('zygosity change', () => {
    const { getAllByTestId, store } = renderWithRedux(<TableData/>);
    const select = getAllByTestId('zygosity-select');
    const firstSelect = select[0];
    const rowId = firstSelect.dataset['testitemid'];
    const zygosityValue = ZYGOSITY_OPTIONS?.[0]?.value;

    expect(firstSelect).toBeDefined();
    expect(rowId).toBeDefined();
    expect(zygosityValue).toBeDefined();

    const changedSelectValueSpan1 = firstSelect.getElementsByClassName('ant-select-selection-selected-value');
    console.log("changedSelectValueSpan1", changedSelectValueSpan1);



    store.dispatch(handleZygosity({ item: { id: rowId }, value: zygosityValue }));

    const changedSelectValueSpan2 = firstSelect.getElementsByClassName('ant-select-selection-selected-value');
    console.log("changedSelectValueSpan2", changedSelectValueSpan2);

    const tableStore = store.getState().table;
    expect(tableStore?.data?.[rowId].zygosity).toEqual(zygosityValue);

    const homo = getByText('div');
    console.log("homo", homo);

    const changedSelectValueSpan = firstSelect.querySelector('span');
    console.log("changedSelectValueSpan", changedSelectValueSpan);


  });
});
