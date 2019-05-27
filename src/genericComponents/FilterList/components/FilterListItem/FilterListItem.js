import React from 'react';
import style from './FilterListItem.module.scss';
import btnImg from 'Assets/close.svg';

const FilterListItem = ({key, value, onDelete}) => {
  return (
    <div className={style["c-filterlist-item"]}>
      <div className={style["key"]}>{key}:</div>
      <div className={style["value"]}>{value}</div>
      <button
        className={style["button"]}
        style={{backgroundImage: `url(${btnImg})`}}
        onClick={onDelete}
      />
    </div>
  );
};

FilterListItem.defaultProps = {
  key: 'Var Class',
  value: 'Unclassified'
};

export default React.memo(FilterListItem);
