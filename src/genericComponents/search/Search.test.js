import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import Search from "./Search";

describe("<Search />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
