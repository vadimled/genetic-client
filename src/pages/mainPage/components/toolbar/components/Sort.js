import React from 'react';
// import { ReactComponent as SortIcon } from "Assets/sortArrows.svg";
import { MUTATION } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";


const Sort = () => {


  return(
    <div className="sort-wrapper">
      <SimpleSelect
        options={MUTATION}
        // onChange={this.handleOnChange}
        name="mutation"
        value={"Sort"}
        // disabled
        // showArrow={false}
      />
    </div>
  );
};

export default Sort;