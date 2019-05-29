import React, { Component } from "react";
import style from "./Header.module.scss";
// import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div className={style["header-wrapper"]}>
        <div className="flex justify-start flex-row">
          <div>LOGO</div>
          <div>GS00115NP050818_TS1_01</div>
        </div>
        <div className="flex justify-start flex-row" />
        Test
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
