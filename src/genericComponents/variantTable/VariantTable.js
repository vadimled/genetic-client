import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import Notes from "Pages/mainPage/components/notes";

const columns = [
  {
    title: "Gene",
    dataIndex: "gene",
    key: "2"
  },
  {
    title: "Chr: position",
    dataIndex: "chrPosition",
    key: "3"
  },
  {
    title: "Transcript",
    dataIndex: "transcript",
    key: "4"
  },
  {
    title: "Exon",
    dataIndex: "exon",
    key: "5"
  },
  {
    title: "Allele change",
    dataIndex: "alleleChange",
    key: "6"
  },
  {
    title: "coding",
    dataIndex: "coding",
    key: "7"
  },
  {
    title: "Protein",
    dataIndex: "protein",
    key: "8"
  },
  {
    title: "VAF",
    dataIndex: "vaf",
    key: "9"
  },
  {
    title: "Zygosity",
    dataIndex: "zygosity",
    key: "10"
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
  }
];

class VariantTable extends Component {
  addNodes = () => {
    const { data } = this.props;

    return data.map((row, index) => {
      return {
        ...row,
        notes: <Notes key={index} id={index} />
      };
    });
  };

  render() {
    const { selectedRowKeys, onSelectRowKey } = this.props;
    const dataWithNotes = this.addNodes();

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
        columns={columns}
        dataSource={dataWithNotes}
        scroll={{ x: "100%" }}
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
