import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import TumorInfoSelect from "./TumorInfoSelect";
import { setTumorInfo } from "Actions/variantsActions";
import { renderWithRedux } from "Utils/test_helpers";

describe("TumorInfoSelect", () => {
  it("create snapshot", () => {
    const handelAction = jest.fn(),
      { asFragment } = renderWithRedux(
        <TumorInfoSelect onAction={handelAction} />
      );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Check 'Save' data from inputNumber in the Store ", () => {
    const sendPercents = (val, store) =>
        store.dispatch(setTumorInfo({ percent: val })),
      handelAction = jest.fn(val => sendPercents(val, store)),
      { getByTestId, store } = renderWithRedux(
        <TumorInfoSelect onAction={handelAction} />
      ),
      saveIcon = getByTestId("tumor-save-inputNumber"),
      inputNumber = getByTestId("tumor-inputNumber-textField");

    expect(saveIcon).toBeInTheDocument();

    fireEvent.change(inputNumber, { target: { value: 4 } });
    fireEvent.click(saveIcon);
    expect(store.getState().variants.tumorInfo.percent).toEqual(4);
  });
});
