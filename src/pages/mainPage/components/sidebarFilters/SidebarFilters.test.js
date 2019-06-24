import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import { renderWithRedux } from "Utils/test_helpers";

describe("SideBarFilters component test", () => {
  test("create snapshot", () => {
    const { asFragment } = renderWithRedux(<SidebarFilters />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("if filter variantClass-PATH clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    const checkbox = getByTestId("filter-checkbox-PATH");
    fireEvent.click(checkbox);

    const indicator = getByTestId("filter-variantClass-PATH");
    expect(indicator).toBeInTheDocument();
  });

  test("if indicator variantClass delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-PATH"));
    fireEvent.click(getByTestId("filter-checkbox-LPATH"));
    
    const indicator = getByTestId("filter-variantClass-PATH");
    expect(indicator).toBeInTheDocument();
    const indicator1 = getByTestId("filter-variantClass-LPATH");
    expect(indicator1).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-variantClass"));
    expect(indicator).not.toBeInTheDocument();
    expect(indicator1).not.toBeInTheDocument();
  });
});
