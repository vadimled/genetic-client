import React from "react";
import "Css/App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from "Pages/mainPage";
import Header from "Pages/mainPage/components/header";
import ResultConfig from "Pages/mainPage/components/resultConfig";
import VariantPage from "variantPage/";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { fetchUserData } = props;
    fetchUserData();
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
    fetchUserData: data => dispatch(fetchUserData(data))
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
