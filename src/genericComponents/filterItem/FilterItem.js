import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Radio } from "antd";
import style from "./FilterItem.module.scss";
import Tag from 'GenericComponents/tag';

const FilterItem = ({ item, mode, onChange, checkboxValue, radioValue }) => (
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
        <Radio value={item.id}>
          {item.icon}
          <span className="item-label">{item.label}</span>
        </Radio>
      </Radio.Group>
    )}
  </div>
);

FilterItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  checkboxValue: PropTypes.bool,
  radioValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

FilterItem.defaultProps = {
  checkboxValue: false,
  radioValue: null,
};

export default React.memo(FilterItem);
