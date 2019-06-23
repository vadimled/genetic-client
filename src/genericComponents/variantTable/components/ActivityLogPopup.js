import React, { Component, Fragment } from "react";
import { Button, Modal, Tooltip } from "antd";
import Tag from "../../tag";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import { connect } from "react-redux";
import { getActivityLog } from "Store/selectors";
import dateFormat from "dateformat";


const ActivityLogAction = ({ record }) => {
  const { type, prevTagColor, currTagColor, titleCurr, titlePrev } = record;

  if (type === "notes") {
    return (
      <div className="cell border">
        <Tooltip placement="topLeft" title={titleCurr}>
          <div className="curr-note">
            {titleCurr}
          </div>
        </Tooltip>
        {titlePrev && (
          <Tooltip placement="topLeft" title={titlePrev}>
            <div className="prev-note">
              {titlePrev}
            </div>
          </Tooltip>
        )}
      </div>
    );
  }

  return (
    <div className="cell border flex items-center justify-between">
      {record.titlePrev && (
        <Fragment>
          <div className="flex items-center action-item justify-center">
            {type === "variantClass" && <Tag color={prevTagColor} />}
            <span className="title-prev">{titlePrev}</span>
          </div>
          <ArrowRight />
        </Fragment>
      )}

      <div className="flex items-center action-item justify-center">
        {type === "variantClass" && <Tag color={currTagColor} />}
        <span className="title-curr">{titleCurr}</span>
      </div>
    </div>
  );
};

const ActivityLogPopupTableRecord = ({ record }) => {
  console.log(record);
  return (
    <div className="flex flex-wrap content-start">
      <div className="cell border flex items-center justify-center">
        <AvatarName />
        <span className="user-name">Primary Analyst</span>
      </div>
      <ActivityLogAction record={record} />
      <div className="cell border flex items-center justify-center">
        {dateFormat(record.time, "H:MM, d mmmm yyyy")}
      </div>
    </div>
  );
};

class ActivityLogPopup extends Component {
  render() {
    const { visible, handleOk, handleCancel, activityLog } = this.props;

    console.log("--activityLog: ", activityLog);

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
        <div className="activity-items-table">
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
