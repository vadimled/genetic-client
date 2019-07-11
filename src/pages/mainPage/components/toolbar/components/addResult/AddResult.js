import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './AddResult.module.scss';
import {
  handleResultConfigIsOpen
} from 'Actions/resultConfigActions';

const AddResult = ({
  handleResultConfigIsOpen
}) => {

  return (
    <div className={cn(
      "toolbar-btn-wrapper",
      style["add-result-btn"]
    )}>
      <Button
        onClick={handleResultConfigIsOpen.bind(null, true)}
        data-testid="add-result-btn"
      >
        <div className="btn-icon"/>
        Add result
      </Button>
    </div>
  );
};

AddResult.propTypes = {
  handleResultConfigIsOpen: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    handleResultConfigIsOpen: data => dispatch(handleResultConfigIsOpen(data)),
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddResult)
);
