import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SidebarFilters from "Pages/mainPage/components/sidebarFilters/SidebarFilters";
import reducers from "Store/reducers";

function renderWithRedux(component, store = createStore(reducers)) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}

describe("SideBarFilters component test", () => {
  test("create snapshot", () => {
    const { asFragment } = renderWithRedux(<SidebarFilters />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("if filter clicked", () => {
    const { getByTestId, store } = renderWithRedux(<SidebarFilters />);
    const checkbox = getByTestId("filter-checkbox-PATH");
    fireEvent.click(checkbox);

    const mStore = store.getState().filters;
    console.log(mStore);

    const ancestor = getByTestId("filter-PATH");
    expect(ancestor).toBeInTheDocument();
  });
});
