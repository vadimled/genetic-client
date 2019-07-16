import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import React from "react";
import ExternalResources from "variantComponents/externalResources";

describe("ExternalResources ", () => {
  const externalResources = [
    {
      COSMIC: "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=4142157"
    },
    {
      "Damaging score": "TTCATGAGAGAAGGTGAGTGG"
    }
  ];
  let getByTestId;

  beforeEach(() => {
    const queries = renderWithRedux(
      <ExternalResources externalResources={externalResources} />
    );
    getByTestId = queries.getByTestId;
  });

  it("should - if resource is link, received text and href be equal to link's data ", () => {
    const a = getByTestId("external-resources-COSMIC");
    expect(a).toBeInTheDocument();
    expect(a.textContent).toEqual("COSMIC");
    expect(a.getAttribute("href")).toEqual(
      "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=4142157"
    );
  });

  it("should - if resource is static text, title be equal", () => {
    const title = getByTestId("text-not-link-title-Damaging score");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual("Damaging score:");
  });

  it("should - if resource is static text, value be equal", () => {
    const value = getByTestId("text-not-link-value-Damaging score");
    expect(value).toBeInTheDocument();
    expect(value.textContent).toEqual("TTCATGAGAGAAGGTGAGTGG");
  });
});
