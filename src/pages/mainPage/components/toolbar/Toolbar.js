import React, { Component } from "react";
import style from "./Toolbar.module.scss";
// import PropTypes from 'prop-types';

class Toolbar extends Component {
  render() {
    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">
          {/* TODO: Children place*/}
          CHILDREN
        </div>
      </div>
    );
  }
}

// Toolbar.propTypes = {};

export default Toolbar;
