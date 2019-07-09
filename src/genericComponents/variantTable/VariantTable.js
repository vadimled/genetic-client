import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip, Checkbox } from "antd";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";
import ConfirmationStatus from "GenericComponents/confirmationStatus";
import Notes from "GenericComponents/notes";
import {
  ZYGOSITY_OPTIONS,
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";
import ExternalLink from "GenericComponents/externalLink";
import style from "./VariantTable.module.scss";
import ActivityLog from "./components/ActivityLog";
import ResizeableTitle from "./components/resizeableTitle";

class VariantTable extends Component {
  state = {
    columns: [
      {
        key: "1",
        dataIndex: "selection",
        width: 40,
        fixed: "left",
        className: "selection-cell",
        render: (text, record) => {
          if (record.status) {
            return (
              <ConfirmationStatus
                status={record.status}
                handleStatus={(status) => this.props.handleConfirmationStatus({
                  id: record.id,
                  status
                })}
              />
            );
          }
          return (
            <Checkbox
              checked={record.selected}
              onChange={this.props.handleSelectedRow.bind(null, {
                item: record,
                value: !record.selected
              })}
              data-testid="selection-checkbox"
              data-testitemid={record.id}
            />
          );
        }
      },
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 200
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
        width: 200
      },
      {
        title: "Exon",
        dataIndex: "exon",
        key: "5",
        width: 100
      },
      {
        title: "Allele change",
        dataIndex: "alleleChange",
        key: "6",
        width: 100,

        render: (text, record) => {
          return (
            <Tooltip placement="topLeft" title={record.alleleChangeLong}>
              <div>{text}</div>
            </Tooltip>
          );
        }
      },
      {
        title: "coding",
        dataIndex: "coding",
        key: "7",
        width: 100,
        render: (text, record) => {
          return (
            <Tooltip placement="topLeft" title={record.codingLong}>
              <div>{text}</div>
            </Tooltip>
          );
        }
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
        width: 100,
        sorter: (a, b) => a.vaf - b.vaf,
        // sortOrder: sortedInfo.columnKey === 'vaf' && sortedInfo.order,
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
        width: 100
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "13",
        width: 532
      },
      {
        title: "Activity log",
        dataIndex: "activityLog",
        key: "14",
        width: 200
      }
    ],
  };

  components = {
    header: {
      cell: ResizeableTitle
    },
    body: {
      // row: ()=> <tr class="ant-table-row ant-table-row-level-0"></tr>
    }
  };

  // handleChange = (pagination, filters, sorter) => {
  //   console.log('Various parameters',  sorter);
  //   this.setState({
  //     sortedInfo: sorter,
  //   });
  // };

  handelChrPosition = (e, data) => {
    console.log({ e: e.target, data });
  };

  handleZygosity = (data) =>{
    const {handleZygosity, updateActivityLog} = this.props;
    const {item, value, prevValue} = data;

    handleZygosity({
      item,
      value,
    });
    updateActivityLog({prevValue, item, changedField: "zygosity"});
  }

  handleVariantClass = data => {
    const {handleVariantClass, updateActivityLog} = this.props;
    const {item, value, prevValue} = data;

    handleVariantClass({
      item,
      value,
    });
    updateActivityLog({prevValue, item, changedField: "variantClass"});
  }

  columnsConverter = columns => {
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };

      if (column.dataIndex === "selection") {
        column.title = <div className={cn("table-header-selection-chbx", {
          'partly': !!this.props.selectedRows.length && !this.props.isAllRowSelected
        })}>
          <Checkbox
            checked={this.props.isAllRowSelected}
            onChange={this.props.handleSelectAllRows.bind(null, this.props.isAllRowSelected)}
          />
        </div>;
      }

      if (column.dataIndex === "zygosity") {
        column.render = (...data) => (
          <div className="table-select-wrapper">
            <SimpleSelect
              value={data[1].zygosity}
              options={ZYGOSITY_OPTIONS}
              onChange={e =>
                this.handleZygosity({
                  item: data[1],
                  value: e.target.value,
                  prevValue: data[1].zygosity
                })
              }
              isClearAvailable
              testId="zygosity-select"
              data-testitemid={data[1].id}
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
                    data[1].zygosity === "somatic"
                      ? SOMATIC_VARIANT_CLASS_OPTIONS
                      : GERMLINE_VARIANT_CLASS_OPTIONS
                  }
                  onChange={e =>
                    this.handleVariantClass({
                      item: data[1],
                      value: e.target.value,
                      prevValue: data[1].variantClass
                    })
                  }
                />
              </div>
            ) : (
              ""
            );
        column.className = "select";
      }

      if (col.dataIndex === "notes") {
        column.render = (...data) => <Notes
          updateActivityLog={this.props.updateActivityLog}
          setNotes={notes => this.props.setNotes({
            id: data[1].id,
            notes,
          })}
          value={data[1].notes}
          tableRow={data[1]}
        />;
      }

      if (col.dataIndex === "transcript") {
        column.render = (...data) => <ExternalLink data={data[1].transcript} />;
      }

      if (col.dataIndex === "chrPosition") {
        column.render = (...data) => {
          const { chrPosition } = data[1];
          return (
            <ExternalLink
              data={chrPosition}
              externalHandler={this.props.handelChrPosition.bind(
                null,
                chrPosition
              )}
            />
          );
        };
      }

      if (col.dataIndex === "activityLog") {
        column.render = (...data) => {
          return <ActivityLog {...data} />;
        };
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
    const { data } = this.props;

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        className={style["variant-table-wrapper"]}
        components={this.components}
        pagination={{ pageSize: 20 }}
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content", y: "true" }}
      />
    );
  }
}

VariantTable.propTypes = {
  data: PropTypes.array,
  handleSelectedRow: PropTypes.func.isRequired,
  handleSelectAllRows: PropTypes.func.isRequired,
  handleZygosity: PropTypes.func.isRequired,
  handleVariantClass: PropTypes.func.isRequired,
  handelChrPosition: PropTypes.func.isRequired,
  handleConfirmationStatus: PropTypes.func.isRequired,
  updateActivityLog: PropTypes.func.isRequired,
  isAllRowSelected: PropTypes.bool,
  selectedRows: PropTypes.array,
  setNotes: PropTypes.func.isRequired,
};

VariantTable.defaultProps = {
  data: [],
  isAllRowSelected: false,
  selectedRows: []
};

export default VariantTable;
