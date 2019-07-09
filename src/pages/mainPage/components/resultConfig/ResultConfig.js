import React from 'react';
import { connect } from "react-redux";
import cn from 'classnames';
import SlideBar from "GenericComponents/slideBar";
import SimpleSelect from "GenericComponents/simpleSelect";
import { InputNumber } from "antd";
import style from './ResultConfig.module.scss';
import {
  CHROMOSOME_OPTIONS,
  ALLELE_TYPES
} from "Utils/constants";
import {
  handleResultConfigIsOpen,
  handleResultConfigGene,
  handleResultConfigChromosome,
  handleResultConfigPosition,
  handleResultConfigAlleleType,
  handleResultConfigAlleleReference,
  handleResultConfigAlleleAlternative
} from "Actions/resultConfigActions";
import {
  getResultConfigIsOpen,
  getResultConfigGene,
  getResultConfigChromosome,
  getResultConfigPosition,
  getResultConfigAlleleType,
  getResultConfigAlleleReference,
  getResultConfigAlleleAlternative
} from "Store/selectors";

const ResultConfig = (props) => {
  const {
    isOpen,
    gene,
    chromosome,
    position,
    alleleType,
    alleleReference,
    alleleAlternative,

    handleClose,
    handleGene,
    handleChromosome,
    handlePosition,
    handleAlleleType,
    handleAlleleReference,
    handleAlleleAlternative
  } = props;

  return (
    <SlideBar
      isOpen={isOpen}
      onClose={handleClose}
      title="Add result"
    >
      <div className={style['result-config']}>
        <div className="content">
          <div className="gene-row">
            <div className="label">Gene</div>
            <input
              className="rcinput"
              value={gene}
              onChange={(e) => handleGene(e.target.value)}
            />
          </div>
          <div className="chr-pos-row">
            <div className="chr-block">
              <div className="label">Chromosome</div>
              <div className="chromosome-select-wrapper">
                <SimpleSelect
                  value={chromosome}
                  options={CHROMOSOME_OPTIONS}
                  onChange={(e) => handleChromosome(e.target.value)}
                />
              </div>
            </div>
            <div className="chr-pos-div">:</div>
            <div className="pos-block">
              <div className="label">Position</div>
              <div className="position-input-wrapper">
                <InputNumber
                  value={position}
                  onChange={(value) => handlePosition(value)}
                  min={0}
                  max={999999999}
                />
              </div>
            </div>
          </div>
          <div className="allele-block">
            <div className="label">Allele change</div>
            <div className="allele-radios">
              <button
                className={cn("allele-radio", {
                  'active': alleleType === ALLELE_TYPES.change.value
                })}
                onClick={handleAlleleType.bind(null, ALLELE_TYPES.change.value)}
              >
                {ALLELE_TYPES.change.label}
              </button>
              <button
                className={cn("allele-radio", {
                  'active': alleleType === ALLELE_TYPES.insertion.value
                })}
                onClick={handleAlleleType.bind(null, ALLELE_TYPES.insertion.value)}
              >
                {ALLELE_TYPES.insertion.label}
              </button>
              <button
                className={cn("allele-radio", {
                  'active': alleleType === ALLELE_TYPES.deletion.value
                })}
                onClick={handleAlleleType.bind(null, ALLELE_TYPES.deletion.value)}
              >
                {ALLELE_TYPES.deletion.label}
              </button>
            </div>
            <input
              className={cn("rcinput", {
                'disabled': alleleType === ALLELE_TYPES.insertion.value
              })}
              value={alleleReference}
              onChange={(e) => handleAlleleReference(e.target.value)}
            />
            <div className="allele-from-to-div">&gt;</div>
            <input
              className={cn("rcinput", {
                'disabled': alleleType === ALLELE_TYPES.deletion.value
              })}
              value={alleleAlternative}
              onChange={(e) => handleAlleleAlternative(e.target.value)}
            />
          </div>
          <div className="vaf-covarage-row">
            <div className="vaf">
              <div className="label">VAF:</div>
              <div className="vaf-covarage-result">11</div>
            </div>
            <div className="covarage">
              <div className="label">Covarage:</div>
              <div className="vaf-covarage-result">11</div>
            </div>
          </div>
          <div className="allele-divider"/>
          <button className="allele-btn allele-btn--hgvs">Load HGVS</button>
          <div className="cp-row">
            <div className="label">Coding:</div>
            <div className="cp-result">123</div>
          </div>
          <div className="cp-row">
            <div className="label">Protein:</div>
            <div className="cp-result">123</div>
          </div>
          <div className="allele-divider"/>
          <button className="allele-btn allele-btn--add">Add result</button>
        </div>
      </div>
    </SlideBar>
  );
};

ResultConfig.defaultProps = {
  isOpen: false,
  gene: ''
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => dispatch(handleResultConfigIsOpen(false)),
    handleGene: data => dispatch(handleResultConfigGene(data)),
    handleChromosome: data => dispatch(handleResultConfigChromosome(data)),
    handlePosition: data => dispatch(handleResultConfigPosition(data)),
    handleAlleleType: data => dispatch(handleResultConfigAlleleType(data)),
    handleAlleleReference: data => dispatch(handleResultConfigAlleleReference(data)),
    handleAlleleAlternative: data => dispatch(handleResultConfigAlleleAlternative(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    isOpen: getResultConfigIsOpen(state),
    gene: getResultConfigGene(state),
    chromosome: getResultConfigChromosome(state),
    position: getResultConfigPosition(state),
    alleleType: getResultConfigAlleleType(state),
    alleleReference: getResultConfigAlleleReference(state),
    alleleAlternative: getResultConfigAlleleAlternative(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultConfig);
