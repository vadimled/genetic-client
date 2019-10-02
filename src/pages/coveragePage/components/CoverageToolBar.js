import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./CoverageToolbar.module.scss";
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
import { Button } from "antd";

class CoverageToolBar extends Component {
  constructor(props) {
    super(props);
    this.isMVP = process.env.REACT_APP_MVP_CONFIG === "true";
  }


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
      sidebarToggle,
      selectedRows,
      openConfirmationPopup,
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        <Fragment>


          <div
            className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
          >
            {!selectedRows?.length && (
              <Fragment>
                <div className="toolbar-divider-line" />
                <Button type="primary">Accept</Button>
                <div className="toolbar-divider-line" />
                <Button type="primary">Deny</Button>
                <div className="toolbar-divider-line" />
                <Button type="primary">Send for sequencing</Button>
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


          </div>
        </Fragment>
      </div>
    );
  }
}

CoverageToolBar.propTypes = {
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
)(CoverageToolBar);
