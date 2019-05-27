import React from "react";
import style from "./SideBarLayout.module.scss";
import PropTypes from "prop-types";

const SideBarLayout = props => {
  const { title, subtitle, children } = props;

  return (
    <div className={style["sidebar-layout"]}>
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
