import React from "react";
import PropTypes from "prop-types";
import style from "./TableLayout.module.scss";

const TableLayout = ({ children }) => {
  return <div className={`${style["table-wrapper"]}`}>{children}</div>;
};

TableLayout.propTypes = {
  children: PropTypes.node
};

export default TableLayout;
