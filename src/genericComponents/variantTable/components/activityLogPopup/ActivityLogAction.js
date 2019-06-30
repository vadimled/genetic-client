import React, { Fragment } from "react";
import { getCurrTagColor, getPrevTagColor, getTitleCurr, getTitlePrev } from "../../../../utils/helpers";
import { Tooltip } from "antd";
import Tag from "../../../tag/Tag";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import PropTypes from 'prop-types';


const ActivityLogAction = ({ record }) => {
  const { type } = record;

  if (type === "notes") {
    return (
      <div className="cell border">
        <Tooltip placement="topLeft" title={getTitleCurr(type, record)}>
          <div className="curr-note">
            {getTitleCurr(type, record)}
          </div>
        </Tooltip>
        {getTitlePrev(type, record) && (
          <Tooltip placement="topLeft" title={getTitlePrev(type, record)}>
            <div className="prev-note">
              {getTitlePrev(type, record)}
            </div>
          </Tooltip>
        )}
      </div>
    );
  }

  return (
    <div className="cell border flex items-center justify-between">
      {record.titlePrev && (
        <Fragment>
          <div className="flex items-center action-item justify-center">
            {type === "variantClass" && <Tag color={getPrevTagColor(record.titlePrev)} />}
            <span className="title-prev">{getTitlePrev(type, record)}</span>
          </div>
          <ArrowRight />
        </Fragment>
      )}

      <div className="flex items-center action-item justify-center">
        {type === "variantClass" && <Tag color={getCurrTagColor(record.titleCurr)} />}
        <span className="title-curr">{getTitleCurr(type, record)}</span>
      </div>
    </div>
  );
};

ActivityLogAction.propTypes = {
  record: PropTypes.object,
};

export default ActivityLogAction;