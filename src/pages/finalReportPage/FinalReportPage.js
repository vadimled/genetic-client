import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import style from "./FinalReportPage.module.scss";

import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import FinalReportClinicalTable from "./components/finalReportClinicalTable";
import ActionableDetailsContainer from "./components/finalReportActionableTable/components/actionableDetailsContainer";
import FinalReportToolBar from "./components/finalReportToolBar";
import SimpleButton from "GenericComponents/simpleButton";

import {
  handleSelectAllRows,
  handleSelectedRow,
  postAtionableAlterations,
  fetchFinalReportVariants,
  deleteActionableAlteration,
  removeClinicalSelectedRowFromStore,
  fetchActionableAlterations,
  fetchFinalReportClinicalData,
  setFinalReportNavigationStatus,
  setSelectedActionableAlterationId,
  setIsSelectVariants
} from "Actions/finalReportAction";
import {
  fetchTestMetadata
} from "Store/actions/testActions";
import {
  fetchTableData
} from "Store/actions/tableActions";
import {
  getMutationTypesValues,
  checkIsAllDnaRowsSelected,
  getActionableAlterations,
  getClinicalVariants,
  getDnaVariantsAsArray,
  getNavigationStatus,
  getSelectedActionableAlterationId,
  getIsSelectVariants,
  getSelectedVariants,
  getSelectedVariantsIds,
  getTestId
} from "Store/selectors";

import { NAV_STATUS } from "Utils/constants";

class FinalReportPage extends Component {
  constructor(props) {
    super(props);
    const {
      fetchActionableAlterations,
      fetchFinalReportClinical,
      fetchTestMetadata,
      mutationTypesValues,
      match: {
        params: { testId }
      }
    } = this.props;

    fetchTestMetadata(testId);
    fetchActionableAlterations(testId);
    fetchFinalReportClinical(testId);
    fetchFinalReportVariants({
      testId,
      mutation: mutationTypesValues[0]
    });
    this.state = {
      isMutationType: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mutationTypesValues.length > 0 && !state.isMutationType) {
      const { fetchFinalReportVariants, match, mutationTypesValues } = props;
      fetchFinalReportVariants({
        testId: match?.params?.testId,
        mutation: mutationTypesValues[0]
      });
      return { isMutationType: true };
    }
    return null;
  }

  handleDeleteActionableAlteration = val => {
    this.props.deleteActionableAlteration(val);
  };

  handleRemoveClinicalRow = val => {
    this.props.removeClinicalRow(val);
  };

  handlerSidebarActions = e => {
    this.props.setNavStatus(e.target.name);
  };

  handleSelectRow = id => {
    this.props.setSelectedActionableAlterationId(id);
  };

  handleIsSelectVariants = () => {
    this.props.setIsSelectVariants();
  };

  saveNewActionableAlterations = () => {
    const {
      selectedVariantsIds,
      postAtionableAlterations,
      mutationTypesValues,
      testId
    } = this.props;
    const data = {
      mutation: mutationTypesValues[0],
      testId,
      variants_ids: selectedVariantsIds
    };

    postAtionableAlterations(data);
  };

  renderUpperTable = () => {
    const {
      actionableAlterations,
      selectedClinicalData,
      navigationStatus,
      match: {
        params: { testId }
      }
    } = this.props;

    switch (navigationStatus) {
      case NAV_STATUS.alterations:
        return (
          <FinalReportActionableTable
            dataSource={actionableAlterations}
            handleSelectRow={this.handleSelectRow}
            testId={testId}
            remove={this.handleDeleteActionableAlteration}
          />
        );
      case NAV_STATUS.clinical:
        return (
          <FinalReportClinicalTable
            dataSource={selectedClinicalData}
            testId={testId}
            remove={this.handleRemoveClinicalRow}
          />
        );
    }
  };

  render() {
    const {
      isAllRowSelected,
      handleSelectAllRows,
      mutationTypesValues,
      handleSelectedRow,
      selectedVariants,
      selectedActionableAlterationId,
      isSelectVariants
    } = this.props;

    return (
      <div
        className={`${style["final-report-page-wrapper"]} flex justify-between`}
      >
        <div className="main-content">
          <div className="flex justify-start">
            <Link to="/">Back</Link>
          </div>

          <div className="final-report-upper-table">
            {this.renderUpperTable()}
          </div>

          {!isSelectVariants && (
            <div className="select-variants-wrapper">
              <SimpleButton
                className={"add-actionable-details-container-button-text"}
                onClick={this.handleIsSelectVariants}
                text={"Select variants"}
              />
            </div>
          )}
          {!selectedActionableAlterationId && isSelectVariants && (
            <div className="final-report-variants">
              <div className="flex justify-end">
                <FinalReportToolBar />
                <Button
                  className="moveToActionabilitiesBtn"
                  onClick={this.saveNewActionableAlterations}
                >
                  MOVE TO ACTIONABILITIES
                </Button>
              </div>

              <FinalReportVariantsTable
                selectedVariants={selectedVariants}
                isAllRowSelected={isAllRowSelected}
                handleSelectAllRows={handleSelectAllRows}
                mutationTypesValues={mutationTypesValues}
                handleSelectedRow={handleSelectedRow}
              />
            </div>
          )}
          {selectedActionableAlterationId &&
            <ActionableDetailsContainer />
          }
        </div>
        <div className="sidebar">
          <div className="sidebar-content-wrapper">
            <Button
              name={NAV_STATUS.alterations}
              type="primary"
              onClick={this.handlerSidebarActions}
            >
              Actionable alterations
            </Button>
            <Button
              name={NAV_STATUS.clinical}
              type="primary"
              onClick={this.handlerSidebarActions}
            >
              Uncertain clinical significance
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mutationTypesValues: getMutationTypesValues(state),
    isAllRowSelected: checkIsAllDnaRowsSelected(state),
    selectedVariants: getSelectedVariants(state),
    testId: getTestId(state),
    selectedVariantsIds: getSelectedVariantsIds(state),
    actionableAlterations: getActionableAlterations(state), // duplicate !!!
    selectedClinicalData: getClinicalVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state),
    selectedActionableAlterationId: getSelectedActionableAlterationId(state),
    navigationStatus: getNavigationStatus(state),
    isSelectVariants: getIsSelectVariants(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setSelectedActionableAlterationId: id => dispatch(setSelectedActionableAlterationId(id)),
    // removeSelectedTableRow: data => dispatch(removeSelectedTableRow(data)),
    fetchTableData: data => dispatch(fetchTableData(data)),
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    handleSelectedRow: data => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: data => dispatch(handleSelectAllRows(data)),
    postAtionableAlterations: data => dispatch(postAtionableAlterations(data)),
    fetchFinalReportVariants: data => dispatch(fetchFinalReportVariants(data)),
    deleteActionableAlteration: data => dispatch(deleteActionableAlteration(data)),
    removeClinicalRow: data => dispatch(removeClinicalSelectedRowFromStore(data)),
    fetchActionableAlterations: data => dispatch(fetchActionableAlterations(data)),
    fetchFinalReportClinical: data => dispatch(fetchFinalReportClinicalData(data)),
    setNavStatus: status => dispatch(setFinalReportNavigationStatus(status)),
    setIsSelectVariants: () => dispatch(setIsSelectVariants())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
