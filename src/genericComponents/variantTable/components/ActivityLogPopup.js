import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import Tag from "../../tag";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import {connect} from "react-redux";
import {getActivityLog} from "Store/selectors";
import dateFormat from "dateformat";
import { TAG_COLORS, VARIANT_CLASS, ZYGOSITY_OPTIONS } from "../../../utils/constants";


const ActivityLogAction = ({record}) => {

  const {type} = record;

  let prevTagColor = "";

  let currTagColor = "";

  switch (record.titlePrev) {
    case "unclassified":
      prevTagColor = TAG_COLORS.white;
      break;
    case "path":
    case "tier1":
      prevTagColor = TAG_COLORS.red;
      break;
    case "lpath":
    case "tier2":
      prevTagColor = TAG_COLORS.orange;
      break;
    case "vus":
    case "tier3":
      prevTagColor = TAG_COLORS.yellow;
      break;
    case "lben":
    case "tier4":
      prevTagColor = TAG_COLORS.blueLight;
      break;
    case "ben":
      prevTagColor = TAG_COLORS.blue;
      break;
  }

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

  let titlePrev = ""

  let titleCurr = ""

  if(type === "variantClass"){
    titlePrev = VARIANT_CLASS[record.titlePrev].label
    titleCurr = VARIANT_CLASS[record.titleCurr].label

  }
  else if(type === "zygosity"){
    // console.log("--zygosityOption: ", zygosityOption)
    if(record.titlePrev){
      titlePrev = ZYGOSITY_OPTIONS.find(option=> option.value === record.titlePrev).label
      titleCurr = ZYGOSITY_OPTIONS.find(option=> option.value === record.titleCurr).label
      // console.log("--zygosityOption 1: ", zygosityOption)
      // titlePrev = zygosityOption.label
    }else{
      titleCurr = ZYGOSITY_OPTIONS.find(option=> option.value === record.titleCurr).label

    }



  }


  // console.log("--titlePrev: ", titlePrev)

  return(
    <div className="cell border flex items-center justify-between">
      {
        record.titlePrev &&
          <Fragment>
            <div className="flex items-center action-item justify-center">
              {type === "variantClass" && <Tag color={prevTagColor} />}
              <span className="title-prev">
                {titlePrev}
              </span>
            </div>
            <ArrowRight />
          </Fragment>
      }

      <div className="flex items-center action-item justify-center">
        {type === "variantClass" && <Tag color={currTagColor} />}
        <span className="title-curr">
          {titleCurr}
        </span>
      </div>
    </div>
  );
  
};

const ActivityLogPopupTableRecord = ({record}) => {
  console.log(record);
  return(
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

class ActivityLogPopup extends Component {

  render() {
    const { visible, handleOk, handleCancel, activityLog } = this.props;
    // const data = this.props[1];

    console.log("--activityLog: ", activityLog);

    return (
      <Modal
        width={1000}
        title="Activity log"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk} size={"large"}>
            Close
          </Button>
        ]}
      >
        <div className="activity-items-table">
          <div className="table-header">
            <div className="cell header-cell border">Role</div>
            <div className="cell header-cell border">Action</div>
            <div className="cell header-cell border">Timestamp</div>
          </div>
          {
            activityLog.map((record, i)=> <ActivityLogPopupTableRecord key={i} record={record}/>)
          }

        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const record = ownProps[1];

  return {
    activityLog: getActivityLog(state, record.id),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
//     handleZygosity: (data) => dispatch(handleZygosity(data)),
//     handleVariantClass: (data) => dispatch(handleVariantClass(data)),
//     updateActivityLog: data => dispatch(updateActivityLog(data))
//   };
// }

export default connect(mapStateToProps, {})(ActivityLogPopup);