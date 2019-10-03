import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";

class FinalReportPage extends Component {

  render() {
    // const {} = this.props;
    return (
      <div className={`${style["final-report-page-wrapper"]} flex justify-between`}>
        <div className="main-content">
          <div>Table 1</div>
          <div>Table 2</div>
        </div>
        <div className="sidebar">
          Sidebar
        </div>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   return {};
// }


export default connect(null, {})(FinalReportPage);