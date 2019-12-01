import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import cn from 'classnames';

import {
  setFinalReportNavigationValue,
} from "Actions/finalReportAction";
import {
  getFinalReportNavigationValue,
} from "Store/selectors";
import { FINAL_REPORT_NAVIGATION_VALUES, FINAL_REPORT_NAVIGATION_LABELS } from "Utils/constants";

import style from './FinalReportSidebar.module.scss';

const FinalReportSidebar = ({ finalReportNavigationValue, setFinalReportNavigationValue }) => {

  return (
    <div className={style["final-report-sidebar"]}>
      <div
        className={cn(style["section"], {
          [style["section-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations
        })}
        onClick={() => setFinalReportNavigationValue(FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations)}
      >
        <div className={style["step-label"]}>
          Step 1
        </div>
        <div className={cn(style["section-title"], {
          [style["section-title-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations
        })}>
          {FINAL_REPORT_NAVIGATION_LABELS.actionableAlterations}
        </div>
      </div>

      <div
        className={cn(style["section"], {
          [style["section-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.uncertainClinicalSignificance
        })}
        onClick={() => setFinalReportNavigationValue(FINAL_REPORT_NAVIGATION_VALUES.uncertainClinicalSignificance)}
      >
        <div className={style["step-label"]}>
          Step 2
        </div>
        <div className={cn(style["section-title"], {
          [style["section-title-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.uncertainClinicalSignificance
        })}>
          {FINAL_REPORT_NAVIGATION_LABELS.uncertainClinicalSignificance}
        </div>
      </div>

      <div
        className={cn(style["section"], {
          [style["section-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.genomeWideFindings
        })}
        onClick={() => setFinalReportNavigationValue(FINAL_REPORT_NAVIGATION_VALUES.genomeWideFindings)}
      >
        <div className={style["step-label"]}>
          Step 3
        </div>
        <div className={cn(style["section-title"], {
          [style["section-title-selected"]]: finalReportNavigationValue === FINAL_REPORT_NAVIGATION_VALUES.genomeWideFindings
        })}>
          {FINAL_REPORT_NAVIGATION_LABELS.genomeWideFindings}
        </div>
      </div>

    </div>
  );
};

FinalReportSidebar.propTypes = {
  finalReportNavigationValue: PropTypes.string,
  setFinalReportNavigationValue: PropTypes.func.isRequired,
};
FinalReportSidebar.defaultProps = {
  finalReportNavigationValue: FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations,
};

const mapStateToProps = (state) => {
  return {
    finalReportNavigationValue: getFinalReportNavigationValue(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setFinalReportNavigationValue: status => dispatch(setFinalReportNavigationValue(status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(FinalReportSidebar));
