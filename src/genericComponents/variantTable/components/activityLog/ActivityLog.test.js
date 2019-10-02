import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import ActivityLog from "./ActivityLog";

describe("Activity Log", () => {
  let getByTestId, activityLogIcon, activityLogWrapper;

  const activityLog = [
    {
      user: {
        user_id: "b30a3160-c8bb-11e9-a57b-df2496b6de72",
        name: "user1",
      },
      action: {
        prev_val: "",
        curr_val: "unknown",
        field: "zygosity",
      },
      timestamp: "2019-08-28T14:24:24.398Z"
    }
  ];

  beforeEach(() => {
    const queries = renderWithRedux(<ActivityLog activityLog={activityLog} />);

    getByTestId = queries.getByTestId;

    activityLogIcon = getByTestId("activity-log-icon");

    activityLogWrapper = getByTestId("activity-log-wrapper");
  });

  it("activityLogIcon hover", () => {

    expect(activityLogIcon).toBeInTheDocument();

    expect(activityLogWrapper).toBeInTheDocument();

    expect(activityLogWrapper).toHaveClass('activity-icon-wrapper');

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

    expect(activityLogWrapper).not.toHaveClass('disabled');

    fireEvent.click(activityLogIcon);

    const activityLogPopup = getByTestId("activity-log-popup");

    expect(activityLogPopup).toBeInTheDocument();

    const popupCloseBtn = document.querySelector(".ant-modal-close");

    fireEvent.click(popupCloseBtn);

    expect(activityLogPopup).not.toBeInTheDocument();
  });

});
