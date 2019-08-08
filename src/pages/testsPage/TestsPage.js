import React, { Component } from "react";
import style from "./TestsPage.module.scss";
// import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { connect } from "react-redux";
import cn from "classnames";
import SidebarFilters from "../mainPage/components/sidebarFilters/SidebarFilters";
import TableData from "../mainPage/components/tableData/TableData";




class TestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle: true,
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  render() {
    const { sidebarToggle } = this.state;

    return (
      <div className={style["tests-page-wrapper"]}>
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
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >


          <TableData />
        </div>

      </div>
    );
  }
}

TestsPage.propTypes = {};

// const mapStateToProps = state => {
//   return {
//     variantData: getVariantData(state),
//     germlineClassHistory: getHistoryGermline(state),
//     somaticClassHistory: getHistorySomatic(state),
//     externalResources: getExternalResources(state),
//     selectedZygosityType: getZygosityType(state)
//   };
// };
//
// function mapDispatchToProps(dispatch) {
//   return {
//     setResources: data => dispatch(setExternalResources(data)),
//     fetchVariantData: () => dispatch(fetchVariantData()),
//     setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
//     setTestInformation: data => dispatch(setTestInformation(data))
//   };
// }

export default connect(
  null,
  {}
)(TestsPage);
