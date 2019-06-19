import React from 'react';
import PropTypes from 'prop-types';
import { CONFIRMATION_VALUES } from 'Utils/constants';
import style from './ConfirmationStatusPanel.module.scss';
import rectangleImg from 'Assets/rectangle.svg';

const ConfirmationStatusPanel = ({ handleStatus }) => {
  return (
    <div className={style["confirmation-status-panel"]}>
      {Object.keys(CONFIRMATION_VALUES)?.map((status) => {
        return (
          <div
            key={status}
            className="status-item"
            onClick={handleStatus.bind(null, status)}
          >
            <div
              className="confirmation-panel-icon"
              style={{
                backgroundImage: `url(${CONFIRMATION_VALUES[status]?.iconImg})`
              }}
            />
            <span className="confirmation-panel-label">
              {CONFIRMATION_VALUES[status]?.label}
            </span>
          </div>
        );
      })}
      <div
        className="status-item"
        onClick={handleStatus.bind(null, null)}
      >
        <div
          className="confirmation-panel-icon"
          style={{
            backgroundImage: `url(${rectangleImg})`
          }}
        />
        <span className="confirmation-panel-label">
          Uncheck
        </span>
      </div>
    </div>
  );
};

ConfirmationStatusPanel.propTypes = {
  handleStatus: PropTypes.func.isRequired
};

export default React.memo(ConfirmationStatusPanel);
