/**
  * Usage example:
  <FilterListItem
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
import FilterListItem from './components/FilterListItem';
import style from './FilterList.module.scss';

const FilterList = ({data, onDelete}) => {
  const showedItems = data.slice(0, 2);

  return (
    <div className={style["c-filterlist"]}>
      {showedItems.map((item) => <FilterListItem
        key={item.id} {...item}
        onDelete={onDelete.bind(null, item.id)}
      />)}
      {data.length > 2 && <div className={style["more"]}>
        2 more ...
      </div>}
    </div>
  );
};

FilterList.defaultProps = {
  data: [],
};

export default FilterList;
