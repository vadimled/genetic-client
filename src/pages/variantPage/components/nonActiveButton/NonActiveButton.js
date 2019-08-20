import React, { memo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./NonActiveButton.module.scss";
import LabeledTag from "GenericComponents/labeledTag";
import { Link } from "react-router-dom";

const NonActiveButton = ({
  title,
  type,
  onClick,
  typeData,
  currValue,
  testId,
  variantId,
  selectedZygosityType,
  selectedType
}) => {

  const getTaggedLabel = typeData => {
    for (let item in typeData) {
      const { label, value } = typeData[item];
      if (currValue?.toLowerCase() === value?.toLowerCase()) {
        return label;
      }
    }
    return "Unclassified";
  };

  const renderVariantClass = () => (
    <LabeledTag
      label={getTaggedLabel(typeData)}
      typeData={typeData}
      customClassName={cn("label-custom-style", { active })}
    />
  );

  const zygosityType = selectedZygosityType === "somatic" ? "germline" : "somatic";

  const active = selectedType === type;

  return (
    <Link
      to={
        `/tests/${testId}/variant/${variantId}/?selectedZygosityType=${zygosityType}`
      }
      data-testid={`non-active-button-${type}`}
      id={type}
      className={style["select-non-active-wrapper"]}
      onClick={e => onClick(e, type)}
    >
      <div className={cn("select-non-active", { active })}>
        <div className={cn("select-non-active-title", { active })}>
          {`${title}:`}
        </div>
        <div className="select-non-active-class">{renderVariantClass()}</div>
      </div>
    </Link>
  );
};

NonActiveButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  selectedType: PropTypes.string,
  onClick: PropTypes.func,
  currValue: PropTypes.string,
  typeData: PropTypes.array
};

export default memo(NonActiveButton);
