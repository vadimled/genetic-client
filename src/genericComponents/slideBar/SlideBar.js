import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

import style from './SlideBar.module.scss';

const SlideBar = ({ isOpen, onClose, children, title }) => {
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
          <header className="slidebar-header">
            <div className="slidebar-title">
              {title}
            </div>
          </header>
          <div
            className="slidebar-close"
            onClick={onClose}
          />
          <div className="slidebar-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

SlideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

SlideBar.defaultProps = {
  title: ''
};

export default React.memo(SlideBar);
