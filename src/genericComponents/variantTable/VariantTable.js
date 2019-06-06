import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import { Resizable } from "react-resizable";
import SimpleSelect from "GenericComponents/simpleSelect";
import Notes from "Pages/mainPage/components/notes";
import { ZYGOSITY_OPTIONS, GERMLINE_VARIANT_CLASS_OPTIONS, SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";

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
        width: 150
      },
      {
        title: "Variant Class",
        dataIndex: "variantClass",
        key: "11",
        width: 170
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
        key: "14",
        width: 200
      }
    ]
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  columnsConverter = columns => {
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };

      if (column.dataIndex === "zygosity") {
        column.render = (...data) => (
          <div className="table-select-wrapper">
            <SimpleSelect
              value={data[1].zygosity}
              options={ZYGOSITY_OPTIONS}
              onChange={e => this.props.handleZygosity({ item: data[1], value: e.target.value })}
            />
          </div>
        );
        column.className = "select";
      }

      if (column.dataIndex === "variantClass") {
        column.render = (...data) =>
          data[1].zygosity &&
          data[1].zygosity !== "insignificant" &&
          data[1].zygosity !== "notReal" &&
          data[1].zygosity !== "unknown" ? (
              <div className="table-select-wrapper">
                <SimpleSelect
                  value={data[1].variantClass}
                  options={
                    data[1].zygosity === "somatic" ? SOMATIC_VARIANT_CLASS_OPTIONS : GERMLINE_VARIANT_CLASS_OPTIONS
                  }
                  onChange={e => this.props.handleVariantClass({ item: data[1], value: e.target.value })}
                />
              </div>
            ) : (
              ""
            );
        column.className = "select";
      }

      if (col.dataIndex === "notes") {
        column.render = (...data) => <Notes key={data[1].id} id={data[1].id} />;
      }

      return column;
    });
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
    const { selectedRowKeys, onSelectRowKey, data } = this.props;

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: selectedRowKeys => {
        onSelectRowKey(selectedRowKeys);
      },
      selectedRowKeys,
      fixed: "left"
    };

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        components={this.components}
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
      />
    );
  }
}

VariantTable.propTypes = {
  data: PropTypes.array,
  selectedRowKeys: PropTypes.array,
  onSelectRowKey: PropTypes.func.isRequired,
  handleZygosity: PropTypes.func.isRequired,
  handleVariantClass: PropTypes.func.isRequired
};

VariantTable.defaultProps = {
  data: [],
  selectedRowKeys: []
};

export default VariantTable;