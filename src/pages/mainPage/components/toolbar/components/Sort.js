import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { SORTING_CONFIGURATIONS } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Sort = ({setSort}) => {

  const handleOnChange = e => {
    setSort(e.target.value);
  };

  return(
    <div className="sort-wrapper">
      <SimpleSelect
        options={SORTING_CONFIGURATIONS}
        onChange={handleOnChange}
        name="sort"
        // value={"Sort"}
        // disabled
        // showArrow={false}
        placeholder={"Sort"}
      />
    </div>
  );
};

export default Sort;