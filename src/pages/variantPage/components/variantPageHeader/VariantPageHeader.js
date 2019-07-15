import React, { memo } from "react";
import { useSelector } from "react-redux";
import style from "./VariantPageHeader.module.scss";
import InformField from "GenericComponents/informField";
import ExternalLink from "GenericComponents/externalLink";
import VariantClassificationContainer from "variantComponents/variantClassificationContainer";
import cn from "classnames";
import { getTableData } from "Store/selectors";
import PropTypes from "prop-types";

const VariantPageHeader = ({ sidebarToggle }) => {
  // ------ for dev
  const data = useSelector(getTableData);
  const { gene, protein, chrPosition, alleleChange, coding, transcript } = data[
    Object.keys(data)[3]
  ];
  // ------ for dev
  return (
    <div className={style["variant-page-header-wrapper"]}>
      <div className="left-data-wrapper">
        <div className="left-data">
          <div className="gene">
            <InformField name="inform-field-gene" text={gene} />
          </div>
          <div className="gene">
            <InformField name="inform-field-protein" text={protein} />
          </div>
          <div className="gene">
            <InformField name="inform-field-chrPosition" text={chrPosition} icon={<ExternalLink data={""} />} />
          </div>
          <div className="gene">
            <InformField name="inform-field-alleleChange" text={alleleChange} />
          </div>
          <div className="gene">
            <InformField name="inform-field-coding" text={coding} />
          </div>
          <div className="gene">
            <InformField name="inform-field-transcript" text={transcript} icon={<ExternalLink data={""} />} />
          </div>
        </div>
      </div>

      <div className={cn(["right-data", { "sidebar-open": sidebarToggle }])}>
        <VariantClassificationContainer />
      </div>
    </div>
  );
};

VariantPageHeader.propTypes = {
  sidebarToggle: PropTypes.bool
};

export default memo(VariantPageHeader);
