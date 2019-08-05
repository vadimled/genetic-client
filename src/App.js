import React from "react";
import "Css/App.scss";
import { Route, Switch } from "react-router-dom";
import MainPage from "Pages/mainPage";
import Header from "Pages/mainPage/components/header";
import ResultConfig from "Pages/mainPage/components/resultConfig";
import EvidenceConfig from "variantComponents/evidenceConfig";
import VariantPage from "variantPage/";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/test/:testId/variant/:variantId/" component={VariantPage} />
      </Switch>
      <ResultConfig />
      <EvidenceConfig />
    </div>
  );
}

export default App;
