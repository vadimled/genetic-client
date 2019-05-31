import React, { Component } from "react";
import {connect} from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "GenericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";
import Toolbar from "./components/toolbar";
import TableLayout from "./components/tableLayout";
import {
  getFilterType,
  getFilterVariantClass,
  getFilterSomaticClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterGnomId
} from "Store/selectors";
import {
  setFilterVariantClass,
  setFilterSomaticClass,
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
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  onChange = (filterSection, mode, filterItemId) => {
    const {
      setFilterVariantClass,
      setFilterSomaticClass,
      setFilterHotSpot,
      setFilterSnp,
      setFilterRoi,
      setFilterGnomId
    } = this.props;

    const data = {
      value: filterItemId,
      mode
    };

    switch(filterSection) {
      case FILTERS.variantClass : setFilterVariantClass(data); break;
      case FILTERS.somaticClass : setFilterSomaticClass(data); break;
      case FILTERS.hotSpot : setFilterHotSpot(data); break;
      case FILTERS.snp : setFilterSnp(data); break;
      case FILTERS.roi : setFilterRoi(data); break;
      case FILTERS.gnomId : setFilterGnomId(data); break;
    }
  };

  render() {
    const { sidebarToggle } = this.state;
    const { filters, type } = this.props;

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
              {Object.keys(filtersConfig)
                .filter(key => filtersConfig[key].type.includes(type))
                .map((key, i) => {
                  let section = filtersConfig[key];

                  return (
                    <Panel header={key} key={i + 1}>

                      {section.children &&
                        <Collapse
                          key={`collapse-${i}`}
                          defaultActiveKey={["1"]}
                          onChange={callback}
                          expandIcon={({ isActive }) => (
                            <Arrow dir={!isActive ? "right" : "down"} />
                          )}
                        >
                          {Object.keys(section.children)
                            .filter((key) => section.children[key].type.includes(type))
                            .map((key, i) => {
                              let csection = section.children[key];

                              return (
                                <Panel header={key} key={i + 1 + 'inner'}>
                                  <SelectionGroup
                                    mode={csection.mode}
                                    filterItems={csection.items}
                                    onChange={this.onChange.bind(this, key, csection.mode)}
                                    values={filters[key]}
                                  />
                                </Panel>
                              );
                            })
                          }
                        </Collapse>
                      }

                      {!section.children &&
                        <SelectionGroup
                          mode={section.mode}
                          filterItems={section.items}
                          onChange={this.onChange.bind(this, key, section.mode)}
                          values={filters[key]}
                        />
                      }

                    </Panel>
                  );
                })
              }
            </Collapse>
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <Toolbar />
          <TableLayout>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.  +
              Nullam sed est lectus. In hac habitasse platea dictumst.  +
              Aenean accumsan venenatis dapibus. Aenean faucibus dolor et leo
              tempor auctor.  + Pellentesque et sagittis lorem. Aliquam ut
              lacus blandit, egestas eros ac, dictum ante.  + Integer lobortis
              nisl dolor, eget porta sem accumsan vel.  + Maecenas lacinia
              nibh posuere neque fermentum bibendum. +  Aenean interdum ante
              et imperdiet gravida. Sed vitae libero facilisis, malesuada elit
              ac, sodales lorem.  + In hac habitasse platea dictumst. Etiam
              vitae convallis velit, id finibus arcu. +  Sed in ante dictum
              lacus viverra consequat. `}
          </TableLayout>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    type: getFilterType(state),
    filters: {
      [FILTERS.variantClass]: getFilterVariantClass(state),
      [FILTERS.somaticClass]: getFilterSomaticClass(state),
      [FILTERS.hotSpot]: getFilterHotSpot(state),
      [FILTERS.snp]: getFilterSnp(state),
      [FILTERS.roi]: getFilterRoi(state),
      [FILTERS.gnomId]: getFilterGnomId(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterVariantClass: (data) => dispatch(setFilterVariantClass(data)),
    setFilterSomaticClass: (data) => dispatch(setFilterSomaticClass(data)),
    setFilterHotSpot: (data) => dispatch(setFilterHotSpot(data)),
    setFilterSnp: (data) => dispatch(setFilterSnp(data)),
    setFilterRoi: (data) => dispatch(setFilterRoi(data)),
    setFilterGnomId: (data) => dispatch(setFilterGnomId(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
