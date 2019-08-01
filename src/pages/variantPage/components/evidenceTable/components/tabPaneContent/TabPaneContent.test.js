import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TabPaneContent from "./TabPaneContent";

describe("<TabPaneContent />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<TabPaneContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});


