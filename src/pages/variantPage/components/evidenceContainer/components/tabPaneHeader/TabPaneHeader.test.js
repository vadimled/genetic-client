import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TabPaneHeader from "components/evidenceContainer/components/tabPaneHeader/TabPaneHeader";

describe("<TabPaneHeader />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<TabPaneHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});


