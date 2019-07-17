import React from "react";
import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";
import { SORTING_ORDER } from "../../../utils/constants";


const TableSorter = ({setSort, title}) => {
  return(
    <div className="flex items-center table-sorter-wrapper">
      <div className="table-sorter-title">{title}</div>
      <div className="flex flex-column">
        <DropdownArrow className="top-arrow" onClick={()=> setSort({field: "vaf", order: SORTING_ORDER.descending})} />
        <DropdownArrow onClick={()=> setSort({field: "vaf", order: SORTING_ORDER.ascending})} />
      </div>
    </div>
  );
};

export default TableSorter;