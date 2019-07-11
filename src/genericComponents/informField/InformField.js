import React, { memo } from "react";
import PropTypes from "prop-types";
import style from "./InformField.module.scss";

function InformField({ label, text, icon, name }) {
  return (
    <div className={style["inform-field-wrapper"]}>
      <div className="icon">{!!icon && icon}</div>
      <label>{!!label && label}</label>
      <div data-testid={name} className="text">{text}</div>
    </div>
  );
}

InformField.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node
};

export default memo(InformField);
