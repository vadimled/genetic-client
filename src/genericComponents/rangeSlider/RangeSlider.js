import React, { Fragment, memo } from "react";
import { Slider } from "antd";
import PropTypes from "prop-types";

const RangeSlider = ({ onChange, rangeValue, title, subTitle }) => {
  return (
    <Fragment>
      {title && <label>{title}</label>}
      {subTitle && <span className="sub-label">{subTitle}</span>}

      <Slider range value={rangeValue} onChange={onChange} />
    </Fragment>
  );
};

RangeSlider.propTypes = {
  onChange: PropTypes.func,
  rangeValue: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string
};

RangeSlider.defaultProps = {
  rangeValue: [0, 100]
};

export default memo(RangeSlider);
