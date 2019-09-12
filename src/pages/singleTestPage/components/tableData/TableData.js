import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import EmptyState from "GenericComponents/emptyState";
import {
  getFilteredData,
  checkIsAllRowSelected,
  getSelectedRows,
  getSortOrder,
  getSortParam,
  getTestId,
  getTumorInfoMode,
} from "Store/selectors";
import {
  handleSelectedRow,
  handleSelectAllRows,
  handleZygosity,
  handleVariantClass,
  handleConfirmationStatus,
  handleUncheckConfirmationData,
  setNotes,
  setSort,
  saveUserPreferencesSorting,
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";
import { UNCHECK } from "Utils/constants";

class TableData extends Component {

  handleSort = (data) => {
    const { setSort, saveUserPreferencesSorting, testId } = this.props;
    setSort(data);
    saveUserPreferencesSorting({ testId, sorting: data });
  };

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
      sortOrder,
      sortParam,
      testId,
      showTumorInfo,
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
            setSort={this.handleSort}
            sortOrder={sortOrder}
            sortParam={sortParam}
            testId={testId}
            tumorInfoPanel={showTumorInfo}
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
    selectedRows: getSelectedRows(state),
    sortOrder: getSortOrder(state),
    sortParam: getSortParam(state),
    testId: getTestId(state),
    showTumorInfo: getTumorInfoMode(state)
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
      else if (data?.status === UNCHECK) {
        dispatch(handleUncheckConfirmationData(data));
      }
    },
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    setNotes: data => dispatch(setNotes(data)),
    setSort: data => dispatch(setSort(data)),
    saveUserPreferencesSorting: data => dispatch(saveUserPreferencesSorting(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
