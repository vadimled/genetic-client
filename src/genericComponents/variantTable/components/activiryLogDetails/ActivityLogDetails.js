import React from "react";
import PropTypes from 'prop-types';
import LogRecord from "./LogRecord";


const ActiveLogDetails = ({activityLog}) => (
  <div className="active-log-details">
    {
      activityLog.map((record, i) => (
        <LogRecord key={i} record={record} />
      ))
    }
  </div>
);

ActiveLogDetails.propTypes = {
  activityLog: PropTypes.array,
  hideActivityDetails: PropTypes.func
};

export default ActiveLogDetails;