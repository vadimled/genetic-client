import React, { memo } from "react";
import PropTypes from "prop-types";
import style from "./NonActiveButton.module.scss";
import LabeledTag from "GenericComponents/labeledTag";
import { Link } from "react-router-dom";

const NonActiveButton = ({ title, type, onClick, typeData, currValue, testId, variantId, selectedZygosityType }) => {

  console.log("----selectedZygosityType: ", selectedZygosityType);

  const getTaggedLabel = typeData => {
    for (let item in typeData) {
      const { label, value } = typeData[item];
      if (currValue === value) return label;
    }
    return "Unclassified";
  };

  const renderVariantClass = () => (
    <LabeledTag
      label={getTaggedLabel(typeData)}
      typeData={typeData}
      customClassName="label-custom-style"
    />
  );

  const zygosityType = selectedZygosityType === "somatic" ? "germline" : "somatic";

  return (
    <Link
      to={
        `/test/${testId}/variant/${variantId}/?selectedZygosityType=${zygosityType}`
      }
      data-testid={`non-active-button-${type}`}
      id={type}
      className={style["select-non-active-wrapper"]}
      onClick={e => onClick(e, type)}
    >
      <div className="select-non-active-title">{`${title}:`}</div>
      <div className="select-non-active-class">{renderVariantClass()}</div>
    </Link>
  );
};

NonActiveButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  currValue: PropTypes.string,
  typeData: PropTypes.array
};

export default memo(NonActiveButton);
