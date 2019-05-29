import React from "react";
import style from "./TableLayout.module.scss";
import PropTypes from "prop-types";

const TableLayout = ({children}) => {
  return (
    <div className={`${style["table-wrapper"]}`}>
      <div className="scrollbar">
        {children}
      </div>
    </div>
  );
};

TableLayout.propTypes = {
  children: PropTypes.node
};

export default TableLayout;
