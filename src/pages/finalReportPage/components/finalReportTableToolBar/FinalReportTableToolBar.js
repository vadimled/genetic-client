import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";
import Search from "GenericComponents/search";
import style from "./FinalReportTableToolBar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/singleTestPage/components/numberVariants";

import { setMutationType } from "Actions/variantsActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import {
  getFilteredEntriesAmount,
  getSelectedMutationType,
  getSelectedRows,
  getSelectedIsAddedRows,
  getTotalEntriesAmount,
  getMutationTypesValues
} from "Store/selectors";
import { setDefaultFilters, saveUserPreferencesFilters } from "Store/actions/filtersActions";
import { getTestId, getTestType } from "Store/selectors";
import { setSort, saveUserPreferencesSorting, exportTable } from "Store/actions/tableActions";

class FinalReportTableToolBar extends Component {

  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };

  createMutationOptions = labels => {
    return this.props.getMutationTypesValues.map(type => {
      switch (type) {
        case "dna":
          return { value: type, label: labels.dna };
        case "rna":
          return { value: type, label: labels.rna };
        case "agena":
          return { value: type, label: labels.agena };
      }
    });
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      selectedMutation,
      selectedRows,
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        <Fragment>
          <div className="left-wrapper">
            {selectedRows?.length && (
              <div className="mutation-select-wrapper">
                <SimpleSelect
                  options={this.createMutationOptions(MUTATION)}
                  onChange={this.handleOnChange}
                  name="mutation"
                  value={selectedMutation}
                />
              </div>
            )}
            <div
              className={cn([
                "search-field-wrapper flex items-center",
                { "sidebar-open": sidebarToggle }
              ])}
            >
              {!selectedRows?.length && <Search />}
            </div>
          </div>

          <div
            className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
          >
            {!selectedRows?.length && (
              <NumberVariants filtered={filtered} total={total} />
            )}
          </div>
        </Fragment>
      </div>
    );
  }
}

FinalReportTableToolBar.propTypes = {
  filtered: PropTypes.number,
  total: PropTypes.number,
  selectedMutation: PropTypes.string,
  sidebarToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    filtered: getFilteredEntriesAmount(state),
    total: getTotalEntriesAmount(state),
    selectedMutation: getSelectedMutationType(state),
    selectedRows: getSelectedRows(state),
    selectedIsAddedRows: getSelectedIsAddedRows(state),
    getMutationTypesValues: getMutationTypesValues(state),
    testId: getTestId(state),
    testType: getTestType(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    openConfirmationPopup: data => {
      dispatch(handleOnConfirmation(true));
      dispatch(setConfirmationData(data));
    },
    setDefaultFilters: data => dispatch(setDefaultFilters(data)),
    setSort: data => dispatch(setSort(data)),
    saveUserPreferencesSorting: data => dispatch(saveUserPreferencesSorting(data)),
    saveUserPreferencesFilters: data => dispatch(saveUserPreferencesFilters(data)),
    exportTable: data => dispatch(exportTable(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportTableToolBar);
