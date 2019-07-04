import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import VariantTable from "./VariantTable";

describe("Variant Table Test", () => {
  let getByTestId, zygosity, getByText;

  const data = [
    {
      id: 0,
      key: 0,
      gene: "ABCD1P4",
      chrPosition: "Chr2:176882",
      transcript: "NM_119875.6",
      exon: 5,
      alleleChange: "C > T",
      alleleChangeLong: "fsghfsghsfghsfsfhsfh",
      coding: "cAc/gTa",
      codingLong: "aGc/tCg/zzzczzfzf",
      protein: "nuo7b",
      vaf: 76,
      roi: true,
      clinvar: "",
      gnomAD: 3,
      zygosity: "",
      variantClass: "",
      coverage: 151,
      notes: "Sed recusandae in sint.",
      status: "pending"
    }];

  beforeEach(() => {
    const queries = renderWithRedux(<VariantTable
      data={data}
      onSelectRowKey={()=>{}}
      selectedRowKeys={[]}
      handleZygosity={()=>{}}
      handleVariantClass={()=>{}}
      handelChrPosition={()=>{}}
      updateActivityLog={()=>{}}
    />);

    getByTestId = queries.getByTestId;
    getByText = queries.getByText;

    zygosity = getByTestId("zygosity-select-0");
  });

  it("activityLogNotes change", ()=> {

    const notes = document.getElementsByClassName("notes-content")[0];

    expect(notes).toBeInTheDocument();

    const currNote = notes.innerHTML;
    const prevNote = notes.innerHTML = `${notes.innerHTML} test`;

    console.log(notes.innerHTML);

    const activityLogIcon  = getByTestId("activity-log-icon-0");

    expect(activityLogIcon).toBeInTheDocument();

    fireEvent.click(activityLogIcon);

    const activityLogPopup = getByTestId("activity-log-popup");

    expect(activityLogPopup).toBeInTheDocument();

    expect(getByText(currNote)).toBeInTheDocument();
    expect(getByText(prevNote)).toBeInTheDocument();

  });

  xit("zygosity click", () => {

    expect(zygosity).toBeInTheDocument();


    // fireEvent.change(zygosity, { target: { value: "homo" } });
    fireEvent.click(zygosity);

    // const option = document.getElementsByClassName("ant-select-dropdown-menu-item")[0];
    // const option = getByText("Homo");

    // console.log(option)

    // fireEvent.click(option);
    //
    // const variantClass = getByTestId("variant-сlass-select-0");
    // //
    // expect(variantClass).toBeInTheDocument()



  });
});