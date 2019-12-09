import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button, Input } from 'antd';
import Portal from 'GenericComponents/portal';

import styles from './SetTestPhenotype.module.scss';

import {
  saveTestPhenotype
} from "Actions/testActions";

const SetTestPhenotype = ({ saveTestPhenotype, testId }) => {
  const [phenotype, setPhenotype] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    saveTestPhenotype({ testId, phenotype });
  };

  const onCancel = () => {

  };

  return (
    <Portal>
      <div className={styles['set-test-phenotype']}>
        <div className="set-test-phenotype-title">Provide Phenotype please</div>
        <div className="set-test-phenotype-text">
          You can not proceed working with Variants Table if Phenotype value is empty. Please fill it.
        </div>
        <form onSubmit={onSubmit} className="set-test-phenotype-form">
          <div className="set-test-phenotype-input-row">
            <Input
              onChange={(e) => setPhenotype(e.target.value)}
              className={"set-test-phenotype-input"}
              required
            />
          </div>
          <div className="set-test-phenotype-btns">
            <Button
              className="set-test-phenotype-btn"
              type="primary" htmlType="submit"
              disabled={!phenotype}
            >
              Save
            </Button>
            <Link
              to="/"
              className="set-test-phenotype-btn set-test-phenotype-btn--link"
              onClick={onCancel}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Portal>
  );
};

SetTestPhenotype.propTypes = {
  saveTestPhenotype: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired
};

SetTestPhenotype.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
  return {
    saveTestPhenotype: (data) => dispatch(saveTestPhenotype(data)),
  };
};

const mapStateToProps = () => {
  return {
    // data: getConfirmationData(state),
    // testId: getTestId(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(SetTestPhenotype));
