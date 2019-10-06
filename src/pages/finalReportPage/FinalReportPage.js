import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportVariantsTable from "./components/finalReportVariantsTable";
import { Link } from "react-router-dom";
import { getSelectedVariants } from "Store/selectors";



class FinalReportPage extends Component {

  render() {
    const {selectedVariants} = this.props;

    console.log(selectedVariants);

    return (
      <div className={`${style["final-report-page-wrapper"]} flex justify-between`}>

        <div className="main-content">
          <div className='flex justify-start'>
            <Link to="/">
            Back
            </Link>
          </div>
          <div className="final-report-actionable">
            <ul>
              {
                selectedVariants.map(variant => <li key={variant.id}>{variant.gene}</li>)
              }
            </ul>
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

function mapStateToProps(state) {
  return {

    selectedVariants: getSelectedVariants(state)

  };
}

export default connect(mapStateToProps, {})(FinalReportPage);