import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import {
  getTableData,
  getSelectedRowKeys,
} from "Store/selectors";
import {
  onSelectRowKey,
  handleZygosity
} from "Actions/tableActions";

class TableData extends Component {
  render() {
    const { data, selectedRowKeys, onSelectRowKey, handleZygosity } = this.props;
    return (
      <TableLayout>
        <VariantTable
          data={data}
          onSelectRowKey={onSelectRowKey}
          selectedRowKeys={selectedRowKeys}
          handleZygosity={handleZygosity}
        />
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: getTableData(state),
    selectedRowKeys: getSelectedRowKeys(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
