import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import {
  getActionableVariants,
  getClinicalVariants,
  getDnaVariantsAsArray,
  getNavigationStatus
} from "Store/selectors";
import {
  removeActionableSelectedRowFromStore,
  fetchFinalReport,
  setFinalReportNavigationStatus
} from "Actions/finalReportAction";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import { Button } from "antd";
import { NAV_STATUS } from "Utils/constants";
import FinalReportClinicalTable from "./components/finalReportClinicalTable";

class FinalReportPage extends Component {
  constructor(props) {
    super(props);
    const {
      fetchFinalReport,
      match: {
        params: { testId }
      }
    } = this.props;
    fetchFinalReport(testId);
  }

  handleRemoveActionableRow = val => {
    this.props.removeActionableRow(val);
  };

  handlerSidebarActions = e => {
    this.props.setNavStatus(e.target.name);
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
            testId={testId}
            remove={this.handleRemoveActionableRow}
          />
        );
      case NAV_STATUS.clinical:
        return (
          <FinalReportClinicalTable
            dataSource={selectedClinicalData}
            testId={testId}
            remove={this.handleRemoveActionableRow}
          />
        );
    }
  };

  render() {
    const { filteredDnaVariants } = this.props;

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

          <div className="final-report-variants">
            <div className="flex justify-end">
              <Button>MOVE TO ACTIONABILITIES</Button>
            </div>
            <FinalReportVariantsTable
              filteredDnaVariants={filteredDnaVariants}
            />
          </div>
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
    selectedActionableData: getActionableVariants(state),
    selectedClinicalData: getClinicalVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state),
    navigationStatus: getNavigationStatus(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeActionableRow: data => dispatch(removeActionableSelectedRowFromStore(data)),
    fetchFinalReport: data => dispatch(fetchFinalReport(data)),
    setNavStatus: status => dispatch(setFinalReportNavigationStatus(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
