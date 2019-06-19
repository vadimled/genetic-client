import React, { Component } from "react";
import ActiveLogDetails from "./ActivityLogDetails";
import ActivityLogPopup from "./ActivityLogPopup";
import { ReactComponent as ActivityLogIcon } from "Assets/activityLogIcon.svg";
import {connect} from "react-redux";
import {getActivityLog} from "Store/selectors";



class ActivityLog extends Component {
  state = {
    isActivityDetailsShow: false,
    isActivityPopupShow: false
  };

  showActivityPopup = () => {
    this.setState({
      isActivityPopupShow: true
    });
  };

  showActivityDetails = () => {
    this.setState({ isActivityDetailsShow: true });
  };

  hideActivityDetails = () => {
    this.setState({ isActivityDetailsShow: false });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      isActivityPopupShow: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      isActivityPopupShow: false
    });
  };

  render() {
    const {activityLog} = this.props;
    if(!activityLog.length){
      return (
        <div className="activity-icon-wrapper__disabled flex justify-center">
          <div
            className="icon"
          >
            <ActivityLogIcon />
          </div>
        </div>
      );
    }

    return (
      <div className="activity-icon-wrapper flex justify-center">
        {this.state.isActivityDetailsShow && <ActiveLogDetails />}
        {this.state.isActivityPopupShow && (
          <ActivityLogPopup
            visible={this.state.isActivityPopupShow}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            {...this.props}
          />
        )}
        <div
          className="icon"
          onClick={this.showActivityPopup}
          onMouseOver={this.showActivityDetails}
          onMouseLeave={this.hideActivityDetails}
        >
          <ActivityLogIcon />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const record = ownProps[1];

  return {
    activityLog: getActivityLog(state, record.id),
  };
}


export default connect(mapStateToProps, {})(ActivityLog);