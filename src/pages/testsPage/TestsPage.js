import React, { Component } from "react";
import style from "./TestsPage.module.scss";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { connect } from "react-redux";
import cn from "classnames";
import { fetchTests } from "../../store/actions/testsActions";
import { getTests } from "../../store/selectors";
import { Link } from "react-router-dom";




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
    const { tests } = this.props;

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
          {
            tests.map(test => (
              <Link
                key={test.id}
                to={`tests/${test.id}`}
              >
                <h1>gsid: {test.gsid}</h1>
                <h1>panel_type: {test.panel_type}</h1>
              </Link>
            ))
          }


        </div>

      </div>
    );
  }
}

TestsPage.propTypes = {};

const mapStateToProps = state => {
  return {
    tests: getTests(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTests: () => dispatch(fetchTests()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestsPage);
