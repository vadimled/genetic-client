import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Checkbox } from "antd";
import style from "./FilterItem.module.scss";

const Tag = ({ color }) => {
  console.log(color);
  return <div style={{ backgroundColor: color }} className="tag" />;
};

class FilterItem extends Component {
  render() {
    const { label = "Unclassified", tagColor = "red" } = this.props;
    return (
      <div className={style["filter-item-wrapper"]}>
        <Checkbox>
          <div className="flex items-center checkbox-inner-content">
            <Tag color={tagColor} />
            <span>{label}</span>
          </div>
        </Checkbox>
      </div>
    );
  }
}

FilterItem.propTypes = {};

export default FilterItem;
