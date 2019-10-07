import React from "react";
import PropTypes from "prop-types";
import style from "./MultiLineText.module.scss";
import cn from "classnames";
import { Tooltip } from "antd";

const MultiLineText = ({ source, className }) => {
  return (
    <div className={cn(style["multiLine-text-wrapper"], className)}>
      {Object.keys(source).map((key, index) => {
        return (
          <Tooltip key={index} placement="topLeft" title={source[key]}>
            <div className="multiLine-text">{source[key]}</div>
          </Tooltip>
        );
      })}
    </div>
  );
};
MultiLineText.propTypes = {
  source: PropTypes.object,
  className: PropTypes.string
};

export default MultiLineText;
