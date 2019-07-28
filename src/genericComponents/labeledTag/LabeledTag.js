import React, { Fragment, memo } from "react";
import style from "./LabeledTag.module.scss";
import PropTypes from "prop-types";
import Tag from "GenericComponents/tag";
import cn from "classnames";
import { VARIANT_CLASS } from "Utils/constants";

function LabeledTag({ label, typeData, tagColor, customClassName }) {
  let type;

  const getTextOnly = text => {
    return (
      <div
        className={cn("label-text", {
          unclassified: text === VARIANT_CLASS.unclassified.label,
          [customClassName]: !!customClassName
        })}
      >
        {text}
      </div>
    );
  };

  const getNode = (color, text) => {
    return (
      <Fragment>
        <Tag color={color} />
        {getTextOnly(text)}
      </Fragment>
    );
  };

  const renderLabeledTag = () => {
    if (typeData) {
      type = typeData?.find(item => item.label === label);

      if (type) {
        return getNode(type.tagColor, type.label);
      } else {
        return <div className="label-text">{label}</div>;
      }
    } else if (tagColor) {
      return getNode(tagColor, label);
    } else {
      return getTextOnly(label);
    }
  };

  return (
    <div className={style["labeled-tag-wrapper"]}>{renderLabeledTag()}</div>
  );
}

LabeledTag.propTypes = {
  label: PropTypes.string.isRequired,
  tagColor: PropTypes.string,
  customClassName: PropTypes.string,
  typeData: PropTypes.array
};

export default memo(LabeledTag);
