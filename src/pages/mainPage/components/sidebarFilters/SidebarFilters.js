import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Collapse } from "antd";
import SelectionGroup from "GenericComponents/selectionGroup";
import FilterChipIndicators from "GenericComponents/filterChipIndicators";
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
  getFilterGnomId,
  getSearchQuery,
  getTestType,
  getFilterZygosity
} from "Store/selectors";
import {
  setFilterVariantClassGermline,
  setFilterVariantClassSomatic,
  setFilterHotSpot,
  setFilterSnp,
  setFilterRoi,
  setFilterVaf,
  setFilterCancerDBs,
  setFilterGnomId,
  clearFilterSection,
  setDefaultFilters
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

  state={
    testType: null
  };

  static getDerivedStateFromProps(props, state) {

    if (props.testType !== null && state.testType === null) {

      props.setDefaultFilters(props.testType);
      return {
        testType: props.testType
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

  onChange = (filterSection, mode, value) => {
    const {
      setFilterVariantClassGermline,
      setFilterVariantClassSomatic,
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
      case FILTERS.variantClassGermline:
        setFilterVariantClassGermline(data);
        break;
      case FILTERS.variantClassSomatic:
        setFilterVariantClassSomatic(data);
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

  filtersConfigConverter = initFilters => {
    return {
      [FILTERS.zygosity]: initFilters[FILTERS.zygosity],
      [FILTERS.variantClassGermline]: initFilters[FILTERS.variantClassGermline],
      [FILTERS.variantClassSomatic]: initFilters[FILTERS.variantClassSomatic],
      ["variantPanels"]: {
        title: "Variant panels",
        type: ["somatic"],
        children: {
          [FILTERS.hotSpot]: initFilters[FILTERS.hotSpot],
          [FILTERS.snp]: initFilters[FILTERS.snp]
        }
      },
      [FILTERS.roi]: initFilters[FILTERS.roi],
      [FILTERS.vaf]: initFilters[FILTERS.vaf],
      [FILTERS.cancerDBs]: initFilters[FILTERS.cancerDBs],
      [FILTERS.gnomAD]: initFilters[FILTERS.gnomAD]
    };
  };

  clearFilterSection = filterSection => {
    const { clearFilterSection } = this.props;
    clearFilterSection({ filtersKey: filterSection });
  };

  clearAllFilters = () => {
    Object.keys(filtersConfig).forEach(key => this.clearFilterSection(key));
  };

  render() {
    const { filters, type } = this.props;

    const transformedFiltersConfig = this.filtersConfigConverter(filtersConfig);

    const filtersChipIndicators = Object.keys(filters).filter(
      key => filters[key].length && filters[key][0] !== ""
    );

    return (
      <div className={style["sidebar-filters"]}>
        {!filtersChipIndicators.length && (
          <div className="filters-title">Filters</div>
        )}
        {!!filtersChipIndicators.length && (
          <div
            className="clear-filters"
            data-testid="clear-filters-button"
            onClick={this.clearAllFilters}>
            Clear filters ({filtersChipIndicators.length})
          </div>
        )}

        {filtersChipIndicators.map(key => {
          return (
            <FilterChipIndicators
              key={key}
              onDelete={this.clearFilterSection.bind(this, key)}
              data={
                key === FILTERS.vaf
                  ? filters[key]
                  : key === FILTERS.searchText
                    ? filters[key]
                    : filtersConfig[key].items.filter(item =>
                      filters[key].includes(item.id)
                    )
              }
              title={filtersConfig[key].title}
              filtersConfigKey={key}
            />
          );
        })}

        <Collapse
          defaultActiveKey={["1", "2", "3", "4", "5", "6", "7"]}
          onChange={callback}
          expandIcon={({ isActive }) => (
            <Arrow dir={!isActive ? "right" : "down"} />
          )}
        >
          {Object.keys(transformedFiltersConfig)
            .filter(key => transformedFiltersConfig[key].type.includes(type))
            .map((key, i) => {
              let group = transformedFiltersConfig[key];

              return (
                <Panel header={group.title} key={i + 1}>
                  {group.children && (
                    <Collapse
                      key={`collapse-${i}`}
                      defaultActiveKey={["1inner", "2inner"]}
                      onChange={callback}
                      expandIcon={({ isActive }) => (
                        <Arrow dir={!isActive ? "right" : "down"} />
                      )}
                      className="collapse-childrens"
                    >
                      {Object.keys(group.children)
                        .filter(key => group.children[key].type.includes(type))
                        .map((key, i) => {
                          let childGroup = group.children[key];

                          return (
                            <Panel
                              header={childGroup.title}
                              key={i + 1 + "inner"}
                            >
                              <SelectionGroup
                                name={key}
                                mode={childGroup.mode}
                                items={childGroup.items}
                                onChange={this.onChange.bind(
                                  this,
                                  key,
                                  childGroup.mode
                                )}
                                onReset={this.clearFilterSection.bind(
                                  this,
                                  key
                                )}
                                values={filters[key]}
                              />
                            </Panel>
                          );
                        })}
                    </Collapse>
                  )}

                  {!group.children && (
                    <SelectionGroup
                      name={key}
                      mode={group.mode}
                      items={group.items}
                      onChange={this.onChange.bind(this, key, group.mode)}
                      onReset={this.clearFilterSection.bind(this, key)}
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

// SidebarFilters.propTypes = {};

function mapStateToProps(state) {
  return {
    type: getFilterType(state),
    filters: {
      [FILTERS.variantClassGermline]: getFilterVariantClass(state),
      [FILTERS.variantClassSomatic]: getFilterSomaticClass(state),
      [FILTERS.hotSpot]: getFilterHotSpot(state),
      [FILTERS.snp]: getFilterSnp(state),
      [FILTERS.roi]: getFilterRoi(state),
      [FILTERS.vaf]: getFilterVaf(state),
      [FILTERS.cancerDBs]: getFilterCancerDBs(state),
      [FILTERS.gnomAD]: getFilterGnomId(state),
      [FILTERS.searchText]: [getSearchQuery(state)],
      [FILTERS.zygosity]: getFilterZygosity(state)
    },
    testType: getTestType(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterVariantClassGermline: data => dispatch(setFilterVariantClassGermline(data)),
    setFilterVariantClassSomatic: data => dispatch(setFilterVariantClassSomatic(data)),
    setFilterHotSpot: data => dispatch(setFilterHotSpot(data)),
    setFilterSnp: data => dispatch(setFilterSnp(data)),
    setFilterRoi: data => dispatch(setFilterRoi(data)),
    setFilterVaf: data => dispatch(setFilterVaf(data)),
    setFilterCancerDBs: data => dispatch(setFilterCancerDBs(data)),
    setFilterGnomId: data => dispatch(setFilterGnomId(data)),
    clearFilterSection: data => dispatch(clearFilterSection(data)),
    setDefaultFilters: data => dispatch(setDefaultFilters(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFilters);
