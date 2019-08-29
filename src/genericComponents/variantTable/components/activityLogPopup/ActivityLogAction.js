import React, { Fragment } from "react";
import { getCurrTagColor, getPrevTagColor, getTitleCurr, getTitlePrev } from "Utils/helpers";
import { Tooltip } from "antd";
import Tag from "../../../tag/Tag";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import PropTypes from 'prop-types';

const ActivityLogAction = ({ prevVal, currVal, field }) => {
  // const { type } = record;

  if (field === "notes") {
    return (
      <div className="cell border">
        <Tooltip placement="topLeft" title={getTitleCurr({ prevVal, currVal, field })}>
          <div className="curr-note">
            {getTitleCurr({ prevVal, currVal, field })}
          </div>
        </Tooltip>
        {getTitlePrev({ prevVal, field }) && (
          <Tooltip placement="topLeft" title={getTitlePrev({ prevVal, field })}>
            <div className="prev-note">
              {getTitlePrev({ prevVal, field })}
            </div>
          </Tooltip>
        )}
      </div>
    );
  }

  return (
    <div className="cell border flex items-center justify-between">
      {prevVal && (
        <Fragment>
          <div className="flex items-center action-item justify-center">
            {field === "variantClassGermline" || field === "variantClassSomatic" &&
              <Tag color={getPrevTagColor({ prevVal })} />
            }
            <span className="title-prev">{getTitlePrev({ prevVal, field })}</span>
          </div>
          <ArrowRight />
        </Fragment>
      )}

      <div className="flex items-center action-item justify-center">
        {field === "variantClassGermline" || field === "variantClassSomatic" &&
          <Tag color={getCurrTagColor({ currVal })} />
        }
        <span className="title-curr">{getTitleCurr({ prevVal, currVal, field })}</span>
      </div>
    </div>
  );
};

ActivityLogAction.propTypes = {
  prevVal: PropTypes.string,
  currVal: PropTypes.string,
  field: PropTypes.string,
};
ActivityLogAction.defaultProps = {
  prevVal: '',
  currVal: '',
  field: '',
};

export default ActivityLogAction;
