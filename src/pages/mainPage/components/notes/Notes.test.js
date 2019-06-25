import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import { updateSearch } from "Store/actions/tableActions";
import Notes from "Pages/mainPage/components/notes/Notes";

describe('Notes', () => {
  it("if some text inserted to Autocomplete and button close clicked on its indicator", () => {
    const { getByTestId, store } = renderWithRedux(<Notes />);
    
    store.dispatch(updateSearch("a"));
    
    const indicator = getByTestId("filter-searchText-a");
    expect(indicator).toBeInTheDocument();
    
    fireEvent.click(getByTestId("button-searchText"));
    expect(indicator).not.toBeInTheDocument();
  });
  
});
