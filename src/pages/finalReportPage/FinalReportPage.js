import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./FinalReportPage.module.scss";
import FinalReportActionableTable from "Pages/finalReportPage/components/finalReportActionableTable";
import { getDnaVariantsAsArray, getActionableVariants } from "Store/selectors";
import { removeSelectedTableRow } from "Actions/finalReportAction";
import { Link } from "react-router-dom";
import FinalReportVariantsTable from "Pages/finalReportPage/components/finalReportVariantsTable";
import { Button } from "antd";
import { fetchTestMetadata } from "Store/actions/testActions";
import { handleSelectAllRows, handleSelectedRow, moveToActionableTable } from "Store/actions/finalReportAction";
import { fetchTableData } from "Store/actions/tableActions";
import { getMutationTypesValues, checkIsAllDnaRowsSelected, getSelectedVariants } from "Store/selectors";


class FinalReportPage extends Component {

  constructor(props) {
    super(props);
    props.fetchTestMetadata(props?.match?.params?.testId);
    this.state = {
      isMutationType: false,
    };
  }

  static getDerivedStateFromProps(props, state) {

    if (props.mutationTypesValues.length > 0 && !state.isMutationType) {
      const { fetchTableData, match, mutationTypesValues } = props;
      fetchTableData({
        testId: match?.params?.testId,
        mutation: mutationTypesValues[0]
      });
      return { isMutationType: true };
    }
    return null;
  }

  handleRemoveSelectedTableRow = val => {
    console.log(val);
    this.props.removeSelectedTableRow(val);
  };

  moveToActionabilities = () =>{
    const {selectedVariants, moveToActionableTable} = this.props;

    console.log("--selectedVariants: ", selectedVariants)

    moveToActionableTable(selectedVariants)

  }

  render() {
    const {
      selectedData,
      filteredDnaVariants,
      isAllRowSelected,
      handleSelectAllRows,
      mutationTypesValues,
      handleSelectedRow
    } = this.props;

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
              <Button onClick={this.moveToActionabilities}>MOVE TO ACTIONABILITIES</Button>
            </div>
            <FinalReportVariantsTable
              filteredDnaVariants={filteredDnaVariants}
              isAllRowSelected={isAllRowSelected}
              handleSelectAllRows={handleSelectAllRows}
              mutationTypesValues={mutationTypesValues}
              handleSelectedRow={handleSelectedRow}
            />
          </div>
        </div>
        <div className="sidebar">Sidebar</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedData: getActionableVariants(state),
    filteredDnaVariants: getDnaVariantsAsArray(state),
    mutationTypesValues: getMutationTypesValues(state),
    isAllRowSelected: checkIsAllDnaRowsSelected(state),
    selectedVariants: getSelectedVariants(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeSelectedTableRow: data => dispatch(removeSelectedTableRow(data)),
    fetchTableData: data => dispatch(fetchTableData(data)),
    fetchTestMetadata: testId => dispatch(fetchTestMetadata(testId)),
    handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: (data) => dispatch(handleSelectAllRows(data)),
    moveToActionableTable: (data) => dispatch(moveToActionableTable(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalReportPage);
