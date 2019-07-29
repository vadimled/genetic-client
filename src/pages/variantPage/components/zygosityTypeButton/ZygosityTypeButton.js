import React, { memo } from "react";
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
  return selectedZygosityType === type ? (
    <div className={style["gene-type-button-wrapper"]}>
      <SimpleSelect
        testId={`gene-type-select-${type}`}
        name={type}
        value={currValue}
        options={typeData}
        onChange={onChangeType}
        showArrow={currentZygosity.toLowerCase() === type}
        suffixIcon={<EditIcon />}
        selectHeaderClass="select-header-text-style"
      />
      <div
        data-testid={`select-title-${title}`}
        className="select-title"
      >{`${title}:`}</div>
    </div>
  ) : (
    <NonActiveButton
      title={title}
      onClick={onChangeType}
      type={type}
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
