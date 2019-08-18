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
  addAdditionalConfirmationData,
  removeAdditionalConfirmationData,
  setConfirmationData
} from "Actions/confirmationActions";
import { goToChrPositionIgv } from "Actions/igvActions";
import { getConfirmationData } from "Store/selectors";
import { handleConfirmationStatus } from "../../../../store/actions/tableActions";

const SendForConfirmationPopup = (props) => {
  const {
    data,
    handleOnConfirmation,
    removeConfirmationRow,
    sendForConfirmation,
    handleConfirmationStatus,
    handleConfirmationNotes,
    handleConfirmationPrimer,
    handleConfirmationFragmentSize,
    addAdditionalConfirmationData,
    removeAdditionalConfirmationData,
    goToChrPositionIgv
  } = props;

  const handleOnClick = () => {

    data.map(record => {
      handleConfirmationStatus({
        id: record.id,
        status: "PENDING"
      });
    });

    sendForConfirmation(data);
  };

  return (
    <Portal>
      <div className={styles['send-for-confirmation-popup']} data-testid="send-for-confirmation-popup">
        <header className="confirmation-header">
          <div className="header-title">
            Send for confirmation
          </div>
          <button
            className="header-close"
            style={{backgroundImage: `url(${btnImg})`}}
            onClick={handleOnConfirmation.bind(null, false)}
            data-testid="header-close"
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
              removeAdditionalConfirmationData={removeAdditionalConfirmationData}
            />
          </div>}
          {!data.length && <EmptyState description="" title="No data for sending"/>}
        </div>
        <footer className="confirmation-footer">
          <div className="confirmation-btns">
            <Button
              className="confirmation-btn confirmation--link"
              onClick={handleOnConfirmation.bind(null, false)}
              data-testid="footer-close"
            >
              Close
            </Button>
            <Button
              className="confirmation-btn"
              onClick={()=> handleOnClick()}
              disabled={!data.length}
              data-testid="send-btn"
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
    handleOnConfirmation: data => {
      // which means that we close popup
      if (data === false) {
        // clear confirmation data
        dispatch(setConfirmationData(data));
      }
      dispatch(handleOnConfirmation(data));
    },
    removeConfirmationRow: data => dispatch(removeConfirmationRow(data)),
    sendForConfirmation: data => dispatch(sendForConfirmation(data)),
    handleConfirmationStatus: data => dispatch(handleConfirmationStatus(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    handleConfirmationNotes: (data) => dispatch(handleConfirmationNotes(data)),
    handleConfirmationPrimer: (data) => dispatch(handleConfirmationPrimer(data)),
    handleConfirmationFragmentSize: (data) => dispatch(handleConfirmationFragmentSize(data)),
    addAdditionalConfirmationData: (data) => dispatch(addAdditionalConfirmationData(data)),
    removeAdditionalConfirmationData: (data) => dispatch(removeAdditionalConfirmationData(data)),
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
