import React, { memo } from "react";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import NonActiveButton from "variantComponents/nonActiveButton";
import style from "./ZygosityTypeButton.module.scss";
import PropTypes from "prop-types";

function ZygosityTypeButton({
  currentZygosity,
  selectedZygosityType,
  title,
  type,
  onChangeType,
  typeData,
  currValue
}) {
  const currZygosityFormatted = currentZygosity?.toLowerCase();
  return currZygosityFormatted === type ? (
    <div
      className={style["zygosity-type-button-wrapper"]}
      onClick={e => onChangeType(e, type)}
    >
      <div
        className={cn("zygosity-type-button", {
          active: selectedZygosityType !== type
        })}
      >
        <div
          data-testid={`select-title-${title}`}
          className={cn("select-title", {
            active: selectedZygosityType !== type
          })}
        >{`${title}:`}</div>
        <SimpleSelect
          testId={`zygosity-type-select-${type}`}
          name={type}
          value={currValue?.toLowerCase()}
          options={typeData}
          onChange={onChangeType}
          showArrow={currZygosityFormatted === type}
          suffixIcon={<EditIcon />}
          selectHeaderClass={cn("select-header-text-style", {
            active: selectedZygosityType !== type
          })}
          className={selectedZygosityType === type && "active"}
        />
      </div>
    </div>
  ) : (
    <NonActiveButton
      title={title}
      onClick={onChangeType}
      type={type}
      selectedType={selectedZygosityType}
      typeData={typeData}
      currValue={currValue}
    />
  );
}

ZygosityTypeButton.propTypes = {
  selectedZygosityType: PropTypes.string,
  typeData: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
  currValue: PropTypes.string,
  onChangeType: PropTypes.func
};

export default memo(ZygosityTypeButton);
