import React from 'react';
import PropTypes from "prop-types";
import Portal from 'GenericComponents/portal';

import style from './Alert.module.scss';

const Alert = ({ status, title, message, onClose }) => {
  return (
    <Portal pure>
      <div className={style["alert"]}>
        <div className="wrapper">
          <div className={`sign ${status}`}/>
          <div className="content">
            <div className="title">{title}</div>
            <div className="message">{message}</div>
          </div>
          <div
            className="close"
            onClick={onClose}
          />
        </div>
      </div>
    </Portal>
  );
};

Alert.propTypes = {
  status: PropTypes.oneOf(['error', 'warning', 'default']),
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

Alert.defaultProps = {
  status: 'default',
  title: 'sdfdfdg',
  message: 'sdfgdfsgdsfg'
};

export default React.memo(Alert);
