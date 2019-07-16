import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { DEFAULT_OPTIONS } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Filter = () => {

  // const handleOnChange = e => {
  //   setDefaultSettings({action: e.target.value, testType});
  // };

  return(
    <div className="filter-wrapper">
      <SimpleSelect
        options={DEFAULT_OPTIONS}
        // onChange={handleOnChange}
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