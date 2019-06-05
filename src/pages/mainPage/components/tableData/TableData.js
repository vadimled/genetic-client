import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import {
  getTableDataAsArray,
  getSelectedRowKeys,
} from "Store/selectors";
import {
  onSelectRowKey,
  handleZygosity,
  handleVariantClass
} from "Actions/tableActions";

class TableData extends Component {
  render() {
    const { data, selectedRowKeys, onSelectRowKey, handleZygosity, handleVariantClass } = this.props;
    return (
      <TableLayout>
        <VariantTable
          data={data}
          onSelectRowKey={onSelectRowKey}
          selectedRowKeys={selectedRowKeys}
          handleZygosity={handleZygosity}
          handleVariantClass={handleVariantClass}
        />
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: getTableDataAsArray(state),
    selectedRowKeys: getSelectedRowKeys(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
