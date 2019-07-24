import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TumorInfoPercent from "./TumorInfoPercent";
import { setTumorInfo } from "Actions/testActions";
import { renderWithRedux } from "Utils/test_helpers";

describe("TumorInfoPercent", () => {
  it("create snapshot", () => {
    const handelAction = jest.fn(),
      { asFragment } = renderWithRedux(
        <TumorInfoPercent onAction={handelAction} />
      );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Check 'Save' data from inputNumber in the Store ", () => {
    const sendPercents = (val, store) =>
        store.dispatch(setTumorInfo({ cancer_cell_percentage: val })),
      handelAction = jest.fn(val => sendPercents(val, store)),
      { getByTestId, store } = renderWithRedux(
        <TumorInfoPercent onAction={handelAction} />
      ),
      saveIcon = getByTestId("tumor-save-inputNumber"),
      inputNumber = getByTestId("tumor-inputNumber-textField");

    expect(saveIcon).toBeInTheDocument();

    fireEvent.change(inputNumber, { target: { value: 4 } });
    fireEvent.click(saveIcon);
    expect(store.getState().test.tumor_info.cancer_cell_percentage).toEqual(4);
  });
});
