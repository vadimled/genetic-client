import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import VariantPageHeader from "./VariantPageHeader";
import { BrowserRouter as Router } from "react-router-dom";
import { setZygosityType } from "Actions/variantPageActions";

describe("VariantPageHeader ", () => {
  let getByTestId;
  const variantData = {
    gene: "A1CF",
    protein: "p.Leu2303Leu",
    chrPosition: "chr1:45797505",
    alleleChange: "G > GA",
    ref: "G",
    alt: "GA",
    dbSNP: "rs3219489",
    clinvarVariationId: "516652",
    coding: "c.7634+21_7634+22insTCATCATGAGAGAAGGTGAGTGGGGCTCTCAAAGTG",
    transcript: "NM_110509.1",
    COSMIC: "COSM4142157",
    variant: "D479D",
    AminoAcidChange: "I1564ISLKN",
    DamagingScore: "TTCATGAGAGAAGGTGAGTGG",
    dataId: "k5wp5amernh84pvsygjji9ljz",
    type: "somatic",
    somatic_variant_class: "unclassified",
    germline_variant_class: "unclassified"
  };

  beforeEach(() => {
    const queries = renderWithRedux(
      <Router>
        <VariantPageHeader sidebarToggle={false} variantData={variantData} />
      </Router>

    );
    getByTestId = queries.getByTestId;
  });

  it("should - received text be equal to text of textField (Gene)  ", () => {
    const geneElement = getByTestId("inform-field-gene");
    expect(geneElement).toBeInTheDocument();
    expect(geneElement.innerHTML).toEqual(variantData.gene);
  });

  it("should - received text be equal to text of textField (Protein)  ", () => {
    const proteinElement = getByTestId("inform-field-protein");
    expect(proteinElement).toBeInTheDocument();
    expect(proteinElement.textContent).toEqual(variantData.protein);
  });

  it("should - received text be equal to text of textField (chrPosition)  ", () => {
    const chrPositionElement = getByTestId("external-link-chrPosition");
    expect(chrPositionElement).toBeInTheDocument();
    expect(chrPositionElement.textContent).toEqual(variantData.chrPosition);
  });

  it("should - received text be equal to text of textField (coding)  ", () => {
    const codingElement = getByTestId("inform-field-coding");
    expect(codingElement).toBeInTheDocument();
    expect(codingElement.textContent).toEqual(variantData.coding);
  });

  it("should - received text be equal to text of textField (alleleChange)  ", () => {
    const alleleChangeElement = getByTestId("inform-field-alleleChange");
    expect(alleleChangeElement).toBeInTheDocument();
    expect(alleleChangeElement.textContent).toEqual(variantData.alleleChange);
  });

  xit("should - received text be equal to text of textField (transcript)  ", () => {
    const transcriptElement = getByTestId("inform-field-transcript");
    expect(transcriptElement).toBeInTheDocument();
    expect(transcriptElement.textContent).toEqual(variantData.transcript);
  });

  xit("should - non active Button is Germline and exists ", () => {
    const nonActiveButton = getByTestId("non-active-button-germline");
    expect(nonActiveButton).toBeInTheDocument();
  });

  xit("should - inactive Button after click going to active state", () => {
    store.dispatch(
      setZygosityType({
        selectedZygosityType: "somatic",
        testId: 1,
        variantId: 1
      })
    );

    const nonActiveButton = getByTestId("non-active-button-germline");
    expect(nonActiveButton).toBeInTheDocument();

    fireEvent.click(nonActiveButton);

    expect(store.getState().variantPage.selectedZygosityType).toEqual(
      "germline"
    );
  });

  // error - The given element does not have a value setter
  xit("should - active Button is Select", () => {
    const activeButton = getByTestId("gene-type-select-somatic");
    expect(activeButton).toBeInTheDocument();

    fireEvent.change(activeButton, { target: { value: "tier2" } });
    expect(store.getState().variantPage.valueSomatic).toEqual("tier2");
  });
});
