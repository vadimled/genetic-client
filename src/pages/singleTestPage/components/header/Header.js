import React, { Component, Fragment } from "react";
import style from "./Header.module.scss";
import HeaderIcon from "GenericComponents/headerIcon";
import { ReactComponent as NotificationIcon } from "Assets/notifications.svg";
import { ReactComponent as InfoIcon } from "Assets/info.svg";
import User from "Pages/singleTestPage/components/header/components/user";
import { getTestId, getTumorInfoMode, getVariantPageTestId } from "Store/selectors";
import { setTumorInfoMode } from "Actions/testActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GoBackButton from "Pages/singleTestPage/components/header/components/goBackButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.isMVP = process.env.REACT_APP_MVP_CONFIG === "true";
  }

  handelNotification = e => {
    console.log(e.target);
  };

  handelInfo = () => {
    const { showTumorInfo, setTumorInfoMode } = this.props;
    setTumorInfoMode(!showTumorInfo);
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
            <GoBackButton
              pathname={this.props.location.pathname}
              // to={`/tests/${this.props.testId}`}
              text={`< Go back`}
              className={"go-back-button"}
            />
          </div>
          <div className="left-wrapper">{this.props.testId}</div>
        </div>
        <div className="flex justify-start flex-row">
          <div className="right-side-item">
            <HeaderIcon
              isActive={this.props.showTumorInfo}
              customClassName={"info"}
              icon={<InfoIcon />}
              handelOnClick={this.handelInfo}
            />
          </div>
          {!this.isMVP && (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

// Header.propTypes = {};

const mapStateToProps = state => {
  return {
    showTumorInfo: getTumorInfoMode(state),
    testId: getVariantPageTestId(state) || getTestId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setTumorInfoMode: data => dispatch(setTumorInfoMode(data))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
