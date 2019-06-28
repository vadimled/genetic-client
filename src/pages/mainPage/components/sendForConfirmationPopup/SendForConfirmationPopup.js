import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';
import Portal from 'GenericComponents/portal';
import EmptyState from 'GenericComponents/emptyState';
import ConfirmationTable from './components/confirmationTable';
import styles from './SendForConfirmationPopup.module.scss';
import btnImg from 'Assets/close-big.svg';
import {
  handleOnConfirmation,
  handleConfirmationNotes,
  handleConfirmationPrimer,
  handleConfirmationFragmentSize,
  sendForConfirmation,
  removeConfirmationRow,
  addAdditionalConfirmationData
} from "Actions/confirmationActions";
import { goToChrPositionIgv } from "Actions/igvActions";
import { getConfirmationData } from "Store/selectors";

const SendForConfirmationPopup = (props) => {
  const {
    data,
    handleOnConfirmation,
    removeConfirmationRow,
    sendForConfirmation,
    handleConfirmationNotes,
    handleConfirmationPrimer,
    handleConfirmationFragmentSize,
    addAdditionalConfirmationData
  } = props;

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
          {!!data.length && <div className="confirmation-table">
            <ConfirmationTable
              data={data}
              removeConfirmationRow={removeConfirmationRow}
              handelChrPosition={goToChrPositionIgv}
              handleConfirmationNotes={handleConfirmationNotes}
              handleConfirmationPrimer={handleConfirmationPrimer}
              handleConfirmationFragmentSize={handleConfirmationFragmentSize}
              addAdditionalConfirmationData={addAdditionalConfirmationData}
            />
          </div>}
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
    removeConfirmationRow: data => dispatch(removeConfirmationRow(data)),
    sendForConfirmation: data => dispatch(sendForConfirmation(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    handleConfirmationNotes: (data) => dispatch(handleConfirmationNotes(data)),
    handleConfirmationPrimer: (data) => dispatch(handleConfirmationPrimer(data)),
    handleConfirmationFragmentSize: (data) => dispatch(handleConfirmationFragmentSize(data)),
    addAdditionalConfirmationData: (data) => dispatch(addAdditionalConfirmationData(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: getConfirmationData(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(SendForConfirmationPopup));
