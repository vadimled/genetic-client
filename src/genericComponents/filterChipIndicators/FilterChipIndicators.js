import React from 'react';
import PropTypes from 'prop-types';
import FilterChipIndicatorsItem from './components/FilterChipIndicatorsItem';
import style from './FilterChipIndicators.module.scss';

const FilterChipIndicators = ({ title, data, onDelete, filtersConfigKey }) => {

  console.log("-data: ", data)


  return (
    <div className={style["filter-chip-indicators"]}>
      <div className="indicators-title">{title}</div>

      <div className="indicators-items">
        <FilterChipIndicatorsItem
          data={data}
          onDelete={onDelete}
          filtersConfigKey={filtersConfigKey}
        />
      </div>

    </div>
  );
};

FilterChipIndicators.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  filtersConfigKey: PropTypes.string
};

FilterChipIndicators.defaultProps = {
  data: [],
  title: '',
  filtersConfigKey: ''
};

export default FilterChipIndicators;
