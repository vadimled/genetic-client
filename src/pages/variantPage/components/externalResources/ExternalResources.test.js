import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import React from "react";
import ExternalResources from "variantComponents/externalResources";

describe("ExternalResources ", () => {
  const externalResourcesVar1 = [
    {
      COSMIC: "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=4142157"
    },
    {
      "Damaging score": "TTCATGAGAGAAGGTGAGTGG"
    }
  ];
  const externalResourcesVar2 = [
    {
      COSMIC: [
        {
          childText: "COSM3997243",
          link:
            "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=3997243"
        },
        {
          childText: "COSM3997245",
          link:
            "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=3997245"
        },
        {
          childText: "COSM3997244",
          link:
            "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=3997244"
        }
      ]
    }
  ];

  it("should - if resource is static text, title be equal", () => {
    const { getByTestId } = renderWithRedux(
      <ExternalResources externalResources={externalResourcesVar1} />
    );
    const title = getByTestId("text-not-link-title-Damaging score");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual("Damaging score:");
  });

  it("should - if resource is static text, value be equal", () => {
    const { getByTestId } = renderWithRedux(
      <ExternalResources externalResources={externalResourcesVar1} />
    );
    const value = getByTestId("text-not-link-value-Damaging score");
    expect(value).toBeInTheDocument();
    expect(value.textContent).toEqual("TTCATGAGAGAAGGTGAGTGG");
  });

  it("should - if resource is link, received text and href be equal to link's data ", () => {
    const { getByTestId } = renderWithRedux(
      <ExternalResources externalResources={externalResourcesVar1} />
    );
    const a = getByTestId("external-resources-COSMIC");
    expect(a).toBeInTheDocument();
    expect(a.textContent).toEqual("COSMIC");
    expect(a.getAttribute("href")).toEqual(
      "https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=4142157"
    );
  });

  it("should - if resource is links array", () => {
    const { getByTestId } = renderWithRedux(
      <ExternalResources externalResources={externalResourcesVar2} />
    );

    expect(getByTestId("external-resources-COSM3997243")).toBeInTheDocument();
    expect(getByTestId("external-resources-COSM3997244")).toBeInTheDocument();
    expect(getByTestId("external-resources-COSM3997245")).toBeInTheDocument();
  });
});
