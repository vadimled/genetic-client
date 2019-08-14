import React, { Component, Fragment } from "react";
import style from "./Header.module.scss";
import HeaderIcon from "GenericComponents/headerIcon";
import { ReactComponent as NotificationIcon } from "Assets/notifications.svg";
import { ReactComponent as InfoIcon } from "Assets/info.svg";
import User from "Pages/mainPage/components/header/components/user";
import { getTumorInfoMode, getTestId } from "Store/selectors";
import { setTumorInfoMode } from "Actions/testActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ROUTES } from "Utils/constants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.isMVP = process.env.REACT_APP_MVP_CONFIG === "true";
  }

  isVariantPage = () => {
    const regex = RegExp(ROUTES.isVariantPageRegex);
    return regex.test(this.props.location.pathname);
  };

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
            {this.isVariantPage() && (
              <Link
                to={`/`} // TODO `/test/${this.props.testId}`
                data-testid={`go-back-button`}
                id={`go-back-button`}
                className={"go-back-button"}
              >
                <div className="go-back-button-text">{`< Go back`}</div>
              </Link>
            )}
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
    testId: getTestId(state)
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
