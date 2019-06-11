import React, { Component } from "react";
import style from "./Header.module.scss";
import HeaderIcon from "GenericComponents/headerIcon";
import { ReactComponent as NotificationIcon } from "Assets/notifications.svg";
import { ReactComponent as InfoIcon } from "Assets/info.svg";
import User from "Pages/mainPage/components/header/components/user";
// import PropTypes from "prop-types";

class Header extends Component {
  handelNotification = e => {
    console.log(e.target);
  };

  handelInfo = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div className={style["header-wrapper"]}>
        <div className="flex justify-start flex-row">
          <div className="left-wrapper">
            {/* TODO: Logo place*/}
            LOGO
          </div>
          <div className="left-wrapper">
            {/* TODO: Test ID place*/}
            GS00115NP050818_TS1_01
          </div>
        </div>
        <div className="flex justify-start flex-row">
          <div className="right-wrapper">
            <HeaderIcon
              // isActive
              icon={<InfoIcon />}
              handelOnClick={this.handelInfo}
            />
          </div>
          <div className="right-wrapper">
            <HeaderIcon
              // isActive
              icon={<NotificationIcon />}
              handelOnClick={this.handelNotification}
            />
          </div>
          <div className="right-wrapper">
            <User />
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {};

export default Header;
