import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import EvidenceTable from "./EvidenceTable";

describe("<EvidenceTable />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<EvidenceTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});

