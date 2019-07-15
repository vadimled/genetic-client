import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { DEFAULT_OPTIONS } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Sort = ({setDefaultSettings, testType}) => {

  const handleOnChange = e => {
    setDefaultSettings(e.target.value, testType);
  };

  return(
    <div className="sort-wrapper">
      <SimpleSelect
        options={DEFAULT_OPTIONS}
        onChange={handleOnChange}
        name="mutation"
        // value={"Sort"}
        // disabled
        // showArrow={false}
        placeholder={"Setup"}
      />
    </div>
  );
};

export default Sort;