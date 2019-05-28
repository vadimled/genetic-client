import React, { Component } from "react";
// import PropTypes from 'prop-types';
import FilterItem from "../filterItem";
import style from "./SelectionGroup.module.scss";

class SelectionGroup extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { filterItems, mode } = this.props;
    return (
      <div className={style["selection-group-wrapper"]}>
        {filterItems.map((item, i) => (
          <FilterItem
            mode={mode}
            item={item}
            key={i}
            index={i}
            onChange={this.onChange}
            value={this.state.value}
          />
        ))}
      </div>
    );
  }
}

SelectionGroup.propTypes = {};

export default SelectionGroup;
