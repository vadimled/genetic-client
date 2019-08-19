import { applyMiddleware, createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import reducers from "Store/reducers";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "Store/saga";

const sagaMiddleware = createSagaMiddleware();

export function renderWithRedux(component, store = createStore(reducers)) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export function renderWithReduxAndRouter(
  component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {},
  store = createStore(reducers, applyMiddleware(sagaMiddleware))
) {
  sagaMiddleware.run(watchSaga);
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
    store
  };
}
