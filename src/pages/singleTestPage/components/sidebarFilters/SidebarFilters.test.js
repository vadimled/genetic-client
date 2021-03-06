import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import reducers from "Store/reducers";
import { fireEvent, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import SidebarFilters from "Pages/singleTestPage/components/sidebarFilters/SidebarFilters";
import { renderWithRedux } from "Utils/test_helpers";
import { setFilterVaf } from "Store/actions/filtersActions";
import SingleTestPage from "Pages/singleTestPage/SingleTestPage";
import { fetchTestMetadata } from "../../../../store/actions/testActions";
import { fetchTableData } from "../../../../store/actions/tableActions";
import { BrowserRouter as Router } from "react-router-dom";
import { setDefaultFilters } from "../../../../store/actions/filtersActions";

const initSteps = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { getByTestId, store, getAllByTestId } = renderWithRedux(
    <Router>
      <SingleTestPage />
    </Router>,
    createStore(reducers, applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchSaga);

  store.dispatch(fetchTableData());

  store.dispatch(setDefaultFilters());

  store.dispatch(fetchTestMetadata("GS00115NP050818_TS1_01"));

  return {store, getByTestId, getAllByTestId};
};

describe("SideBarFilters component test", () => {
  test("create snapshot", () => {
    const { asFragment } = renderWithRedux(<SidebarFilters />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("if filter 'variantClass' clicked; if indicator 'variantClass' delete clicked", async () => {
    const { getByTestId } = initSteps();

    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-PATH")));
    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-LPATH")));
    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-VUS")));
    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-LBEN")));
    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-BEN")));
    fireEvent.click(await waitForElement(() => getByTestId("filter-checkbox-variantClassGermline-Unclassified")));



    const indicator1 = await waitForElement(() => getByTestId("filter-variantClassGermline-PATH"));
    const indicator2 = await waitForElement(() => getByTestId("filter-variantClassGermline-LPATH"));
    const indicator3 = await waitForElement(() => getByTestId("filter-variantClassGermline-VUS"));
    const indicator4 = await waitForElement(() => getByTestId("filter-variantClassGermline-LBEN"));
    const indicator5 = await waitForElement(() => getByTestId("filter-variantClassGermline-BEN"));
    const indicator6 = await waitForElement(() => getByTestId("filter-variantClassGermline-Unclassified"));



    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
    expect(indicator5).toBeInTheDocument();
    expect(indicator6).toBeInTheDocument();

    fireEvent.click(getByTestId("button-variantClassGermline"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
    expect(indicator5).not.toBeInTheDocument();
    expect(indicator6).not.toBeInTheDocument();
  });

  it("if filter 'somaticClass' clicked; if indicator 'somaticClass' delete clicked", async () => {
    const { getByTestId } = initSteps();

    fireEvent.click(getByTestId("filter-checkbox-variantClassSomatic-Tier1"));
    fireEvent.click(getByTestId("filter-checkbox-variantClassSomatic-Tier2"));
    fireEvent.click(getByTestId("filter-checkbox-variantClassSomatic-Tier3"));
    fireEvent.click(getByTestId("filter-checkbox-variantClassSomatic-Tier4"));
    fireEvent.click(getByTestId("filter-checkbox-variantClassSomatic-Unclassified"));

    const indicator1 = await waitForElement(() => getByTestId("filter-variantClassSomatic-Tier1"));
    const indicator2 = await waitForElement(() => getByTestId("filter-variantClassSomatic-Tier2"));
    const indicator3 = await waitForElement(() => getByTestId("filter-variantClassSomatic-Tier3"));
    const indicator4 = await waitForElement(() => getByTestId("filter-variantClassSomatic-Tier4"));
    const indicator6 = await waitForElement(() => getByTestId("filter-variantClassSomatic-Unclassified"));

    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
    expect(indicator6).toBeInTheDocument();


    fireEvent.click(getByTestId("button-variantClassSomatic"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
    expect(indicator6).not.toBeInTheDocument();
  });

  it("if filter 'zygosity' clicked; if indicator 'zygosity' delete clicked", async () => {
    const { getByTestId } = initSteps();

    fireEvent.click(getByTestId("filter-checkbox-zygosity-Unknown"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Not Real"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Insignificant"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Homo"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Hetero"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Hemi"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Somatic"));
    fireEvent.click(getByTestId("filter-checkbox-zygosity-Not Defined"));


    const indicator1 = await waitForElement(() => getByTestId("filter-zygosity-Unknown"));
    const indicator2 = await waitForElement(() => getByTestId("filter-zygosity-Not Real"));
    const indicator3 = await waitForElement(() => getByTestId("filter-zygosity-Insignificant"));
    const indicator4 = await waitForElement(() => getByTestId("filter-zygosity-Homo"));
    const indicator5 = await waitForElement(() => getByTestId("filter-zygosity-Hetero"));
    const indicator6 = await waitForElement(() => getByTestId("filter-zygosity-Hemi"));
    const indicator7 = await waitForElement(() => getByTestId("filter-zygosity-Somatic"));
    const indicator8 = await waitForElement(() => getByTestId("filter-zygosity-Not Defined"));


    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();
    expect(indicator5).toBeInTheDocument();
    expect(indicator6).toBeInTheDocument();
    expect(indicator7).toBeInTheDocument();
    expect(indicator7).toBeInTheDocument();


    fireEvent.click(getByTestId("button-zygosity"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
    expect(indicator6).not.toBeInTheDocument();
    expect(indicator7).not.toBeInTheDocument();
    expect(indicator8).not.toBeInTheDocument();
  });

  it("if filter 'effect' clicked; if indicator 'effect' delete clicked", async () => {
    const { getByTestId } = initSteps();

    fireEvent.click(getByTestId("filter-checkbox-effect-High"));
    fireEvent.click(getByTestId("filter-checkbox-effect-Modifier"));
    fireEvent.click(getByTestId("filter-checkbox-effect-Moderate"));
    fireEvent.click(getByTestId("filter-checkbox-effect-Low"));

    const indicator1 = await waitForElement(() => getByTestId("filter-effect-High"));
    const indicator2 = await waitForElement(() => getByTestId("filter-effect-Modifier"));
    const indicator3 = await waitForElement(() => getByTestId("filter-effect-Moderate"));
    const indicator4 = await waitForElement(() => getByTestId("filter-effect-Low"));

    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
    expect(indicator3).toBeInTheDocument();
    expect(indicator4).toBeInTheDocument();

    fireEvent.click(getByTestId("button-effect"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();

  });

  it("if filter 'hotSpot' clicked; if indicator 'hotSpot' delete clicked", () => {
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

  it("if filter 'snp' clicked; if indicator 'snp' delete clicked", () => {
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

  it("if filter 'roi' clicked; if indicator 'roi' delete clicked", () => {
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

  it("if filter 'canserBDs' clicked; if indicator 'canserBDs' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);

    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Clinvar"));
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Cosmic"));

    const
      indicator1 = getByTestId("filter-canserBDs-Clinvar"),
      indicator2 = getByTestId("filter-canserBDs-Cosmic");

    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();

    fireEvent.click(getByTestId("button-canserBDs"));
    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
  });

  it("if filter 'gnomAD' clicked; if indicator 'gnomAD' delete clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);

    fireEvent.click(getByTestId("filter-checkbox-gnomAD-NA"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-very rare (0-1%)"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-rare (1-5%)"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-common (>5%)"));

    const
      indicator1 = getByTestId("filter-gnomAD-NA"),
      indicator2 = getByTestId("filter-gnomAD-very rare (0-1%)"),
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

  it("if filter 'Vaf' position; if indicator 'Vaf' delete clicked", () => {
    const
      { store, container, getByTestId } = renderWithRedux(<SidebarFilters />),
      sliderTrack = container.querySelector(".ant-slider");

    fireEvent.click(sliderTrack);
    store.dispatch(setFilterVaf([5, 6]));

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

  it("if several filters selected and 'clear-filters-button' clicked", () => {
    const { getByTestId } = renderWithRedux(<SidebarFilters />);

    fireEvent.click(getByTestId("filter-checkbox-gnomAD-NA"));
    fireEvent.click(getByTestId("filter-checkbox-gnomAD-very rare (0-1%)"));
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Clinvar"));
    fireEvent.click(getByTestId("filter-checkbox-canserBDs-Cosmic"));

    const
      indicator1 = getByTestId("filter-gnomAD-NA"),
      indicator2 = getByTestId("filter-gnomAD-very rare (0-1%)"),
      indicator3 = getByTestId("filter-canserBDs-Clinvar"),
      indicator4 = getByTestId("filter-canserBDs-Cosmic");

    fireEvent.click(getByTestId("clear-filters-button"));

    expect(indicator1).not.toBeInTheDocument();
    expect(indicator2).not.toBeInTheDocument();
    expect(indicator3).not.toBeInTheDocument();
    expect(indicator4).not.toBeInTheDocument();
  });

});
