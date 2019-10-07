import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import { getSelectedVariants } from "Store/selectors";
import { removeSelectedTableRow } from "Actions/finalReportAction";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import { getDnaVariantsAsArray } from "../../store/selectors";
import { Button } from "antd";

class FinalReportPage extends Component {
  handleRemoveSelectedTableRow = val => {
    console.log(val);
    this.props.removeSelectedTableRow(val);
  };

  render() {
    const { selectedData, filteredDnaVariants } = this.props;

    return (
      <div
        className={`${style["final-report-page-wrapper"]} flex justify-between`}
      >
        <div className="main-content">
          <div className="flex justify-start">
            <Link to="/">Back</Link>
          </div>
          <div className="final-report-actionable">
            <FinalReportActionableTable
              dataSource={selectedData}
              remove={this.handleRemoveSelectedTableRow}
            />
          </div>
          <div className="final-report-variants">
            <div className="flex justify-end">
              <Button>MOVE TO ACTIONABILITIES</Button>
            </div>
            <FinalReportVariantsTable filteredDnaVariants={filteredDnaVariants} />
          </div>
        </div>
        <div className="sidebar">Sidebar</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedData: getSelectedVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state)
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
