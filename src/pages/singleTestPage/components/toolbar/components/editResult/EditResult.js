import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './EditResult.module.scss';
import {
  handleResultConfigIsOpen,
  handleResultConfigIsHgvsLoaded,
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
  handleResultConfigTranscript,
  resultConfigSetId
} from 'Actions/resultConfigActions';
import { ALLELE_TYPES } from "Utils/constants";

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
      let alleleType = ALLELE_TYPES.change.value; // by default if ref and alt are exist
      if (!selectedResult.ref) alleleType = ALLELE_TYPES.insertion.value;
      if (!selectedResult.alt) alleleType = ALLELE_TYPES.deletion.value;

      dispatch(handleResultConfigVaf(selectedResult.vaf));
      dispatch(handleResultConfigCoverage(selectedResult.dp));
      dispatch(handleResultConfigGene(selectedResult.gene));
      dispatch(handleResultConfigChromosome(selectedResult.chr));
      dispatch(handleResultConfigPosition(selectedResult.position));
      dispatch(handleResultConfigAlleleType(alleleType));
      dispatch(handleResultConfigAlleleReference(selectedResult.ref));
      dispatch(handleResultConfigAlleleAlternative(selectedResult.alt));
      dispatch(handleResultConfigCoding(selectedResult.coding));
      dispatch(handleResultConfigProtein(selectedResult.protein));
      dispatch(handleResultConfigTranscript(selectedResult.transcript));
      dispatch(handleResultConfigIsHgvsLoaded(true));
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
