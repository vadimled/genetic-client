import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Radio } from "antd";
import style from "./FilterItem.module.scss";
import Tag from './components/Tag';


const FilterItem = ({ item, mode, index, onChange, checkboxValue, radioValue }) => (checkboxValue) || (
  <div className={style["filter-item-wrapper"]} id="filter-item">
    {mode === "multiple" ? (
      <Checkbox checked={checkboxValue} onChange={onChange}>
        <div className="flex items-center checkbox-inner-content">
          {item.tagColor && <Tag color={item.tagColor} />}
          <span
            style={item.label === "Unclassified" ? { color: "#96A2AA" } : null}
          >
            {item.label}
          </span>
        </div>
      </Checkbox>
    ) : (
      <Radio.Group onChange={onChange} value={radioValue}>
        <Radio value={index + 1}>
          {item.icon}
          <span className="item-label">{item.label}</span>
        </Radio>
      </Radio.Group>
    )}
  </div>
);

FilterItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  onChange: PropTypes.func,
  mode: PropTypes.string,
  value: PropTypes.number
};

FilterItem.defaultProps = {
  checkboxValue: true,
  radioValue: 2,
};
export default FilterItem;
