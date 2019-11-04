import React from "react";
import { Button, Input, Select } from "antd";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import style from "./ActionAddEditEvidence.module.scss";
import {
  EVIDENCE_CATEGORIES_OPTIONS,
  EVIDENCE_LEVEL_OPTIONS
} from "Utils/constants";
import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";
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
          />
        </div>
        <div className="form-item">
          <label htmlFor={"evidence-source"}>Source</label>
          <Input
            id="evidence-source"
            name="evidenceSourceInput"
            onChange={onChange}
            className={"form-item-source"}
            value={sourceValue}
            placeholder="Paste source"
            required
          />
        </div>
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
            value={levelValue}
            data-testid={"evidence-level-select"}
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
        <div className="form-item">
          <label htmlFor={"evidence-description-textarea"}>Description</label>
          <TextArea
            autosize
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

ActionAddEditEvidence.propTypes = {};

export default ActionAddEditEvidence;
