import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import ActionAddEditEvidence from "./ActionAddEditEvidence";

describe("<ActionAddEditEvidence />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(
      <ActionAddEditEvidence
        mode={"add"}
        submit={()=>{}}
        classification={"somatic"}
        evidenceCategory={"publications"}
        onChange={()=>{}}
        sourceValue={"http://example.com"}
        levelValue={"A1"}
        descriptionValue={""}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
