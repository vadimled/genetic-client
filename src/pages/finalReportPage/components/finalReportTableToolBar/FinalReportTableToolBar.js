import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import cn from "classnames

import Search from "GenericComponents/search";

import style from "./FinalReportTableToolBar.module.scss";

class FinalReportTableToolBar extends Component {

  render() {
    return (
      <div className={style["toolbar-wrapper"]}>
        <Fragment>
          <div className="left-wrapper">
            <div className="search-field-wrapper">
              <Search />
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

FinalReportTableToolBar.propTypes = {

};

const mapStateToProps = () => {
  return {};
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportTableToolBar);
