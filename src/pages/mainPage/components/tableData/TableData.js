import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import EmptyState from "GenericComponents/emptyState";
import {
  getFilteredData,
  checkIsAllRowSelected
} from "Store/selectors";
import {
  handleSelectedRow,
  handleSelectAllRows,
  handleZygosity,
  handleVariantClass,
  handleConfirmationStatus,
  setNotes
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";
import {
  handleUncheckConfirmationData
} from "Actions/confirmationActions";

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
      setNotes
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
            setNotes={setNotes}
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
    // notes: getNotes(state, owenProps?.id)
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
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    setNotes: data => dispatch(setNotes(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
