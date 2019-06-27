import React from 'react';
import "jest-dom/extend-expect";
import TumorHeader from './TumorToolbar';
import { renderWithRedux } from "Utils/test_helpers";

describe('<TumorHeader />', () => {
  test("create snapshot", () => {
    const { asFragment } = renderWithRedux(<TumorHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
