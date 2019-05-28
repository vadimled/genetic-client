import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterItem from "GenericComponents/filterItem";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ filterItems, mode }) => {
  const [value, setValue] = useState(1);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className={style["selection-group-wrapper"]}>
      {filterItems.map((item, i) => (
        <FilterItem
          mode={mode}
          item={item}
          key={i}
          index={i}
          onChange={onChange}
          value={value}
        />
      ))}
    </div>
  );
};

SelectionGroup.propTypes = {
  filterItems: PropTypes.array,
  mode: PropTypes.string
};

export default SelectionGroup;
