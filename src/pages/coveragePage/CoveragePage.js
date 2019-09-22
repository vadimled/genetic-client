import React, { Component } from "react";
import { connect } from "react-redux";
import TableSorter from "../../genericComponents/variantTable/components/TableSorter";
import ResizeableTitle from "../../genericComponents/variantTable/components/resizeableTitle";
import cn from "classnames";
import { Checkbox, Table, Tooltip } from "antd";
import HighlightedCell from "../../genericComponents/variantTable/components/highlightedCell/HighlightedCell";
import { Link } from "react-router-dom";
import LabeledTag from "../../genericComponents/labeledTag/LabeledTag";
import ActivityLog from "../../genericComponents/variantTable/components/ActivityLog";
import style from "../../genericComponents/variantTable/VariantTable.module.scss";
import { checkIsAllRowSelected, getSelectedRows, getSortOrder, getSortParam } from "Store/selectors";
import {
  handleConfirmationStatus,
  handleSelectAllRows,
  handleSelectedRow, handleUncheckConfirmationData,
  handleVariantClass,
  handleZygosity, saveUserPreferencesSorting, setNotes, setSort
} from "../../store/actions/tableActions";
import { goToChrPositionIgv } from "../../store/actions/igvActions";


class CoveragePage extends Component {

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
        title: "Low cowered region",
        dataIndex: "lowCoweredRegion",
        key: "3",
        width: 200
      },
      {
        title: "Min",
        dataIndex: "min",
        key: "4",
        width: 180
      },
      {
        title: "Max",
        dataIndex: "max",
        key: "5",
        width: 50
      },
      {
        title: "Mean",
        dataIndex: "mean",
        key: "6",
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
        title: "Notes",
        dataIndex: "notes",
        key: "14",
        width: 700
      },

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

  handleCheckboxOnChange = () => {
    this.props.handleSelectAllRows(this.props.isAllRowSelected);
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

      // construction if/else is required

      if (column.dataIndex === "selection") {
        column.title = (
          <div
            className={cn("table-header-selection-chbx", {
              partly:
                !!this.props.selectedRows.length && !this.props.isAllRowSelected
            })}
          >
            <Checkbox
              checked={this.props.isAllRowSelected}
              onChange={this.handleCheckboxOnChange}
            />
          </div>
        );

        column.render = (text, record) => {

          if (record.status && record.status !== UNCHECK) {
            return (
              <HighlightedCell isHighlighted={record.isAdded}>
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
    const columns = this.columnsConverter(this.state.columns);
    return (
      <Table
        className={style["variant-table-wrapper"]}
        components={this.components}
        pagination={{ pageSize: 20 }}
        bordered
        columns={columns}
        // dataSource={data}
        scroll={{ x: "max-content", y: "true" }}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    // filteredData: getFilteredData(state),
    isAllRowSelected: checkIsAllRowSelected(state),
    selectedRows: getSelectedRows(state),
    sortOrder: getSortOrder(state),
    sortParam: getSortParam(state),
    // testId: getTestId(state),
    // showTumorInfo: getTumorInfoMode(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
    handleSelectAllRows: (data) => dispatch(handleSelectAllRows(data)),
    handleZygosity: (data) => dispatch(handleZygosity(data)),
    handleVariantClass: (data) => dispatch(handleVariantClass(data)),
    handleConfirmationStatus: (data) => {
      if (data?.status) {
        dispatch(handleConfirmationStatus(data));
      }
      else if (data?.status === UNCHECK) {
        dispatch(handleUncheckConfirmationData(data));
      }
    },
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    setNotes: data => dispatch(setNotes(data)),
    setSort: data => dispatch(setSort(data)),
    saveUserPreferencesSorting: data => dispatch(saveUserPreferencesSorting(data)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoveragePage);