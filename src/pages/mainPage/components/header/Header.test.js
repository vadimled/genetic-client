import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import Header from "./Header";

it("renders", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
