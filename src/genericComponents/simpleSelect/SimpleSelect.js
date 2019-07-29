import React, { Fragment, memo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import CloseIcon from "Assets/close.svg";
import LabeledTag from "GenericComponents/labeledTag";

// eslint-disable-next-line
const Option = Select.Option;

const SimpleSelect = ({
  label,
  subLabel,
  onChange,
  options,
  value,
  name,
  disabled,
  isClearAvailable,
  testId,
  showArrow,
  suffixIcon,
  selectHeaderClass,
  ...props
}) => {
  // testId === "gene-type-select-somatic" &&  console.log({options,value});
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
        allowClear={!!value && isClearAvailable}
        clearIcon={
          <span
            className="select-close"
            style={{
              backgroundImage: `url(${CloseIcon})`
            }}
          />
        }
        showArrow={showArrow}
        suffixIcon={suffixIcon}
        data-testid={testId}
        {...props}
      >
        {options?.map(option => {

          return (
            <Option key={option.value} value={option.value}>
              <LabeledTag
                label={option.label}
                tagColor={option?.tagColor}
                customClassName={selectHeaderClass}
              />
            </Option>
          );
        })}
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
  name: PropTypes.string,
  isClearAvailable: PropTypes.bool,
  testId: PropTypes.string
};

SimpleSelect.defaultProps = {
  options: [],
  isClearAvailable: false
};

export default memo(SimpleSelect);
