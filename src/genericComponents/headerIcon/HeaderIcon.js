import React, { memo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./HeaderIcon.module.scss";

const HeaderIcon = ({ icon, isHovered, isActive, handelOnClick }) => {
  return (
    <div className={style["header-icon-wrapper"]} onClick={handelOnClick}>
      <div
        className={cn("icon", {
          "icon-active": isActive,
          "icon-hovered": isHovered
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
  handelOnClick: PropTypes.func
};

export default memo(HeaderIcon);
