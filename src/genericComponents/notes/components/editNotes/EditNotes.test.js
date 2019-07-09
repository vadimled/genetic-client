import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import EditNotes from "./EditNotes";

describe("Edit Notes popup", () => {
  it("create snapshot", () => {
    const limit = {
      validateStatus: "success",
      errorMsg: null,
      value: 500
    };

    const { asFragment } = render(
      <EditNotes
        doneHandler={()=>{}}
        cancelHandler={()=>{}}
        handleOnChange={()=>{}}
        notesValue={"editNotes - test text"}
        validateStatus={limit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
