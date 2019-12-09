import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import cn from 'classnames';
import style from "./SimpleButton.module.scss";

const SimpleButton = ({ onClick, disabled, text, className, type }) => {
  return (
    <div className={style["simple-button-wrapper"]}>
      <Button
        disabled={disabled}
        onClick={onClick}
        className={cn(className, type)}
      >
        <div>{text}</div>
      </Button>
    </div>
  );
};

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['dark', 'light']),
};
SimpleButton.defaultProps = {
  disabled: false,
  text: 'submit',
  className: '',
  type: 'dark',
};

export default SimpleButton;
