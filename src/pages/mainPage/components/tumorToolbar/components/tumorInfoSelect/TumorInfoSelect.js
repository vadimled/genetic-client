import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete, InputNumber, Tooltip } from "antd";
import style from "Pages/mainPage/components/tumorToolbar/components/tumorInfoSelect/TumorInfoSelect.module.scss";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "Assets/close.svg";
import { ReactComponent as SaveIcon } from "Assets/save.svg";

// const { Option } = AutoComplete;

const TumorInfoSelect = ({
  name,
  label,
  dataSource,
  onAction,
  info,
  placeholder
}) => {
  const [insertedText, updateText] = useState("");

  const handleOnSearchChange = value => {
    updateText(value);
  };

  const onEdit = () => {
    onAction("");
  };

  const onSelect = val => {
    onAction(val);
  };

  const clearSearch = () => {
    updateText("");
  };

  const renderOptions = () => {
    return dataSource.filter(item => {
      if (item.indexOf(insertedText) !== -1) {
        return item;
      }
    });
  };

  const renderInput = () => {
    if (dataSource && !info) {
      return (
        <div className="tumor-info-select flex items-center">
          <AutoComplete
            id={`tumor-${name}-select`}
            data-testid={`tumor-${name}-select`}
            dataSource={renderOptions()}
            value={insertedText}
            onChange={handleOnSearchChange}
            onSelect={onSelect}
            placeholder={placeholder}
          />

          {insertedText && (
            <div className="clear-info-button" onClick={clearSearch}>
              <CloseIcon />
            </div>
          )}
        </div>
      );
    } else if (info) {
      return (
        <Tooltip placement="topLeft" title={insertedText}>
          <div
            data-testid={`tumor-${name}-static-text`}
            className={cn("static-text", { "input-number": !dataSource })}
            onClick={onEdit}
          >
            {!dataSource ? `${info}%` : info}
          </div>
        </Tooltip>
      );
    } else if (!dataSource) {
      return (
        <div data-testid={`tumor-${name}-inputNumber`}>
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
            onClick={() => onSelect(insertedText)}
          />
        </div>
      );
    }
  };

  return (
    <div className={style["tumor-info-select-wrapper"]}>
      {label && (
        <div className={cn("label", { "input-number": !dataSource })}>
          {label}
        </div>
      )}
      {renderInput()}
    </div>
  );
};

TumorInfoSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  dataSource: PropTypes.array,
  onAction: PropTypes.func,
  placeholder: PropTypes.string
};

export default TumorInfoSelect;
