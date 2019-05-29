import React   from "react";
import PropTypes from "prop-types";
import FilterItem from "GenericComponents/filterItem";
import style from "./SelectionGroup.module.scss";

const SelectionGroup = ({ filterItems, mode, onChange, values}) => {
  // const [radioValue, setRadioValue] = useState(1);
  // const [checkboxValue, setCheckboxValue] = useState(false);
  //
  // const onChange = e => {
  //   console.log(e.target)
  //   setRadioValue(e.target.value);
  //   setCheckboxValue(e.target.checked)
  // };


  return (
    <div className={style["selection-group-wrapper"]}>
      {filterItems.map((item, i) => (
        <FilterItem
          id={item.id}
          mode={mode}
          item={item}
          key={i}
          index={i}
          onChange={onChange}
          radioValue={(values.length && values[item.id]) ? values[item.id] : null}
          checkboxValue={(values.length && values[item.id]) ? values[item.id] : null}
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
