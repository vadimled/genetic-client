import React from "react";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";


const ActiveLogDetails = ({activityLog}) => {

  console.log(activityLog);

  return (
    <div className="active-log-details">
      <div className="record flex justify-between items-center">
        <div className="record__user record__item">
          <div className="divider flex items-center">
            <AvatarName/>
            <span className="user-name">PA</span>
          </div>
        </div>
        <div className="record_changed-item record__item">
          <div className="divider flex items-center">Hemi</div>
        </div>
        <div className="record_time record__item">13:37, 4 June 2019</div>
      </div>
      <div className="record flex justify-between items-center">
        <div className="record__user record__item">
          <div className="divider flex items-center">
            <AvatarName/>
            <span className="user-name">PA</span>
          </div>
        </div>
        <div className="record_changed-item record__item">
          <div className="divider flex items-center">Hemi</div>
        </div>
        <div className="record_time record__item">13:37, 4 June 2019</div>
      </div>
      <div className="record flex justify-between items-center">
        <div className="record__user record__item">
          <div className="divider flex items-center">
            <AvatarName/>
            <span className="user-name">PA</span>
          </div>
        </div>
        <div className="record_changed-item record__item">
          <div className="divider flex items-center">Hemi</div>
        </div>
        <div className="record_time record__item">13:37, 4 June 2019</div>
      </div>
    </div>
  );

};

export default ActiveLogDetails;