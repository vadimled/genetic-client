import React, { Fragment, memo } from "react";
import style from "./LabeledTag.module.scss";
import PropTypes from "prop-types";
import Tag from "GenericComponents/tag";
import cn from "classnames";
import { VARIANT_CLASS } from "Utils/constants";

function LabeledTag({ label, typeData }) {
  const type = typeData?.find(item => item.label === label);
  return (
    <div className={style["labeled-tag-wrapper"]}>
      {type ? (
        <Fragment>
          <Tag color={type.tagColor} />
          <div
            className={cn("label-text", {
              unclassified: type.label === VARIANT_CLASS.unclassified.label
            })}
          >
            {type.label}
          </div>
        </Fragment>
      ) : (
        { label }
      )}
    </div>
  );
}

LabeledTag.propTypes = {
  label: PropTypes.string.isRequired,
  typeData: PropTypes.array.isRequired
};

export default memo(LabeledTag);
