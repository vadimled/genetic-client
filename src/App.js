import React from "react";
import "Css/App.scss";
import { Route, Switch } from "react-router-dom";
import MainPage from "Pages/mainPage";
import Header from "Pages/mainPage/components/header";
import ResultConfig from "Pages/mainPage/components/resultConfig";
import VariantPage from "variantPage/";
import TestsPage from "./pages/testsPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/test/:testId/variant/:variantId/" component={VariantPage} />
        <Route path="/tests" component={TestsPage} />
      </Switch>
      <ResultConfig />
    </div>
  );
}

export default App;
