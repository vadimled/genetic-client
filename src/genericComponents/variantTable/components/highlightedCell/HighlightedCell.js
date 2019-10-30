import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './HighlightedCell.module.scss';

const HighlightedCell = ({ children, isHighlighted, classes}) => {
  return (
    <div className={style['highlighted-cell']}>
      <div className={cn("inner", {
        'highlighted': isHighlighted
      }, classes)}>
        {children}
      </div>
    </div>
  );
};

HighlightedCell.propTypes = {
  isHighlighted: PropTypes.bool,
  classes: PropTypes.string
};
HighlightedCell.defaultProps = {
  isHighlighted: false,
  classes: ''
};

export default React.memo(HighlightedCell);
