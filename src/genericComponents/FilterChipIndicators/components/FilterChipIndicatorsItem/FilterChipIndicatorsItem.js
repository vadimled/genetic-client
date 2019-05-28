import React from 'react';
import style from './FilterChipIndicatorsItem.module.scss';
import btnImg from 'Assets/close.svg';

const FilterChipIndicatorsItem = ({key, value, onDelete}) => {
  return (
    <div className={style["filter-chip-indicators-item"]}>
      <div className="key">{key}:</div>
      <div className="value">{value}</div>
      <button
        className="button"
        style={{backgroundImage: `url(${btnImg})`}}
        onClick={onDelete}
      />
    </div>
  );
};

FilterChipIndicatorsItem.defaultProps = {
  key: 'Var Class',
  value: 'Unclassified'
};

export default React.memo(FilterChipIndicatorsItem);
