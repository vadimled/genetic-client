import React, { Component } from "react";
import style from "./Header.module.scss";
import HeaderIcon from "GenericComponents/headerIcon";
import { ReactComponent as NotificationIcon } from "Assets/notifications.svg";
import { ReactComponent as InfoIcon } from "Assets/info.svg";
import User from "Pages/mainPage/components/header/components/user";
import { getTumorInfoMode } from "Store/selectors";
import { setTumorInfoMode } from "Actions/variantsActions";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

class Header extends Component {
  handelNotification = e => {
    console.log(e.target);
  };

  handelInfo = () => {
    this.props.setTumorInfoMode(true);
  };

  render() {
    return (
      <div className={style["header-wrapper"]}>
        <div className="flex justify-start flex-row">
          <div className="left-wrapper">
            {/* TODO: Logo place*/}
            LOGO
          </div>
          <div className="left-wrapper">
            {/* TODO: Test ID place*/}
            GS00115NP050818_TS1_01
          </div>
        </div>
        <div className="flex justify-start flex-row">
          <div className="right-side-item">
            <HeaderIcon
              isActive={this.props.isTumorInfo}
              customClassName={"info"}
              icon={<InfoIcon />}
              handelOnClick={this.handelInfo}
            />
          </div>
          <div className="right-side-item">
            <HeaderIcon
              // isActive
              customClassName={"notification"}
              icon={<NotificationIcon />}
              handelOnClick={this.handelNotification}
            />
          </div>
          <div className="right-side-item">
            <User
              userName={"vadim malckin"}
              avatarUrl={`https://randomuser.me/api/portraits/men/34.jpg`}
            />
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {};

const mapStateToProps = state => {
  return {
    isTumorInfo: getTumorInfoMode(state),
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
)(Header);

