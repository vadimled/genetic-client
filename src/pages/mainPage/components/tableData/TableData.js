import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
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
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";

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
      isAllRowSelected
    } = this.props;

    return (
      <TableLayout>
        <VariantTable
          data={filteredData}
          handleSelectedRow={handleSelectedRow}
          handleSelectAllRows={handleSelectAllRows}
          handleZygosity={handleZygosity}
          handleVariantClass={handleVariantClass}
          handelChrPosition={goToChrPositionIgv}
          handleConfirmationStatus={handleConfirmationStatus}
          isAllRowSelected={isAllRowSelected}
        />
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredData: getFilteredData(state),
    isAllRowSelected: checkIsAllRowSelected(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: (data) => dispatch(handleSelectAllRows(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data)),
    handleConfirmationStatus: (data) => dispatch(handleConfirmationStatus(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
