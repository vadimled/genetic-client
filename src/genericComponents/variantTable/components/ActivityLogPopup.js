import React, { Component } from "react";
import { Button, Modal } from "antd";
import { connect } from "react-redux";
import { getActivityLog } from "Store/selectors";
import ActivityLogPopupTableRecord from "./activityLogPopup/ActivityLogPopupTableRecord";



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
        <div data-testid={`activity-log-popup`} className="activity-items-table">
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

function mapStateToProps(state, ownProps) {
  const record = ownProps[1];

  return {
    activityLog: getActivityLog(state, record.id)
  };
}

export default connect(
  mapStateToProps,
  {}
)(ActivityLogPopup);
