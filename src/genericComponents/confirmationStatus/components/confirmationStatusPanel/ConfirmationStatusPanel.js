import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CONFIRMATION_VALUES, TEXTS } from 'Utils/constants';
import style from './ConfirmationStatusPanel.module.scss';
import rectangleImg from 'Assets/rectangle.svg';

const ConfirmationStatusPanel = ({ handleStatus, selected }) => {
  return (
    <div className={style["confirmation-status-panel"]}>
      {Object.keys(CONFIRMATION_VALUES)?.map((status) => {
        return (
          <div
            key={status}
            className={cn("status-item", {
              'selected': selected === status
            })}
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
        onClick={handleStatus.bind(null, TEXTS.UNCHECK)}
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
  handleStatus: PropTypes.func.isRequired,
  selected: PropTypes.string
};

ConfirmationStatusPanel.defaultProps = {
  selected: ''
};

export default React.memo(ConfirmationStatusPanel);
