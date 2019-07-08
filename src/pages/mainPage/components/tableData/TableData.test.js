import React from "react";
import "jest-dom/extend-expect";
import TableData from './TableData';
import { renderWithRedux } from "Utils/test_helpers";
import {
  handleZygosity,
  handleVariantClass,
} from "Actions/tableActions";
import {
  ZYGOSITY_OPTIONS,
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";

describe('TableData', () => {
  it('zygosity and variant class change', () => {
    const { getAllByTestId, store } = renderWithRedux(<TableData/>);
    const select = getAllByTestId('zygosity-select');
    const firstSelect = select[0];
    const rowId = firstSelect.dataset['testitemid'];
    const zygosityValue = ZYGOSITY_OPTIONS?.[0]?.value;
    const germlineVariantClassValue = GERMLINE_VARIANT_CLASS_OPTIONS?.[0]?.value;
    const somaticVariantClassValue = SOMATIC_VARIANT_CLASS_OPTIONS?.[0]?.value;

    expect(firstSelect).toBeDefined();
    expect(rowId).toBeDefined();
    expect(zygosityValue).toBeDefined();

    const row1 = store.getState().table.data[rowId];
    expect(row1.zygosity).toBeFalsy();
    expect(row1.variantClass).toBeFalsy();

    store.dispatch(handleZygosity({ item: { id: rowId }, value: zygosityValue }));

    const row2 = store.getState().table.data[rowId];
    expect(row2.zygosity).toEqual(zygosityValue);

    store.dispatch(handleVariantClass({ item: { id: rowId }, value: germlineVariantClassValue }));

    const row3 = store.getState().table.data[rowId];
    expect(row3.variantClass).toEqual(germlineVariantClassValue);

    store.dispatch(handleVariantClass({ item: { id: rowId }, value: somaticVariantClassValue }));

    const row4 = store.getState().table.data[rowId];
    expect(row4.variantClass).toEqual(somaticVariantClassValue);
  });
});
