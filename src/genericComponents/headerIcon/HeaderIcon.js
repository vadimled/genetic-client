import React, { memo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./HeaderIcon.module.scss";

const HeaderIcon = ({ icon, isActive, handelOnClick, customClassName }) => {
  return (
    <div className={style["header-icon-wrapper"]} onClick={handelOnClick}>
      <div
        data-testid={`header-icon-${customClassName}`}
        className={cn("icon", {
          "icon-active": isActive,
          [customClassName]: !!customClassName
        })}
      >
        {icon}
      </div>
    </div>
  );
};

HeaderIcon.propTypes = {
  icon: PropTypes.node,
  status: PropTypes.string,
  isActive: PropTypes.bool,
  customClassName: PropTypes.string,
  handelOnClick: PropTypes.func
};

export default memo(HeaderIcon);
