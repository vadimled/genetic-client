import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import * as Sentry from "@sentry/browser";
import { watchSaga } from "Store/saga";
import App from "./App";
import reducers from "Store/reducers";
import "Css/index.scss";
import "antd/dist/antd.css";
import ErrorBoundaries from "./ErrorBoundaries";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_SENTRY_ENV,
  integrations: [
    new Sentry.Integrations.Breadcrumbs({
      console: process.env.NODE_ENV !== "development"
    })
  ]
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(sagaMiddleware)
    )
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);

ReactDOM.render(
  <ErrorBoundaries>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundaries>,
  document.getElementById("root")
);
