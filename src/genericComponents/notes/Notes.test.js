import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import Notes from "./Notes";

describe("Notes", () => {
  let getByTestId, icon, initValue = "test string";

  beforeEach(() => {
    const queries = renderWithRedux(<Notes
      value={initValue}
      setNotes={() => true}
    />);

    getByTestId = queries.getByTestId;
    icon = getByTestId("edit-icon");
  });

  it("if EditIcon clicked", () => {
    fireEvent.click(icon);
    const editTextBox = getByTestId("edit-text-box");
    expect(editTextBox).toBeInTheDocument();

    fireEvent.click(getByTestId("footer-button-done"));
    expect(editTextBox).not.toBeInTheDocument();

    fireEvent.click(icon);
    fireEvent.click(getByTestId("footer-button-cancel"));
    expect(editTextBox).not.toBeInTheDocument();
  });

  it("if edit-text-box opened", () => {
    fireEvent.click(icon);

    const textEditBox = getByTestId("edit-text-box-textarea").value;
    expect (initValue).toEqual(textEditBox);
  });

  it("if TextArea has more then 150 chars", () => {
    fireEvent.click(icon);

    let done = getByTestId("footer-button-done"),
      textEditBox = getByTestId("edit-text-box-textarea"),
      value = "";

    for (let i = 0; i < 151; i++) {
      value += "a";
    }

    fireEvent.change(textEditBox, { target: { value } });
    expect(done).toBeDisabled();
    expect(document.querySelector(".ant-form-explain")).toBeInTheDocument();
  });

  it("if TextArea has less then 150 chars", () => {
    fireEvent.click(icon);

    let done = getByTestId("footer-button-done"),
      textEditBox = getByTestId("edit-text-box-textarea"),
      value = "";

    for (let i = 0; i < 150; i++) {
      value += "a";
    }

    fireEvent.change(textEditBox, { target: { value } });
    expect(done).not.toBeDisabled();
    expect(document.querySelector(".ant-form-explain")).not.toBeInTheDocument();
  });
});
