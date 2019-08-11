import React, { Component } from "react";
import style from "./TestsPage.module.scss";
// import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { connect } from "react-redux";
import cn from "classnames";
// import SidebarFilters from "../mainPage/components/sidebarFilters/SidebarFilters";
import { fetchTests } from "../../store/actions/testsActions";
import TestsTable from "./components/TestsTable";




class TestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle: true,
    };
  }

  componentDidMount() {
    this.props.fetchTests();
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
            <h1>Sidebar</h1>
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <TestsTable />
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
function mapDispatchToProps(dispatch) {
  return {
    fetchTests: () => dispatch(fetchTests()),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TestsPage);
