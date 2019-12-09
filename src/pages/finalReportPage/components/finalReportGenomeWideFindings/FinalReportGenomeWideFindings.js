import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import style from './FinalReportGenomeWideFindings.module.scss';

import {
  getTestTmbMutationPerMillion,
  getTestTmbResult,
  getTestMsiNumberOfSomaticSites,
  getTestMsiPercentage,
  getTestMsiTotalNumberOfSites,
} from 'Store/selectors';
import {
  TEST_MSI_PERCENTAGE_VALUES
} from 'Utils/constants';

const FinalReportGenomeWideFindings = (props) => {

  const {
    testTmbMutationPerMillion,
    testTmbResult,
    testMsiNumberOfSomaticSites,
    testMsiPercentage,
    testMsiTotalNumberOfSites,
  } = props;

  return (
    <div className={style["final-report-genome-wide-findings"]}>
      <div className={style["main-content"]}>
        <div className={style["main-content-row"]}>
          <div className={style["main-content-row-label"]}>
            Tumor mutation Burden (TMB)
          </div>
          <div className={style["main-content-row-value"]}>
            {testTmbResult} ({testTmbMutationPerMillion} variants/Mb)
          </div>
        </div>
        <div className={style["main-content-row"]}>
          <div className={style["main-content-row-label"]}>
            Microsatellite instability (MSI) status
          </div>
          <div className={style["main-content-row-value"]}>
            {testMsiPercentage > 10
              ? TEST_MSI_PERCENTAGE_VALUES.HIGH
              : TEST_MSI_PERCENTAGE_VALUES.NORMAL
            } ({testMsiNumberOfSomaticSites} somatic sites/{testMsiTotalNumberOfSites} covered sites)
          </div>
        </div>
      </div>
    </div>
  );
};

FinalReportGenomeWideFindings.propTypes = {
  testTmbMutationPerMillion: PropTypes.number,
  testTmbResult: PropTypes.string,
  testMsiNumberOfSomaticSites: PropTypes.number,
  testMsiPercentage: PropTypes.number,
  testMsiTotalNumberOfSites: PropTypes.number,
};
FinalReportGenomeWideFindings.defaultProps = {
  testTmbMutationPerMillion: null,
  testTmbResult: null,
  testMsiNumberOfSomaticSites: null,
  testMsiPercentage: null,
  testMsiTotalNumberOfSites: null,
};

const mapStateToProps = (state) => {
  return {
    testTmbMutationPerMillion: getTestTmbMutationPerMillion(state),
    testTmbResult: getTestTmbResult(state),
    testMsiNumberOfSomaticSites: getTestMsiNumberOfSomaticSites(state),
    testMsiPercentage: getTestMsiPercentage(state),
    testMsiTotalNumberOfSites: getTestMsiTotalNumberOfSites(state),
  };
};

function mapDispatchToProps() {
  return {};
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportGenomeWideFindings);
