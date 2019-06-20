import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import actionsTypes from "Store/actionsTypes";
import { FILTERS } from "Utils/constants";


afterEach(cleanup);

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
  switch (action.type) {
    case actionsTypes.SET_FILTER_VARIANT_CLASS:
      break;
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  };
}

it("renders a message", () => {
  const { asFragment/* , fireEvent, container*/, getByText } = renderWithRedux(
    <SidebarFilters />
  );

  expect(getByText("PATH")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
