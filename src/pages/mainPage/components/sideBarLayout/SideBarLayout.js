import React from "react";
import style from "./SideBarLayout.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as OpenedIcon } from "Assets/openedFiltersPanel.svg";
import { ReactComponent as ClosedIcon } from "Assets/closedFiltersPanel.svg";
import cn from "classnames";

const SideBarLayout = props => {
  const { title, subtitle, children, handleClick, mode } = props;

  return (
    <div className={style["sidebar-layout"]}>
      <div
        className={cn(["icon-mode", { "sidebar-closed": !mode }])}
        onClick={handleClick}
      >
        {mode ? <OpenedIcon /> : <ClosedIcon />}
      </div>

      <div className="content">
        <div>
          {title && <div className="title">{title}</div>}
          {subtitle && <div className="subtitle">{subtitle}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

SideBarLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object
};

export default SideBarLayout;
