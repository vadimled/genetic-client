import React, { Component } from "react";
import ActiveLogDetails from "./ActivityLogDetails";
import ActivityLogPopup from "./ActivityLogPopup";
import { ReactComponent as ActivityLogIcon } from "Assets/activityLogIcon.svg";

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
    console.log("--activity props: ", this.props);

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

export default ActivityLog;