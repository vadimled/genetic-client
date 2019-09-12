import React from "react";
import "Css/App.scss";
import { Route, Switch } from "react-router-dom";
import SingleTestPage from "Pages/singleTestPage";
import Header from "Pages/singleTestPage/components/header";
import ResultConfig from "Pages/singleTestPage/components/resultConfig";
import EvidenceConfig from "variantComponents/evidenceConfig";
import VariantPage from "variantPage/";
import TestsPage from "Pages/testsPage";
import ConfirmationPage from "Pages/confirmationPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={TestsPage} />
        <Route path="/tests/:testId" exact component={SingleTestPage} />
        <Route path="/tests/:testId/variants/:variantId/" component={VariantPage} />
        <Route path="/confirmations/:confirmationId" component={ConfirmationPage} />
      </Switch>
      <ResultConfig />
      <EvidenceConfig />
    </div>
  );
}

export default App;
