import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "test_helpers";
import TableData from "../../../pages/mainPage/components/tableData/TableData";
import { updateActivityLog } from "../../../store/actions/tableActions";


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

    console.log("-queries: ", queries);

    getByTestId = queries.getByTestId;
    // asFragment = queries.asFragment;
    store = queries.store;
    activityLogIcon = getByTestId("activity-log-icon-0");
  });

  // it("create snapshot", () => {
  //   expect(asFragment()).toMatchSnapshot();
  // });


  it("activityLogIcon hover",  () => {

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

    fireEvent.mouseEnter(activityLogIcon);

    const activityLogDetails = getByTestId("activity-log-details");


    expect(activityLogDetails).toBeInTheDocument();

    fireEvent.mouseLeave(activityLogDetails);

    expect(activityLogDetails).not.toBeInTheDocument();

  });

  it("activityLogIcon click", ()=> {
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


    const btnClose = document.querySelector(".ant-modal-close");

    fireEvent.click(btnClose);

    expect(activityLogPopup).not.toBeInTheDocument();

  });

});
