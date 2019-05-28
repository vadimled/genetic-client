import React, { Component } from "react";
// import PropTypes from 'prop-types';
import SelectionGroup from "../../genericComponents/selectionGroup";
import { TAG_COLORS } from "../../utils/constants";
import { Icon } from "antd";
import { Collapse } from 'antd';
import style from './MainPage.module.scss';

// eslint-disable-next-line
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const Arrow = ({dir}) => <i className={`${dir} arrow`} />;


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

      gnomIdFilterItems: [
        {value: 'na', label: "NA"},
        {value: 'veryRare', label: "very rare(0-1%)"},
        {value: 'rare', label: "rare (1-5%)"},
        {value: 'common', label: "common (>5%)"},
      ]
    };
  }



  render() {

    return (
      <div className={style['main-page-wrapper']}>
        <h3>MainPage</h3>

        <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={({ isActive }) => <Arrow dir={!isActive ? 'right' : 'down'} />}>

          <Panel header="Type" key="1">
            <SelectionGroup mode="multiple" filterItems={this.state.variantClassFilterItems}/>
          </Panel>

          <Panel header="Variant Class" key="2">
            <SelectionGroup mode="single" filterItems={this.state.typeFilterItems}/>
          </Panel>

          <Panel header="Hot Spot" key="3">
            <SelectionGroup mode="single" filterItems={this.state.hotSpotFilterItems}/>
          </Panel>

          <Panel header="SNP" key="4">
            <SelectionGroup mode="single" filterItems={this.state.snpFilterItems}/>
          </Panel>

          <Panel header="ROI" key="5">
            <SelectionGroup mode="single" filterItems={this.state.roiFilterItems}/>
          </Panel>

        </Collapse>,

      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
