import React from "react";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
// import { ReactComponent as StatusConfirmed } from "Assets/statusConfirmed.svg";
// import { ReactComponent as StatusNotConfirmed } from "Assets/statusNotConfirmed.svg";
// import { ReactComponent as StatusPending } from "Assets/statusPending.svg";
import dateFormat from "dateformat";
import Tag from "../../tag/Tag";
import { Tooltip } from "antd";


// const StatusIcon = ({status}) => {
//   if(status === "pending"){
//     return <StatusPending/>;
//   }
//   if(status === "confirmed"){
//     return <StatusConfirmed/>;
//   }
//   if(status === "notConfirmed"){
//     return <StatusNotConfirmed/>;
//   }
//   return null;
// };

const LogRecord = ({record}) => {

  const {type, currTagColor, titleCurr} = record;

  return (
    <div className="record flex justify-between items-center">
      <div className="record__user record__item">
        <div className="divider flex items-center">
          <AvatarName/>
          <span className="user-name">PA</span>
        </div>
      </div>
      <div className="record_changed-item record__item">
        {
          type === "notes" ?
            <div className="divider flex items-center notes">
              <Tooltip placement="topLeft" title={titleCurr}>
                {titleCurr}
              </Tooltip>
            </div>
            :
            <div className="divider flex items-center">
              {type === "variantClass" && <Tag color={currTagColor} />}
              <div>{titleCurr}</div>
            </div>
        }

      </div>
      <div className="record_time record__item">
        {dateFormat(record.time, "H:MM, d mmmm yyyy")}
      </div>
    </div>
  );
};


const ActiveLogDetails = ({activityLog, hideActivityDetails}) => (
  <div className="active-log-details" onMouseLeave={hideActivityDetails}>
    {
      activityLog.map((record, i) => (
        <LogRecord key={i} record={record} />
      ))
    }
  </div>
    



);

export default ActiveLogDetails;