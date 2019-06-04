import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../tableLayout";
import VariantTable from "GenericComponents/variantTable";
import {
  getTableData,
  getSelectedRowKeys,
  getFilteredData
} from "Store/selectors";
import {
  onSelectRowKey
} from "Actions/tableActions";

class TableData extends Component {
  render() {
    const { data, selectedRowKeys, onSelectRowKey, filteredData } = this.props;
    console.log('--ulfiltered: ', data)

    return (
      <TableLayout>
        <VariantTable
          data={filteredData}
          onSelectRowKey={onSelectRowKey}
          selectedRowKeys={selectedRowKeys}
        />
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: getTableData(state),
    selectedRowKeys: getSelectedRowKeys(state),
    filteredData: getFilteredData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectRowKey: (data) => dispatch(onSelectRowKey(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
