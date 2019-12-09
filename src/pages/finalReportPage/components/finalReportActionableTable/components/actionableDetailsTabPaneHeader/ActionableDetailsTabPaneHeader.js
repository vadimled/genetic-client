import React from "react";
import PropTypes from "prop-types";
import style from "./ActionableDetailsTabPaneHeader.module.scss";

const ActionableDetailsTabPaneHeader = ({ title }) => {
  return (
    <div className={style["tab-pane-content-wrapper"]}>
      <div className="flex flex-row justify-start content-center">
        <div className="title">{title}</div>
        {/* <div className="amount">{`(${amount})`}</div>*/}
      </div>
    </div>
  );
};

ActionableDetailsTabPaneHeader.propTypes = {
  title: PropTypes.string
  // amount: PropTypes.number
};

export default ActionableDetailsTabPaneHeader;
