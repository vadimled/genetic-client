import React from "react";
import PropTypes from "prop-types";
import FilterCheckboxItem from "GenericComponents/filterCheckboxItem";
import FilterRangeItem from "GenericComponents/filterRangeItem";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ items, mode, onChange, values}) => {
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
      {mode === 'range' && <FilterRangeItem
        onChange={onChange}
        values={values}
      />}
    </div>
  );
};

SelectionGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  mode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
};

export default SelectionGroup;
