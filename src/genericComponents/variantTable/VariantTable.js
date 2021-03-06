import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Checkbox, Table, Tooltip } from "antd";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";
import ConfirmationStatus from "GenericComponents/confirmationStatus";
import Notes from "GenericComponents/notes";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS,
  VARIANT_CLASS_GERMLINE,
  VARIANT_CLASS_SOMATIC,
  ZYGOSITY_OPTIONS
} from "Utils/constants";
import {
  convertVaf,
  convertCoverage
} from "Utils/helpers";
import ExternalLink from "GenericComponents/externalLink";
import style from "./VariantTable.module.scss";
import ActivityLog from "./components/activityLog/ActivityLog";
import ResizeableTitle from "./components/resizeableTitle";
import TableSorter from "./components/TableSorter";
import HighlightedCell from "./components/highlightedCell";
import LabeledTag from "../labeledTag";

class VariantTable extends Component {
  state = {
    columns: [
      {
        key: "1",
        dataIndex: "selection",
        width: 40,
        fixed: "left",
        className: "selection-cell"
      },
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 120
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
        width: 180
      },
      // {
      //   title: "Exon",
      //   dataIndex: "exon",
      //   key: "5",
      //   width: 50
      // },
      {
        title: "Allele change",
        dataIndex: "alleleChange",
        key: "6",
        width: 150
      },
      {
        title: "Coding",
        dataIndex: "coding",
        key: "7",
        width: 150
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 150
      },
      {
        title: (
          <TableSorter title="VAF" setSort={this.props.setSort} field="vaf" />
        ),
        dataIndex: "vaf",
        key: "9",
        width: 80,
        className: "sorter numeric"
        // sorter: (a, b) => a.vaf - b.vaf,
        // sortOrder: sortedInfo.columnKey === 'vaf' && sortedInfo.order,
      },
      {
        title: "Zygosity",
        dataIndex: "zygosity",
        key: "10",
        width: 200
      },
      {
        title: "Germline Class",
        dataIndex: "variantClassGermline",
        key: "11",
        width: 160
      },
      {
        title: "Somatic Class",
        dataIndex: "variantClassSomatic",
        key: "12",
        width: 200
      },
      {
        title: "Coverage",
        dataIndex: "coverage",
        key: "13",
        width: 100,
        className: "numeric"
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

  handleZygosity = data => {
    const { handleZygosity, testId } = this.props;
    const { item, value } = data;

    handleZygosity({
      variantId: item.id,
      value,
      testId,
      name: "zygosity",
      record: item
    });
  };

  handleNotes = (notes, id) => {
    const { setNotes, testId } = this.props;
    setNotes({
      testId,
      variantId: id,
      notes
    });
  };

  handleCheckboxChange = () => {
    const { isAllRowSelected, handleSelectAllRows } = this.props;
    handleSelectAllRows(isAllRowSelected);
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
        const { isAllRowSelected, selectedRows } = this.props;
        column.title = (
          <div
            className={cn("table-header-selection-chbx", {
              partly:
                !!selectedRows.length && !isAllRowSelected
            })}
          >
            <Checkbox
              checked={isAllRowSelected}
              onChange={this.handleCheckboxChange}
            />
          </div>
        );

        column.render = (text, record) => {

          if (record.status && record.status !== TEXTS.UNCHECK) {
            return (
              <HighlightedCell isHighlighted={record.isAdded} classes="no-padding">
                <ConfirmationStatus
                  status={record.status}
                  handleStatus={status =>
                    this.props.handleConfirmationStatus({
                      variantId: record.id,
                      testId: this.props.testId,
                      status
                    })
                  }
                />
              </HighlightedCell>
            );
          }
          return (
            <HighlightedCell isHighlighted={record.isAdded} classes="no-padding">
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
      } else if (column.dataIndex === "zygosity") {
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
            <div className="priority">{record.priority}</div>
          </HighlightedCell>
        );
        column.className = "select";
      } else if (column.dataIndex === "variantClassGermline") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className={cn("table-select-wrapper", {"hidden-classification": record.zygosity === "somatic"})}>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/variants/${
                      record.id
                    }/?selectedZygosityType=${record.zygosity !== "somatic" ? "germline" : "somatic"}`
                  }}
                >
                  <LabeledTag
                    typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
                    label={VARIANT_CLASS_GERMLINE[text]?.label}
                  />
                </Link>
              </div>
            </HighlightedCell>
          );
        };
        column.className = "select";
      } else if (column.dataIndex === "variantClassSomatic") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div
                className={cn("table-select-wrapper",
                  {"hidden-classification": ["homo", "hetero", "hemi"].includes(record.zygosity)})}
              >
                <Link
                  to={{
                    pathname: `${this.props.match.url}/variants/${
                      record.id
                    }/?selectedZygosityType=${record.zygosity === "somatic" ? "somatic" : "germline"}`
                  }}
                >
                  <LabeledTag
                    typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
                    label={VARIANT_CLASS_SOMATIC[text]?.label}
                  />
                </Link>
              </div>
            </HighlightedCell>
          );
        };
        column.className = "select";
      } else if (col.dataIndex === "notes") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <Notes
                setNotes={notes => this.handleNotes(notes, record.id)}
                value={record.notes}
              />
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "transcript") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {record.transcript}
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "chrPosition") {
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
      } else if (col.dataIndex === "activityLog") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <ActivityLog
                data-testid={`activity-icon`}
                activityLog={record.activityLog}
              />
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "alleleChange") {
        column.render = (text, record) => {
          const { alleleChangeLong, isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <Tooltip placement="topLeft" title={alleleChangeLong}>
                <div className="text">{text}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "coding") {
        column.render = (text, record) => {
          const { codingLong, isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <Tooltip placement="topLeft" title={codingLong}>
                <div className="text">{text}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "protein") {
        column.render = (text, record) => {
          const { proteinWholly, isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <Tooltip placement="topLeft" title={proteinWholly}>
                <div className="text">{text}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "vaf"){
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {convertVaf(text)}
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "coverage"){
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {convertCoverage(text)}
            </HighlightedCell>
          );
        };
      } else {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {text || ""}
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
    const { data, tumorInfoPanel, handleChangeTablePage, currentPage } = this.props;

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        className={cn(style["variant-table-wrapper"], {
          "tumor-panel-opened": tumorInfoPanel
        })}
        components={this.components}
        pagination={{ pageSize: 20, current: currentPage || 1}}
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content", y: "true" }}
        onChange={handleChangeTablePage}
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
  isAllRowSelected: PropTypes.bool,
  tumorInfoPanel: PropTypes.bool,
  selectedRows: PropTypes.array,
  setNotes: PropTypes.func,
  testId: PropTypes.string,
  setSort: PropTypes.func.isRequired
};

VariantTable.defaultProps = {
  data: [],
  isAllRowSelected: false,
  selectedRows: []
};

export default withRouter(VariantTable);
