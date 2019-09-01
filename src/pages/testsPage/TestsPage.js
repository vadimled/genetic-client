import React, { Component } from "react";
import style from "./TestsPage.module.scss";
// import SideBarLayout from "Pages/singleTestPage/components/sideBarLayout";
// import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
// import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { connect } from "react-redux";
import cn from "classnames";
import { fetchTests } from "Store/actions/testsActions";
import { getTests } from "Store/selectors";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "Utils/helpers";




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
    const dateOptions = { day: "2-digit", month: "short", year: "numeric" };
    const timeOptions = { timeStyle: "short"};

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
                    <div className="text-content">
                      <div className="title">GSID</div>
                      <div className="content">{test.gsid}</div>
                    </div>
                    <div className="text-content">
                      <div className="title">PANEL TYPE</div>
                      <div className="content">{capitalizeFirstLetter(test.panel_type)}</div>
                    </div>
                    <div className="text-content">
                      <div className="title">CREATED AT</div>
                      <div className="content">
                        {new Date(test.created_at).toLocaleDateString("en-GB", dateOptions)
                          .split(" ")
                          .join("/")} {new Date(test.created_at).toLocaleTimeString("en-GB", timeOptions)}
                      </div>
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
