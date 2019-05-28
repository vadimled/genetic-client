import React, { Component } from "react";
// import PropTypes from 'prop-types';
import SelectionGroup from "../../genericComponents/selectionGroup";
import { TAG_COLORS } from "../../utils/constants";

class MainPage extends Component {


  constructor(props){
    super(props);
    this.state = {
      variantClassFilterItems: [
        {tagColor: TAG_COLORS.white, label: 'Unclassified'},
        {tagColor: TAG_COLORS.red, label: 'PATH'},
        {tagColor: TAG_COLORS.orange, label: 'LATH'},
        {tagColor: TAG_COLORS.yellow, label: 'VUS'},
        {tagColor: TAG_COLORS.blueLight, label: 'LBEN'},
        {tagColor: TAG_COLORS.blue, label: 'BEN'},
      ],

      typeFilterItems: [
        {label: 'Somatic'},
        {label: 'Germline'},
        {label: 'ACMG'}
      ]
    };
  }

  render() {
    return (
      <div>
        <h3>MainPage</h3>

        <SelectionGroup mode="multiple" filterItems={this.state.variantClassFilterItems}/>


        <SelectionGroup mode="single" filterItems={this.state.typeFilterItems}/>

      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
