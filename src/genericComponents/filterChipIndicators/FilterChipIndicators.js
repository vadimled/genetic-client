/**
  * Usage example:
  <filterChipIndicators
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
import FilterChipIndicatorsItem from './components/FilterChipIndicatorsItem';
import style from './FilterChipIndicators.module.scss';

const FilterChipIndicators = ({data, onDelete}) => {
  const showedItems = data.slice(0, 2);

  return (
    <div className={style["filter-chip-indicators"]}>
      {showedItems.map((item) => <FilterChipIndicatorsItem
        key={item.id} {...item}
        onDelete={onDelete.bind(null, item.id)}
      />)}
      {data.length > 2 && <div className="more">
        2 more ...
      </div>}
    </div>
  );
};

FilterChipIndicators.defaultProps = {
  data: [],
};

export default FilterChipIndicators;
