import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";

import style from "./Toolbar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/singleTestPage/components/numberVariants";
import IgvLoadBAM from "./components/IgvLoadBAM";
import AddResult from "./components/addResult";
import EditResult from "./components/editResult";
import Search from "./components/search";
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
import Sort from "./components/Sort";
import { setDefaultFilters, saveUserPreferencesFilters } from "Store/actions/filtersActions";
import { getTestId, getTestType } from "Store/selectors";
import Filter from "./components/Filter";
import { setSort, saveUserPreferencesSorting, exportTable } from "Store/actions/tableActions";
import ExportButton from "./components/exportButton/ExportButton";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.isMVP = process.env.REACT_APP_MVP_CONFIG === "true";
  }

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

  handleExportTable = () => {
    const { testId, exportTable } = this.props;
    exportTable(testId);
  };

  handleSort = (data) => {
    const { setSort, saveUserPreferencesSorting, testId } = this.props;
    setSort(data);
    saveUserPreferencesSorting({ testId, sorting: data });
  };

  onSetDefaultFilters = (data) => {
    const { setDefaultFilters, saveUserPreferencesFilters, testId } = this.props;
    setDefaultFilters(data);
    saveUserPreferencesFilters({ testId, filters: data });
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      selectedMutation,
      selectedRows,
      selectedIsAddedRows,
      openConfirmationPopup,
      testType,
      showFilter,
      showSort,
      showLoadBam,
      showExportButton,
      showAddResult
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        {
          // !!selectedRows?.length &&
          // <button
          //   className={cn(["confirmation-button", { "sidebar-open": sidebarToggle }])}
          //   onClick={openConfirmationPopup.bind(null, selectedRows)}
          //   data-testid="confirmation-button"
          // >
          //   Send for confirmation
          // </button>
        }
        <Fragment>
          <div className="left-wrapper">
            {this.isMVP
              ? null
              : !selectedRows?.length && (
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
              <Fragment>
                <div className="toolbar-divider-line" />
                {
                  showFilter &&
                  <Filter
                    setDefaultFilters={this.onSetDefaultFilters}
                    testType={testType}
                  />
                }


                {
                  showSort &&
                  <Fragment>
                    <div className="toolbar-divider-line" />
                    <Sort setSort={this.handleSort} />
                  </Fragment>

                }


                {
                  showLoadBam &&
                  <Fragment>
                    <div className="toolbar-divider-line" />
                    <IgvLoadBAM />
                  </Fragment>

                }


                {
                  showExportButton &&
                  <Fragment>
                    <div className="toolbar-divider-line" />
                    <ExportButton exportTable={this.handleExportTable} />
                  </Fragment>

                }


              </Fragment>
            )}

            {!this.isMVP && showAddResult &&
              (!selectedRows?.length || selectedRows?.length === 1) &&
              !selectedIsAddedRows?.length && (
              <Fragment>
                <AddResult selectedResult={selectedRows[0]} />
                <div className="toolbar-divider-line" />
              </Fragment>
            )}

            {!this.isMVP &&
              !!selectedIsAddedRows?.length &&
              selectedIsAddedRows?.length === 1 &&
              selectedRows?.length === 1 && (
              <Fragment>
                <EditResult selectedResult={selectedIsAddedRows[0]} />
                <div className="toolbar-divider-line" />
              </Fragment>
            )}

            {!!selectedRows?.length && (
              <Fragment>
                <button
                  className={cn([
                    "confirmation-button",
                    { "sidebar-open": sidebarToggle }
                  ])}
                  onClick={openConfirmationPopup.bind(null, selectedRows)}
                  data-testid="confirmation-button"
                  disabled={this.isMVP}
                >
                  Send for confirmation
                </button>
                <div className="toolbar-divider-line" />
              </Fragment>
            )}

            {!selectedRows?.length && (
              <NumberVariants filtered={filtered} total={total} />
            )}
          </div>
        </Fragment>
      </div>
    );
  }
}

Toolbar.propTypes = {
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
)(Toolbar);
