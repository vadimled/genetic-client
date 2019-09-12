import React, { memo } from "react";
import PropTypes from "prop-types";
import style from "./InformField.module.scss";
import { Tooltip } from "antd";
import cn from "classnames";

function InformField({ label, text, icon, name, tooltip }) {
  return (
    <div className={style["inform-field-wrapper"]}>
      <div className="icon">{!!icon && icon}</div>
      <label>{!!label && label}</label>
      {tooltip ? (
        <Tooltip placement="topLeft" title={tooltip}>
          <div
            data-testid={name}
            className={cn("text", {
              cut: tooltip && tooltip.length > name.length
            })}
          >
            {text}
          </div>
        </Tooltip>
      ) : (
        <div data-testid={name} className="text">
          {text}
        </div>
      )}
    </div>
  );
}

InformField.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node
};

export default memo(InformField);
