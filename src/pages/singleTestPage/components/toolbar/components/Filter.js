import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { FILTERS_CONFIGURATIONS, DEFAULT_FILTERS } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";

const Filter = ({ setDefaultFilters }) => {

  const handleOnChange = () => {
    setDefaultFilters(DEFAULT_FILTERS);
  };

  return(
    <div className="filter-wrapper">
      <SimpleSelect
        options={FILTERS_CONFIGURATIONS}
        onChange={handleOnChange}
        name="filter"
        // value={"Sort"}
        // disabled
        // showArrow={false}
        placeholder={"Filter"}
      />
    </div>
  );
};

export default Filter;
