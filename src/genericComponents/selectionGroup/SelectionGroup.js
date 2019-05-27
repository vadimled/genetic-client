import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {TAG_COLORS} from 'Utils/constants';
import FilterItem from "../filterItem";
import style from './SelectionGroup.module.scss';

class SelectionGroup extends Component {

  constructor(props){
    super(props);
    this.state = {
      filterItems: [
        {tagColor: TAG_COLORS.white, label: 'Unclassified'},
        {tagColor: TAG_COLORS.red, label: 'PATH'},
        {tagColor: TAG_COLORS.orange, label: 'LATH'},
        {tagColor: TAG_COLORS.yellow, label: 'VUS'},
        {tagColor: TAG_COLORS.blueLight, label: 'LBEN'},
        {tagColor: TAG_COLORS.blue, label: 'BEN'},
      ]
    };
  }

  render() {
    return (
      <div className={style["selection-group-wrapper"]}>
        {this.state.filterItems.map((item, i) => (
          <FilterItem item={item} key={i} />
        ))}
      </div>
    );
  }
}

SelectionGroup.propTypes = {};

export default SelectionGroup;
