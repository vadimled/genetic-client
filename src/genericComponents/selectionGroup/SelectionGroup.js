import React from "react";
import PropTypes from "prop-types";
import FilterItem from "GenericComponents/filterItem";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ filterItems, mode, onChange, values}) => {
  return (
    <div className={style["selection-group-wrapper"]}>
      {filterItems.map((item, i) => (
        <FilterItem
          id={item.id}
          mode={mode}
          item={item}
          key={i}
          onChange={onChange.bind(null, item.id)}
          value={mode === 'multiple' || mode === 'single'
            ? mode === 'multiple'
              ? values.some((val) => item.id === val)
              : item.id === values
            : false
          }
        />
      ))}
    </div>
  );
};

SelectionGroup.propTypes = {
  filterItems: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
};

export default SelectionGroup;
