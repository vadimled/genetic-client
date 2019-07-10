import React, { memo } from "react";
import { useSelector } from "react-redux";
import style from "./VariantPageHeader.module.scss";
import InformField from "GenericComponents/informField";
import ExternalLink from "GenericComponents/externalLink";
import GeneType from "variantComponents/geneType";
import cn from "classnames";
import { getTableData } from "Store/selectors";
import PropTypes from "prop-types";

const VariantPageHeader = ({ sidebarToggle /* , id*/ }) => {
  const data = useSelector(getTableData); // [id];
  // ------ for dev
  const { gene, protein, chrPosition, alleleChange, coding, transcript } = data[
    Object.keys(data)[3]
  ];
  // ------ for dev
  return (
    <div className={style["variant-page-header-wrapper"]}>
      <div className="left-data-wrapper">
        <div className="left-data">
          <div className="gene">
            <InformField text={gene} />
          </div>
          <div className="gene">
            <InformField text={protein} />
          </div>
          <div className="gene">
            <InformField text={chrPosition} icon={<ExternalLink data={""} />} />
          </div>
          <div className="gene">
            <InformField text={alleleChange} />
          </div>
          <div className="gene">
            <InformField text={coding} />
          </div>
          <div className="gene">
            <InformField text={transcript} icon={<ExternalLink data={""} />} />
          </div>
        </div>
      </div>
      
      <div className={cn(["right-data", { "sidebar-open": sidebarToggle }])}>
        <GeneType />
      </div>
    </div>
  );
};

VariantPageHeader.propTypes = {
  sidebarToggle: PropTypes.bool
};

export default memo(VariantPageHeader);
