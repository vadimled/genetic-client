import React from 'react';
import { SORTING_CONFIGURATIONS, SORTING_ORDER } from "../../../../../utils/constants";
import SimpleSelect from "../../../../../genericComponents/simpleSelect/SimpleSelect";
import PropTypes from "prop-types";


const Sort = ({setSort}) => {

  const handleOnChange = () => {
    setSort({field: "priority", order: SORTING_ORDER.default});
  };

  return(
    <div className="sort-wrapper">
      <SimpleSelect
        options={SORTING_CONFIGURATIONS}
        onChange={handleOnChange}
        name="sort"
        placeholder={"Sort"}
      />
    </div>
  );
};

Sort.propTypes = {
  setSort: PropTypes.func,
};

export default Sort;