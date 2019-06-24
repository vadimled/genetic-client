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

  test("if filter 'variantClass' clicked; if indicator 'variantClass' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-variantClass-PATH"));
    fireEvent.click(getByTestId("filter-checkbox-variantClass-LPATH"));
    fireEvent.click(getByTestId("filter-checkbox-variantClass-VUS"));
    fireEvent.click(getByTestId("filter-checkbox-variantClass-LBEN"));
    fireEvent.click(getByTestId("filter-checkbox-variantClass-BEN"));
    fireEvent.click(getByTestId("filter-checkbox-variantClass-Unclassified"));
    
    const
      indicator1 = getByTestId("filter-variantClass-PATH"),
      indicator2 = getByTestId("filter-variantClass-LPATH"),
      indicator3 = getByTestId("filter-variantClass-VUS"),
      indicator4 = getByTestId("filter-variantClass-LBEN"),
      indicator5 = getByTestId("filter-variantClass-BEN"),
      indicator6 = getByTestId("filter-variantClass-Unclassified");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
    expect(indicator5).toBeInTheDocument();
    expect(indicator6).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-variantClass"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
    expect(indicator5).not.toBeInTheDocument();
    expect(indicator6).not.toBeInTheDocument();
  });

  test("if filter 'somaticClass' clicked; if indicator 'somaticClass' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-somaticClass-Tier1"));
    fireEvent.click(getByTestId("filter-checkbox-somaticClass-Tier2"));
    fireEvent.click(getByTestId("filter-checkbox-somaticClass-Tier3"));
    fireEvent.click(getByTestId("filter-checkbox-somaticClass-Tier4"));
    fireEvent.click(getByTestId("filter-checkbox-somaticClass-Unclassified"));
    
    const
      indicator1 = getByTestId("filter-somaticClass-Tier1"),
      indicator2 = getByTestId("filter-somaticClass-Tier2"),
      indicator3 = getByTestId("filter-somaticClass-Tier3"),
      indicator4 = getByTestId("filter-somaticClass-Tier4"),
      indicator6 = getByTestId("filter-somaticClass-Unclassified");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
    expect(indicator6).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-somaticClass"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
    expect(indicator6).not.toBeInTheDocument();
  });
});
