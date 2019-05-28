import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterItem.module.scss";
import { TAG_COLORS } from "Utils/constants";
import { Radio } from "antd";

const Tag = ({ color }) => {
  console.log(color);
  const style =
    color !== TAG_COLORS.white
      ? { backgroundColor: color }
      : { backgroundColor: color, border: "1px solid #DAE1E6" };
  return <div style={style} className="tag" />;
};

// const Icon = (icon) => {
//   console.log(icon)
//   return <div className="icon">{icon}</div>
// }

class FilterItem extends Component {


  render() {
    const { item, mode, index, onChange, value } = this.props;
    console.log("--item: ", item);
    return (
      <div className={style["filter-item-wrapper"]} id="filter-item">
        {mode === "multiple" ? (
          <Checkbox>
            <div className="flex items-center checkbox-inner-content">
              {item.tagColor && <Tag color={item.tagColor} />}
              <span
                style={
                  item.label === "Unclassified" ? { color: "#96A2AA" } : null
                }
              >
                {item.label}
              </span>
            </div>
          </Checkbox>
        ) : (
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={index + 1}>{item.icon}<span className="item-label">{item.label}</span></Radio>
          </Radio.Group>
        )}
      </div>
    );
  }
}

FilterItem.propTypes = {};

export default FilterItem;
