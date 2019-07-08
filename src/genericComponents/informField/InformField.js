import React from "react";
import PropTypes from "prop-types";
import style from "./InformField.module.scss";

function InformField({ label, text, icon }) {
  return (
    <div className={style["inform-field-wrapper"]}>
      <div className="icon">{!!icon && icon}</div>
      <label>{label}</label>:<div className="text">{text}</div>
    </div>
  );
}

InformField.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node
};

export default InformField;
