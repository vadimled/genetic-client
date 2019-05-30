import React, { Fragment, memo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

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

SimpleSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
};

export default memo(SimpleSelect);