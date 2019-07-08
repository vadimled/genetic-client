import React from "react";
import style from "./VariantPageHeader.module.scss";
import InformField from "GenericComponents/informField";
import ExternalLink from "GenericComponents/externalLink";
// import PropTypes from "prop-types";

const VariantPageHeader = () => {
  return (
    <div className={style["variant-page-header-wrapper"]}>
      <div className="left-data-wrapper">
        <div className="left-data">
          <div className="gene">
            <InformField label={"Gene Name"} text={"ARHGEF10L"} />
          </div>
          <div className="gene">
            <InformField label={"Protein"} text={"p.=Pro7Ser"} />
          </div>
          <div className="gene">
            <InformField
              label={"chr position"}
              text={"chr3:16976109"}
              icon={<ExternalLink data={""} />}
            />
          </div>
          <div className="gene">
            <InformField label={"Allele Change"} text={"A>C"} />
          </div>
          <div className="gene">
            <InformField label={"Coding"} text={"c.3548 A>A"} />
          </div>
          <div className="gene">
            <InformField
              label={"Transcript"}
              text={" NM_009786.2"}
              icon={<ExternalLink data={""} />}
            />
          </div>
        </div>
      </div>
      <div className="right-data" />
    </div>
  );
};

VariantPageHeader.propTypes = {};

export default VariantPageHeader;
