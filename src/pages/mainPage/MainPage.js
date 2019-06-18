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
import { getIgvAlertShow, getOnConfirmation } from "Store/selectors";

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
    const { isIgvAlertShow, isOnConfirmation } = this.props;

    return (
      <div className={style["main-page"]}>
        <div className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}>
          <SideBarLayout handleClick={this.handleClick} mode={sidebarToggle}>
            <SidebarFilters />
          </SideBarLayout>
        </div>
        <div className={cn(["main-content-wrapper", { "sidebar-open": sidebarToggle }])}>
          <Toolbar sidebarToggle={sidebarToggle} />
          <TableData />
        </div>
        {!!isIgvAlertShow && <IgvAlertPopup />}
        {!!isOnConfirmation && <SendForConfirmationPopup />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isIgvAlertShow: getIgvAlertShow(state),
    isOnConfirmation: getOnConfirmation(state),
  };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

