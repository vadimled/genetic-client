import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import MainPage from "Pages/mainPage/MainPage";
import Toolbar from "./Toolbar";
import { updateSearch } from "Store/actions/tableActions";
import { handleSelectedRow } from "Actions/tableActions";
import { getSelectedRows, getOnConfirmation, getConfirmationData } from "Store/selectors";

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

  it('showing send-for-confirmation-popup and handle confirmation-button btn', () => {
    const { getByTestId, store } = renderWithRedux(<Toolbar />);

    const selectedRows1 = getSelectedRows(store.getState());
    expect(selectedRows1.length).toEqual(0);

    // find first item in table data and select one
    const tableData1 = store.getState().table.data;
    const firstItemId = tableData1[Object.keys(tableData1)[0]].id;
    store.dispatch(handleSelectedRow({
      item: { id: firstItemId }, // other information in item is not required
      value: true
    }));

    const selectedRows2 = getSelectedRows(store.getState());
    const confirmationButton = getByTestId('confirmation-button');
    expect(selectedRows2.length).toEqual(1);
    expect(confirmationButton).toBeDefined();

    // test for handle confirmationButton
    const confirmationData1 = getConfirmationData(store.getState());
    const isOnConfirmation1 = getOnConfirmation(store.getState());

    expect(isOnConfirmation1).toEqual(false);
    expect(confirmationData1.length).toEqual(0);

    fireEvent.click(confirmationButton);

    const confirmationData2 = getConfirmationData(store.getState());
    const isOnConfirmation2 = getOnConfirmation(store.getState());

    expect(isOnConfirmation2).toEqual(true);
    expect(confirmationData2.length).toEqual(1);
  });

});
