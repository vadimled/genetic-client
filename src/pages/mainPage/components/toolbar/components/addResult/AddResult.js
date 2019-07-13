import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './AddResult.module.scss';
import {
  handleResultConfigIsOpen,
  handleResultConfigVaf,
  handleResultConfigCoverage
} from 'Actions/resultConfigActions';

const AddResult = ({
  handleResultConfigIsOpen,
  selectedResult
}) => {
  return (
    <div className={cn(
      "toolbar-btn-wrapper",
      style["add-result-btn"]
    )}>
      <Button
        onClick={handleResultConfigIsOpen.bind(null, selectedResult)}
        data-testid="add-result-btn"
      >
        <div className="btn-icon"/>
        Add result
      </Button>
    </div>
  );
};

AddResult.propTypes = {
  handleResultConfigIsOpen: PropTypes.func.isRequired,
  selectedResult: PropTypes.object
};
AddResult.defaultProps = {
  selectedResult: null
};

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    handleResultConfigIsOpen: (selectedResult) => {
      if (selectedResult) {
        dispatch(handleResultConfigVaf(selectedResult.vaf));
        dispatch(handleResultConfigCoverage(selectedResult.coverage));
      }
      dispatch(handleResultConfigIsOpen(true));
    },
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddResult)
);
