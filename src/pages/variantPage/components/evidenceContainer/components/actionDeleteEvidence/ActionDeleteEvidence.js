import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "antd";
import Portal from "GenericComponents/portal";
import styles from "./ActionDeleteEvidence.module.scss";
import { getIgvAlertShowAgaing, getIgvLastQuery } from "Store/selectors";

const ActionDeleteEvidence = () => {
  return (
    <Portal>
      <div className={styles["action-delete-evidence-"]}>
        <div className="header">
          <div className="header-title">
            <span className="warning-sign" />
            IGV Alert
          </div>
        </div>
        <div className="content">
          <div className="content-footer">
            <div className="btns">
              <Button
                className="igv-alert-btn igv-alert-btn--link"
                onClick={handleIgvAlertShow.bind(null, false)}
                data-testid="close-btn"
              >
                Cancel
              </Button>
              <Button
                className="igv-alert-btn"
                onClick={retry.bind(null, igvLastQuery)}
                data-testid="retry-btn"
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

ActionDeleteEvidence.propTypes = {
  propName: PropTypes.string
};

ActionDeleteEvidence.defaultProps = {
  propName: "DefaultProp"
};

/*
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
*/

const mapStateToProps = state => {
  return {
    isIgvAlertShowAgaing: getIgvAlertShowAgaing(state),
    igvLastQuery: getIgvLastQuery(state)
  };
};

export default connect(mapStateToProps)(React.memo(ActionDeleteEvidence));
