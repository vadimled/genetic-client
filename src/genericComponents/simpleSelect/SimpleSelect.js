import React, {Fragment } from "react";
import { Select } from "antd";

// eslint-disable-next-line
const Option = Select.Option;

const SimpleSelect = ({ label, subLabel, onChange, options, value, name }) => {
  return (
    <Fragment>
      <label>{label}</label>
      {subLabel && <span className="sub-label">{subLabel}</span>}

      <Select
        onChange={val =>
          onChange({
            target: {
              name: name,
              value: val
            }
          })
        }
        value={value}
        name={name}
      >
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Fragment>
  );
};

export default SimpleSelect;
