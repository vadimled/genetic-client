import React from 'react';
import PropTypes from "prop-types";
import { FILTERS_CONFIGURATIONS, DEFAULT_FILTERS, PANEL_TYPES } from "Utils/constants";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";

const Filter = ({ setDefaultFilters, testType }) => {

  const handleOnChange = () => {
    setDefaultFilters(DEFAULT_FILTERS[testType]);
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

Filter.propTypes = {
  setDefaultFilters: PropTypes.func.isRequired,
  testType: PropTypes.string
};
Filter.defaultProps = {
  testType: PANEL_TYPES.solid
};

export default Filter;
