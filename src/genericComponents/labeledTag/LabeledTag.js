import React, { Fragment, memo } from "react";
import style from "./LabeledTag.module.scss";
import PropTypes from "prop-types";
import Tag from "GenericComponents/tag";
import cn from "classnames";
import { TEXTS } from "Utils/constants";

function LabeledTag({ value, label, typeData, tagColor, customClassName }) {

  // console.log("--typeData: ", typeData)
  // console.log("--value: ", value)
  // console.log("--label: ", label)

  if(!label && !value){
    return null
  }

  let type;
  const getLabelByValue = () => typeData?.find(item => item?.value === value).label;
    
  const labelText = label ? label : getLabelByValue();
    
  const getTextOnly = text => {
      return (
        <div
          className={cn("label-text", {
            unclassified: text === TEXTS.unclassified,
            [customClassName]: !!customClassName
          })}
        >
          {text}
        </div>
      );
    },
    
    getNode = (color, text) => {
      return (
        <Fragment>
          <Tag color={color} />
          {getTextOnly(text)}
        </Fragment>
      );
    },
    
    renderLabeledTag = () => {
      if (typeData) {
        type = typeData?.find(item => item.label === labelText);

        if (type) {
          return getNode(type.tagColor, type.label);
        } else {
          return <div className="label-text">{labelText}</div>;
        }
      } else if (tagColor) {
        return getNode(tagColor, labelText);
      } else {
        return getTextOnly(labelText);
      }
    };

  return (
    <div className={style["labeled-tag-wrapper"]}>{renderLabeledTag()}</div>
  );
}

LabeledTag.propTypes = {
  label: PropTypes.string,
  tagColor: PropTypes.string,
  customClassName: PropTypes.string,
  typeData: PropTypes.array
};

export default memo(LabeledTag);
