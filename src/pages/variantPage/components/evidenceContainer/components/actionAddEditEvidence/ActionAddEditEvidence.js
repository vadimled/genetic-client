import React from "react";
import PropTypes from "prop-types";
import { Button, Input, Select } from "antd";

import style from "./ActionAddEditEvidence.module.scss";

import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";

import {
  EVIDENCE_CATEGORIES_OPTIONS,
  EVIDENCE_LEVEL_OPTIONS,
  TEXTS,
  EC_VALUES,
  COUNTRIES
} from "Utils/constants";

import { actionModeText } from "Utils/helpers";

/*eslint-disable*/
const Option = Select.Option,
  { TextArea } = Input;
/* eslint-enable*/

const ActionAddEditEvidence = ({
  mode,
  submit,
  onChange,
  evidenceCategory,
  sourceValue,
  levelValue,
  descriptionValue,
  referenceValue,
  drugNameValue,
  indicationValue,
  trialIdValue,
  isPhenotypeAndIndicationMatchValue,
  locationValue,
  phenotypeValue,
  classification
}) => {
  const isRelevant = ({ type, category }) => {
    let isRelevant = false;

    if (
      (classification === type &&
        Array.isArray(category) &&
        category.includes(evidenceCategory)) ||
      (classification === type && !category)
    ) {
      isRelevant = true;
    }
    return isRelevant;
  };

  const isSubmitEnabled = () => {
    if (evidenceCategory === EC_VALUES.clinicalTrials) {
      return evidenceCategory && sourceValue && levelValue && descriptionValue
        && drugNameValue && indicationValue && locationValue && phenotypeValue;
    }
    else if (evidenceCategory === EC_VALUES.drug) {
      return evidenceCategory && sourceValue && levelValue && descriptionValue
        && drugNameValue && indicationValue && phenotypeValue && isPhenotypeAndIndicationMatchValue;
    }

    return evidenceCategory && sourceValue && levelValue && descriptionValue;
  };

  return (
    <div className={style["evidence-form-wrapper"]}>
      <form className="evidence-form" onSubmit={submit}>
        <div className="form-item">
          <SimpleSelect
            label={"Evidence type"}
            testId={`evidence-type-select`}
            name={`evidenceTypeSelect`}
            value={evidenceCategory}
            options={EVIDENCE_CATEGORIES_OPTIONS[classification]}
            onChange={onChange}
            disabled={mode === "edit"}
            placeholder="Select type"
          />
        </div>
        {(evidenceCategory === EC_VALUES.clinicalTrials || evidenceCategory === EC_VALUES.drug) &&
        <div className="form-item">
          <label htmlFor={"evidence-drug-name"}>Drug name</label>
          <Input
            id="evidence-drug-name"
            name="evidenceDrugNameInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={drugNameValue}
            placeholder="Add name"
          />
        </div>}
        <div className="form-item">
          <label htmlFor={"evidence-source"}>Source</label>
          <Input
            id="evidence-source"
            name="evidenceSourceInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={sourceValue}
            placeholder="Paste source"
            required
          />
        </div>
        {(evidenceCategory === EC_VALUES.clinicalTrials || evidenceCategory === EC_VALUES.drug) &&
        <div className="form-item">
          <label htmlFor={"evidence-indication"}>Indication</label>
          <Input
            id="evidence-indication"
            name="evidenceIndicationInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={indicationValue}
            placeholder="Type here"
          />
        </div>}
        {evidenceCategory === EC_VALUES.clinicalTrials && <div className="form-item">
          <label htmlFor={"evidence-trial-id"}>Trial id</label>
          <Input
            id="evidence-trial-id"
            name="evidenceTrialIdInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={trialIdValue}
            placeholder="Type here"
          />
        </div>}
        {evidenceCategory === EC_VALUES.drug && <div className="form-item">
          <label htmlFor={"evidence-is-phenotype-and-indication"}>Match</label>
          <SimpleSelect
            placeholder={"Select indication"}
            testId={`evidence-is-phenotype-and-indication-select`}
            name={`evidenceIsPhenotypeAndIndicationMatchSelect`}
            value={isPhenotypeAndIndicationMatchValue}
            options={[
              { value: 'true', label: "Match" },
              { value: 'false', label: "Don't match" },
            ]}
            onChange={onChange}
          />
        </div>}
        {evidenceCategory === EC_VALUES.clinicalTrials && <div className="form-item">
          <label htmlFor={"evidence-location"}>Location</label>
          <SimpleSelect
            placeholder={"Select country"}
            testId={`evidence-location-select`}
            name={`evidenceLocationSelect`}
            value={locationValue}
            options={COUNTRIES}
            onChange={onChange}
          />
        </div>}
        <div className="form-item">
          <label htmlFor={"evidence-level-select"}>Level</label>
          <Select
            id={"evidence-level-select"}
            onChange={val =>
              onChange({
                target: {
                  name: "evidenceLevelSelect",
                  value: val
                }
              })
            }
            value={levelValue || undefined}
            data-testid={"evidence-level-select"}
            placeholder="Select LEVEL"
          >
            {EVIDENCE_LEVEL_OPTIONS.map(option => {
              return (
                isRelevant(option) && (
                  <Option key={option.value} value={option.value}>
                    <TableLevel
                      level={option.label}
                      className="evidence-level-text"/>
                  </Option>
                )
              );
            })}
          </Select>
        </div>
        {(evidenceCategory === EC_VALUES.clinicalTrials || evidenceCategory === EC_VALUES.drug) &&
        <div className="form-item">
          <label htmlFor={"evidence-indication"}>Phenotype</label>
          <Input
            id="evidence-phenotype"
            name="evidencePhenotypeInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={phenotypeValue}
            placeholder="Type here"
          />
        </div>}
        {evidenceCategory === EC_VALUES.publications && <div className="form-item">
          <label htmlFor={"evidence-source"}>Reference</label>
          <Input
            id="evidence-reference"
            name="evidenceReferenceInput"
            onChange={onChange}
            className={"form-item-input-text"}
            value={referenceValue}
            placeholder="Paste references separated by the coma"
          />
        </div>}
        <div className="form-item">
          <label htmlFor={"evidence-description-textarea"}>Description</label>
          <TextArea
            autoSize
            value={descriptionValue}
            name={"evidenceDescriptionTextarea"}
            onChange={onChange}
            placeholder={"Type here"}
            data-testid={"evidence-description-textarea"}
          />
        </div>
        <div className="divider" />
        <Button type="primary" htmlType="submit" disabled={!isSubmitEnabled()}>
          {actionModeText(mode)}
        </Button>
      </form>
    </div>
  );
};

ActionAddEditEvidence.propTypes = {
  mode: PropTypes.oneOf([TEXTS.add, TEXTS.edit]),
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  evidenceCategory: PropTypes.string,
  sourceValue: PropTypes.string,
  levelValue: PropTypes.string,
  descriptionValue: PropTypes.string,
  referenceValue: PropTypes.string,
  drugNameValue: PropTypes.string,
  indicationValue: PropTypes.string,
  trialIdValue: PropTypes.string,
  isPhenotypeAndIndicationMatchValue: PropTypes.string,
  locationValue: PropTypes.string,
  phenotypeValue: PropTypes.string,
  classification: PropTypes.oneOf([TEXTS.germline, TEXTS.somatic])
};
ActionAddEditEvidence.defaultProps = {
  mode: null,
  evidenceCategory: null,
  sourceValue: null,
  levelValue: null,
  descriptionValue: null,
  referenceValue: null,
  drugNameValue: null,
  indicationValue: null,
  trialIdValue: null,
  isPhenotypeAndIndicationMatchValue: null,
  locationValue: null,
  phenotypeValue: null,
  classification: null
};

export default ActionAddEditEvidence;
