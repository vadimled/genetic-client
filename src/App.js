import React from "react";
import "Css/App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from "Pages/mainPage";
import Header from "Pages/mainPage/components/header";
import ResultConfig from "Pages/mainPage/components/resultConfig";
import VariantPage from "variantPage/";
import { fetchCaseData } from "Store/actions/caseActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { fetchCaseData } = props;
    fetchCaseData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/variant" exact component={VariantPage} />
        </Switch>
        <ResultConfig />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCaseData: data => dispatch(fetchCaseData(data))
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
