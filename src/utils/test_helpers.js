import { createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import reducers from "Store/reducers";

export function renderWithRedux(component, store = createStore(reducers)) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}
