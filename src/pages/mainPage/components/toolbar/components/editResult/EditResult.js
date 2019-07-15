import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './EditResult.module.scss';
import {
  handleResultConfigIsOpen,
  // handleResultConfigIsHgvsLoaded,
  handleResultConfigIsOnEdit,
  handleResultConfigVaf,
  handleResultConfigCoverage,
  handleResultConfigGene,
  handleResultConfigChromosome,
  handleResultConfigPosition,
  handleResultConfigAlleleType,
  handleResultConfigAlleleReference,
  handleResultConfigAlleleAlternative,
  handleResultConfigCoding,
  handleResultConfigProtein,
  resultConfigSetId
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
        onClick={handleResultConfigIsOpen.bind(null, selectedResult)}
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
  selectedResult: PropTypes.object.isRequired
};

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    handleResultConfigIsOpen: (selectedResult) => {
      dispatch(handleResultConfigVaf(selectedResult.vaf));
      dispatch(handleResultConfigCoverage(selectedResult.coverage));
      dispatch(handleResultConfigGene(selectedResult.gene));
      dispatch(handleResultConfigChromosome(selectedResult.chromosome));
      dispatch(handleResultConfigPosition(selectedResult.position));
      dispatch(handleResultConfigAlleleType(selectedResult.alleleType));
      dispatch(handleResultConfigAlleleReference(selectedResult.alleleReference));
      dispatch(handleResultConfigAlleleAlternative(selectedResult.alleleAlternative));
      dispatch(handleResultConfigCoding(selectedResult.coding));
      dispatch(handleResultConfigProtein(selectedResult.protein));
      // dispatch(handleResultConfigIsHgvsLoaded(true));
      dispatch(handleResultConfigIsOpen(true));
      dispatch(handleResultConfigIsOnEdit(true));
      dispatch(resultConfigSetId(selectedResult.id));
    },
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditResult)
);
