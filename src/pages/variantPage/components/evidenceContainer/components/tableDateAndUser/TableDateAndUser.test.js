import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TableDateAndUser from "./TableDateAndUser";

describe("<TableDateAndUser />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<TableDateAndUser />);
    expect(asFragment()).toMatchSnapshot();
  });
});

