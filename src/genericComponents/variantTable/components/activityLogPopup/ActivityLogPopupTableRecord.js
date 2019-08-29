import React from "react";
import dateFormat from "dateformat";
import ActivityLogAction from "./ActivityLogAction";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import PropTypes from 'prop-types';

const ActivityLogPopupTableRecord = ({ record: {
  action: {
    prev_val = '',
    curr_val = '',
    field = ''
  } = {},
  user: {
    name = 'No name'
  } = {},
  timestamp = ''
} }) => {
  return (
    <div className="flex flex-wrap content-start">
      <div className="cell border flex items-center justify-center">
        <AvatarName />
        <span className="user-name">{name}</span>
      </div>
      <ActivityLogAction
        prevVal={prev_val}
        currVal={curr_val}
        field={field}
        // record={record}
      />
      <div className="cell border flex items-center justify-center">
        {dateFormat(timestamp, "H:MM, d mmmm yyyy")}
      </div>
    </div>
  );
};

ActivityLogPopupTableRecord.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ActivityLogPopupTableRecord;
