import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import TableData from "./TableData";
import { updateActivityLog } from "../../../../store/actions/tableActions";

describe("Activity Log", () => {
  let getByTestId, activityLogIcon, store;

  const data = [{
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
    const queries = renderWithRedux(<TableData data={data} />);
    getByTestId = queries.getByTestId;
    // asFragment = queries.asFragment;
    store = queries.store;
    activityLogIcon = getByTestId("activity-log-icon-0");
  });

  // it("create snapshot", () => {
  //   expect(asFragment()).toMatchSnapshot();
  // });


  it("if activityLogIcon clicked", () => {

    const data = {
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
    };


    expect(activityLogIcon).toHaveClass('activity-icon-wrapper disabled');

    store.dispatch(updateActivityLog({
      prevValue: "LATH",
      item: data,
      changedField: "variantClass"
    }));

    expect(activityLogIcon).not.toHaveClass('disabled');

    fireEvent.click(activityLogIcon);

    const activityLogPopup = getByTestId("activity-log-popup");
    expect(activityLogPopup).toBeInTheDocument();

    // fireEvent.click(getByTestId("footer-button-done"));
    // expect(editTextBox).not.toBeInTheDocument();
    //
    // fireEvent.click(icon);
    // fireEvent.click(getByTestId("footer-button-cancel"));
    // expect(editTextBox).not.toBeInTheDocument();
  });

  // it("if edit-text-box opened", () => {
  //   fireEvent.click(icon);
  //
  //   const
  //     storeNotes = store.getState().table?.data?.[0].notes,
  //     textEditBox = getByTestId("edit-text-box-textarea").value;
  //
  //   expect (storeNotes).toEqual(textEditBox);
  // });
  //
  // it("if TextArea has more then 150 chars", () => {
  //   fireEvent.click(icon);
  //
  //   let
  //     done = getByTestId("footer-button-done"),
  //     textEditBox = getByTestId("edit-text-box-textarea"),
  //     value = "";
  //
  //   for (let i = 0; i < 151; i++) {
  //     value += "a";
  //   }
  //
  //   fireEvent.change(textEditBox, { target: { value } });
  //   expect(done).toBeDisabled();
  //   expect(document.querySelector('.ant-form-explain')).toBeInTheDocument();
  // });
  //
  // it("if TextArea has less then 150 chars", () => {
  //   fireEvent.click(icon);
  //
  //   let
  //     done = getByTestId("footer-button-done"),
  //     textEditBox = getByTestId("edit-text-box-textarea"),
  //     value = "";
  //
  //   for (let i = 0; i < 150; i++) {
  //     value += "a";
  //   }
  //
  //   fireEvent.change(textEditBox, { target: { value } });
  //   expect(done).not.toBeDisabled();
  //   expect(document.querySelector('.ant-form-explain')).not.toBeInTheDocument();
  // });
});
