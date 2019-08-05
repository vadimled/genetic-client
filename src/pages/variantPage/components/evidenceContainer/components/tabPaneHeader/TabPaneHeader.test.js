import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TabPaneHeader from "./TabPaneHeader";

describe("<TabPaneHeader/>", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(
      <TabPaneHeader amount={2} title={"header.title"} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
