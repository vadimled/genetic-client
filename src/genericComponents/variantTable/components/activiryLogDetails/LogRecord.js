import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import Tag from "GenericComponents/tag";
import { Tooltip } from "antd";
import { getCurrTagColor, getTitleCurr } from "Utils/helpers";
import { dateOptions, timeOptions } from "Utils/helpers";

const LogRecord = ({ record: {
  action: {
    prev_val: prevVal = '',
    curr_val: currVal = '',
    field = ''
  } = {},
  user: {
    name = 'System'
  } = {},
  timestamp = ''
} }) => {

  return (
    <div className="record flex justify-between items-center">
      <div className="record__user record__item flex items-center justify-center">
        <AvatarName />
        <span className="user-name">{name}</span>
      </div>
      <div className="record_changed-item record__item flex items-center justify-center">
        {field === "variantClassGermline" || field === "variantClassSomatic" && (
          <Tag color={getCurrTagColor({ currVal })} />
        )}
        {field === "notes" ? (
          <Tooltip placement="topLeft" title={getTitleCurr({ prevVal, currVal, field })}>
            <div className="notes">{getTitleCurr({ prevVal, currVal, field })}</div>
          </Tooltip>
        ) : (
          getTitleCurr({ prevVal, currVal, field })
        )}
      </div>
      <div className="record_time record__item flex items-center justify-center">
        {new Date(timestamp).toLocaleDateString("en-GB", dateOptions)
          .split(" ")
          .join("/")} {new Date(timestamp).toLocaleTimeString("en-GB", timeOptions)}
      </div>
    </div>
  );
};

LogRecord.propTypes = {
  prevVal: PropTypes.string,
  currVal: PropTypes.string,
  field: PropTypes.string,
};
LogRecord.defaultProps = {
  prevVal: '',
  currVal: '',
  field: '',
};

export default LogRecord;
