import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import Portal from 'GenericComponents/portal';
import EmptyState from 'GenericComponents/emptyState';
import ConfirmationTable from './components/confirmationTable';
import styles from './SendForConfirmationPopup.module.scss';
import btnImg from 'Assets/close-big.svg';
import { handleOnConfirmation, sendForConfirmation } from "Actions/confirmationActions";
import { handleSelectedRow } from "Actions/tableActions";
import { getSelectedRows } from "Store/selectors";

const SendForConfirmationPopup = ({ handleOnConfirmation, data, handleSelectedRow, sendForConfirmation }) => {
  return (
    <Portal>
      <div className={styles['send-for-confirmation-popup']}>
        <header className="confirmation-header">
          <div className="header-title">
            Send for confirmation
          </div>
          <button
            className="header-close"
            style={{backgroundImage: `url(${btnImg})`}}
            onClick={handleOnConfirmation.bind(null, false)}
          />
        </header>
        <div className="confirmation-content">
          {!!data.length && <ConfirmationTable
            data={data}
            handleSelectedRow={handleSelectedRow}
          />}
          {!data.length && <EmptyState description="" title="No data for sending"/>}
        </div>
        <footer className="confirmation-footer">
          <div className="confirmation-btns">
            <Button
              className="confirmation-btn confirmation--link"
              onClick={handleOnConfirmation.bind(null, false)}
            >
              Close
            </Button>
            <Button
              className="confirmation-btn"
              onClick={sendForConfirmation.bind(null, data)}
              disabled={!data.length}
            >
              Send
            </Button>
          </div>
        </footer>
      </div>
    </Portal>
  );
};

SendForConfirmationPopup.propTypes = {
  propName: PropTypes.string
};

SendForConfirmationPopup.defaultProps = {
  propName: 'DefaultProp'
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleOnConfirmation: data => dispatch(handleOnConfirmation(data)),
    handleSelectedRow: data => dispatch(handleSelectedRow(data)),
    sendForConfirmation: data => dispatch(sendForConfirmation(data))
  };
};

const mapStateToProps = (state) => {
  return {
    data: getSelectedRows(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(SendForConfirmationPopup));
