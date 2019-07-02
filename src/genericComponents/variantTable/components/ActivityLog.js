import React, { Component } from "react";
import ActiveLogDetails from "./activiryLogDetails/ActivityLogDetails";
import ActivityLogPopup from "./activityLogPopup/ActivityLogPopup";
import { ReactComponent as ActivityLogIcon } from "Assets/activityLogIcon.svg";
import {connect} from "react-redux";
import {getActivityLog} from "Store/selectors";
import PropTypes from 'prop-types';



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

  handleOk = () => {
    this.setState({
      isActivityPopupShow: false
    });
  };

  handleCancel = () => {
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
        {this.state.isActivityDetailsShow &&
        <ActiveLogDetails activityLog={activityLog} hideActivityDetails={this.hideActivityDetails} />}
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
          // onMouseLeave={this.hideActivityDetails}
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

ActivityLog.propTypes = {
  activityLog: PropTypes.array
};

export default connect(mapStateToProps, {})(ActivityLog);