import React from "react";
import dateFormat from "dateformat";
import ActivityLogAction from "./ActivityLogAction";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import PropTypes from 'prop-types';

const ActivityLogPopupTableRecord = ({ record }) => {
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

ActivityLogPopupTableRecord.propTypes = {
  record: PropTypes.object,
};

export default ActivityLogPopupTableRecord;