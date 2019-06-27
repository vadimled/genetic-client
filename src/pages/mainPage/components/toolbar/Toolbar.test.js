import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import MainPage from "Pages/mainPage/MainPage";
import { updateSearch } from "Store/actions/tableActions";

describe('Toolbar', () => {
  it("if some text inserted to Autocomplete and button close clicked on its indicator", () => {
    const { getByTestId, store } = renderWithRedux(<MainPage />);
  
    store.dispatch(updateSearch("a"));

    const indicator = getByTestId("filter-searchText-a");
    expect(indicator).toBeInTheDocument();

    fireEvent.click(getByTestId("button-searchText"));
    expect(indicator).not.toBeInTheDocument();
  });
  
  it("if some text inserted to Autocomplete and 'clear-filters-button' clicked", () => {
    const { getByTestId, store } = renderWithRedux(<MainPage />);
  
    store.dispatch(updateSearch("a"));

    const indicator = getByTestId("filter-searchText-a");
    expect(indicator).toBeInTheDocument();

    fireEvent.click(getByTestId("clear-filters-button"));
    expect(indicator).not.toBeInTheDocument();
    expect(store.getState().filters.searchText).toEqual("");
  });
  
});
