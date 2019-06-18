import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import Tag from "../../tag";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import {connect} from "react-redux";
import {getActivityLog} from "Store/selectors";
import dateFormat from "dateformat";

const ActivityLogAction = ({record}) => (
  <div className="cell border flex items-center justify-between">
    {
      record.titlePrev &&
      <Fragment>
        <div className="flex items-center action-item">
          <Tag color="red" />
          <span>
            {record.titlePrev}
          </span>
        </div>
        <ArrowRight />          
      </Fragment>
    }

    <div className="flex items-center action-item">
      <Tag color="orange" />
      <span>
        {record.titleCurr}
      </span>
    </div>
  </div>
);

const ActivityLogPopupTableRecord = ({record}) => {
  console.log(record.time.toString());
  return(
    <div className="flex flex-wrap content-start">
      <div className="cell border flex items-center">
        <AvatarName />
        <span className="user-name">Primary Analyst</span>
      </div>
      <ActivityLogAction record={record} />
      <div className="cell border flex items-center">
        {dateFormat(record.time, "H:MM, d mmmm yyyy")}
      </div>
    </div>
  );
};

class ActivityLogPopup extends Component {

  render() {
    const { visible, handleOk, handleCancel, activityLog } = this.props;
    const data = this.props[1];

    console.log("--activityLog: ", activityLog);

    return (
      <Modal
        width={640}
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
        <p>{data.gene}</p>
        <div className="activity-items-table">
          <div className="table-header">
            <div className="cell header-cell border">Role</div>
            <div className="cell header-cell border">Action</div>
            <div className="cell header-cell border">Timestamp</div>
          </div>
          {
            activityLog.map((record, i)=> <ActivityLogPopupTableRecord key={i} record={record}/>)
          }

        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const record = ownProps[1];

  return {
    activityLog: getActivityLog(state, record.id),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
//     handleZygosity: (data) => dispatch(handleZygosity(data)),
//     handleVariantClass: (data) => dispatch(handleVariantClass(data)),
//     updateActivityLog: data => dispatch(updateActivityLog(data))
//   };
// }

export default connect(mapStateToProps, {})(ActivityLogPopup);