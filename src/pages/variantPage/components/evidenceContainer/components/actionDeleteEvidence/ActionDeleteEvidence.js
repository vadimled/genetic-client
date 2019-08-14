import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import Portal from "GenericComponents/portal";
import styles from "./ActionDeleteEvidence.module.scss";
import { ReactComponent as DeliteIcon } from "Assets/delete.svg";

const ActionDeleteEvidence = ({ onClickYes, onClickNo }) => {
  return (
    <Portal>
      <div className={styles["action-delete-evidence-wrapper"]}>
        <div className="header">
          <div className="delete-icon">
            <DeliteIcon />
          </div>
          <div className="header-title">Evidence Deletion</div>
        </div>
        <div className="body-content-wrapper">
          <div className="body-content">
            Are you sure you want to <span>erase the evidence?</span>
          </div>
          <div className="content-footer">
            <div className="buttons">
              <Button onClick={onClickNo} data-testid="no-btn">
                <div className="buttons-text">No</div>
              </Button>
              <Button onClick={onClickYes} data-testid="yes-btn">
                <div className="buttons-text">Yes</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

ActionDeleteEvidence.propTypes = {
  onClickYes: PropTypes.func,
  onClickNo: PropTypes.func
};

export default React.memo(ActionDeleteEvidence);
