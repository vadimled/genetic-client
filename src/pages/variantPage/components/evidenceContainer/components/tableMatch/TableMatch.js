import React from "react";
import PropTypes from "prop-types";
import style from "./TableMatch.module.scss";
import { MATCH_ICONS } from "Utils/constants";

function TableMatch({ match, className }) {
  const icon = MATCH_ICONS[match.toString()];
  return (
    <div className={style["table-match-wrapper"]}>
      <div className={className}>
        {icon}
      </div>
    </div>
  );
}

TableMatch.propTypes = {
  match: PropTypes.bool,
  className: PropTypes.string
};
TableMatch.defaultProps = {
  match: false,
  className: ''
};

export default TableMatch;
