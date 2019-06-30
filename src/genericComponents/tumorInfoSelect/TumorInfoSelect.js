import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import style from "./TumorInfoSelect.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close.svg";

// const { Option } = AutoComplete;

const TumorInfoSelect = ({
  label,
  dataSource,
  onSelect,
  info,
  placeholder,
  onEdit
}) => {
  const [insertedText, updateText] = useState("");

  const handleOnSearchChange = value => {
    updateText(value);
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

  return (
    <div className={style["tumor-info-select-wrapper"]}>
      {label && <div className="label">{label}</div>}
      {!info ? (
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
      ) : (
        <div className="static-text" onClick={onEdit}>
          {info}
        </div>
      )}
    </div>
  );
};

TumorInfoSelect.propTypes = {
  label: PropTypes.string,
  dataSource: PropTypes.array.isRequired
};

export default TumorInfoSelect;
