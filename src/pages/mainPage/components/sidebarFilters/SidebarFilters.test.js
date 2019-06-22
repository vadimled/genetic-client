import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import actionsTypes from "Store/actionsTypes";
import { FILTERS } from "Utils/constants";
import { renderWithRedux } from "Utils/test_helpers";


const startingState = {
  filters: {
    [FILTERS.type]: "somatic", // 'somatic' | 'germline'
    [FILTERS.variantClass]: [],
    [FILTERS.somaticClass]: [],
    [FILTERS.hotSpot]: [],
    [FILTERS.snp]: [],
    [FILTERS.roi]: [],
    [FILTERS.vaf]: [], // [0, 100]
    [FILTERS.cancerDBs]: [],
    [FILTERS.gnomAD]: [],
    [FILTERS.searchText]: ""
  }
};

function reducer(state = startingState, action) {
  // const { value, mode } = action.payload;
  // let newValue;

  switch (action.type) {
    case actionsTypes.SET_FILTER_VARIANT_CLASS:
      return {
        ...state,
        [FILTERS.variantClass]: true
      };
      /* newValue = changeValueAccordingOnMode(
        state[FILTERS.variantClass],
        value,
        mode
      );

      return {
        ...state,
        [FILTERS.variantClass]: newValue
      };*/

    default:
      return state;
  }
}

describe("SideBarFilters component test", () => {
  // afterEach(cleanup);
  beforeEach(() => {});

  test("create snapshot", () => {
    const { asFragment } = renderWithRedux(<SidebarFilters />, reducer, startingState);
    expect(asFragment()).toMatchSnapshot();
  });

  xtest("if filter clicked", () => {
    const { getByLabelText } = renderWithRedux(<SidebarFilters />, reducer, startingState);
    const checkbox = getByLabelText("PATH");
    // console.log(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test("if filter LPATH exists", () => {
    const { getByText } = renderWithRedux(<SidebarFilters />, reducer, startingState);
    expect(getByText("LPATH")).toBeInTheDocument();
  });

  test("if filter VUS exists", () => {
    const { getByText } = renderWithRedux(
      <SidebarFilters />,
      reducer,
      startingState
    );
    expect(getByText("VUS")).toBeInTheDocument();
  });

  test("if filter LBEN exists", () => {
    const { getByText } = renderWithRedux(
      <SidebarFilters />,
      reducer,
      startingState
    );
    expect(getByText("LBEN")).toBeInTheDocument();
  });

  test("if filter BEN exists", () => {
    const { getByText } = renderWithRedux(
      <SidebarFilters />,
      reducer,
      startingState
    );
    expect(getByText("BEN")).toBeInTheDocument();
  });
});
