import React from "react";
import PropTypes from 'prop-types';
import LogRecord from "./LogRecord";

const ActiveLogDetails = ({activityLog}) => (
  <div
    className="activity-log-details"
    // onMouseLeave={hideActivityDetails}
    data-testid={`activity-log-details`}
  >
    {
      activityLog.map((record, i) => (
        <LogRecord key={i} record={record} />
      ))
    }
  </div>
);

ActiveLogDetails.propTypes = {
  activityLog: PropTypes.array,
  hideActivityDetails: PropTypes.func.isRequired
};
ActiveLogDetails.defaultProps = {
  activityLog: []
};

export default ActiveLogDetails;
