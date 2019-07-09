import React from "react";
import style from "./VariantPageHeader.module.scss";
import InformField from "GenericComponents/informField";
import ExternalLink from "GenericComponents/externalLink";
import GeneType from "variantComponents/geneType";
import cn from "classnames";
// import PropTypes from "prop-types";

const VariantPageHeader = ({ sidebarToggle }) => {
  return (
    <div className={style["variant-page-header-wrapper"]}>
      <div className="left-data-wrapper">
        <div className="left-data">
          <div className="gene">
            <InformField text={"ARHGEF10L"} />
          </div>
          <div className="gene">
            <InformField text={"p.=Pro7Ser"} />
          </div>
          <div className="gene">
            <InformField
              text={"chr3:16976109"}
              icon={<ExternalLink data={""} />}
            />
          </div>
          <div className="gene">
            <InformField text={"A>C"} />
          </div>
          <div className="gene">
            <InformField text={"c.3548 A>A"} />
          </div>
          <div className="gene">
            <InformField
              text={" NM_009786.2"}
              icon={<ExternalLink data={""} />}
            />
          </div>
        </div>
      </div>
      <div className={cn(["right-data", { "sidebar-open": sidebarToggle }])}>
        <GeneType germlineClass={"LPATH"} />
      </div>
    </div>
  );
};

VariantPageHeader.propTypes = {};

export default VariantPageHeader;
