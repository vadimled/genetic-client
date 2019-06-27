import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./TumorToolbar.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
import { getTumorInfoMode } from "Store/selectors";
import { setTumorInfoMode } from "Actions/variantsActions";

class TumorToolbar extends Component {
  handelClose = () => {
    this.props.setTumorInfoMode(false);
  };
  render() {
    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        TumorToolbar
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
