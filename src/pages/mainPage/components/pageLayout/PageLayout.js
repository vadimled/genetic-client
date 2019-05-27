import React from "react";
import style from "./PageLayout.module.scss";
import PropTypes from "prop-types";

const PageLayout = props => {
  const { title, subtitle, children } = props;

  return (
    <div className={style["page-layout"]}>
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

PageLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object
};

export default PageLayout;
