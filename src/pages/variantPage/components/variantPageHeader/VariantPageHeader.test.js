import React from "react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import VariantPageHeader from "./VariantPageHeader";

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
      <VariantPageHeader sidebarToggle={false} variantData={variantData} />
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
    const chrPositionElement = getByTestId("inform-field-chrPosition");
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

  it("should - received text be equal to text of textField (transcript)  ", () => {
    const transcriptElement = getByTestId("inform-field-transcript");
    expect(transcriptElement).toBeInTheDocument();
    expect(transcriptElement.textContent).toEqual(variantData.transcript);
  });

  it("should - non active Button is Germline and exists ", () => {
    const nonActiveButton = getByTestId("non-active-button-germline");
    expect(nonActiveButton).toBeInTheDocument();
  });
});
