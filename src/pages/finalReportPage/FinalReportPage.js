import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import { getActionableVariants, getDnaVariantsAsArray } from "Store/selectors";
import {
  removeSelectedTableRow,
  fetchFinalReport,
  setFinalReportNavigationStatus
} from "Actions/finalReportAction";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import { Button } from "antd";
import { NAV_STATUS } from "../../utils/constants";

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

  handleRemoveSelectedTableRow = val => {
    this.props.removeSelectedTableRow(val);
  };

  handlerSidebarActions = e => {
    this.props.setNavStatus(e.target.name);
  };

  render() {
    const {
      selectedData,
      filteredDnaVariants,
      match: {
        params: { testId }
      }
    } = this.props;

    return (
      <div
        className={`${style["final-report-page-wrapper"]} flex justify-between`}
      >
        <div className="main-content">
          <div className="flex justify-start">
            <Link to="/">Back</Link>
          </div>
          <div className="final-report-actionable">
            <FinalReportActionableTable
              dataSource={selectedData}
              testId={testId}
              remove={this.handleRemoveSelectedTableRow}
            />
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
    selectedData: getActionableVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeSelectedTableRow: data => dispatch(removeSelectedTableRow(data)),
    fetchFinalReport: data => dispatch(fetchFinalReport(data)),
    setNavStatus: status => dispatch(setFinalReportNavigationStatus(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
