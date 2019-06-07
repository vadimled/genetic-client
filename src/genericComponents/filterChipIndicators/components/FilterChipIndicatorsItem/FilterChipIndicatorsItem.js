import React from 'react';
import PropTypes from 'prop-types';
import style from './FilterChipIndicatorsItem.module.scss';
import btnImg from 'Assets/close.svg';

const FilterChipIndicatorsItem = ({value, onDelete}) => {
  return (
    <div className={style["filter-chip-indicators-item"]}>
      <div className="value">{value}</div>
      <button
        className="button"
        style={{backgroundImage: `url(${btnImg})`}}
        onClick={onDelete}
      />
    </div>
  );
};

FilterChipIndicatorsItem.propTypes = {
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number, PropTypes.bool).isRequired,
  onDelete: PropTypes.func.isRequired
};

FilterChipIndicatorsItem.defaultProps = {};

export default React.memo(FilterChipIndicatorsItem);
