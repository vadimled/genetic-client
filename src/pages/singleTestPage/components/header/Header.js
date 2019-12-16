import React, { Component, Fragment } from "react";
import style from "./Header.module.scss";
import HeaderIcon from "GenericComponents/headerIcon";
import { ReactComponent as NotificationIcon } from "Assets/notifications.svg";
import { ReactComponent as InfoIcon } from "Assets/info.svg";
import User from "Pages/singleTestPage/components/header/components/user";
import { getTestGsid, getTestId, getTumorInfoMode, getTestPhenotype, getTestExportedAt } from "Store/selectors";
import { setTumorInfoMode } from "Actions/testActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { TEXTS } from "Utils/constants";
import { layout } from "Utils/helpers";
import GoBackButton from "Pages/singleTestPage/components/header/components/goBackButton";
import LockImg from 'Assets/lock.svg';

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

  renderInfoIcon = () => {
    const { showTumorInfo } = this.props;
    return (
      <div className="right-side-item">
        <HeaderIcon
          isActive={showTumorInfo}
          customClassName={"info"}
          icon={<InfoIcon />}
          handelOnClick={this.handelInfo}
        />
      </div>
    );
  };

  render() {
    const {
      testId,
      location,
      gsId,
      phenotype ,
      isTestExported
    } = this.props;

    return (
      <div className={style["header-wrapper"]}>
        <div className="flex justify-start flex-row items-center">
          <div className="left-wrapper">
            Analyst
          </div>
          <div className="left-wrapper">
            <GoBackButton
              pathname={location.pathname}
              testId={testId}
              text={TEXTS.goBack}
              className={"go-back-button"}
            />
          </div>
          {!layout(location.pathname, TEXTS.testsPage) && (
            <Fragment>
              <div className="left-wrapper">{gsId}</div>
              {isTestExported && <div className="left-wrapper">
                <div
                  className="lock-img"
                  style={{
                    backgroundImage: `url(${LockImg})`
                  }}
                />
              </div>}
              <div className="left-wrapper">{phenotype}</div>
            </Fragment>
          )}
        </div>
        <div className="flex justify-start flex-row">
          {!this.isMVP
            ? this.renderInfoIcon()
            : layout(location.pathname, TEXTS.singleTestPage) &&
              this.renderInfoIcon()
          }
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
    testId: getTestId(state),
    gsId: getTestGsid(state),
    phenotype: getTestPhenotype(state),
    isTestExported: !!getTestExportedAt(state),
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
