import React from "react";
import {render} from "@testing-library/react";
import ActivityLogPopup from "./ActivityLogPopup";
import "jest-dom/extend-expect";

it("renders", ()=> {
  const {asFragment} = render(<ActivityLogPopup />);
  expect(asFragment()).toMatchSnapshot();
} );

