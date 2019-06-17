import React, { Component } from "react";
import { Button, Modal } from "antd";
import Tag from "../../tag";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import {connect} from "react-redux";
import {getActivityLog} from "Store/selectors";



const ActivityLogPopupTableRecord = () => {
  return(
    <div className="flex flex-wrap content-start">
      <div className="cell border flex items-center">
        <AvatarName />
        <span className="user-name">Primary Analyst</span>
      </div>
      <div className="cell border flex items-center justify-between">
        <div className="flex items-center checkbox-inner-content">
          <Tag color="red" />
          <span>
            PATH
          </span>
        </div>
        <ArrowRight />
        <div className="flex items-center checkbox-inner-content">
          <Tag color="orange" />
          <span>
            LPATH
          </span>
        </div>
      </div>
      <div className="cell border flex items-center">
        13:37, 4 June 2019
      </div>
    </div>
  );
};

class ActivityLogPopup extends Component {

  render() {
    console.log(this.props);

    const { visible, handleOk, handleCancel } = this.props;
    const data = this.props[1];

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
          <ActivityLogPopupTableRecord />
          <ActivityLogPopupTableRecord />
          <ActivityLogPopupTableRecord />
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