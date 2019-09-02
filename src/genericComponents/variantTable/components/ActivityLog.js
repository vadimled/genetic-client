import React, { Component } from "react";
import ActiveLogDetails from "./activiryLogDetails/ActivityLogDetails";
import ActivityLogPopup from "./activityLogPopup/ActivityLogPopup";
import { ReactComponent as ActivityLogIcon } from "Assets/activityLogIcon.svg";
import PropTypes from "prop-types";
import cn from "classnames";

class ActivityLog extends Component {
  state = {
    isActivityDetailsShow: false,
    isActivityPopupShow: false
  };

  showActivityPopup = () => {
    this.setState({ isActivityPopupShow: true });
    this.hideActivityDetails();
  };

  showActivityDetails = () => {
    this.setState({ isActivityDetailsShow: true });
  };

  hideActivityDetails = () => {
    this.setState({ isActivityDetailsShow: false });
  };

  handleOk = () => {
    this.setState({ isActivityPopupShow: false });
  };

  handleCancel = () => {
    this.setState({ isActivityPopupShow: false });
  };

  render() {
    const { activityLog } = this.props;

    return (
      <div
        data-testid={`activity-log-wrapper`}
        className={cn([
          "activity-icon-wrapper flex justify-center",
          { disabled: !activityLog.length }
        ])}
        onMouseLeave={this.hideActivityDetails}
        onMouseEnter={this.showActivityDetails}
      >
        {this.state.isActivityDetailsShow && (
          <ActiveLogDetails
            activityLog={activityLog}
            hideActivityDetails={this.hideActivityDetails}
          />
        )}
        {this.state.isActivityPopupShow && (
          <ActivityLogPopup
            visible={this.state.isActivityPopupShow}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            activityLog={activityLog}
          />
        )}
        <div data-testid={`activity-log-icon`} onClick={this.showActivityPopup}>
          <ActivityLogIcon />
        </div>
      </div>
    );
  }
}

ActivityLog.propTypes = {
  activityLog: PropTypes.array
};
ActivityLog.defaultProps = {
  activityLog: []
};

export default ActivityLog;
