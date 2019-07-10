import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import style from "./GeneSelect.module.scss";

const GeneSelect = ({
  dataSource,
  onChange,
  value,
  placeholder
}) => {
  const [insertedText, updateText] = useState(value);

  const handleOnSearchChange = value => {
    updateText(value);
  };

  const renderOptions = () => {
    return dataSource.filter(item => item.includes(insertedText));
  };

  return (
    <div className={style["gene-select-wrapper"]}>
      <AutoComplete
        data-testid={`gene-select`}
        dataSource={renderOptions()}
        value={insertedText}
        onChange={handleOnSearchChange}
        onSelect={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

GeneSelect.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  dataSource: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
GeneSelect.defaultProps = {
  value: '',
  label: '',
  dataSource: [],
  placeholder: ''
};

export default GeneSelect;
