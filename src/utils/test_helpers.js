import { createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";

export function renderWithRedux(
  component, reducer, initialState,{ store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  };
}
