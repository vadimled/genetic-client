import React from "react";
import PropTypes from "prop-types";
import style from "./TabPaneContent.module.scss";

const TabPaneContent = ({title, amount }) => {
  return (
    <div className={style["tab-pane-content-wrapper"]}>
      <div className="flex flex-row justify-start content-center">
        <div className="title">{title}</div>
        <div className="amount">{`(${amount})`}</div>
      </div>
    </div>
  );
};

TabPaneContent.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number
};

export default TabPaneContent;
