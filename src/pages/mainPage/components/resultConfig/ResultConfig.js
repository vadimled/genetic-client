import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import cn from 'classnames';
import { InputNumber } from "antd";
import SlideBar from "GenericComponents/slideBar";
import SimpleSelect from "GenericComponents/simpleSelect";
import ToggledInput from "GenericComponents/toggledInput";
import GeneSelect from "./components/geneSelect";
import ValidationWrapper from "./components/validationWrapper";
import style from './ResultConfig.module.scss';
import {
  CHROMOSOME_OPTIONS,
  ALLELE_TYPES
} from "Utils/constants";
import {
  handleResultConfigGene,
  handleResultConfigChromosome,
  handleResultConfigPosition,
  handleResultConfigAlleleType,
  handleResultConfigAlleleReference,
  handleResultConfigAlleleAlternative,
  handleResultConfigCoding,
  handleResultConfigProtein,
  resultConfigLoadHgvs,
  resultConfigAddResult,
  resultConfidEditResult,
  resultConfigSetInitialState,
} from "Actions/resultConfigActions";
import {
  getResultConfigIsOpen,
  getResultConfigIsHgvsLoaded,
  getResultConfigIsOnEdit,
  getResultConfigGene,
  getResultConfigChromosome,
  getResultConfigPosition,
  getResultConfigAlleleType,
  getResultConfigAlleleReference,
  getResultConfigAlleleAlternative,
  getResultConfigVaf,
  getResultConfigCoverage,
  getResultConfigCoding,
  getResultConfigProtein,
  getResultConfigValidationFaildFields,
  getTableDataGenes,
  getResultConfigid
} from "Store/selectors";

const ResultConfig = (props) => {
  const {
    isOpen,
    isHgvsLoaded,
    isOnEdit,
    gene,
    chromosome,
    position,
    alleleType,
    alleleReference,
    alleleAlternative,
    vaf,
    coverage,
    coding,
    protein,
    validationFaildFields,
    geneDataSource,
    id,

    handleClose,
    handleGene,
    handleChromosome,
    handlePosition,
    handleAlleleType,
    handleAlleleReference,
    handleAlleleAlternative,
    handleCoding,
    handleProtein,
    loadHgvs,
    addResult,
    editResult
  } = props;

  const onLoadHgvs = () => {
    loadHgvs({
      gene,
      chromosome,
      position,
      alleleType,
      alleleReference,
      alleleAlternative,
      vaf,
      coverage,
    });
  };

  const onApplyResult = () => {
    const data = {
      gene,
      chromosome,
      position,
      alleleType,
      alleleReference,
      alleleAlternative,
      vaf,
      coverage,
      coding,
      protein,
      isHgvsLoaded,
      id,
    };

    isOnEdit
      ? editResult(data)
      : addResult(data);
  };

  return (
    <SlideBar
      isOpen={isOpen}
      onClose={handleClose}
      title={isOnEdit ? "Edit result" : "Add result"}
    >
      <div className={style['result-config']}>
        <div className="content">
          <div className="gene-row">
            <div className="label">Gene</div>
            <ValidationWrapper
              isOnError={validationFaildFields?.includes('gene')}
              errorMessage="This field is not valid"
            >
              <GeneSelect
                dataSource={geneDataSource}
                value={gene}
                onChange={handleGene}
              />
            </ValidationWrapper>
          </div>
          <div className="chr-pos-row">
            <div className="chr-block">
              <div className="label">Chromosome</div>
              <ValidationWrapper
                isOnError={validationFaildFields?.includes('chromosome')}
                errorMessage="This field is not valid"
              >
                <div className="chromosome-select-wrapper">
                  <SimpleSelect
                    value={chromosome}
                    options={CHROMOSOME_OPTIONS}
                    onChange={(e) => handleChromosome(e.target.value)}
                  />
                </div>
              </ValidationWrapper>
            </div>
            <div className="chr-pos-div">:</div>
            <div className="pos-block">
              <div className="label">Position</div>
              <ValidationWrapper
                isOnError={validationFaildFields?.includes('position')}
                errorMessage="This field is not valid"
              >
                <div className="position-input-wrapper">
                  <InputNumber
                    value={position}
                    onChange={(value) => handlePosition(value)}
                    min={0}
                    max={999999999}
                  />
                </div>
              </ValidationWrapper>
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
            <ValidationWrapper
              isOnError={validationFaildFields?.includes('alleleReference')}
              errorMessage="This field is not valid"
            >
              <input
                className={cn("rcinput", {
                  'disabled': alleleType === ALLELE_TYPES.insertion.value
                })}
                value={alleleReference}
                onChange={(e) => handleAlleleReference(e.target.value)}
              />
            </ValidationWrapper>
            <div className="allele-from-to-div">&gt;</div>
            <ValidationWrapper
              isOnError={validationFaildFields?.includes('alleleAlternative')}
              errorMessage="This field is not valid"
            >
              <input
                className={cn("rcinput", {
                  'disabled': alleleType === ALLELE_TYPES.deletion.value
                })}
                value={alleleAlternative}
                onChange={(e) => handleAlleleAlternative(e.target.value)}
              />
            </ValidationWrapper>
          </div>
          <div className="vaf-covarage-row">
            <div className="vaf">
              <div className="label">VAF:</div>
              <div className="vaf-covarage-result">{vaf}</div>
            </div>
            <div className="covarage">
              <div className="label">Coverage:</div>
              <div className="vaf-covarage-result">{coverage}</div>
            </div>
          </div>
          <div className="allele-divider"/>
          <div className="allele-btn-hgvs-wrapper">
            <ValidationWrapper
              isOnError={validationFaildFields?.includes('loadHgvs')}
              errorMessage="No HGVS has loaded!"
            >
              <button
                className={cn("allele-btn allele-btn--hgvs", {
                  'loaded': isHgvsLoaded
                })}
                onClick={onLoadHgvs}
              >
                Load HGVS
              </button>
            </ValidationWrapper>
          </div>
          {isOnEdit && <Fragment>
            <ToggledInput
              className="cp-row"
              label="Coding"
              value={coding}
              onChange={e => handleCoding(e.target.value)}
            />
            <ToggledInput
              className="cp-row"
              label="Protein"
              value={protein}
              onChange={e => handleProtein(e.target.value)}
            />
          </Fragment>}
          {!isOnEdit && <Fragment>
            <div className="cp-row">
              <div className="label">Coding:</div>
              <div className="cp-result">{coding}</div>
            </div>
            <div className="cp-row">
              <div className="label">Protein:</div>
              <div className="cp-result">{protein}</div>
            </div>
          </Fragment>}
          <div className="allele-divider"/>
          <button
            className="allele-btn allele-btn--add"
            onClick={onApplyResult}
          >
            {isOnEdit ? 'Edit Result' : 'Add result'}
          </button>
        </div>
      </div>
    </SlideBar>
  );
};

