import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import style from "./FinalReportPage.module.scss";

import FinalReportActionableAlterations from './components/finalReportActionableAlterations';
import FinalReportUncertainClinicalSignificance from './components/finalReportUncertainClinicalSignificance';
import FinalReportGenomeWideFindings from './components/finalReportGenomeWideFindings';

import {
  fetchFinalReportVariants,
  fetchActionableAlterations,
  fetchUncertainClinicalSignificance,
  setFinalReportNavigationValue,
} from "Actions/finalReportAction";
import {
  fetchTestMetadata
} from "Store/actions/testActions";
import {
  getMutationTypesValues,
  getDnaVariantsAsArray,
  getFinalReportNavigationValue,
  getTestId
} from "Store/selectors";

import { FINAL_REPORT_NAVIGATION_VALUES, FINAL_REPORT_NAVIGATION_LABELS } from "Utils/constants";

class FinalReportPage extends Component {
  constructor(props) {
    super(props);
    const {
      fetchActionableAlterations,
      fetchUncertainClinicalSignificance,
      fetchTestMetadata,
      mutationTypesValues,
      match: {
        params: { testId }
      }
    } = this.props;

    fetchTestMetadata(testId);
    fetchActionableAlterations(testId);
    fetchUncertainClinicalSignificance(testId);
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

  renderSection = () => {
    const {
      // selectedClinicalData,
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
          <FinalReportUncertainClinicalSignificance
            testId={testId}
          />
        );
      case FINAL_REPORT_NAVIGATION_VALUES.genomeWideFindings:
        return (
          <FinalReportGenomeWideFindings />
        );
    }
  };

  render() {
    const { finalReportNavigationValue } = this.props;

    return (
      <div
        className={`${style["final-report-page-wrapper"]}`}
      >
        <div className="final-report-main-content">
          <div className="final-report-header">
            <Link
              to="/"
              className="final-report-back-link"
            >
              &lt; Back
            </Link>
            <h1 className="final-report-main-title">Final report</h1>
          </div>

          <div className="final-report-section">
            <div className="final-report-section-title">
              {FINAL_REPORT_NAVIGATION_LABELS[finalReportNavigationValue]}
            </div>
            {this.renderSection()}
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
    filteredDnaVariants: getDnaVariantsAsArray(state),
    finalReportNavigationValue: getFinalReportNavigationValue(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    fetchFinalReportVariants: data => dispatch(fetchFinalReportVariants(data)),

    fetchUncertainClinicalSignificance: data => dispatch(fetchUncertainClinicalSignificance(data)),

    fetchActionableAlterations: data => dispatch(fetchActionableAlterations(data)),

    setFinalReportNavigationValue: status => dispatch(setFinalReportNavigationValue(status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
