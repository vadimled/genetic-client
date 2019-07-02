import React from "react";
import "jest-dom/extend-expect";
import TumorInfoSelect from "./TumorInfoSelect";
import { renderWithRedux } from "Utils/test_helpers";

describe("TumorInfoSelect", () => {
  it("create snapshot", () => {
    const handelAction = jest.fn(),
      source = ["1", "2", "3"],
      { asFragment } = renderWithRedux(
        <TumorInfoSelect onAction={handelAction} dataSource={source} />
      );
    expect(asFragment()).toMatchSnapshot();
  });
});
