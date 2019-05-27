import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: false
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  render() {
    const { sidebarToggle } = this.state;
    return (
      <div className={style["main-page"]}>
        <div
          className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <SideBarLayout
            title={"Filters"}
            handleClick={this.handleClick}
            mode={sidebarToggle}
          />
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <h1>Page content</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;
