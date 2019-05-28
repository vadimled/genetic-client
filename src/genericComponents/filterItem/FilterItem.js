import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterItem.module.scss";
import { Radio } from "antd";
import Tag from './components/Tag';


const FilterItem = ({ item, mode, index, onChange, value }) => (
  <div className={style["filter-item-wrapper"]} id="filter-item">
    {mode === "multiple" ? (
      <Checkbox>
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
      <Radio.Group onChange={onChange} value={value}>
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

export default FilterItem;
