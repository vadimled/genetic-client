import React from "react";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import dateFormat from "dateformat";
import { SOMATIC_CLASS, TAG_COLORS, VARIANT_CLASS, ZYGOSITY_OPTIONS } from "../../../utils/constants";
import Tag from "../../tag/Tag";
import { Tooltip } from "antd";
// import { Tooltip } from "antd";


const LogRecord = ({record}) => {

  const {type} = record;

  let currTagColor = "";

  switch (record.titleCurr) {
    case "unclassified":
      currTagColor = TAG_COLORS.white;
      break;
    case "path":
    case "tier1":
      currTagColor = TAG_COLORS.red;
      break;
    case "lpath":
    case "tier2":
      currTagColor = TAG_COLORS.orange;
      break;
    case "vus":
    case "tier3":
      currTagColor = TAG_COLORS.yellow;
      break;
    case "lben":
    case "tier4":
      currTagColor = TAG_COLORS.blueLight;
      break;
    case "ben":
      currTagColor = TAG_COLORS.blue;
      break;
  }


  let titleCurr = "";

  if(type === "variantClass"){
    // console.log("Here: ", VARIANT_CLASS[record.titleCurr]?.label || SOMATIC_CLASS[record.titleCurr].label)
    titleCurr = VARIANT_CLASS[record.titleCurr]?.label || SOMATIC_CLASS[record.titleCurr].label;
    console.log("--titleCurr: ", titleCurr);
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