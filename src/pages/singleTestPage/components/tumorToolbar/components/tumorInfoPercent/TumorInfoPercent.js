import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputNumber, Tooltip } from "antd";
import style from "./TumorInfoPercent.module.scss";
import { ReactComponent as SaveIcon } from "Assets/save.svg";

const TumorInfoPercent = ({
  label,
  onAction,
  value,
  placeholder
}) => {
  const [insertedText, updateText] = useState("");
  const [editIsClicked, updateEditIsClicked] = useState(false);
  
  const handleOnSearchChange = value => {
    updateText(value);
  };
  
  const onEdit = () => {
    updateText(value);
    updateEditIsClicked(true)
    // onAction(-1);
  };
  
  const onSave = () => {
    onAction(insertedText);
  };
  
  const renderInput = () => {
    if (!editIsClicked) {
      return (
        <Tooltip placement="topLeft" title={insertedText}>
          <div
            data-testid={`tumor-percent-static-text`}
            className="static-text"
            onClick={onEdit}
          >
            {`${value}%`}
          </div>
        </Tooltip>
      );
    } else {
      return (
        <div data-testid={`tumor-percent-inputNumber`}>
          <InputNumber
            data-testid={`tumor-inputNumber-textField`}
            min={0}
            max={100}
            value={insertedText}
            placeholder={placeholder}
            onChange={handleOnSearchChange}
          />
          <SaveIcon
            data-testid={`tumor-save-inputNumber`}
            className="save-icon"
            onClick={onSave}
          />
        </div>
      );
    }
  };
  
  return (
    <div className={style["tumor-input-number-wrapper"]}>
      {label && <div className="label">{label}</div>}
      {renderInput()}
    </div>
  );
};

TumorInfoPercent.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  onAction: PropTypes.func,
  placeholder: PropTypes.string
};

export default TumorInfoPercent;

