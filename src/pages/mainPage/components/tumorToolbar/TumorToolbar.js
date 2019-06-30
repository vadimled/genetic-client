import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TumorToolbar.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
import { getTumorInfoMode } from "Store/selectors";
import { setTumorInfoMode } from "Actions/variantsActions";
import TumorInfoSelect from "GenericComponents/tumorInfoSelect";
import { TUMOR_TYPE } from "Utils/constants";


class TumorToolbar extends Component {
 
  handelClose = () => {
    this.props.setTumorInfoMode(false);
  };
  
  render() {
    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        <div className="tumor-info-wrapper">
          <TumorInfoSelect
            label={"Tumor type: "}
            dataSource={TUMOR_TYPE}/>
        </div>
        <div
          className={cn([
            "right-wrapper",
            { "sidebar-open": this.props.sidebarToggle }
          ])}
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
    isTumorInfo: getTumorInfoMode(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setTumorInfoMode: data => dispatch(setTumorInfoMode(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TumorToolbar);
