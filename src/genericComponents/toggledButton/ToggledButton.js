import React, { useState } from "react";
import style from "./ToggledButton.module.scss";
import PropTypes from "prop-types";
import { Icon } from "antd";

const ToggledButton = ({ id, labelState1, labelState2, onClick }) => {
  const [toggle, setToggle] = useState(false),
    iconNormal = <Icon type="caret-down" />,
    iconActive = <Icon type="caret-up" />,
    setState = () => {
      setToggle(!toggle);
      onClick(toggle);
    };

  return (
    <div
      data-testid={`${id}-${labelState1}`}
      className={style["toggled-button-wrapper"]}
      onClick={setState}
    >
      <div className="label">{!toggle ? labelState1 : labelState2}</div>
      <div className="icon">{!toggle ? iconNormal : iconActive}</div>
    </div>
  );
};

ToggledButton.propTypes = {
  id: PropTypes.string.isRequired,
  labelState1: PropTypes.string.isRequired,
  labelState2: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ToggledButton;
