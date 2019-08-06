import React from "react";
import { Button, Input, Select } from "antd";
// import { ReactComponent as EditIcon } from "assets/edit.svg";
// import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import style from "./ActionAddEditEvidence.module.scss";
import {
  EVIDENCE_CATEGORIES_OPTIONS,
  EVIDENCE_LEVEL_OPTIONS
} from "Utils/constants";
import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";

/*eslint-disable*/
const Option = Select.Option,
  { TextArea } = Input;
/* eslint-enable*/

const ActionAddEditEvidence = ({ mode, submit, onChange }) => {
  return (
    <div className={style["evidence-form-wrapper"]}>
      <form className="evidence-form" onSubmit={submit}>
        <div className="form-item">
          <SimpleSelect
            label={"Evidence type"}
            testId={`evidence-type-select`}
            name={`evidenceTypeSelect`}
            value={"publications"}
            options={EVIDENCE_CATEGORIES_OPTIONS}
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor={"evidence-source"}>Source</label>
          <Input
            id="evidence-source"
            name="evidenceSourceInput"
            onChange={onChange}
            className={"form-item-source"}
            placeholder="Paste source"
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
            value={"b"}
            name={"evidence-level-select"}
            data-testid={"evidence-level-select"}
          >
            {EVIDENCE_LEVEL_OPTIONS.map(option => {
              return (
                <Option key={option.value} value={option.value}>
                  <TableLevel level={option.label} />
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="form-item">
          <label htmlFor={"evidence-description-textarea"}>Description</label>
          <TextArea
            autosize
            value={""}
            name={"evidence-description-textarea"}
            onChange={val =>
              this.handleSelectChange({
                target: {
                  name: "evidenceDescriptionTextarea",
                  value: val
                }
              })
            }
            data-testid={"evidence-description-textarea"}
          />
        </div>
        <div className="divider" />
        <Button type="primary" htmlType="submit">
          {mode}
        </Button>
      </form>
    </div>
  );
};

ActionAddEditEvidence.propTypes = {};

export default ActionAddEditEvidence;
