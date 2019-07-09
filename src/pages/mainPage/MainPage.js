import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import Toolbar from "./components/toolbar";
import SidebarFilters from "./components/sidebarFilters";
import TableData from "./components/tableData";
import IgvAlertPopup from './components/igvAlertPopup';
import SendForConfirmationPopup from './components/sendForConfirmationPopup';
import UncheckConfirmationPopup from './components/uncheckConfirmationPopup';
import Alert from 'GenericComponents/alert';
import TumorToolbar from "Pages/mainPage/components/tumorToolbar";
import {
  getIgvAlertShow,
  getOnConfirmation,
  getUncheckConfirmationData ,
  getAlertStatus,
  getAlertTitle,
  getAlertMessage,
  getTumorInfoMode
} from "Store/selectors";
import {
  setAlert
} from "Actions/alertActions";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: true
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  render() {
    const { sidebarToggle } = this.state;
    const {
      isIgvAlertShow,
      isOnConfirmation,
      uncheckConfirmationData,
      alertStatus,
      alertTitle,
      alertMessage,
      setAlert,
      showTumorInfo
    } = this.props;

    return (
      <div className={style["main-page"]}>
        <div
          className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <SideBarLayout handleClick={this.handleClick} mode={sidebarToggle}>
            <SidebarFilters />
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <div className={cn(["tumor-toolbar-collapse", { out: showTumorInfo }])}>
            <TumorToolbar sidebarToggle={sidebarToggle} />
          </div>
          <div className={cn(["toolbar-collapse", { shadow: showTumorInfo }])}>
            <Toolbar sidebarToggle={sidebarToggle} />
          </div>
          <TableData />
        </div>
        {!!isIgvAlertShow && <IgvAlertPopup />}
        {!!isOnConfirmation && <SendForConfirmationPopup />}
        {!!uncheckConfirmationData && <UncheckConfirmationPopup />}
        {!!alertStatus && <Alert
          status={alertStatus}
          title={alertTitle}
          message={alertMessage}
          onClose={setAlert.bind(null, null)}
        />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isIgvAlertShow: getIgvAlertShow(state),
    isOnConfirmation: getOnConfirmation(state),
    uncheckConfirmationData: getUncheckConfirmationData(state),
    alertStatus: getAlertStatus(state),
    alertTitle: getAlertTitle(state),
    alertMessage: getAlertMessage(state),
    showTumorInfo: getTumorInfoMode(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setAlert: data => dispatch(setAlert(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
