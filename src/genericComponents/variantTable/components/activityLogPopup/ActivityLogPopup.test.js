import React from "react";
// import {render} from "@testing-library/react";
import { renderWithRedux } from "Utils/test_helpers";
import ActivityLogPopup from "./ActivityLogPopup";
import "jest-dom/extend-expect";

it("renders", ()=> {
  const initProps = {
    "1": {id: 1}
  };
  const {asFragment} = renderWithRedux(<ActivityLogPopup {...initProps}/>);
  expect(asFragment()).toMatchSnapshot();
} );

