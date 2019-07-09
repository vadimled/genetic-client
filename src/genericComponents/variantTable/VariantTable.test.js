import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import VariantTable from './VariantTable';
import { renderWithRedux } from "../../utils/test_helpers";
import ActivityLog from "./components/ActivityLog";
import { updateActivityLog } from "../../store/actions/tableActions";

describe('VariantTable', () => {
  it('VariantTable snapshot', () => {
    const { asFragment } = render(
      <VariantTable
        onSelectRowKey={() => true}
        handleZygosity={() => true}
        handleVariantClass={() => true}
        handelChrPosition={() => true}
        handleSelectedRow={() => true}
        handleSelectAllRows={() => true}
        handleConfirmationStatus={() => true}
        updateActivityLog={() => true}
        setNotes={() => true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Activity Log", () => {
  let getByTestId, activityLogIcon, store, activityLogWrapper;

  const activityLog = [
    undefined,
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
    },
    0];

  beforeEach(() => {
    const queries = renderWithRedux(<ActivityLog {...activityLog} id={0} />);

    getByTestId = queries.getByTestId;

    store = queries.store;

    activityLogIcon = getByTestId("activity-log-icon-0");

    activityLogWrapper = getByTestId("activity-log-wrapper-0");
  });

  it("activityLogIcon hover", () => {

    expect(activityLogIcon).toBeInTheDocument();

    expect(activityLogWrapper).toBeInTheDocument();

    expect(activityLogWrapper).toHaveClass('activity-icon-wrapper');

    store.dispatch(updateActivityLog({
      prevValue: "LATH",
      item: activityLog[1],
      changedField: "variantClass"
    }));

    expect(activityLogWrapper).not.toHaveClass('disabled');

    fireEvent.mouseOver(activityLogIcon);

    const activityLogDetails = getByTestId("activity-log-details");

    expect(activityLogDetails).toBeInTheDocument();

    fireEvent.mouseLeave(activityLogWrapper);

    expect(activityLogDetails).not.toBeInTheDocument();

  });

  it("activityLogIcon click", ()=> {

    expect(activityLogIcon).toBeInTheDocument();

    expect(activityLogWrapper).toBeInTheDocument();

    expect(activityLogWrapper).toHaveClass('activity-icon-wrapper');

    store.dispatch(updateActivityLog({
      prevValue: "LATH",
      item: activityLog[1],
      changedField: "variantClass"
    }));

    expect(activityLogWrapper).not.toHaveClass('disabled');

    fireEvent.click(activityLogIcon);

    const activityLogPopup = getByTestId("activity-log-popup");

    expect(activityLogPopup).toBeInTheDocument();

    const popupCloseBtn = document.querySelector(".ant-modal-close");

    fireEvent.click(popupCloseBtn);

    expect(activityLogPopup).not.toBeInTheDocument();


  });




});