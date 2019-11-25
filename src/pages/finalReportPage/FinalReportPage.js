import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import style from "./FinalReportPage.module.scss";

import FinalReportActionableAlterations from './components/finalReportActionableAlterations';
import FinalReportClinicalTable from "./components/finalReportClinicalTable";

import {
  fetchFinalReportVariants,
  fetchActionableAlterations,
  fetchFinalReportClinicalData,
  setFinalReportNavigationValue,
  removeClinicalSelectedRowFromStore,
} from "Actions/finalReportAction";
import {
  fetchTestMetadata
} from "Store/actions/testActions";
import {
  getMutationTypesValues,
  getClinicalVariants,
  getDnaVariantsAsArray,
  getFinalReportNavigationValue,
  getTestId
} from "Store/selectors";

import { FINAL_REPORT_NAVIGATION_VALUES } from "Utils/constants";

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

  handleRemoveClinicalRow = val => {
    this.props.removeClinicalRow(val);
  };

  handlerSidebarActions = e => {
    this.props.setFinalReportNavigationValue(e.target.name);
  };

  renderUpperTable = () => {
    const {
      selectedClinicalData,
      finalReportNavigationValue,
      match: {
        params: { testId }
      }
    } = this.props;

    switch (finalReportNavigationValue) {
      case FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations:
        return (
          <FinalReportActionableAlterations
            testId={testId}
          />
        );
      case FINAL_REPORT_NAVIGATION_VALUES.uncertainClinicalSignificance:
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

        </div>
        <div className="sidebar">
          <div className="sidebar-content-wrapper">
            <Button
              name={FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations}
              type="primary"
              onClick={this.handlerSidebarActions}
            >
              Actionable alterations
            </Button>
            <Button
              name={FINAL_REPORT_NAVIGATION_VALUES.uncertainClinicalSignificance}
              type="primary"
              onClick={this.handlerSidebarActions}
            >
              Uncertain clinical significance
            </Button>
            <Button
              name={FINAL_REPORT_NAVIGATION_VALUES.genomeWideFindings}
              type="primary"
              onClick={this.handlerSidebarActions}
            >
              Genome-wide findings
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
    testId: getTestId(state),
    selectedClinicalData: getClinicalVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state),
    finalReportNavigationValue: getFinalReportNavigationValue(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    fetchFinalReportVariants: data => dispatch(fetchFinalReportVariants(data)),

    fetchFinalReportClinical: data => dispatch(fetchFinalReportClinicalData(data)),
    removeClinicalRow: data => dispatch(removeClinicalSelectedRowFromStore(data)),

    fetchActionableAlterations: data => dispatch(fetchActionableAlterations(data)),

    setFinalReportNavigationValue: status => dispatch(setFinalReportNavigationValue(status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
