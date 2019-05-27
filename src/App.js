import React from "react";
import "Css/App.scss";
import { Route, Switch } from "react-router-dom";
import MainPage from "Pages/mainPage";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
