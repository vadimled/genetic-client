import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete, Tooltip } from "antd";
import style from "./TumorInfoSelect.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close.svg";

const TumorInfoSelect = ({
  name,
  label,
  dataSource,
  onAction,
  value,
  placeholder
}) => {
  const [insertedText, updateText] = useState("");

  const handleOnSearchChange = value => {
    updateText(value);
  };

  const onEdit = () => {
    updateText(value);
    onAction("");
  };

  const onSelect = val => {
    onAction(val);
  };

  const clearSearch = () => {
    updateText("");
  };

  const renderOptions = () => {
    return dataSource
      .filter(item => {
        if (item.indexOf(insertedText) !== -1) {
          return item;
        }
      })
      .sort((a, b) => {
        let va = a.toLowerCase();
        let vb = b.toLowerCase();
        if (va < vb) return -1;
        if (va > vb) return 1;
        return 0;
      });
  };

  const renderInput = () => {
    if (!value) {
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
    } else {
      return (
        <Tooltip placement="topLeft" title={insertedText}>
          <div
            data-testid={`tumor-${name}-static-text`}
            className="static-text"
            onClick={onEdit}
          >
            {value}
          </div>
        </Tooltip>
      );
    }
  };

  return (
    <div className={style["tumor-info-select-wrapper"]}>
      {label && <div className="label">{label}</div>}
      {renderInput()}
    </div>
  );
};

TumorInfoSelect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  dataSource: PropTypes.array,
  onAction: PropTypes.func,
  placeholder: PropTypes.string
};

export default TumorInfoSelect;
