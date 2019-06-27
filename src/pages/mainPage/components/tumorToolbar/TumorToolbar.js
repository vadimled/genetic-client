import React, { Component } from "react";
import style from "./TumorToolbar.module.scss";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
// import PropTypes from 'prop-types';

class TumorToolbar extends Component {
  render() {
    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        TumorToolbar
        <div
          className={cn([
            "right-wrapper",
            { "sidebar-open": this.props.sidebarToggle }
          ])}
        >
          <div className="icon">
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  }
}

TumorToolbar.propTypes = {};

export default TumorToolbar;
