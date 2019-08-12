import React from "react";
import { renderWithRedux } from "Utils/test_helpers";
import "jest-dom/extend-expect";
import TableDateAndUser from "./TableDateAndUser";

describe("<TableDateAndUser />", () => {
  it("snapshot", () => {
    const { asFragment } = renderWithRedux(
      <TableDateAndUser
        date={"2019-08-12T05:54:18.074Z"}
        user={{ user: "Hetro " }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
