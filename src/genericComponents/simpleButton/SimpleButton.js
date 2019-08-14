import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import style from "./SimpleButton.module.scss";

const SimpleButton = ({ onClick, disabled, text, className }) => {
  return (
    <div className={style["simple-button-wrapper"]}>
      <Button
        disabled={disabled}
        onClick={onClick}>
        <div className={className}>{text}</div>
      </Button>
    </div>
  );
};

SimpleButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string
};

export default SimpleButton;
