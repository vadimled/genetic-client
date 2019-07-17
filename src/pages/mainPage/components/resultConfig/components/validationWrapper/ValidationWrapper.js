import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './ValidationWrapper.module.scss';

const ValidationWrapper = ({ isOnError, errorMessage, children }) => {
  return (
    <div className={cn(style['validation-wrapper'])}>
      <div className={cn('validation-wrapper-content', {
        'error': isOnError
      })}>
        {children}
        {isOnError &&
          <div className="error-message">
            {errorMessage}
          </div>
        }
      </div>
    </div>
  );
};
ValidationWrapper.propTypes = {
  isOnError: PropTypes.bool,
  errorMessage: PropTypes.string
};
ValidationWrapper.defaultProps = {
  isOnError: false,
  errorMessage: ''
};

export default React.memo(ValidationWrapper);
