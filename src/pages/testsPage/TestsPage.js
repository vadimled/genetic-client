import React, { Component } from "react";
import style from "./TestsPage.module.scss";
import { connect } from "react-redux";
import cn from "classnames";
import { fetchTests } from "Store/actions/testsActions";
import { getLoadingStatus, getTests } from "Store/selectors";
import { Link } from "react-router-dom";
import { dateOptions, timeOptions, capitalizeFirstLetter } from "Utils/helpers";
import Spinner from "GenericComponents/spinner/Spinner";

class TestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle: true
    };
  }

  componentDidMount() {
    this.props.fetchTests();
  }

  render() {
    const { sidebarToggle } = this.state;
    const { tests, isLoading } = this.props;

    return (
      <div className={style["tests-page-wrapper"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={cn([
              "main-content-wrapper",
              { "sidebar-open": sidebarToggle }
            ])}
          >
            {tests.map(test => (
              <div key={test.id} className="flex">
                <div className="link-to-coverage flex items-center">
                  <Link
                    to={`/coverage/${test.id}`}
                    data-testid={`tests-${test.id}`}
                  >
                    Coverage
                  </Link>
                </div>
                <Link
                  to={`/tests/${test.id}`}
                  data-testid={`tests-${test.id}`}
                >
                  <div className="test-wrapper">
                    <div className="flex">
                      <div className="text-content">
                        <div className="title">GSID</div>
                        <div className="content">{test.gsid}</div>
                      </div>
                      <div className="text-content">
                        <div className="title">PANEL TYPE</div>
                        <div className="content">
                          {capitalizeFirstLetter(test.panel_type)}
                        </div>
                      </div>
                      <div className="text-content">
                        <div className="title">CREATED AT</div>
                        <div className="content">
                          {new Date(test.created_at)
                            .toLocaleDateString("en-GB", dateOptions)
                            .split(" ")
                            .join("/")}{" "}
                          {new Date(test.created_at).toLocaleTimeString(
                            "en-GB",
                            timeOptions
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

              </div>
            ))}





          </div>
        )}
        ;
      </div>
    );
  }
}

TestsPage.propTypes = {};

const mapStateToProps = state => {
  return {
    isLoading: getLoadingStatus(state),
    tests: getTests(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTests: () => dispatch(fetchTests())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestsPage);
