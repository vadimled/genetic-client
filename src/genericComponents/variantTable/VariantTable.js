import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { Table, Tooltip, Checkbox } from "antd";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";
import ConfirmationStatus from "GenericComponents/confirmationStatus";
import Notes from "GenericComponents/notes";
import {
  ZYGOSITY_OPTIONS,
} from "Utils/constants";
import ExternalLink from "GenericComponents/externalLink";
import style from "./VariantTable.module.scss";
import ActivityLog from "./components/ActivityLog";
import ResizeableTitle from "./components/resizeableTitle";
import TableSorter from "./components/TableSorter";

import HighlightedCell from "./components/highlightedCell";

class VariantTable extends Component {
  state = {
    columns: [
      {
        key: "1",
        dataIndex: "selection",
        width: 40,
        fixed: "left",
        className: "selection-cell",
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
        width: 200,
      },
      {
        title: "coding",
        dataIndex: "coding",
        key: "7",
        width: 100
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 100
      },
      {
        title: <TableSorter title="VAF" setSort={this.props.setSort} />,
        dataIndex: "vaf",
        key: "9",
        width: 100,
        // sorter: (a, b) => a.vaf - b.vaf,
        // sortOrder: sortedInfo.columnKey === 'vaf' && sortedInfo.order,
      },
      {
        title: "Zygosity",
        dataIndex: "zygosity",
        key: "10",
        width: 150
      },
      {
        title: "Germline Class ",
        dataIndex: "variantClassGermline",
        key: "11",
        width: 200
      },
      {
        title: "Somatic Class",
        dataIndex: "variantClassSomatic",
        key: "12",
        width: 200
      },
      {
        title: "coverage",
        dataIndex: "coverage",
        key: "13",
        width: 100
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "14",
        width: 700
      },
      {
        title: "Activity log",
        dataIndex: "activityLog",
        key: "15",
        width: 200
      }
    ]
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };



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
  };

  handleVariantClass = data => {
    const {handleVariantClass, updateActivityLog} = this.props;
    const {item, value, prevValue} = data;

    handleVariantClass({
      item,
      value,
    });

    updateActivityLog({prevValue, item, changedField: "variantClass"});
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

      // construction if/else is required

      if (column.dataIndex === "selection") {
        column.title = <div className={cn("table-header-selection-chbx", {
          'partly': !!this.props.selectedRows.length && !this.props.isAllRowSelected
        })}>
          <Checkbox
            checked={this.props.isAllRowSelected}
            onChange={this.props.handleSelectAllRows.bind(null, this.props.isAllRowSelected)}
          />
        </div>;

        column.render = (text, record) => {
          if (record.status) {
            return (
              <HighlightedCell isHighlighted={record.isAdded}>
                <ConfirmationStatus
                  status={record.status}
                  handleStatus={(status) => this.props.handleConfirmationStatus({
                    id: record.id,
                    status
                  })}
                />
              </HighlightedCell>
            );
          }
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <Checkbox
                checked={record.selected}
                onChange={this.props.handleSelectedRow.bind(null, {
                  item: record,
                  value: !record.selected
                })}
                data-testid="selection-checkbox"
                data-testitemid={record.id}
              />
            </HighlightedCell>
          );
        };
      }

      else if (column.dataIndex === "zygosity") {
        column.render = (text, record) => (
          <HighlightedCell isHighlighted={record.isAdded}>
            <div className="table-select-wrapper">
              <SimpleSelect
                value={record.zygosity}
                options={ZYGOSITY_OPTIONS}
                onChange={e =>
                  this.handleZygosity({
                    item: record,
                    value: e.target.value,
                    prevValue: record.zygosity
                  })
                }
                isClearAvailable
                testId="zygosity-select"
                data-testitemid={record.id}
              />
            </div>
          </HighlightedCell>
        );
        column.className = "select";
      }

      else if (column.dataIndex === "variantClassGermline") {

        console.log(column);

        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {
                record.zygosity &&
                record.zygosity !== "insignificant" &&
                record.zygosity !== "notReal" &&
                record.zygosity !== "unknown" ? (
                    <div className="table-select-wrapper">
                      <Link to="/variant?type=germline">{text}</Link>
                    </div>
                  ) : (
                    ""
                  )
              }
            </HighlightedCell>
          );
        };
        column.className = "select";
      }

      else if (column.dataIndex === "variantClassSomatic") {

        console.log(column);

        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {
                record.zygosity &&
                record.zygosity !== "insignificant" &&
                record.zygosity !== "notReal" &&
                record.zygosity !== "unknown" ? (
                    <div className="table-select-wrapper">
                      <Link to="/variant?type=somatic">{text}</Link>
                    </div>
                  ) : (
                    ""
                  )
              }
            </HighlightedCell>
          );
        };
        column.className = "select";
      }



      else if (col.dataIndex === "notes") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <Notes
                updateActivityLog={this.props.updateActivityLog}
                setNotes={notes => this.props.setNotes({
                  id: record.id,
                  notes,
                })}
                value={record.notes}
                tableRow={record}
              />
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "transcript") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <ExternalLink data={record.transcript} />
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "chrPosition") {
        column.render = (text, record) => {
          const { chrPosition } = record;
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <ExternalLink
                data={chrPosition}
                externalHandler={this.props.handelChrPosition.bind(
                  null,
                  chrPosition
                )}
              />
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "activityLog") {
        column.render = (...data) => {
          return (
            <HighlightedCell isHighlighted={data[1].isAdded}>
              <ActivityLog data-testid={`activity-icon`} {...data} id={data[1].id} />
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "alleleChange") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <Tooltip placement="topLeft" title={record.alleleChangeLong}>
                <div>{text}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "coding") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <Tooltip placement="topLeft" title={record.codingLong}>
                <div>{text}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      }

      else {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {text}
            </HighlightedCell>
          );
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
  handleSelectedRow: PropTypes.func,
  handleSelectAllRows: PropTypes.func,
  handleZygosity: PropTypes.func.isRequired,
  handleVariantClass: PropTypes.func.isRequired,
  handelChrPosition: PropTypes.func,
  handleConfirmationStatus: PropTypes.func,
  updateActivityLog: PropTypes.func.isRequired,
  isAllRowSelected: PropTypes.bool,
  selectedRows: PropTypes.array,
  setNotes: PropTypes.func,
};

VariantTable.defaultProps = {
  data: [],
  isAllRowSelected: false,
  selectedRows: []
};

export default VariantTable;
