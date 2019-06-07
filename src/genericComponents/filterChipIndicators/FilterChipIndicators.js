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

const FilterChipIndicators = ({title, data, onDelete}) => {
  return (
    <div className={style["filter-chip-indicators"]}>
      {!!title && <div className="indicators-title">{title}</div>}

      <div className="indicators-items">
        {data.map((item) => <FilterChipIndicatorsItem
          key={item}
          value={item}
          onDelete={onDelete.bind(null, item)}
        />)}
      </div>

    </div>
  );
};

FilterChipIndicators.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

FilterChipIndicators.defaultProps = {
  data: [],
  title: null
};

export default FilterChipIndicators;
