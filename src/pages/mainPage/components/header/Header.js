import React, { Component } from "react";
import style from "./Header.module.scss";
import Notes from "Pages/mainPage/components/notes";
// import PropTypes from "prop-types";

class Header extends Component {
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
            <Notes valueNotes={"Test ID place..."}/>
          </div>
        </div>
        <div className="flex justify-start flex-row">
          <div className="right-wrapper">
            {/* TODO: Notification place*/}
            NT
          </div>
          <div className="right-wrapper">
            {/* TODO: User profile place*/}
            USR
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {};

export default Header;
