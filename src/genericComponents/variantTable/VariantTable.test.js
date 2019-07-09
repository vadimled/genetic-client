import React from "react";
import "jest-dom/extend-expect";
import VariantTable from './VariantTable';
import { renderWithRedux } from "../../utils/test_helpers";
import { handleZygosity } from "../../store/actions/tableActions";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

describe("Variant Table Test", () => {
  let zygosity, store;

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
      status: "pending",
      priority: null
    }];



  beforeEach(() => {
    const queries = renderWithRedux(<VariantTable
      data={data}
      handleSelectedRow={()=>{}}
      handleSelectAllRows={()=>{}}
      handleZygosity={()=>{}}
      handleVariantClass={()=>{}}
      handelChrPosition={()=>{}}
      handleConfirmationStatus={()=>{}}
      isAllRowSelected={false}
      selectedRows={[]}
      setNotes={()=>{}}
      updateActivityLog={()=>{}}
    />);


    store = queries.store;

    // zygosity = getByTestId("zygosity-select-0");
  });

  it("activityLogNotes change", ()=> {

    // const notes = getByTestId("notes");
    const notes = document.getElementsByClassName("notes-content")[0];

    expect(notes).toBeInTheDocument();

    // const currNote = notes.innerHTML;
    // const prevNote = notes.innerHTML = `${notes.innerHTML} test`;

    console.log(notes.innerHTML);
    //
    // const activityLogIcon  = getByTestId("activity-log-icon-0");
    //
    // expect(activityLogIcon).toBeInTheDocument();
    //
    // fireEvent.click(activityLogIcon);
    //
    // const activityLogPopup = getByTestId("activity-log-popup");


    // store.dispatch(updateActivityLog({
    //   prevValue: "LATH",
    //   item: data,
    //   changedField: "variantClass"
    // }));

    store.dispatch(handleZygosity({
      item: data,
      value: "hetro",
      prevValue: ""
    }));

    console.log(store.getState().table);



    // expect(activityLogPopup).toBeInTheDocument();

    //
    // expect(getByText(currNote)).toBeInTheDocument();
    // expect(getByText(prevNote)).toBeInTheDocument();

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

// describe("Activity Log", () => {
//   let getByTestId, activityLogIcon, store, activityLogWrapper;
//
//   const activityLog = [
//     undefined,
//     {
//       id: 0,
//       key: 0,
//       gene: "ABCD1P4",
//       chrPosition: "Chr2:176882",
//       transcript: "NM_119875.6",
//       exon: 5,
//       alleleChange: "C > T",
//       alleleChangeLong: "fsghfsghsfghsfsfhsfh",
//       coding: "cAc/gTa",
//       codingLong: "aGc/tCg/zzzczzfzf",
//       protein: "nuo7b",
//       vaf: 76,
//       roi: true,
//       clinvar: "",
//       gnomAD: 3,
//       zygosity: "",
//       variantClass: "",
//       coverage: 151,
//       notes: "Sed recusandae in sint.",
//       status: "pending"
//     },
//     0];
//
//   beforeEach(() => {
//     const queries = renderWithRedux(<ActivityLog {...activityLog} id={0} />);
//
//     getByTestId = queries.getByTestId;
//
//     store = queries.store;
//
//     activityLogIcon = getByTestId("activity-log-icon-0");
//
//     activityLogWrapper = getByTestId("activity-log-wrapper-0");
//   });
//
//   it("activityLogIcon hover", () => {
//
//     expect(activityLogIcon).toBeInTheDocument();
//
//     expect(activityLogWrapper).toBeInTheDocument();
//
//     expect(activityLogWrapper).toHaveClass('activity-icon-wrapper');
//
//     store.dispatch(updateActivityLog({
//       prevValue: "LATH",
//       item: activityLog[1],
//       changedField: "variantClass"
//     }));
//
//     expect(activityLogWrapper).not.toHaveClass('disabled');
//
//     fireEvent.mouseOver(activityLogIcon);
//
//     const activityLogDetails = getByTestId("activity-log-details");
//
//     expect(activityLogDetails).toBeInTheDocument();
//
//     fireEvent.mouseLeave(activityLogWrapper);
//
//     expect(activityLogDetails).not.toBeInTheDocument();
//
//   });
//
//   it("activityLogIcon click", ()=> {
//
//     expect(activityLogIcon).toBeInTheDocument();
//
//     expect(activityLogWrapper).toBeInTheDocument();
//
//     expect(activityLogWrapper).toHaveClass('activity-icon-wrapper');
//
//     store.dispatch(updateActivityLog({
//       prevValue: "LATH",
//       item: activityLog[1],
//       changedField: "variantClass"
//     }));
//
//     expect(activityLogWrapper).not.toHaveClass('disabled');
//
//     fireEvent.click(activityLogIcon);
//
//     const activityLogPopup = getByTestId("activity-log-popup");
//
//     expect(activityLogPopup).toBeInTheDocument();
//
//     const popupCloseBtn = document.querySelector(".ant-modal-close");
//
//     fireEvent.click(popupCloseBtn);
//
//     expect(activityLogPopup).not.toBeInTheDocument();
//
//
//   });
//
//
//
//
// });