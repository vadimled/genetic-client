import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import { renderWithRedux } from "Utils/test_helpers";
import { setFilterVaf } from "Store/actions/filtersActions";

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

  test("if filter 'hotSpot' clicked; if indicator 'hotSpot' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-hotSpot-True"));
    fireEvent.click(getByTestId("filter-checkbox-hotSpot-False"));
    
    const
      indicator1 = getByTestId("filter-hotSpot-True"),
      indicator2 = getByTestId("filter-hotSpot-False");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-hotSpot"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
  });

  test("if filter 'snp' clicked; if indicator 'snp' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-snp-True"));
    fireEvent.click(getByTestId("filter-checkbox-snp-False"));
    
    const
      indicator1 = getByTestId("filter-snp-True"),
      indicator2 = getByTestId("filter-snp-False");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-snp"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
  });

  test("if filter 'roi' clicked; if indicator 'roi' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-roi-True"));
    fireEvent.click(getByTestId("filter-checkbox-roi-False"));
    
    const
      indicator1 = getByTestId("filter-roi-True"),
      indicator2 = getByTestId("filter-roi-False");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-roi"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
  });

  test("if filter 'canserBDs' clicked; if indicator 'canserBDs' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Clinvar"));
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Cosmic"));
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Omim"));
    
    const
      indicator1 = getByTestId("filter-canserBDs-Clinvar"),
      indicator2 = getByTestId("filter-canserBDs-Cosmic"),
      indicator3 = getByTestId("filter-canserBDs-Omim");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-canserBDs"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
  });

  test("if filter 'gnomAD' clicked; if indicator 'gnomAD' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);
    
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-NA"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-very rare(0-1%)"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-rare (1-5%)"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-common (>5%)"));
    
    const
      indicator1 = getByTestId("filter-gnomAD-NA"),
      indicator2 = getByTestId("filter-gnomAD-very rare(0-1%)"),
      indicator3 = getByTestId("filter-gnomAD-rare (1-5%)"),
      indicator4 = getByTestId("filter-gnomAD-common (>5%)");
    
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
  
    fireEvent.click(getByTestId("button-gnomAD"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
  });
  
  test("if filter 'Vaf' position; if indicator 'Vaf' delete clicked", () => {
    const
      { store, container, getByTestId } = renderWithRedux(<SidebarFilters />),
      sliderTrack = container.querySelector(".ant-slider");
    
    fireEvent.click(sliderTrack);
    store.dispatch(setFilterVaf( { value: [5, 6], mode: "range" }));
    
    const
      sliderTrack1 = container.querySelector(".ant-slider-track") ,
      indicator1 = getByTestId("filter-vaf-5"),
      indicator2 = getByTestId("filter-vaf-6");
    
    expect(sliderTrack1).toBeInTheDocument();
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();

    fireEvent.click(getByTestId("button-reset-rangeSlider"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
  });
});
