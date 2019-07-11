import React, { memo } from "react";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import NonActiveButton from "variantComponents/nonActiveButton";
import style from "./GeneTypeButton.module.scss";
import PropTypes from "prop-types";

function GeneTypeButton({
  currentType,
  title,
  type,
  onChangeType,
  typeData,
  currValue
}) {
  return currentType === type ? (
    <div className={style["gene-type-button-wrapper"]}>
      <SimpleSelect
        name={type}
        value={currValue}
        options={typeData}
        onChange={onChangeType}
        suffixIcon={<EditIcon />}
      />
      <div className="select-title">{`${title}:`}</div>
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

GeneTypeButton.propTypes = {
  currentType: PropTypes.string,
  typeData: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
  currValue: PropTypes.string,
  onChangeType: PropTypes.func
};

export default memo(GeneTypeButton);
