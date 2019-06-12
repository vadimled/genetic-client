import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import Toolbar from "./components/toolbar";
import SidebarFilters from "./components/sidebarFilters";
import TableData from "./components/tableData";
import IgvAlertPopup from './components/igvAlertPopup';
import { getIgvIsFetchBAMFIleFailed } from "Store/selectors";

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
    const { isFetchBAMFIleFailed } = this.props;

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
        {isFetchBAMFIleFailed && <IgvAlertPopup />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetchBAMFIleFailed: getIgvIsFetchBAMFIleFailed(state),
  };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

