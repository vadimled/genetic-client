import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import { ReactComponent as OpenedIcon } from "Assets/openedFiltersPanel.svg";
import { ReactComponent as ClosedIcon } from "Assets/closedFiltersPanel.svg";
import Toolbar from "./components/toolbar";
import SidebarFilters from "./components/sidebarFilters";
import TableData from "./components/tableData";
import IgvAlertPopup from "./components/igvAlertPopup";
import SendForConfirmationPopup from "./components/sendForConfirmationPopup";
import UncheckConfirmationPopup from "./components/uncheckConfirmationPopup";
import Alert from "GenericComponents/alert";
import TumorToolbar from "Pages/mainPage/components/tumorToolbar";
import {
  getIgvAlertShow,
  getOnConfirmation,
  getUncheckConfirmationData,
  getAlertStatus,
  getAlertTitle,
  getAlertMessage,
  getTumorInfoMode,
  getLoading,
  getMutationTypesValues,
  getTestId
} from "Store/selectors";
import { setAlert } from "Actions/alertActions";
import { fetchTestMetadata } from "Actions/testActions";
import Spinner from "GenericComponents/spinner";
import { withRouter } from "react-router-dom";
import { fetchTableData } from "Actions/tableActions";

class MainPage extends Component {
  constructor(props) {
    super(props);
    props.fetchTestMetadata(props?.match?.params?.testId);

    this.state = {
      sidebarToggle: true
    };
  }
  
  componentDidMount() {
    const {fetchTableData, testId, match} = this.props;
    console.log(testId);
    
    fetchTableData({
      testId: match?.params?.testId,
      mutation: "dna" // getMutationTypesValues
    });
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
      showTumorInfo,
      isLoading
    } = this.props;

    return (
      <div className={style["main-page"]}>
        <div
          className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <SideBarLayout
            handleClick={this.handleClick}
            mode={sidebarToggle}
            iconOpened={<OpenedIcon />}
            iconClosed={<ClosedIcon />}
          >
            <SidebarFilters />
          </SideBarLayout>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={cn([
              "main-content-wrapper",
              { "sidebar-open": sidebarToggle }
            ])}
          >
            <div
              className={cn(["tumor-toolbar-collapse", { out: showTumorInfo }])}
            >
              <TumorToolbar sidebarToggle={sidebarToggle} />
            </div>
            <div
              className={cn(["toolbar-collapse", { shadow: showTumorInfo }])}
            >
              <Toolbar sidebarToggle={sidebarToggle} />
            </div>
            <TableData />
          </div>
        )}
        {!!isIgvAlertShow && <IgvAlertPopup />}
        {!!isOnConfirmation && <SendForConfirmationPopup />}
        {!!uncheckConfirmationData && <UncheckConfirmationPopup />}
        {!!alertStatus && (
          <Alert
            status={alertStatus}
            title={alertTitle}
            message={alertMessage}
            onClose={setAlert.bind(null, null)}
          />
        )}
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
    showTumorInfo: getTumorInfoMode(state),
    isLoading: getLoading(state),
    getMutationTypesValues: getMutationTypesValues(state),
    testId: getTestId(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setAlert: data => dispatch(setAlert(data)),
    fetchTableData: data => dispatch(fetchTableData(data)),
    fetchTestMetadata: id => dispatch(fetchTestMetadata(id))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage));
