import React, { Component } from "react";
import style from "./MainPage.module.scss";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";
import cn from "classnames";
import PageLayout from "./components/pageLayout";
import SideBarLayout from "./components/sideBarLayout";
import { ReactComponent as OpendIcon } from "Assets/openedFiltersPanel.svg";
import { ReactComponent as ClosedIcon } from "Assets/closedFiltersPanel.svg";

// import PropTypes from 'prop-types';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { sidebarToggle: true };
  }

  handleClick = () => {
    this.setState({ sidebarToggle: !this.state.sidebarToggle });
  };

  render() {
    const { sidebarToggle } = this.state;
    return (
      <div className={style["main-page"]}>
        <OffCanvas
          className="OffCanvas-wrapper"
          width={192}
          transitionDuration={300}
          effect={"push"}
          isMenuOpened={sidebarToggle}
          position={"left"}
        >
          <OffCanvasBody
            className={cn([
              "main-content-wrapper",
              { "sidebar-open": sidebarToggle }
            ])}
          >
            <PageLayout />
            <div className="icon-mode" onClick={this.handleClick}>
              {sidebarToggle ? <OpendIcon /> : <ClosedIcon />}
            </div>
          </OffCanvasBody>
          <OffCanvasMenu className="sidebar-wrapper">
            <SideBarLayout title={"Filters"} />
          </OffCanvasMenu>
        </OffCanvas>
      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
