import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import TumorToolbar from "Pages/mainPage/components/tumorToolbar/TumorToolbar";
import { setTumorInfo } from "Actions/testActions";

describe("Tumor Toolbar", () => {
  it("if TumorToolbar opened, check 'Type' select ", () => {
    const { getByTestId, store } = renderWithRedux( <TumorToolbar  sidebarToggle />);

    const locationSelect = getByTestId("tumor-type-select");
    expect(locationSelect).toBeInTheDocument();
    store.dispatch(setTumorInfo({ type: "Test: type static text" }));
    expect(locationSelect).not.toBeInTheDocument();

    const tumorTypeStaticText = getByTestId("tumor-type-static-text");
    expect(tumorTypeStaticText).toBeInTheDocument();
    expect(tumorTypeStaticText.innerHTML).toEqual("Test: type static text");
  });

  it("if TumorToolbar opened, check 'Location' select ", () => {
    const { getByTestId, store } = renderWithRedux( <TumorToolbar  sidebarToggle />);

    const locationSelect = getByTestId("tumor-location-select");
    expect(locationSelect).toBeInTheDocument();
    store.dispatch(setTumorInfo({ location: "Test: location static text" }));
    expect(locationSelect).not.toBeInTheDocument();

    const tumorLocationStaticText = getByTestId("tumor-location-static-text");
    expect(tumorLocationStaticText).toBeInTheDocument();
    expect(tumorLocationStaticText.innerHTML).toEqual(
      "Test: location static text"
    );
  });

  it("if TumorToolbar opened, check 'Percent' select ", () => {
    const { getByTestId, store } = renderWithRedux( <TumorToolbar  sidebarToggle />);

    const inputNumber = getByTestId("tumor-percent-inputNumber");
    expect(inputNumber).toBeInTheDocument();
    store.dispatch(setTumorInfo({ cancer_cell_percentage: 25 }));
    expect(inputNumber).not.toBeInTheDocument();

    const inputNumberText = getByTestId("tumor-percent-static-text");
    expect(inputNumberText).toBeInTheDocument();
    expect(inputNumberText.innerHTML).toEqual("25%");
  });

  it("if TumorToolbar opened, check 'tumor-panel-close-icon clicked", () => {
    const { getByTestId } = renderWithRedux( <TumorToolbar  sidebarToggle />);

    const closeIcon = getByTestId("tumor-save-inputNumber");
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);
    expect(document.querySelector(".out")).not.toBeInTheDocument();
  });
});
