import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TableSourceDescription.module.scss";
import urlRegex from "url-regex";

function TableSourceDescription({ source, description }) {
  const isSourceLink = () => urlRegex().test(source);

  return (
    <div className={style["table-source-description-wrapper"]}>
      <div className="table-source-description">
        <div className={cn("source", { link: isSourceLink() })}>
          {isSourceLink() ? (
            <a href={`${source}`} target="_blank" rel="noopener noreferrer">
              {source}
            </a>
          ) : (
            source
          )}
        </div>
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
