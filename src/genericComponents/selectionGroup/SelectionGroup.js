import React from "react";
import PropTypes from "prop-types";
import FilterItem from "GenericComponents/filterItem";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ filterItems, mode, onChange, values}) => {
  // console.log('-filterItems: ', filterItems);
  // console.log('-mode: ', mode);
  // console.log('-values: ', values);

  return (
    <div className={style["selection-group-wrapper"]}>
      {filterItems.map((item, i) => (
        <FilterItem
          id={item.id}
          mode={mode}
          item={item}
          key={i}
          onChange={onChange.bind(null, item.id)}
          checkboxValue={mode === 'multiple'
            ? values.some((val) => item.id === val)
            : false
          }
          radioValue={mode === 'single'
            ? values
            : null
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
