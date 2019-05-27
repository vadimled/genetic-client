import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterItem.module.scss";

const Tag = ({ color }) => {
  const style =
    color !== "white"
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
    const { label, tagColor } = this.props;
    return (
      <div className={style["filter-item-wrapper"]}>
        <Checkbox>
          <div className="flex items-center checkbox-inner-content">
            <Tag color={tagColor} />
            <span
              style={label === "Unclassified" ? { color: "#96A2AA" } : null}
            >
              {label}
            </span>
          </div>
        </Checkbox>
      </div>
    );
  }
}

FilterItem.propTypes = {};

export default FilterItem;
