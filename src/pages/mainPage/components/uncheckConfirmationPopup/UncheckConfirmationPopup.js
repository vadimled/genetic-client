import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import Portal from 'GenericComponents/portal';
import warningImg from 'Assets/warning-sign.svg';

import styles from './UncheckConfirmationPopup.module.scss';
// import { handleOnConfirmation, sendForConfirmation } from "Actions/confirmationActions";
// import { handleSelectedRow } from "Actions/tableActions";
// import { getUncheckConfirmationData } from "Store/selectors";

const UncheckConfirmationPopup = () => {
  return (
    <Portal>
      <div className={styles['uncheck-confirmation-popup']}>
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
              onClick={() => false}
            >
              No
            </Button>
            <Button
              className="confirmation-btn"
              onClick={() => true}
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


const mapDispatchToProps = () => {
  return {
    // handleOnConfirmation: data => dispatch(handleOnConfirmation(data)),
    // handleSelectedRow: data => dispatch(handleSelectedRow(data)),
    // sendForConfirmation: data => dispatch(sendForConfirmation(data))
  };
};

const mapStateToProps = () => {
  return {
    // data: getSelectedRows(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UncheckConfirmationPopup));
