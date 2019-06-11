import React, { Fragment, memo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import Tag from 'GenericComponents/tag';
import { Icon } from "antd";

// eslint-disable-next-line
const Option = Select.Option;

const SimpleSelect = ({
  label,
  subLabel,
  onChange,
  options,
  value,
  name,
  disabled
}) => {
  let showedOptions = options.slice();
  if (!value && showedOptions.some((opt) => opt.value === '__reset__')) {
    showedOptions = showedOptions.filter((opt) => opt.value !== '__reset__');
  }
  return (
    <Fragment>
      {!!label && <label>{label}</label>}
      {!!subLabel && <span className="sub-label">{subLabel}</span>}

      <Select
        disabled={disabled}
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
        {showedOptions?.map(option => (
          <Option key={option.value} value={option.value}>
            {!!value && option.value === '__reset__' && <Icon type="close" />}
            {option.tagColor && <Tag color={option.tagColor} />}
            <span
              style={option.label === "Unclassified" ? { color: "#96A2AA" } : null}
            >
              {option.label}
            </span>
          </Option>
        ))}
      </Select>
    </Fragment>
  );
};

SimpleSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
};

SimpleSelect.defaultProps = {
  options: []
};

export default memo(SimpleSelect);
