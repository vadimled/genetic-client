import React, { Component } from "react";
// import PropTypes from 'prop-types';
import SelectionGroup from "../../genericComponents/selectionGroup";
import { TAG_COLORS } from "../../utils/constants";
import { Icon } from "antd";

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
      ],

      hotSpotFilterItems: [
        {label: 'True', icon: <Icon type="check" />},
        {label: 'False', icon: <Icon type="close" />}
      ],

      snpFilterItems: [
        {label: 'True', icon: <Icon type="check" />},
        {label: 'False', icon: <Icon type="close" />}
      ],

      roiFilterItems: [
        {label: 'True', icon: <Icon type="check" />},
        {label: 'False', icon: <Icon type="close" />}
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>MainPage</h3>

        <SelectionGroup title="Type" mode="multiple" filterItems={this.state.variantClassFilterItems}/>


        <SelectionGroup title="Variant Class" mode="single" filterItems={this.state.typeFilterItems}/>


        <SelectionGroup title="Hot Spot" mode="single" filterItems={this.state.hotSpotFilterItems}/>


        <SelectionGroup title="SNP" mode="single" filterItems={this.state.snpFilterItems}/>

        <SelectionGroup title="ROI" mode="single" filterItems={this.state.roiFilterItems}/>

      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
