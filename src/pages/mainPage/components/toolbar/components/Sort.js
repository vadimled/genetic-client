import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { SORTING } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Sort = ({setDefaultFilters}) => {

  const handleOnChange = e => {
    setDefaultFilters(e.target.value);
  };

  return(
    <div className="sort-wrapper">
      <SimpleSelect
        options={SORTING}
        onChange={handleOnChange}
        name="mutation"
        // value={"Sort"}
        // disabled
        // showArrow={false}
        placeholder={"Sort"}
      />
    </div>
  );
};

export default Sort;