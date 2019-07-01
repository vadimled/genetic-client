import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete, InputNumber, Tooltip } from "antd";
import style from "./TumorInfoSelect.module.scss";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "Assets/close.svg";
import { ReactComponent as SaveIcon } from "Assets/save.svg";

// const { Option } = AutoComplete;

const TumorInfoSelect = ({
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
            id="tumor-info-select"
            data-testid={`tumor-info-select`}
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
            className={cn("static-text", { "input-number": !dataSource })}
            onClick={onEdit}
          >
            {!dataSource ? `${info}%` : info}
          </div>
        </Tooltip>
      );
    } else if (!dataSource) {
      return (
        <Fragment>
          <InputNumber
            min={0}
            max={100}
            value={insertedText}
            placeholder={placeholder}
            onChange={handleOnSearchChange}
          />
          <SaveIcon
            className="save-icon"
            onClick={() => onSelect(insertedText)}
          />
        </Fragment>
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
  label: PropTypes.string,
  dataSource: PropTypes.array
};

export default TumorInfoSelect;
