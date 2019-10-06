import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportVariantsTable from "./components/finalReportVariantsTable";
import { Link } from "react-router-dom";



class FinalReportPage extends Component {

  render() {
    // const {} = this.props;

    return (
      <div className={`${style["final-report-page-wrapper"]} flex justify-between`}>

        <div className="main-content">
          <div className='flex justify-start'>
            <Link to="/">
            Back
            </Link>
          </div>
          <div className="final-report-actionable">
            1 table
          </div>
          <div className="final-report-variants">
            <FinalReportVariantsTable />
          </div>
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