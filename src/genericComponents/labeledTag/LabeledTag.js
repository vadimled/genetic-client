import React, { Fragment, memo } from "react";
import style from "./LabeledTag.module.scss";
import PropTypes from "prop-types";
import Tag from "GenericComponents/tag";
import cn from "classnames";
import { VARIANT_CLASS } from "Utils/constants";

function LabeledTag({ label, typeData, tagColor, customClassName }) {
  let type;

  const renderLabeledTag = () => {
    if (typeData) {
      type = typeData?.find(item => item.label === label);

      if (type) {
        return (
          <Fragment>
            <Tag color={type.tagColor} />
            <div
              className={cn("label-text", {
                "unclassified": type.label === VARIANT_CLASS.unclassified.label,
                [customClassName]: !!customClassName
              })}
            >
              {type.label}
            </div>
          </Fragment>
        );
      } else {
        return <div className="label-text">{label}</div>;
      }
    } else if (tagColor) {
      return (
        <Fragment>
          <Tag color={tagColor} />
          <div
            className={cn("label-text", {
              "unclassified": label === VARIANT_CLASS.unclassified.label,
              [customClassName]: !!customClassName
            })}
          >
            {label}
          </div>
        </Fragment>
      );
    } else {
      return (
        <div
          className={cn("label-text", {
            "unclassified": label === VARIANT_CLASS.unclassified.label,
            [customClassName]: !!customClassName
          })}
        >
          {label}
        </div>
      );
    }
  };

  return (
    <div className={style["labeled-tag-wrapper"]}>{renderLabeledTag()}</div>
  );
}

LabeledTag.propTypes = {
  label: PropTypes.string.isRequired,
  tagColor: PropTypes.string,
  typeData: PropTypes.array
};

export default memo(LabeledTag);
