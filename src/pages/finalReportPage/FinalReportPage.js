import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import {
  getActionableVariants,
  getClinicalVariants,
  getDnaVariantsAsArray,
  getNavigationStatus,
  getSelectedUpperTableRowObject
} from "Store/selectors";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import { Button } from "antd";
import { fetchTestMetadata } from "Store/actions/testActions";
import {
  handleSelectAllRows,
  handleSelectedRow,
  moveToActionableTable,
  fetchFinalReportVariants,
  removeActionableSelectedRowFromStore,
  removeClinicalSelectedRowFromStore,
  fetchFinalReportActionableData,
  fetchFinalReportClinicalData,
  setFinalReportNavigationStatus,
  setSelectedUpperTableRowObject
} from "Actions/finalReportAction";
import { fetchTableData } from "Store/actions/tableActions";
import {
  getMutationTypesValues,
  checkIsAllDnaRowsSelected
} from "Store/selectors";
import {
  getSelectedVariants,
  getSelectedVariantsIds,
  getTestId
} from "../../store/selectors";
import { NAV_STATUS } from "Utils/constants";
import FinalReportClinicalTable from "./components/finalReportClinicalTable";
// import ActionableDetailsContainer from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsContainer";
import FinalReportToolBar from "./components/finalReportToolBar";

class FinalReportPage extends Component {
  constructor(props) {
    super(props);
    const {
      fetchFinalReportActionable,
      fetchFinalReportClinical,
      fetchTestMetadata,
      mutationTypesValues,
      match: {
        params: { testId }
      }
    } = this.props;

    fetchTestMetadata(testId);
    fetchFinalReportActionable(testId);
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
  handleRemoveActionableRow = val => {
    this.props.removeActionableRow(val);
  };

  handleRemoveClinicalRow = val => {
    this.props.removeClinicalRow(val);
  };

  handlerSidebarActions = e => {
    this.props.setNavStatus(e.target.name);
  };

  handleSelectRow = obj => {
    this.props.setSelectedUpperTableRowObject(obj);
  };

  // handleRemoveSelectedTableRow = val => {
  //   console.log(val);
  //   this.props.removeSelectedTableRow(val);
  // };
  //
  moveToActionabilities = () => {
    const {
      selectedVariantsIds,
      moveToActionableTable,
      mutationTypesValues,
      testId
    } = this.props;
    const data = {
      mutation: mutationTypesValues[0],
      testId,
      variants_ids: selectedVariantsIds
    };

    moveToActionableTable(data);
  };

  renderUpperTable = () => {
    const {
      selectedActionableData,
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
            dataSource={selectedActionableData}
            handleSelectRow={this.handleSelectRow}
            testId={testId}
            remove={this.handleRemoveActionableRow}
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
      selectedUpperTableRowObject
    } = this.props;
    // console.log(selectedUpperTableRowObject);
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

          {!selectedUpperTableRowObject && (
            <div className="final-report-variants">
              <div className="flex justify-end">
                <FinalReportToolBar />
                <Button
                  className="moveToActionabilitiesBtn"
                  onClick={this.moveToActionabilities}
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
          ) /* : (
            <ActionableDetailsContainer />
          )*/}
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
    selectedData: getActionableVariants(state),
    mutationTypesValues: getMutationTypesValues(state),
    isAllRowSelected: checkIsAllDnaRowsSelected(state),
    selectedVariants: getSelectedVariants(state),
    testId: getTestId(state),
    selectedVariantsIds: getSelectedVariantsIds(state),
    selectedActionableData: getActionableVariants(state),
    selectedClinicalData: getClinicalVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state),
    selectedUpperTableRowObject: getSelectedUpperTableRowObject(state),
    navigationStatus: getNavigationStatus(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setSelectedUpperTableRowObject: data =>
      dispatch(setSelectedUpperTableRowObject(data)),
    // removeSelectedTableRow: data => dispatch(removeSelectedTableRow(data)),
    fetchTableData: data => dispatch(fetchTableData(data)),
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    handleSelectedRow: data => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: data => dispatch(handleSelectAllRows(data)),
    moveToActionableTable: data => dispatch(moveToActionableTable(data)),
    fetchFinalReportVariants: data => dispatch(fetchFinalReportVariants(data)),
    removeActionableRow: data =>
      dispatch(removeActionableSelectedRowFromStore(data)),
    removeClinicalRow: data =>
      dispatch(removeClinicalSelectedRowFromStore(data)),
    fetchFinalReportActionable: data =>
      dispatch(fetchFinalReportActionableData(data)),
    fetchFinalReportClinical: data =>
      dispatch(fetchFinalReportClinicalData(data)),
    setNavStatus: status => dispatch(setFinalReportNavigationStatus(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
