import React, { Fragment, memo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import CloseIcon from "Assets/close.svg";
import LabeledTag from "GenericComponents/labeledTag";
import { TEXTS } from "Utils/constants";

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
  reconfirmMode,
  reconfirmStatus,
  currentVariantClass,
  ...props
}) => {
  const handleReconfirm = e => {
    const { key } = e;
    if (
      currentVariantClass &&
      currentVariantClass === key &&
      !reconfirmStatus
    ) {
      onChange({
        target: {
          name: name,
          value: key,
          reconfirm: true
        }
      });
    }
  };

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
        value={value
          ? value === TEXTS.unclassified ? TEXTS.unclassifiedUp : value
          : undefined
        }
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
            <Option
              key={option.value}
              value={option.value}
              onClick={reconfirmMode ? handleReconfirm : null}
            >
              <LabeledTag
                label={option.value === "notDefined" ? "" : option.label}
                tagColor={option?.tagColor}
                customClassName={selectHeaderClass}
              />
              {option.reconfirm && (
                <div className="reconfirm">{`(${option.reconfirm})`}</div>
              )}
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
  onFocus: PropTypes.func,
  reconfirmMode: PropTypes.bool,
  reconfirmStatus: PropTypes.bool,
  currentVariantClass: PropTypes.string,
  placeholder: PropTypes.string,
};

SimpleSelect.defaultProps = {
  options: [],
  isClearAvailable: false
};

export default memo(SimpleSelect);
