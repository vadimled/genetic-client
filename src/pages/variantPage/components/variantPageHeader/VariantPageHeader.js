import React from "react";
import style from "./VariantPageHeader.module.scss";
// import PropTypes from "prop-types";

const VariantPageHeader = () => {
  return (
    <div className={style["variant-page-header-wrapper"]}>
      <div className="left-data-wrapper">
        <div className="left-data">
          <div className="gene">{"Allele Change: A>C"}</div>
          <div className="gene">{"Allele Change: A>C"}</div>
          <div className="gene">{"Allele Change: A>C"}</div>
          <div className="gene">{"Allele Change: A>C"}</div>
          <div className="gene">{"Allele Change: A>C"}</div>
          <div className="gene">{"Allele Change: A>C"}</div>
        </div>
      </div>
      <div className="right-data" />
    </div>
  );
};

VariantPageHeader.propTypes = {};

export default VariantPageHeader;
