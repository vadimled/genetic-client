import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import Notes from "Pages/mainPage/components/notes";
import { Resizable } from "react-resizable";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

class VariantTable extends Component {
  state = {
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 100
      },
      {
        title: "Chr: position",
        dataIndex: "chrPosition",
        key: "3",
        width: 200
      },
      {
        title: "Transcript",
        dataIndex: "transcript",
        key: "4",
        width: 150
      },
      {
        title: "Exon",
        dataIndex: "exon",
        key: "5",
        width: 40
      },
      {
        title: "Allele change",
        dataIndex: "alleleChange",
        key: "6",
        width: 80
      },
      {
        title: "coding",
        dataIndex: "coding",
        key: "7",
        width: 80
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 100
      },
      {
        title: "VAF",
        dataIndex: "vaf",
        key: "9",
        width: 50
      },
      {
        title: "Zygosity",
        dataIndex: "zygosity",
        key: "10",
        width: 100
      },
      {
        title: "Variant Class",
        dataIndex: "variantClass",
        key: "11",
        width: 100
      },
      {
        title: "coverage",
        dataIndex: "coverage",
        key: "12",
        width: 50
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "13",
        width: 200
      },
      {
        title: "Activity log",
        dataIndex: "activityLog",
        key: "14"
      }
    ]
  };

  addNodes = () => {
    const { data } = this.props;

    return data.map((row, index) => {
      return {
        ...row,
        notes: <Notes key={index} id={index} />
      };
    });
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      };
      return { columns: nextColumns };
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

    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));

    return (
      <Table
        components={this.components}
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={dataWithNotes}
        scroll={{ x: "max-content" }}
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
