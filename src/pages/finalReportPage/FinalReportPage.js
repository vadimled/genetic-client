import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import style from "./FinalReportPage.module.scss";

import FinalReportActionableAlterations from './components/finalReportActionableAlterations';
import FinalReportUncertainClinicalSignificance from './components/finalReportUncertainClinicalSignificance';
import FinalReportGenomeWideFindings from './components/finalReportGenomeWideFindings';
import FinalReportSidebar from './components/finalReportSidebar';

import {
  fetchFinalReportVariants,
  fetchActionableAlterations,
  fetchUncertainClinicalSignificance,
} from "Actions/finalReportAction";
import {
  fetchTestMetadata
} from "Store/actions/testActions";
import {
  getMutationTypesValues,
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

  renderSection = () => {
    const {
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

          <div className="final-report-body-content">

            <div className="final-report-section">
              <div className="final-report-section-title">
                {FINAL_REPORT_NAVIGATION_LABELS[finalReportNavigationValue]}
              </div>
              {this.renderSection()}
            </div>

            <div className="final-report-sidebar">
              <FinalReportSidebar />
            </div>

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
    finalReportNavigationValue: getFinalReportNavigationValue(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    fetchFinalReportVariants: data => dispatch(fetchFinalReportVariants(data)),

    fetchUncertainClinicalSignificance: data => dispatch(fetchUncertainClinicalSignificance(data)),

    fetchActionableAlterations: data => dispatch(fetchActionableAlterations(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
