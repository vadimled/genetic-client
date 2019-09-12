import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Modal } from "antd";
import ActivityLogPopupTableRecord from "./ActivityLogPopupTableRecord";

class ActivityLogPopup extends Component {
  render() {
    const { visible, handleOk, handleCancel, activityLog } = this.props;
    return (
      <Modal
        width={1000}
        title="Activity log"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk} size={"large"}>
            Close
          </Button>
        ]}
      >
        <div
          className="activity-items-table"
          data-testid={`activity-log-popup`}
        >
          <div className="table-header">
            <div className="cell header-cell border">Role</div>
            <div className="cell header-cell border">Action</div>
            <div className="cell header-cell border">Timestamp</div>
          </div>
          {activityLog.map((record, i) => (
            <ActivityLogPopupTableRecord key={i} record={record} />
          ))}
        </div>
      </Modal>
    );
  }
}

ActivityLogPopup.propTypes = {
  visible: PropTypes.bool,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  activityLog: PropTypes.array
};
ActivityLogPopup.defaultProps = {
  visible: false,
  activityLog: []
};

export default ActivityLogPopup;
