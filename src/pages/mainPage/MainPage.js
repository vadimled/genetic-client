import React, { Component } from "react";
import {connect} from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "GenericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";
import {
  getFilterType,
  getFilterVariantClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterGnomId
} from "Store/selectors";
import {
  setFilterType,
  setFilterVariantClass,
  setFilterHotSpot,
  setFilterSnp,
  setFilterRoi,
  setFilterGnomId
} from "Actions/filtersActions";
import { FILTERS } from "Utils/constants";


// eslint-disable-next-line
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const Arrow = ({ dir }) => <i className={`${dir} arrow`} />;

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: false,
      filters: {
        [FILTERS.type]: "germline",
        [FILTERS.variantClass]: ['unclassified', 'lben'],
        [FILTERS.hotSpot]: true,
        [FILTERS.snp]: null,
        [FILTERS.roi]: null,
        [FILTERS.gnomId]: null
      }
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  onChange = (filterSection, filterItemId) => {
    switch(filterSection) {
      case FILTERS.type : this.props.setFilterType({value: filterItemId}); break;
      case FILTERS.variantClass : this.props.setFilterVariantClass({value: filterItemId}); break;
      case FILTERS.hotSpot : this.props.setFilterHotSpot({value: filterItemId}); break;
      case FILTERS.snp : this.props.setFilterSnp({value: filterItemId}); break;
      case FILTERS.roi : this.props.setFilterRoi({value: filterItemId}); break;
      case FILTERS.gnomId : this.props.setFilterGnomId({value: filterItemId}); break;
    }
  };

  render() {
    const { sidebarToggle } = this.state;
    const { filters } = this.props;

    return (
      <div className={style["main-page"]}>
        <div
          className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <SideBarLayout
            title={"Filters"}
            handleClick={this.handleClick}
            mode={sidebarToggle}
          >
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              expandIcon={({ isActive }) => (
                <Arrow dir={!isActive ? "right" : "down"} />
              )}
            >
              {Object.keys(filtersConfig).map((key, i) => {
                return (
                  <Panel header={key} key={i + 1}>
                    <SelectionGroup
                      mode={filtersConfig[key].mode}
                      filterItems={filtersConfig[key].items}
                      onChange={this.onChange.bind(this, key)}
                      values={filters[key]}
                    />
                  </Panel>
                );
              })}
            </Collapse>
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <h1>Page content</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      [FILTERS.type]: getFilterType(state),
      [FILTERS.variantClass]: getFilterVariantClass(state),
      [FILTERS.hotSpot]: getFilterHotSpot(state),
      [FILTERS.snp]: getFilterSnp(state),
      [FILTERS.roi]: getFilterRoi(state),
      [FILTERS.gnomId]: getFilterGnomId(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterType: (data) => dispatch(setFilterType(data)),
    setFilterVariantClass: (data) => dispatch(setFilterVariantClass(data)),
    setFilterHotSpot: (data) => dispatch(setFilterHotSpot(data)),
    setFilterSnp: (data) => dispatch(setFilterSnp(data)),
    setFilterRoi: (data) => dispatch(setFilterRoi(data)),
    setFilterGnomId: (data) => dispatch(setFilterGnomId(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