ResultConfig.propTypes = {
  isOpen: PropTypes.bool,
  isHgvsLoaded: PropTypes.bool,
  isOnEdit: PropTypes.bool,
  gene: PropTypes.string,
  chromosome: PropTypes.string,
  position: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alleleType: PropTypes.string,
  alleleReference: PropTypes.string,
  alleleAlternative: PropTypes.string,
  vaf: PropTypes.number,
  coverage: PropTypes.number,
  coding: PropTypes.string,
  protein: PropTypes.string,
  validationFaildFields: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  handleClose: PropTypes.func.isRequired,
  handleGene: PropTypes.func.isRequired,
  handleChromosome: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  handleAlleleType: PropTypes.func.isRequired,
  handleAlleleReference: PropTypes.func.isRequired,
  handleAlleleAlternative: PropTypes.func.isRequired,
  handleCoding: PropTypes.func.isRequired,
  handleProtein: PropTypes.func.isRequired,
  loadHgvs: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
  editResult: PropTypes.func.isRequired,
};

ResultConfig.defaultProps = {
  isOpen: false,
  isHgvsLoaded: false,
  isOnEdit: false,
  gene: '',
  chromosome: '',
  position: null,
  alleleType: ALLELE_TYPES.change.value,
  alleleReference: '',
  alleleAlternative: '',
  vaf: 0,
  coverage: 0,
  coding: '',
  protein: '',
  validationFaildFields: [],
  geneDataSource: [],
  id: null,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(resultConfigSetInitialState());
    },
    handleGene: data => dispatch(handleResultConfigGene(data)),
    handleChromosome: data => dispatch(handleResultConfigChromosome(data)),
    handlePosition: data => dispatch(handleResultConfigPosition(data)),
    handleAlleleType: data => dispatch(handleResultConfigAlleleType(data)),
    handleAlleleReference: data => dispatch(handleResultConfigAlleleReference(data)),
    handleAlleleAlternative: data => dispatch(handleResultConfigAlleleAlternative(data)),
    handleCoding: data => dispatch(handleResultConfigCoding(data)),
    handleProtein: data => dispatch(handleResultConfigProtein(data)),
    loadHgvs: data => dispatch(resultConfigLoadHgvs(data)),
    addResult: data => dispatch(resultConfigAddResult(data)),
    editResult: data => dispatch(resultConfidEditResult(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    isOpen: getResultConfigIsOpen(state),
    isHgvsLoaded: getResultConfigIsHgvsLoaded(state),
    isOnEdit: getResultConfigIsOnEdit(state),
    gene: getResultConfigGene(state),
    chromosome: getResultConfigChromosome(state),
    position: getResultConfigPosition(state),
    alleleType: getResultConfigAlleleType(state),
    alleleReference: getResultConfigAlleleReference(state),
    alleleAlternative: getResultConfigAlleleAlternative(state),
    vaf: getResultConfigVaf(state),
    coverage: getResultConfigCoverage(state),
    coding: getResultConfigCoding(state),
    protein: getResultConfigProtein(state),
    validationFaildFields: getResultConfigValidationFaildFields(state),
    geneDataSource: getTableDataGenes(state),
    id: getResultConfigid(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultConfig);
