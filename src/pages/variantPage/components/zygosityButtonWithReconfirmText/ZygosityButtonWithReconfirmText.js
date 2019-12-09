import React from "react";
import PropTypes from "prop-types";
import { setVariantClassOptionsWithReconfirm } from "Utils/helpers";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";
import ZygosityTypeButton from "variantComponents/zygosityTypeButton";

const ZygosityButtonWithReconfirmText = props => {
  const {
    onChangeType,
    reconfirmStatus,
    currValue,
    currentVariantClass,
    currentZygosity,
    onChangeSelectedZygosityType,
    onChangeClassification,
    testId,
    title,
    selectedZygosityType,
    variantId,
    type
  } = props;
  return (
    <>
      <ZygosityTypeButton
        currentZygosity={currentZygosity}
        selectedZygosityType={selectedZygosityType}
        type={type}
        currValue={currValue}
        onChangeType={onChangeType}
        title={title}
        typeData={setVariantClassOptionsWithReconfirm(
          title,
          currentZygosity,
          currentVariantClass
        )}
        testId={testId}
        variantId={variantId}
        onChangeClassification={onChangeClassification}
        onChangeSelectedZygosityType={onChangeSelectedZygosityType}
        reconfirmStatus={reconfirmStatus}
        currentVariantClass={currentVariantClass}
      />
      {reconfirmStatus && currentZygosity === title && (
        <div className="reconfirm-wrapper">
          <LabeledTag
            value={currentVariantClass}
            typeData={setVariantClassOptionsWithReconfirm(
              title,
              currentZygosity,
              currentVariantClass
            )}
            customClassName="reconfirm-labeled-tag"
          />
          <div className="reconfirm-text">{` re-confirm`}</div>
        </div>
      )}
    </>
  );
};

ZygosityButtonWithReconfirmText.propTypes = {
  currentZygosity: PropTypes.string,
  selectedZygosityType: PropTypes.string,
  currValue: PropTypes.any,
  onChangeType: PropTypes.string,
  currentVariantClass: PropTypes.string,
  testId: PropTypes.string,
  variantId: PropTypes.string,
  onChangeClassification: PropTypes.func,
  onChangeSelectedZygosityType: PropTypes.func,
  reconfirmStatus: PropTypes.bool
};

export default ZygosityButtonWithReconfirmText;
