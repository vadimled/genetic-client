import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import SimpleSelect from 'GenericComponents/simpleSelect';

const columns = [
  {
    title: "Gene",
    dataIndex: "gene",
    key: "2",
  },
  {
    title: "Chr: position",
    dataIndex: "chrPosition",
    key: "3",
  },
  {
    title: "Transcript",
    dataIndex: "transcript",
    key: "4",
  },
  {
    title: "Exon",
    dataIndex: "exon",
    key: "5",
  },
  {
    title: "Allele change",
    dataIndex: "alleleChange",
    key: "6",
  },
  {
    title: "coding",
    dataIndex: "coding",
    key: "7",
  },
  {
    title: "Protein",
    dataIndex: "protein",
    key: "8",
  },
  {
    title: "VAF",
    dataIndex: "vaf",
    key: "9",
  },
  {
    title: "Zygosity",
    dataIndex: "zygosity",
    key: "10",
    render: (...data) => (<SimpleSelect
      options={[
        {value: 'homo', label: 'Homo'},
        {value: 'hetro', label: 'Hetro'},
        {value: 'hemi', label: 'Hemi'},
        {value: 'insignificant', label: 'Insignificant'},
        {value: 'somatic', label: 'Somatic'},
        {value: 'notReal', label: 'Not-Real'},
        {value: 'unknown', label: 'Unknown'},
      ]}
      onChange={() => console.log('data', data)}
    />),
    className: "select"
  },
  {
    title: "Variant Class",
    dataIndex: "variantClass",
    key: "11"
  },
  {
    title: "coverage",
    dataIndex: "coverage",
    key: "12"
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "13"
  },
  {
    title: "Activity log",
    dataIndex: "activityLog",
    key: "14"
  },
];


class VariantTable extends Component {
  render() {
    const { data, selectedRowKeys, onSelectRowKey } = this.props;

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys) => {
        onSelectRowKey(selectedRowKeys);
      },
      selectedRowKeys,
      fixed: 'left'
    };

    return (
      <Table
        rowSelection={rowSelection}
        bordered
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ x: '100%' }}
      />
    );
  }
}

VariantTable.propTypes = {
  data: PropTypes.array,
  selectedRowKeys: PropTypes.array,
  onSelectRowKey: PropTypes.func.isRequired
};

VariantTable.defaultProps = {
  data: [],
  selectedRowKeys: []
};

export default VariantTable;
