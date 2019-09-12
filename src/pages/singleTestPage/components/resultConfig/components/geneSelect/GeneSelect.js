import React from "react";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import style from "./GeneSelect.module.scss";

const GeneSelect = ({
  dataSource,
  onChange,
  value,
  placeholder
}) => {

  const renderOptions = () => {
    return dataSource.filter(item => {
      return item ? item.toLowerCase().includes(value.toLowerCase()) : item;
    });
  };

  return (
    <div className={style["gene-select-wrapper"]}>
      <AutoComplete
        data-testid={`gene-wrapper-input`}
        dataSource={renderOptions()}
        value={value}
        onChange={onChange}
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
