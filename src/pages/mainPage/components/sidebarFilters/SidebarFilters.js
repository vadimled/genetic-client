import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Collapse } from "antd";
import SelectionGroup from "GenericComponents/selectionGroup";
import FilterChipIndicators from 'GenericComponents/filterChipIndicators';
import filtersConfig from "Utils/filtersConfig";
import {
  getFilterType,
  getFilterVariantClass,
  getFilterSomaticClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterVaf,
  getFilterCancerDBs,
  getFilterGnomId
} from "Store/selectors";
import {
  setFilterVariantClass,
  setFilterSomaticClass,
  setFilterHotSpot,
  setFilterSnp,
  setFilterRoi,
  setFilterVaf,
  setFilterCancerDBs,
  setFilterGnomId
} from "Actions/filtersActions";
import { FILTERS } from "Utils/constants";
import style from "./SidebarFilters.module.scss";

// eslint-disable-next-line
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const Arrow = ({ dir }) => <i className={`${dir} arrow`} />;

class SidebarFilters extends Component {
  onChange = (filterSection, mode, value) => {
    const {
      setFilterVariantClass,
      setFilterSomaticClass,
      setFilterHotSpot,
      setFilterSnp,
      setFilterRoi,
      setFilterVaf,
      setFilterCancerDBs,
      setFilterGnomId
    } = this.props;

    const data = {
      value,
      mode
    };

    switch (filterSection) {
      case FILTERS.variantClass:
        setFilterVariantClass(data);
        break;
      case FILTERS.somaticClass:
        setFilterSomaticClass(data);
        break;
      case FILTERS.hotSpot:
        setFilterHotSpot(data);
        break;
      case FILTERS.snp:
        setFilterSnp(data);
        break;
      case FILTERS.roi:
        setFilterRoi(data);
        break;
      case FILTERS.vaf:
        setFilterVaf(data);
        break;
      case FILTERS.cancerDBs:
        setFilterCancerDBs(data);
        break;
      case FILTERS.gnomAD:
        setFilterGnomId(data);
        break;
    }
  };

  render() {
    const { filters, type } = this.props;

    return (
      <div className={style["sidebar-filters"]}>
        <FilterChipIndicators
          onDelete={(id) => console.log(id)}
          data={['lpath', 'path', 'ben']}
          title={'title'}
        />
        <Collapse
          defaultActiveKey={["1", "2", "3", "4", "5", "6", "7"]}
          onChange={callback}
          expandIcon={({ isActive }) => <Arrow dir={!isActive ? "right" : "down"} />}
        >
          {Object.keys(filtersConfig)
            .filter(key => filtersConfig[key].type.includes(type))
            .map((key, i) => {
              let group = filtersConfig[key];

              return (
                <Panel header={group.title} key={i + 1}>
                  {group.children && (
                    <Collapse
                      key={`collapse-${i}`}
                      defaultActiveKey={["1inner", "2inner"]}
                      onChange={callback}
                      expandIcon={({ isActive }) => <Arrow dir={!isActive ? "right" : "down"} />}
                      className="collapse-childrens"
                    >
                      {Object.keys(group.children)
                        .filter(key => group.children[key].type.includes(type))
                        .map((key, i) => {
                          let childGroup = group.children[key];

                          return (
                            <Panel header={childGroup.title} key={i + 1 + "inner"}>
                              <SelectionGroup
                                mode={childGroup.mode}
                                items={childGroup.items}
                                onChange={this.onChange.bind(this, key, childGroup.mode)}
                                values={filters[key]}
                              />
                            </Panel>
                          );
                        })}
                    </Collapse>
                  )}

                  {!group.children && (
                    <SelectionGroup
                      mode={group.mode}
                      items={group.items}
                      onChange={this.onChange.bind(this, key, group.mode)}
                      values={filters[key]}
                    />
                  )}
                </Panel>
              );
            })}
        </Collapse>
      </div>
    );
  }
}

SidebarFilters.propTypes = {};

function mapStateToProps(state) {
  return {
    type: getFilterType(state),
    filters: {
      [FILTERS.variantClass]: getFilterVariantClass(state),
      [FILTERS.somaticClass]: getFilterSomaticClass(state),
      [FILTERS.hotSpot]: getFilterHotSpot(state),
      [FILTERS.snp]: getFilterSnp(state),
      [FILTERS.roi]: getFilterRoi(state),
      [FILTERS.vaf]: getFilterVaf(state),
      [FILTERS.cancerDBs]: getFilterCancerDBs(state),
      [FILTERS.gnomAD]: getFilterGnomId(state)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterVariantClass: data => dispatch(setFilterVariantClass(data)),
    setFilterSomaticClass: data => dispatch(setFilterSomaticClass(data)),
    setFilterHotSpot: data => dispatch(setFilterHotSpot(data)),
    setFilterSnp: data => dispatch(setFilterSnp(data)),
    setFilterRoi: data => dispatch(setFilterRoi(data)),
    setFilterVaf: data => dispatch(setFilterVaf(data)),
    setFilterCancerDBs: data => dispatch(setFilterCancerDBs(data)),
    setFilterGnomId: data => dispatch(setFilterGnomId(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFilters);
