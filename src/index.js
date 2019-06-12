import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from "Store/saga";
import App from "./App";
import reducers from "Store/reducers";
import "Css/index.scss";
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
