import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterItem.module.scss";
import Tag from './components/Tag';

const FilterItem = ({ item, onChange, value }) => (
  <div className={style["filter-item-wrapper"]} id="filter-item">

    <Checkbox checked={value} onChange={onChange}>
      <div className="flex items-center checkbox-inner-content">
        {!!item.icon && item.icon}
        {!!item.tagColor && <Tag color={item.tagColor} />}
        <span
          style={item.label === "Unclassified" ? { color: "#96A2AA" } : null}
        >
          {item.label}
        </span>
      </div>
    </Checkbox>

  </div>
);

FilterItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  value: PropTypes.bool,
};

FilterItem.defaultProps = {
  value: false
};

export default React.memo(FilterItem);
