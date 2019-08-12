import React, { memo } from "react";
import style from "./VariantPageHeader.module.scss";
import InformField from "GenericComponents/informField";
import VariantClassificationContainer from "variantComponents/variantClassificationContainer";
import cn from "classnames";
import PropTypes from "prop-types";

const VariantPageHeader = ({ sidebarToggle, variantData, testId, variantId }) => {
  const { gene, protein, chrPosition, alleleChange, coding, transcript } = variantData || {};
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
            <InformField name="inform-field-chrPosition" text={chrPosition} />
          </div>
          <div className="gene">
            <InformField name="inform-field-alleleChange" text={alleleChange} />
          </div>
          <div className="gene">
            <InformField name="inform-field-coding" text={coding} />
          </div>
          <div className="gene">
            <InformField name="inform-field-transcript" text={transcript} />
          </div>
        </div>
      </div>

      <div className={cn(["right-data", { "sidebar-open": sidebarToggle }])}>
        <VariantClassificationContainer testId={testId} variantId={variantId} />
      </div>
    </div>
  );
};

VariantPageHeader.propTypes = {
  sidebarToggle: PropTypes.bool,
  variantData: PropTypes.object,
  testId: PropTypes.string,
  variantId: PropTypes.string
};

export default memo(VariantPageHeader);
