import React from "react";
import PropTypes from "prop-types";
import style from "./TableSourceDescription.module.scss";

function TableSourceDescription({ source, description }) {
  return (
    <div className={style["table-source-description-wrapper"]}>
      <div className="table-source-description">
        <div className="source">{source}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

TableSourceDescription.propTypes = {
  source: PropTypes.string,
  description: PropTypes.string
};

export default TableSourceDescription;
