import React from "react";
import PropTypes from "prop-types";
import FilterCheckboxItem from "GenericComponents/filterCheckboxItem";
import RangeSlider from "GenericComponents/rangeSlider";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ items, mode, onChange, onReset, values}) => {
  return (
    <div className={style["selection-group-wrapper"]}>
      {(mode === 'multiple' || mode === 'single') && items.map((item, i) => (
        <FilterCheckboxItem
          key={i}
          item={item}
          onChange={onChange.bind(null, item.id)}
          value={mode === 'multiple'
            ? values.some((val) => item.id === val) // mode: multiple
            : item.id === values // mode: single
          }
        />
      ))}
      {mode === 'range' && <RangeSlider
        onChange={onChange}
        onReset={onReset}
        rangeValue={values}
        className="filters-range-slider"
      />}
    </div>
  );
};

SelectionGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  mode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
};

export default SelectionGroup;
