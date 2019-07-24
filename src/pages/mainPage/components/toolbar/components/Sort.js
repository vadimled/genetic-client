import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { SORTING_CONFIGURATIONS, SORTING_ORDER } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Sort = ({setSort}) => {

  const handleOnChange = () => {
    // setSort(e.target.value);
    setSort({field: "coverage", order: SORTING_ORDER.default});
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