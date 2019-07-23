import React, { useState } from "react";
import style from "./ToggledButton.module.scss";
import PropTypes from "prop-types";
import { Icon } from "antd";

const ToggledButton = ({ id, labelStateClosed, labelStateOpened, onClick }) => {
  const [toggle, setToggle] = useState(false),
    iconNormal = <Icon type="caret-down" />,
    iconActive = <Icon type="caret-up" />,
    setState = () => {
      setToggle(!toggle);
      onClick(toggle);
    };

  return (
    <div
      data-testid={`${id}-${labelStateClosed}`}
      className={style["toggled-button-wrapper"]}
      onClick={setState}
    >
      <div className="label">{!toggle ? labelStateClosed : labelStateOpened}</div>
      <div className="icon">{!toggle ? iconNormal : iconActive}</div>
    </div>
  );
};

ToggledButton.propTypes = {
  id: PropTypes.string.isRequired,
  labelStateClosed: PropTypes.string.isRequired,
  labelStateOpened: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ToggledButton;
