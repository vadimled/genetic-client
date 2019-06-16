import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button, Checkbox } from 'antd';
import Portal from 'GenericComponents/portal';
import styles from './IgvAlertPopup.module.scss';
import btnImg from 'Assets/close-big.svg';
import warningImg from 'Assets/warning-sign.svg';
import {
  fetchBAMFile,
  goToChrPositionIgv,
  handleIgvAlertShow,
  handleIgvAlertShowAgain,
} from 'Actions/igvActions';
import {
  getIgvAlertShowAgaing,
  getIgvLastQuery,
} from "Store/selectors";

const IgvAlertPopup = ({ retry, handleIgvAlertShow, handleIgvAlertShowAgain, isIgvAlertShowAgaing, igvLastQuery }) => {
  return (
    <Portal>
      <div className={styles['igv-alert-popup']}>
        <div className="header">
          <div className="header-title">
            <span
              className="warning-sign"
              style={{backgroundImage: `url(${warningImg})`}}
            />
            IGV Alert
          </div>
          <button
            className="header-close"
            style={{backgroundImage: `url(${btnImg})`}}
            onClick={handleIgvAlertShow.bind(null, false)}
          />
        </div>
        <div className="content">
          <div className="text">
            We have detected that your IGV platform is closed, <br/> please open it and try again
          </div>
          <div className="content-footer">
            <div className="chbx">
              <Checkbox
                checked={!isIgvAlertShowAgaing}
                onChange={handleIgvAlertShowAgain}
              >
                Don’t show me again
              </Checkbox>
            </div>
            <div className="btns">
              <Button
                className="igv-alert-btn igv-alert-btn--link"
                onClick={handleIgvAlertShow.bind(null, false)}
              >
                Cancel
              </Button>
              <Button
                className="igv-alert-btn"
                onClick={retry.bind(null, igvLastQuery)}
              >
                Retry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

IgvAlertPopup.propTypes = {
  propName: PropTypes.string
};

IgvAlertPopup.defaultProps = {
  propName: 'DefaultProp'
};


const mapDispatchToProps = dispatch => {
  return {
    handleIgvAlertShow: (data) => dispatch(handleIgvAlertShow(data)),
    retry: (igvLastQuery) => {
      dispatch(handleIgvAlertShow(false));
      if (igvLastQuery) {
        const { type, data } = igvLastQuery;
        if (type === 'BAM_FILE') {
          dispatch(fetchBAMFile(data));
        }
        if (type === 'CHR_POS') {
          dispatch(goToChrPositionIgv(data));
        }
      }
    },
    handleIgvAlertShowAgain: (e) => dispatch(handleIgvAlertShowAgain(!e.target.checked))
  };
};

const mapStateToProps = (state) => {
  return {
    isIgvAlertShowAgaing: getIgvAlertShowAgaing(state),
    igvLastQuery: getIgvLastQuery(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(IgvAlertPopup));
