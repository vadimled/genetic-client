import React, { Component } from "react";

import { Table, Checkbox } from "antd";

const columns = [
  {
    title: "",
    fixed: "left",
    width: 50,
    render: () => <Checkbox />,
    key: "checkbox"
  },
  {
    title: "Gene",
    dataIndex: "gene",
    key: "gene"
  },
  {
    title: "Chr: position",
    dataIndex: "chrPosition",
    key: "chrPosition"
  },
  {
    title: "Transcript",
    dataIndex: "transcript",
    key: "transcript"
  },
  {
    title: "Exon",
    dataIndex: "exon",
    key: "exon"
  },
  {
    title: "Allele change",
    dataIndex: "alleleChange",
    key: "alleleChange"
  },
  {
    title: "coding",
    dataIndex: "coding",
    key: "coding"
  },
  {
    title: "Protein",
    dataIndex: "protein",
    key: "protein"
  },
  {
    title: "VAF",
    dataIndex: "vaf",
    key: "vaf"
  },
  {
    title: "Zygosity",
    dataIndex: "zygosity",
    key: "zygosity"
  },
  {
    title: "Variant Class",
    dataIndex: "variantClass",
    key: "variantClass"
  },
  {
    title: "coverage",
    dataIndex: "coverage",
    key: "coverage"
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes"
  },
  {
    title: "Activity log",
    dataIndex: "activityLog",
    key: "activityLog"
  },
];




class VariantTable extends Component {
  render() {

    return (
      <Table
        rowKey="gene"
        bordered
        // pagination={false}
        columns={columns}
        dataSource={this.props.data}
        className="flex"
      />
    );
  }
}

Table.propTypes = {};

export default VariantTable;
