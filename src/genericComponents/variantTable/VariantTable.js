import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Table, Checkbox } from "antd";

const columns = [
  {
    title: "",
    key: "checkbox",
    fixed: "left",
    width: 50,
    render: () => <Checkbox />
  },
  {
    title: "Gene",
    width: 150,
    dataIndex: "gene",
    key: "gene",
  },
  {
    title: "Chr: position",
    width: 150,
    dataIndex: "chrPosition",
    key: "chrPosition",
  },
  {
    title: "Transcript",
    dataIndex: "transcript",
    key: "1",
    width: 150
  },
  {
    title: "Exon",
    dataIndex: "exon",
    key: "2",
    width: 50
  },
  {
    title: "Allele change",
    dataIndex: "alleleChange",
    key: "3",
    width: 150
  },
  {
    title: "coding",
    dataIndex: "coding",
    key: "4",
    width: 150
  },
  {
    title: "Protein",
    dataIndex: "protein",
    key: "5",
    width: 150
  },
  {
    title: "VAF",
    dataIndex: "vaf",
    key: "6",
    // width: 150
  },
  {
    title: "Zygosity",
    dataIndex: "zygosity",
    key: "7",
    // width: 150
  },
  {
    title: "Variant Class",
    dataIndex: "variantClass",
    key: "8"
  },
  {
    title: "coverage",
    dataIndex: "coverage",
    key: "8"
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "8"
  },
  {
    title: "Activity log",
    dataIndex: "activityLog",
    key: "8"
  },
];

const data = [
  {
    gene: 'SDHA',
    chrPosition: 'Chr5 : 236628',
    transcript: 'NM_005591.3',
    exon: 7,
    alleleChange: 'C > T',
    coding: 'gCc/gTc',
    protein: 'A449V',
    vaf: 33
  }
];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`
//   });
// }

class VariantTable extends Component {
  render() {
    const screenWidth = screen.width - 500;
    const screenHeight = screen.height;

    console.log("-screenWidth: ", screenWidth);
    console.log("-screenHeight: ", screenHeight);

    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ y: screenHeight }}
        className="flex"
      />
    );
  }
}

Table.propTypes = {};

export default VariantTable;
