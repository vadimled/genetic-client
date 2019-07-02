import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import App from "../../../../App";
import { BrowserRouter as Router } from "react-router-dom";
import TumorToolbar from "Pages/mainPage/components/tumorToolbar/TumorToolbar";
import { setTumorInfo } from "Actions/variantsActions";

describe("Tumor Toolbar", () => {
  it("if Icon Info reacted to click", () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <App />
      </Router>
    );

    const iconInfo = getByTestId("header-icon-info");
    fireEvent.click(iconInfo);
    expect(document.querySelector(".out")).toBeInTheDocument();
  });

  it("if TumorToolbar opened, check 'Type' select ", () => {
    const { getByTestId, store } = renderWithRedux(<TumorToolbar />);

    const locationSelect = getByTestId("tumor-type-select");
    expect(locationSelect).toBeInTheDocument();
    store.dispatch(setTumorInfo({ type: "Test: type static text" }));
    expect(locationSelect).not.toBeInTheDocument();
  
    const tumorTypeStaticText = getByTestId("tumor-type-static-text");
    expect(tumorTypeStaticText).toBeInTheDocument();
    expect(tumorTypeStaticText.innerHTML).toEqual("Test: type static text");
  });

  it("if TumorToolbar opened, check 'Location' select ", () => {
    const { getByTestId, store } = renderWithRedux(<TumorToolbar />);

    const locationSelect = getByTestId("tumor-location-select");
    expect(locationSelect).toBeInTheDocument();
    store.dispatch(setTumorInfo({ location: "Test: location static text" }));
    expect(locationSelect).not.toBeInTheDocument();
    
    const tumorLocationStaticText = getByTestId("tumor-location-static-text");
    expect(tumorLocationStaticText).toBeInTheDocument();
    expect(tumorLocationStaticText.innerHTML).toEqual("Test: location static text");
  });

  it("if TumorToolbar opened, check 'Percent' select ", () => {
    const { getByTestId, store } = renderWithRedux(<TumorToolbar />);

    const inputNumber = getByTestId("tumor-percent-inputNumber");
    expect(inputNumber).toBeInTheDocument();
    store.dispatch(setTumorInfo({ percent: 25 }));
    expect(inputNumber).not.toBeInTheDocument();
    
    const inputNumberText = getByTestId("tumor-percent-static-text");
    expect(inputNumberText).toBeInTheDocument();
    expect(inputNumberText.innerHTML).toEqual("25%");
  });

  it("if TumorToolbar opened, check 'tumor-panel-close-icon clicked", () => {
    const { getByTestId } = renderWithRedux(<TumorToolbar />);

    const closeIcon = getByTestId("tumor-save-inputNumber");
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);
    expect(document.querySelector(".out")).not.toBeInTheDocument();
  });
});
