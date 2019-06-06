import React, { memo } from "react";
import { Slider } from "antd";
import PropTypes from "prop-types";
import style from "./RangeSlider.module.scss";

const RangeSlider = ({ onChange, rangeValue, title, subTitle, className }) => {
  return (
    <div className={`${style["range-slider"]} ${className}`}>

      {title && <label>{title}</label>}
      {subTitle && <span className="sub-label">{subTitle}</span>}

      <div className="values">
        {rangeValue[0]}-{rangeValue[1]}
      </div>

      <Slider range value={rangeValue} onChange={onChange} />

      <div className="positions">
        <span>0</span>
        <span>100</span>
      </div>

    </div>
  );
};

RangeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  rangeValue: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string
};

RangeSlider.defaultProps = {
  rangeValue: [0, 100]
};

export default memo(RangeSlider);
