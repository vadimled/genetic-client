import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

import style from './SlideBar.module.scss';

const SlideBar = ({ isOpen, onClose, children }) => {
  return (
    <div className={style['slidebar']}>
      <div className={cn('slidebar-wrapper', {
        showed: isOpen,
        hidden: !isOpen
      })}>
        <div
          className="slidebar-background"
          onClick={onClose}
        />
        <div className="slidebar-content">
          <div
            className="slidebar-close"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

SlideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default React.memo(SlideBar);
