import React from "react";
import PropTypes from "prop-types";
import style from "./TableLevel.module.scss";
import { LEVEL_COLOR } from "Utils/constants";

function TableLevel({ level, className }) {
  const color = LEVEL_COLOR[level];
  return (
    <div className={style["table-level-wrapper"]}>
      <div style={{ color }} className={className}>
        {level}
      </div>
    </div>
  );
}

TableLevel.propTypes = {
  level: PropTypes.string,
  className: PropTypes.string
};

export default TableLevel;
