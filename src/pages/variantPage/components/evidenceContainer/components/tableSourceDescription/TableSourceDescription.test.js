import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TableSourceDescription from "./TableSourceDescription";

describe("<TableSourceDescription />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(
      <TableSourceDescription
        source={"http://example.com"}
        description={"description"}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
