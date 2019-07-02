import React from "react";
import "jest-dom/extend-expect";
import MainPage from './MainPage';
import { renderWithRedux } from "Utils/test_helpers";
import {
  handleOnConfirmation
} from "Actions/confirmationActions";

describe('IgvAlertPopup', () => {

  it('handle header close btn', () => {
    const { getByTestId, store } = renderWithRedux(<MainPage />);

    const confirmationStore1 = store.getState().confirmation;
    expect(confirmationStore1.isOnConfirmation).toEqual(false);

    store.dispatch(handleOnConfirmation(true));

    const confirmationStore2 = store.getState().confirmation;
    expect(confirmationStore2.isOnConfirmation).toEqual(true);
    expect(getByTestId('send-for-confirmation-popup')).toBeDefined();

  });
});
