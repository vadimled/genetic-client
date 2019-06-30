import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import style from "./TumorInfoSelect.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close.svg";

const { Option } = AutoComplete;

const TumorInfoSelect = ({ label, dataSource }) => {
  const [insertedText, updateText] = useState("");

  const onSelect = value => {
    console.log("onSelect", value);
  };

  const handleOnSearchChange = value => {
    updateText(value);
  };

  const clearSearch = () => {
    updateText("");
  };

  const renderOptions = () => {
    return Object.keys(dataSource).filter(item => {
      if (dataSource[item].indexOf(insertedText) !== -1) {
        return (
          <Option key={item} text={dataSource[item]}>
            {item}
          </Option>
        );
      }
    });
  };

  return (
    <div className={style["tumor-info-select-wrapper"]}>
      {label && <div className="label">{label}</div>}
      <div className="tumor-info-select flex items-center">
        <AutoComplete
          id="tumor-info-select"
          data-testid={`tumor-info-select`}
          dataSource={renderOptions()}
          value={insertedText}
          onChange={handleOnSearchChange}
          onSelect={onSelect}
          placeholder="Missing type"
        />

        {insertedText && (
          <div className="clear-info-button" onClick={clearSearch}>
            <CloseIcon />
          </div>
        )}
      </div>
    </div>
  );
};

TumorInfoSelect.propTypes = {
  label: PropTypes.string,
  dataSource: PropTypes.object.isRequired
};

export default TumorInfoSelect;
{/*
<button
  className="clear-info-button"
  style={{ backgroundImage: `url(${closeBtn})` }}
  onClick={clearSearch}
/>
*/}
