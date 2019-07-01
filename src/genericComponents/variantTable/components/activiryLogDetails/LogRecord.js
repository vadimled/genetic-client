import React from "react";
import dateFormat from "dateformat";
import {
  SOMATIC_CLASS,
  VARIANT_CLASS,
  ZYGOSITY_OPTIONS
} from "../../../../utils/constants";
import PropTypes from 'prop-types';
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import Tag from "../../../tag/Tag";
import { Tooltip } from "antd";
import { getCurrTagColor } from "../../../../utils/helpers";

const LogRecord = ({record}) => {

  const {type} = record;

  let titleCurr = "";

  if(type === "variantClass"){
    titleCurr = VARIANT_CLASS[record.titleCurr]?.label || SOMATIC_CLASS[record.titleCurr]?.label;
  }
  else if(type === "zygosity"){
    titleCurr = ZYGOSITY_OPTIONS.find(option=> option.value === record.titleCurr).label;
  }else if (type === "notes") {
    titleCurr = record.titleCurr;
  }


  // if (type === "notes") {
  //   return (
  //     <div className="cell border">
  //       <Tooltip placement="topLeft" title={titleCurr}>
  //         <div className="curr-note">
  //           {titleCurr}
  //         </div>
  //       </Tooltip>
  //     </div>
  //   );
  // }

  return (
    <div className="record flex justify-between items-center">
      <div className="record__user record__item flex items-center justify-center">
        <AvatarName/>
        <span className="user-name">PA</span>

      </div>
      <div className="record_changed-item record__item flex items-center justify-center">
        {type === "variantClass" && <Tag color={getCurrTagColor(record.titleCurr)} />}
        {
          type === "notes" ?
            <Tooltip placement="topLeft" title={titleCurr}>
              <div className="notes">{titleCurr}</div>
            </Tooltip>
            :
            titleCurr
        }
      </div>
      <div className="record_time record__item flex items-center justify-center">
        {dateFormat(record.time, "H:MM, d mmmm yyyy")}
      </div>
    </div>
  );
};

LogRecord.propTypes = {
  record: PropTypes.object,
};

export default LogRecord;
