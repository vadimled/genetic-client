import React from "react";
import ActivityLogAction from "./ActivityLogAction";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import PropTypes from 'prop-types';
import { dateOptions, timeOptions } from "Utils/helpers";

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
  console.log(timestamp);
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
      />
      <div className="cell border flex items-center justify-center">
        {new Date(timestamp).toLocaleDateString("en-GB", dateOptions)
          .split(" ")
          .join("/")} {new Date(timestamp).toLocaleTimeString("en-GB", timeOptions)}
      </div>
    </div>
  );
};

ActivityLogPopupTableRecord.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ActivityLogPopupTableRecord;
