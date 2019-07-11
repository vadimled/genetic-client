import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import style from "./NonActiveButton.module.scss";
import Tag from "GenericComponents/tag";

const NonActiveButton = ({ title, type, onClick, typeData, currValue }) => {
  const getTaggedLabel = (value, typeData) => {
    for (let item in typeData) {
      const { tagColor, label, value: value1 } = typeData[item];
      if (value1 === value)
        return {
          color: tagColor,
          label: label
        };
    }
    return { label: "Unclassified", color: "#FFF" };
  };

  const renderVariantClass = () => {
    const { color, label } = getTaggedLabel(currValue, typeData);
    return (
      <Fragment>
        <Tag color={color} />
        <span>{label}</span>
      </Fragment>
    );
  };

  return (
    <div
      data-testid={`non-active-button-${type}`}
      id={type}
      className={style["select-non-active-wrapper"]}
      onClick={e => onClick(e, type)}
    >
      <div className="select-non-active-title">{`${title}:`}</div>
      <div className="select-non-active-class">{renderVariantClass()}</div>
    </div>
  );
};

NonActiveButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  currValue: PropTypes.string,
  typeData: PropTypes.array,
};

export default memo(NonActiveButton);
