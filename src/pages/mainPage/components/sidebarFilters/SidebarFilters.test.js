import React from "react";
import { fireEvent, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import actionsTypes from "Store/actionsTypes";
import { FILTERS } from "Utils/constants";
import { renderWithRedux } from "Utils/test_helpers";
// import { changeValueAccordingOnMode } from "Store/reducers/filtersReducer";

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

  // test("create snapshot", () => {
  //   const { asFragment } = renderWithRedux(<SidebarFilters />, reducer, startingState);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  test("if filter clicked", async () => {
    const { getByTestId } = renderWithRedux(
      <SidebarFilters />,
      reducer,
      startingState
    );
    const checkbox = await waitForElement(() =>
      getByTestId("filter-checkbox-PATH")
    );

    // expect(getByText("PATH")).toBeInTheDocument();
    console.log("------ typeof checkbox", typeof checkbox);
    // console.log ("------ checkbox" ,checkbox);
    fireEvent.change(checkbox, { target: { checked: true } });
    console.log({ checkbox });
    expect(checkbox.checked).toEqual(true);
    const ancestor = await waitForElement(() => getByTestId("filter-PATH"));
    expect(ancestor).toBeInTheDocument();
  });

  test("if filter LPATH exists", () => {
    const { getByTestId } = renderWithRedux(
      <SidebarFilters />,
      reducer,
      startingState
    );
    expect(getByTestId("filter-checkbox-LPATH")).toBeInTheDocument();
  });
});
