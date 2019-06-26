import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import EmptyState from "GenericComponents/emptyState";
import {
  getSelectedRowKeys,
  getFilteredData
} from "Store/selectors";
import {
  onSelectRowKey,
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
      selectedRowKeys,
      onSelectRowKey,
      handleZygosity,
      handleVariantClass,
      goToChrPositionIgv
    } = this.props;

    return (
      <TableLayout>
        {!!filteredData?.length &&
          <VariantTable
            data={filteredData}
            onSelectRowKey={onSelectRowKey}
            selectedRowKeys={selectedRowKeys}
            handleZygosity={handleZygosity}
            handleVariantClass={handleVariantClass}
            handelChrPosition={goToChrPositionIgv}
          />
        }
        {!filteredData?.length && <EmptyState/>}
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedRowKeys: getSelectedRowKeys(state),
    filteredData: getFilteredData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
