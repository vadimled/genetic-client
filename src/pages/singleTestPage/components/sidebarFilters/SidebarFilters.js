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
  getFilterZygosity,
  getFilterEffect
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
  setDefaultFilters,
  setFilterZygosity,
  setFilterEffect,
  saveUserPreferencesFilters
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

  state = {
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

  getValueAccordingOnMode = (stateValue, value, mode) => {
    let newValue;

    if (mode === "multiple") {
      newValue = stateValue.slice();

      // push or remove value
      const index = newValue.indexOf(value);
      if (index === -1) {
        newValue.push(value);
      }
      else {
        newValue.splice(index, 1);
      }

      return newValue;
    }
    else if (mode === "single") {
      newValue = value;

      // reset if clicked the same
      if (newValue === stateValue) newValue = null;

      return newValue;
    }

    return value;
  };

  onChange = (filterSection, mode, value) => {
    const {
      setFilterVariantClassGermline,
      setFilterVariantClassSomatic,
      setFilterHotSpot,
      setFilterSnp,
      setFilterRoi,
      setFilterVaf,
      setFilterCancerDBs,
      setFilterGnomId,
      setFilterZygosity,
      setFilterEffect,
      filters,
      saveUserPreferencesFilters
    } = this.props;

    switch (filterSection) {
      case FILTERS.variantClassGermline: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.variantClassGermline], value, mode);
        setFilterVariantClassGermline(savedValue);
        saveUserPreferencesFilters({ [FILTERS.variantClassGermline]: savedValue });
        break;
      }
      case FILTERS.variantClassSomatic: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.variantClassSomatic], value, mode);
        setFilterVariantClassSomatic(savedValue);
        saveUserPreferencesFilters({ [FILTERS.variantClassSomatic]: savedValue });
        break;
      }
      case FILTERS.hotSpot: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.hotSpot], value, mode);
        setFilterHotSpot(savedValue);
        saveUserPreferencesFilters({ [FILTERS.hotSpot]: savedValue });
        break;
      }
      case FILTERS.snp: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.snp], value, mode);
        setFilterSnp(savedValue);
        saveUserPreferencesFilters({ [FILTERS.snp]: savedValue });
        break;
      }
      case FILTERS.roi: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.roi], value, mode);
        setFilterRoi(savedValue);
        saveUserPreferencesFilters({ [FILTERS.roi]: savedValue });
        break;
      }
      case FILTERS.vaf: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.vaf], value, mode);
        setFilterVaf(savedValue);
        saveUserPreferencesFilters({ [FILTERS.vaf]: savedValue });
        break;
      }
      case FILTERS.cancerDBs: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.cancerDBs], value, mode);
        setFilterCancerDBs(savedValue);
        saveUserPreferencesFilters({ [FILTERS.cancerDBs]: savedValue });
        break;
      }
      case FILTERS.gnomAD: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.gnomAD], value, mode);
        setFilterGnomId(savedValue);
        saveUserPreferencesFilters({ [FILTERS.gnomAD]: savedValue });
        break;
      }
      case FILTERS.zygosity: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.zygosity], value, mode);
        setFilterZygosity(savedValue);
        saveUserPreferencesFilters({ [FILTERS.zygosity]: savedValue });
        break;
      }
      case FILTERS.effect: {
        const savedValue = this.getValueAccordingOnMode(filters[FILTERS.effect], value, mode);
        setFilterEffect(savedValue);
        saveUserPreferencesFilters({ [FILTERS.effect]: savedValue });
        break;
      }
    }
  };

  filtersConfigConverter = initFilters => {
    return {
      [FILTERS.zygosity]: initFilters[FILTERS.zygosity],

      ["variantClass"]: {
        title: "Variant class",
        type: ["somatic"],
        children: {
          [FILTERS.variantClassGermline]: initFilters[FILTERS.variantClassGermline],
          [FILTERS.variantClassSomatic]: initFilters[FILTERS.variantClassSomatic],
        }
      },
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
      [FILTERS.gnomAD]: initFilters[FILTERS.gnomAD],
      [FILTERS.effect]: initFilters[FILTERS.effect]
    };
  };

  clearFilterSection = filterSection => {
    const { clearFilterSection, saveUserPreferencesFilters } = this.props;

    clearFilterSection({ filtersKey: filterSection });

    if (filterSection === FILTERS.searchText) {
      saveUserPreferencesFilters({ [FILTERS.searchText]: "" });
    } else {
      saveUserPreferencesFilters({ [filterSection]: [] });
    }
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
          defaultActiveKey={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
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
      [FILTERS.zygosity]: getFilterZygosity(state),
      [FILTERS.effect]: getFilterEffect(state)
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
    setDefaultFilters: data => dispatch(setDefaultFilters(data)),
    setFilterZygosity: data => dispatch(setFilterZygosity(data)),
    setFilterEffect: data => dispatch(setFilterEffect(data)),
    saveUserPreferencesFilters: data => dispatch(saveUserPreferencesFilters(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFilters);
