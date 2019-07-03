import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import Portal from 'GenericComponents/portal';
import warningImg from 'Assets/warning-sign.svg';

import styles from './UncheckConfirmationPopup.module.scss';
import { handleConfirmationStatus, handleUncheckConfirmationData } from "Actions/tableActions";
import { getUncheckConfirmationData } from "Store/selectors";

const UncheckConfirmationPopup = (props) => {
  const { handleUncheckConfirmationData, handleConfirmationStatus, uncheckConfirmationData } = props;
  return (
    <Portal>
      <div className={styles['uncheck-confirmation-popup']} data-testid="uncheck-confirmation-popup">
        <header className="confirmation-header">
          <div className="header-title">
            <span
              className="warning-sign"
              style={{backgroundImage: `url(${warningImg})`}}
            />
            Uncheck Alert
          </div>
        </header>
        <div className="confirmation-content">
          Are you sure you want to erase the confirmation status?
        </div>
        <footer className="confirmation-footer">
          <div className="confirmation-btns">
            <Button
              className="confirmation-btn confirmation--link"
              onClick={handleUncheckConfirmationData.bind(null, null)}
            >
              No
            </Button>
            <Button
              className="confirmation-btn"
              onClick={handleConfirmationStatus.bind(null, uncheckConfirmationData)}
            >
              Yes
            </Button>
          </div>
        </footer>
      </div>
    </Portal>
  );
};

UncheckConfirmationPopup.propTypes = {
  propName: PropTypes.string
};

UncheckConfirmationPopup.defaultProps = {
  propName: 'DefaultProp'
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleUncheckConfirmationData: data => dispatch(handleUncheckConfirmationData(data)),
    handleConfirmationStatus: (data) => {
      dispatch(handleConfirmationStatus(data));
      dispatch(handleUncheckConfirmationData(null));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    uncheckConfirmationData: getUncheckConfirmationData(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UncheckConfirmationPopup));
