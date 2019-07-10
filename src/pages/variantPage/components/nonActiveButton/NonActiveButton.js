import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./NonActiveButton.module.scss";
import { GERMLINE_VARIANT_CLASS_OPTIONS, SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";
import Tag from "GenericComponents/tag";

const NonActiveButton = ({title, type, onClick, somaticValue, germlineValue}) => {
  const getLabel = (value, typeData) => {
    for (let item in typeData) {
      if (typeData[item].value === value) return typeData[item].label;
    }
    return "Path";
  };
  
  const getTagColor = (value, typeData) => {
    for (let item in typeData) {
      if (typeData[item].value === value) return typeData[item].tagColor;
    }
    return "#F11E2C";
  };
  
  const renderVariantClass = () => {
    let typeData = {},
      currValue;
  
    if (type === "germline") {
      typeData = GERMLINE_VARIANT_CLASS_OPTIONS;
      currValue = germlineValue;
    } else if (type === "somatic") {
      typeData = SOMATIC_VARIANT_CLASS_OPTIONS;
      currValue = somaticValue;
    }
  
    return (
      <Fragment>
        <Tag color={getTagColor(currValue, typeData)} />
        <span>{getLabel(currValue, typeData)}</span>
      </Fragment>
    );
  };
  
  
  return (
    <div
      id="somatic"
      className={style["select-non-active-wrapper"]}
      onClick={e => onClick(e, type)}
    >
      <div className="select-non-active-title">{title}</div>
      <div className="select-non-active-class">
        {renderVariantClass()}
      </div>
    </div>

  );
};

NonActiveButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default NonActiveButton;
