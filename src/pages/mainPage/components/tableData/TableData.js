import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import {
  getFilteredData
} from "Store/selectors";
import {
  handleSelectedRow,
  handleZygosity,
  handleVariantClass
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";

class TableData extends Component {
  render() {
    const {
      filteredData,
      handleSelectedRow,
      handleZygosity,
      handleVariantClass,
      goToChrPositionIgv
    } = this.props;

    return (
      <TableLayout>
        <VariantTable
          data={filteredData}
          handleSelectedRow={handleSelectedRow}
          handleZygosity={handleZygosity}
          handleVariantClass={handleVariantClass}
          handelChrPosition={goToChrPositionIgv}
        />
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredData: getFilteredData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
