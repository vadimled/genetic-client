import React from "react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import VariantPageHeader from "./VariantPageHeader";

describe("VariantPageHeader ", () => {
  let getByTestId, store, item;

  beforeEach(() => {
    const queries = renderWithRedux(
      <VariantPageHeader sidebarToggle={false} />
    );
    getByTestId = queries.getByTestId;
    store = queries.store;

    const { data } = store.getState().table;
    item = data[Object.keys(data)[3]];
  });

  it("should - received text be equal to text of textField (Gene)  ", () => {
    const geneElement = getByTestId("inform-field-gene");
    expect(geneElement).toBeInTheDocument();
    expect(geneElement.textContent).toEqual(item.gene);
  });

  it("should - received text be equal to text of textField (Protein)  ", () => {
    const proteinElement = getByTestId("inform-field-protein");
    expect(proteinElement).toBeInTheDocument();
    expect(proteinElement.textContent).toEqual(item.protein);
  });

  it("should - received text be equal to text of textField (chrPosition)  ", () => {
    const chrPositionElement = getByTestId("inform-field-chrPosition");
    expect(chrPositionElement).toBeInTheDocument();
    expect(chrPositionElement.textContent).toEqual(item.chrPosition);
  });

  it("should - received text be equal to text of textField (coding)  ", () => {
    const codingElement = getByTestId("inform-field-coding");
    expect(codingElement).toBeInTheDocument();
    expect(codingElement.textContent).toEqual(item.coding);
  });

  it("should - received text be equal to text of textField (alleleChange)  ", () => {
    const alleleChangeElement = getByTestId("inform-field-alleleChange");
    expect(alleleChangeElement).toBeInTheDocument();
    expect(alleleChangeElement.textContent).toEqual(item.alleleChange);
  });

  it("should - received text be equal to text of textField (transcript)  ", () => {
    const transcriptElement = getByTestId("inform-field-transcript");
    expect(transcriptElement).toBeInTheDocument();
    expect(transcriptElement.textContent).toEqual(item.transcript);
  });

  it("should - default type of variant must be 'somatic' ", () => {
    expect(store.getState().variantPage.type).toEqual("somatic");
  });

  it("should - default Button is Somatic and exists ", () => {
    expect(getByTestId("select-title-Somatic")).toBeInTheDocument();
  });
});
