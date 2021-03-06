import React from "react";
import PropTypes from "prop-types";
import style from "./TabPaneHeader.module.scss";

const TabPaneHeader = ({title, amount }) => {
  return (
    <div className={style["tab-pane-content-wrapper"]}>
      <div className="flex flex-row justify-start content-center">
        <div className="title">{title}</div>
        {!!amount && <div className="amount">{`${amount}`}</div>}
      </div>
    </div>
  );
};

TabPaneHeader.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number
};

export default TabPaneHeader;
