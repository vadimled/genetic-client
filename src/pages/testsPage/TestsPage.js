import React, { Component } from "react";
import style from "./TestsPage.module.scss";
// import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
// import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
// import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
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
    const options = { day: "2-digit", month: "short", year: "numeric" };

    return (
      <div className={style["tests-page-wrapper"]}>
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
                to={`/tests/${test.id}`}
                data-testid={`tests-${test.id}`}
              >
                <div className="test-wrapper">
                  <div className="text-content flex justify-around">
                    <div>
                      <div>GS ID: {test.gsid}</div>
                      <div>Panel Type: {test.panel_type}</div>
                    </div>
                    <div className="flex items-center">
                      Created at: {new Date(test.created_at).toLocaleDateString("en-GB", options)
                        .split(" ")
                        .join("/")}
                    </div>
                  </div>
                </div>
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
