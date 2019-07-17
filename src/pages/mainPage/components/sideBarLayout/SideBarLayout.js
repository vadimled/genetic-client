import React from "react";
import style from "./SideBarLayout.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const SideBarLayout = props => {
  const {
    title,
    subtitle,
    children,
    handleClick,
    mode,
    className,
    iconOpened,
    iconClosed
  } = props;

  return (
    <div className={style["sidebar-layout-wrapper"]}>
      <div
        className={cn([
          "sidebar-layout",
          "scrollbar",
          { "sidebar-closed": !mode },
          { [className]: !!className }
        ])}
      >
        <div
          className={cn(["icon-mode", { "sidebar-closed": !mode }])}
          onClick={handleClick}
        >
          {mode ? iconOpened : iconClosed}
        </div>

        <div className={cn(["content"], { "sidebar-closed": !mode })}>
          {title && <div className="title">{title}</div>}
          {subtitle && <div className="subtitle">{subtitle}</div>}
          <div className="children">{children}</div>
        </div>
      </div>
    </div>
  );
};

SideBarLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
};

export default SideBarLayout;
