import React from "react";
import { fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { renderWithRedux } from "Utils/test_helpers";
import Notes from "Pages/mainPage/components/notes/Notes";

describe("Notes", () => {
  let getByTestId, icon, store;

  beforeEach(() => {
    const queries = renderWithRedux(
      <Notes id={0} updateActivityLog={() => {}} />
    );
    getByTestId = queries.getByTestId;
    store = queries.store;
    icon = getByTestId("edit-icon");
  });

  it("if EditIcon clicked", () => {
    fireEvent.click(icon);
    const editTextBox = getByTestId("edit-text-box");
    expect(editTextBox).toBeInTheDocument();

    const done = getByTestId("footer-button-done");
    fireEvent.click(done);
    expect(editTextBox).not.toBeInTheDocument();

    fireEvent.click(icon);
    fireEvent.click(getByTestId("footer-button-cancel"));
    expect(editTextBox).not.toBeInTheDocument();
  });

  it("if edit-text-box opened", () => {
    fireEvent.click(icon);

    const storeNotes = store.getState().table?.data?.[0].notes,
      textEditBox = getByTestId("edit-text-box-textarea").value;

    expect(storeNotes).toEqual(textEditBox);
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
