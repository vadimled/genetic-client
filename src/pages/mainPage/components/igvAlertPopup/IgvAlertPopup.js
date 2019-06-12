import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button, Checkbox } from 'antd';
import Portal from 'GenericComponents/portal';
import styles from './IgvAlertPopup.module.scss';
import btnImg from 'Assets/close-big.svg';
import warningImg from 'Assets/warning-sign.svg';
import {
  setFetchBAMFileFailed,
  fetchBAMFile
} from 'Actions/igvActions';

const IgvAlertPopup = ({ setFetchBAMFileFailed, retry }) => {
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
            onClick={setFetchBAMFileFailed.bind(null, false)}
          />
        </div>
        <div className="content">
          <div className="text">
            We have detected that your IGV platform is closed, <br/> please open it and try again
          </div>
          <div className="content-footer">
            <div className="chbx">
              {// eslint-disable-next-line
                <Checkbox checked={true} onChange={() => true}>
                  Don’t show me again
                </Checkbox>
              }
            </div>
            <div className="btns">
              <Button
                className="igv-alert-btn"
                onClick={setFetchBAMFileFailed.bind(null, false)}
              >
                Cancel
              </Button>
              <Button
                className="igv-alert-btn"
                onClick={retry}
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
    setFetchBAMFileFailed: () => dispatch(setFetchBAMFileFailed()),
    retry: () => {
      dispatch(setFetchBAMFileFailed(false));
      dispatch(fetchBAMFile());
    }
  };
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(IgvAlertPopup));
