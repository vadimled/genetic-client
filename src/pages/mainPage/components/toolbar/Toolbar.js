import React, { Component } from "react";
import style from "./Toolbar.module.scss";
import NumberVariants from "Pages/mainPage/components/numberVariants";
// import PropTypes from 'prop-types';

class Toolbar extends Component {
  render() {
    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">Left</div>
        <div className="right-wrapper">
          <NumberVariants filtered={"10"} total={"13024"} />
        </div>
      </div>
    );
  }
}

// Toolbar.propTypes = {};

export default Toolbar;
