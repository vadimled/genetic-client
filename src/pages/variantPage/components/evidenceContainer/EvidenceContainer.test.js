import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import EvidenceContainer from "./EvidenceContainer";

describe("<EvidenceContainer />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(<EvidenceContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

