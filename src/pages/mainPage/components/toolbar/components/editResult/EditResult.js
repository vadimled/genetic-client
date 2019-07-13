import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './EditResult.module.scss';
import {
  handleResultConfigIsOpen,
  handleResultConfigVaf,
  handleResultConfigCoverage
} from 'Actions/resultConfigActions';

const EditResult = ({
  handleResultConfigIsOpen,
  selectedResult
}) => {
  return (
    <div className={cn(
      "toolbar-btn-wrapper",
      style["edit-result-btn"]
    )}>
      <Button
        onClick={handleResultConfigIsOpen.bind(null, true, selectedResult)}
        data-testid="edit-result-btn"
      >
        <div className="btn-icon"/>
        Edit result
      </Button>
    </div>
  );
};

EditResult.propTypes = {
  handleResultConfigIsOpen: PropTypes.func.isRequired,
  selectedResult: PropTypes.object
};
EditResult.defaultProps = {
  selectedResult: null
};

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    handleResultConfigIsOpen: (data, selectedResult) => {
      if (selectedResult) {
        dispatch(handleResultConfigVaf(selectedResult.vaf));
        dispatch(handleResultConfigCoverage(selectedResult.coverage));
      }
      dispatch(handleResultConfigIsOpen(data));
    },
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditResult)
);
