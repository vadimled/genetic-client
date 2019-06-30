import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TumorToolbar.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
import {
  getTumorInfoLocation,
  getTumorInfoMode,
  getTumorInfoPercent,
  getTumorInfoType
} from "Store/selectors";
import { setTumorInfo, setTumorInfoMode } from "Actions/variantsActions";
import TumorInfoSelect from "GenericComponents/tumorInfoSelect";
import { TUMOR_LOCATION, TUMOR_TYPE } from "Utils/constants";

class TumorToolbar extends Component {
  handelClose = () => {
    this.props.setTumorInfoMode(false);
  };

  handelTumorTypeSelect = val => {
    this.props.setTumorInfo({ type: val });
  };

  handelTumorLocationSelect = val => {
    this.props.setTumorInfo({ location: val });
  };

  render() {
    const { type, location, sidebarToggle } = this.props;
    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        <div className="tumor-info-wrapper">
          <TumorInfoSelect
            label={"Tumor type: "}
            dataSource={TUMOR_TYPE}
            info={type}
            placeholder="Missing type"
            onAction={this.handelTumorTypeSelect}
          />
          <TumorInfoSelect
            label={"Location: "}
            dataSource={TUMOR_LOCATION}
            info={location}
            placeholder="Missing location"
            onAction={this.handelTumorLocationSelect}
          />
        </div>
        <div
          className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <div className="icon" onClick={this.handelClose}>
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
    isTumorInfo: getTumorInfoMode(state),
    type: getTumorInfoType(state),
    location: getTumorInfoLocation(state),
    percent: getTumorInfoPercent(state)
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
