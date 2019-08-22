import React from "react";
import "jest-dom/extend-expect";
import SingleTestPage from 'pages/mainPage/SingleTestPage';
import { renderWithRedux } from "Utils/test_helpers";
import { handleOnConfirmation } from "Actions/confirmationActions";
import { handleUncheckConfirmationData } from "Actions/tableActions";
import { getOnConfirmation, getUncheckConfirmationData } from "Store/selectors";
import { BrowserRouter as Router } from "react-router-dom";

describe('SingleTestPage', () => {

  it('showing send-for-confirmation-popup', () => {
    const { getByTestId, store } = renderWithRedux(<Router><SingleTestPage /></Router>);

    const isOnConfirmatio1 = getOnConfirmation(store.getState());
    expect(isOnConfirmatio1).toEqual(false);

    store.dispatch(handleOnConfirmation(true));

    const isOnConfirmation2 = getOnConfirmation(store.getState());
    expect(isOnConfirmation2).toEqual(true);
    expect(getByTestId('send-for-confirmation-popup')).toBeDefined();
  });

  it('showing UncheckConfirmationPopup', () => {
    const { getByTestId, store } = renderWithRedux(<Router><SingleTestPage /></Router>);

    const uncheckConfirmationData1 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData1).toEqual(null);

    store.dispatch(handleUncheckConfirmationData({
      id: 123,
      status: null
    }));

    const uncheckConfirmationData2 = getUncheckConfirmationData(store.getState());
    expect(uncheckConfirmationData2).toBeDefined();
    expect(getByTestId('uncheck-confirmation-popup')).toBeDefined();
  });
});
