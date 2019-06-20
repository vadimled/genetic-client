import React from "react";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import dateFormat from "dateformat";

// const LogRecord = () => {
//
//
//   return(
//
//   )
// }

const ActiveLogDetails = ({activityLog}) => {

  console.log(activityLog);

  return (

    <div className="active-log-details">

      {
        activityLog.map((record, i) => (
          <div key={i} className="record flex justify-between items-center">
            <div className="record__user record__item">
              <div className="divider flex items-center">
                <AvatarName/>
                <span className="user-name">PA</span>
              </div>
            </div>
            <div className="record_changed-item record__item">
              <div className="divider flex items-center">{record.titleCurr}</div>
            </div>
            <div className="record_time record__item">
              {dateFormat(record.time, "H:MM, d mmmm yyyy")}
            </div>
          </div>
        ))
      }


    </div>
    

  );

};

export default ActiveLogDetails;