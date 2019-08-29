import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TumorToolbar.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
import {
  getTestId,
  getTumorInfoLocation,
  getTumorInfoMode,
  getTumorInfoPercent,
  getTumorInfoType
} from "Store/selectors";
import { setTumorInfo, setTumorInfoMode } from "Actions/testActions";
import TumorInfoSelect from "Pages/singleTestPage/components/tumorToolbar/components/tumorInfoSelect";
import TumorInfoPercent from "Pages/singleTestPage/components/tumorToolbar/components/tumorInfoPercent";
import { TUMOR_LOCATION, TUMOR_TYPE } from "Utils/constants";

class TumorToolbar extends Component {
  handelClose = () => {
    this.props.setTumorInfoMode(false);
  };

  handelTumorTypeSelect = value => {
    const { testId, setTumorInfo } = this.props;
    setTumorInfo({testId, name: "type", value });
  };

  handelTumorLocationSelect = value => {
    const { testId, setTumorInfo } = this.props;
    setTumorInfo({testId, name: "location", value });
  };
  
  handelTumorPercentSelect = value => {
    const { testId, setTumorInfo } = this.props;
    setTumorInfo({testId, name: "cancer_cell_percentage", value });
  };

  render() {
    const { type, location, percent, sidebarToggle } = this.props;

    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        <div className="tumor-info-wrapper">
          <TumorInfoSelect
            name={"type"}
            label={"Tumor type: "}
            dataSource={TUMOR_TYPE}
            value={type}
            placeholder="Missing type"
            onAction={this.handelTumorTypeSelect}
          />
          <TumorInfoSelect
            name={"location"}
            label={"Location: "}
            dataSource={TUMOR_LOCATION}
            value={location}
            placeholder="Missing location"
            onAction={this.handelTumorLocationSelect}
          />
          <TumorInfoPercent
            label={"% Cancer Cells: "}
            value={percent}
            placeholder="Missing %"
            onAction={this.handelTumorPercentSelect}
          />
        </div>
        <div
          className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <div className="icon" data-testid={`tumor-panel-close-icon`} onClick={this.handelClose}>
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  }
}

TumorToolbar.propTypes = {
  sidebarToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showTumorInfo: getTumorInfoMode(state),
    type: getTumorInfoType(state),
    location: getTumorInfoLocation(state),
    percent: getTumorInfoPercent(state),
    testId: getTestId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setTumorInfoMode: data => dispatch(setTumorInfoMode(data)),
    setTumorInfo: data => dispatch(setTumorInfo(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TumorToolbar);
