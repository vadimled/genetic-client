import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import ActivityLogPopup from "./ActivityLogPopup";
import "jest-dom/extend-expect";

it("renders", ()=> {
  const {asFragment} = renderWithRedux(<ActivityLogPopup
    visible
    handleOk={() => true}
    handleCancel={() => true}
    activityLog={[
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
    ]}
  />);
  expect(asFragment()).toMatchSnapshot();
});

