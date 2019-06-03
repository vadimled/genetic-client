import React, { Component } from "react";

import { Table, Checkbox } from "antd";
import Notes from "Pages/mainPage/components/notes";

const columns = [
  {
    title: "",
    key: "1",
    fixed: "left",
    width: 50,
    render: () => <Checkbox />
  },
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

const data = [
  {
    gene: "SDHA",
    chrPosition: "Chr5 : 236628",
    transcript: "NM_005591.3",
    exon: 7,
    alleleChange: "C > T",
    coding: "gCc/gTc",
    protein: "A449V",
    vaf: 33,
    zygosity: "Hom",
    variantClass: "",
    coverage: 300,
    notes: (
      <Notes valueNotes={"Test ID place Mutation data dropdown list"} />
    )
  }
];

class VariantTable extends Component {
  render() {
    return (
      <Table
        bordered
        pagination={false}
        columns={columns}
        dataSource={data}
        className="flex"
      />
    );
  }
}

Table.propTypes = {};

export default VariantTable;
