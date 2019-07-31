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
  className,
  onFocus,
  ...props
}) => {
  return (
    <Fragment>
      {!!label && <label>{label}</label>}
      {!!subLabel && <span className="sub-label">{subLabel}</span>}

      <Select
        onFocus={onFocus}
        disabled={disabled}
        className={className}
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
  testId: PropTypes.string,
  disabled: PropTypes.bool,
  showArrow: PropTypes.bool,
  selectHeaderClass: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func
};

SimpleSelect.defaultProps = {
  options: [],
  isClearAvailable: false
};

export default memo(SimpleSelect);
