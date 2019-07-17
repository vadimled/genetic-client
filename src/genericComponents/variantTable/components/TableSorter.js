import React from "react";
import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";


const TableSorter = ({setSort, title}) => {
  return(
    <div className="flex items-center table-sorter-wrapper">
      <div className="table-sorter-title">{title}</div>
      <div className="flex flex-column">
        <DropdownArrow className="top-arrow" onClick={()=> setSort({field: "vaf", order: "descending"})} />
        <DropdownArrow onClick={()=> setSort({field: "vaf", order: "ascending"})} />
      </div>
    </div>
  );
};

export default TableSorter;