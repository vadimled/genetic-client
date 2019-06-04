import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import SimpleSelect from 'GenericComponents/simpleSelect';
import Notes from "Pages/mainPage/components/notes";
import { ZYGOSITY_OPTIONS } from 'Utils/constants';

class VariantTable extends Component {

  columns = [
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
      render: (...data) => (
        <div className="table-select-wrapper">
          <SimpleSelect
            value={data[1].zygosity}
            options={ZYGOSITY_OPTIONS}
            onChange={(e) => this.props.handleZygosity({item: data[1], index: data[2], value: e.target.value})}
          />
        </div>
      ),
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
      key: "13",
      render: (...data) => <Notes key={data[1].id} id={data[1].id} />
    },
    {
      title: "Activity log",
      dataIndex: "activityLog",
      key: "14"
    },
  ];

  render() {
    const { selectedRowKeys, onSelectRowKey, data } = this.props;

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: selectedRowKeys => {
        onSelectRowKey(selectedRowKeys);
      },
      selectedRowKeys,
      fixed: "left"
    };

    return (
      <Table
        rowSelection={rowSelection}
        bordered
        // pagination={false}
        columns={this.columns}
        dataSource={data}
        scroll={{ x: '100%' }}
      />
    );
  }
}

VariantTable.propTypes = {
  data: PropTypes.array,
  selectedRowKeys: PropTypes.array,
  onSelectRowKey: PropTypes.func.isRequired,
  handleZygosity: PropTypes.func.isRequired
};

VariantTable.defaultProps = {
  data: [],
  selectedRowKeys: []
};

export default VariantTable;
