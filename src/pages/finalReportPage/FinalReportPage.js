import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import { getSelectedData } from "Store/selectors";
import { removeSelectedTableRow } from "Actions/finalReportAction";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";



class FinalReportPage extends Component {
  handleRemoveSelectedTableRow = val => {
    console.log(val);
    this.props.removeSelectedTableRow(val);
  };
  
  render() {
    const { selectedData } = this.props;
    return (
      <div className={`${style["final-report-page-wrapper"]} flex justify-between`}>

        <div className="main-content">
          <div className='flex justify-start'>
            <Link to="/">
            Back
            </Link>
          </div>
          <div className="final-report-actionable">
            <FinalReportActionableTable
              dataSource={selectedData}
              remove={this.handleRemoveSelectedTableRow}
            />
          </div>
  
          <div className="final-report-variants">
            <FinalReportVariantsTable />
          </div>
        </div>
        {/* <div className="sidebar">
          Sidebar
        </div>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedData: getSelectedData(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeSelectedTableRow: data => dispatch(removeSelectedTableRow(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
