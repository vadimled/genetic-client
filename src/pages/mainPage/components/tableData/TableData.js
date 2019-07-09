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
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";
// import VariantTable2 from "../../../../genericComponents/variantTable/VariantTable2";

class TableData extends Component {

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
    setNotes: data => dispatch(setNotes(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
