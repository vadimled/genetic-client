import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import Header from "./Header";

describe("<Header />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
