import React from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";
import style from "./FilterRangeItem.module.scss";

const FilterRangeItem = ({ onChange, values }) => (
  <div className={`${style["filter-item-wrapper"]} filter-item`}>

    <div className="values">
      {values[0]}-{values[1]}
    </div>

    <Slider range defaultValue={values} onAfterChange={onChange}/>

    <div className="positions">
      <span>0</span>
      <span>100</span>
    </div>

  </div>
);

FilterRangeItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.number),
};

FilterRangeItem.defaultProps = {
  values: [0, 100]
};

export default React.memo(FilterRangeItem);
