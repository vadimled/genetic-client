import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TableSourceDescription.module.scss";

function TableSourceDescription({ source, description }) {
  const isSourceLink = () => {
    const expression = /https?:\/\/[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi;
    return source.match(new RegExp(expression));
  };

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
