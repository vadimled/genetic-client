import React, {useState} from "react";
import "Css/App.scss";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Route, Switch } from "react-router-dom";
import MainPage from "Pages/mainPage";

function App() {
  const [sidebarToggle, setSideBarMode] = useState(false);
  
  const handleClick = () => {
    setSideBarMode(!sidebarToggle);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a href="#" onClick={handleClick}>
            Click here
          </a>{" "}
          to toggle the menu.
        </p>
      </header>
      <OffCanvas
        width={300}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={sidebarToggle}
        position={"right"}
      >
        <OffCanvasBody>
          <Switch>
            <Route path="/" exact component={MainPage} />
          </Switch>
        </OffCanvasBody>
        <OffCanvasMenu>
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>
              <a href="#" onClick={handleClick}>
                Toggle Menu
              </a>
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    </div>
  );
}

export default App;
