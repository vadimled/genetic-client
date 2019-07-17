import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import EmptyState from "GenericComponents/emptyState";
import {
  getFilteredData,
  checkIsAllRowSelected,
  getSelectedRows
} from "Store/selectors";
import {
  handleSelectedRow,
  handleSelectAllRows,
  handleZygosity,
  handleVariantClass,
  handleConfirmationStatus,
  handleUncheckConfirmationData,
  setNotes,
  updateActivityLog,
  fetchData, setSort
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";

class TableData extends Component {

  componentDidMount() {
    const {fetchTableData} = this.props;
    fetchTableData();
  }

  render() {
    const {
      filteredData,
      handleSelectedRow,
      handleSelectAllRows,
      handleZygosity,
      handleVariantClass,
      handleConfirmationStatus,
      goToChrPositionIgv,
      isAllRowSelected,
      selectedRows,
      setNotes,
      updateActivityLog,
      setSort
    } = this.props;

    return (
      <TableLayout>
        {!!filteredData?.length &&
          <VariantTable
            data={filteredData}
            handleSelectedRow={handleSelectedRow}
            handleSelectAllRows={handleSelectAllRows}
            handleZygosity={handleZygosity}
            handleVariantClass={handleVariantClass}
            handelChrPosition={goToChrPositionIgv}
            handleConfirmationStatus={handleConfirmationStatus}
            isAllRowSelected={isAllRowSelected}
            selectedRows={selectedRows}
            setNotes={setNotes}
            updateActivityLog={updateActivityLog}
            setSort={setSort}
          />
        }

        {!filteredData?.length && <EmptyState/>}
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredData: getFilteredData(state),
    isAllRowSelected: checkIsAllRowSelected(state),
    selectedRows: getSelectedRows(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: (data) => dispatch(handleSelectAllRows(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data)),
    handleConfirmationStatus: (data) => {
      if (data?.status) {
        dispatch(handleConfirmationStatus(data));
      }
      else if (data?.status === null) {
        dispatch(handleUncheckConfirmationData(data));
      }
    },
    updateActivityLog: data => dispatch(updateActivityLog(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    setNotes: data => dispatch(setNotes(data)),
    fetchTableData: data => dispatch(fetchData(data)),
    setSort: data => dispatch(setSort(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
