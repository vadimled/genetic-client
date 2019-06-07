/**
  * Usage example:
  <FilterChipIndicators
    onDelete={(id) => console.log(id)}
    data={[
      {
        id: 123,
        key: 'test key',
        value: 'VUS',
      },
      {
        id: 234
      },
      {
        id: 2342
      }
    ]}
  />
*/

import React from 'react';
import PropTypes from 'prop-types';
import FilterChipIndicatorsItem from './components/FilterChipIndicatorsItem';
import style from './FilterChipIndicators.module.scss';

const FilterChipIndicators = ({ title, data, onDelete }) => {
  // const value = data.join(', ');

  return (
    <div className={style["filter-chip-indicators"]}>
      <div className="indicators-title">{title}</div>

      <div className="indicators-items">
        <FilterChipIndicatorsItem
          data={data}
          onDelete={onDelete}
        />
      </div>

    </div>
  );
};

FilterChipIndicators.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

FilterChipIndicators.defaultProps = {
  data: [],
  title: '',
};

export default FilterChipIndicators;
