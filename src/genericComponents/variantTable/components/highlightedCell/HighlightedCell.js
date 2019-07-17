import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './HighlightedCell.module.scss';

const HighlightedCell = ({ children, isHighlighted }) => {
  return (
    <div className={style['highlighted-cell']}>
      <div className={cn("inner", {
        'highlighted': isHighlighted
      })}>
        {children}
      </div>
    </div>
  );
};

HighlightedCell.propTypes = {
  isHighlighted: PropTypes.bool
};
HighlightedCell.defaultProps = {
  isHighlighted: false
};

export default React.memo(HighlightedCell);
