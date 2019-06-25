import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import TableData from './TableData';
import reducers from "Store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

afterEach(cleanup);

function renderWithRedux(
  component,
  store = createStore(reducers)
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}

describe('TableData', () => {
  it('zygosity change', () => {
    const { getAllByTestId } = renderWithRedux(<TableData/>);
    const select = getAllByTestId('zygosity-select');
    console.log("select", select);
  });
});
