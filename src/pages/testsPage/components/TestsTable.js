import React, { Component } from 'react';
import {connect} from "react-redux";

import TableLayout from "../../mainPage/components/tableLayout";
import EmptyState from "GenericComponents/emptyState";
import {
  getFilteredData,
  checkIsAllRowSelected,
  getSelectedRows,
  getSortOrder,
  getSortParam,
  getTestId
} from "Store/selectors";
import {
  handleSelectedRow,
  handleSelectAllRows,
  handleZygosity,
  handleVariantClass,
  handleConfirmationStatus,
  handleUncheckConfirmationData,
  setNotes,
  updateActivityLog,
  fetchTableData, setSort
} from "Actions/tableActions";
import {
  goToChrPositionIgv
} from "Actions/igvActions";
import ResizeableTitle from "../../../genericComponents/variantTable/components/resizeableTitle";
import cn from "classnames";
import { Checkbox, Table, Tooltip } from "antd";
import HighlightedCell from "../../../genericComponents/variantTable/components/highlightedCell/HighlightedCell";
import style from "../../../genericComponents/variantTable/VariantTable.module.scss";

class TestsTable extends Component {

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
        title: "Coding",
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
        title: "xx",
        dataIndex: "vaf",
        key: "9",
        width: 100,
        className: "sorter"
        // sorter: (a, b) => a.vaf - b.vaf,
        // sortOrder: sortedInfo.columnKey === 'vaf' && sortedInfo.order,
      },
      {
        title: "Zygosity",
        dataIndex: "zygosity",
        key: "10",
        width: 250
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
        title: "Coverage",
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

  componentDidMount() {
    const {fetchTableData} = this.props;
    fetchTableData();
  }

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
                xx
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
              xxx
            </div>{record.priority}
          </HighlightedCell>
        );
        column.className = "select";
      }

      else if (column.dataIndex === "variantClassGermline") {

        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className="table-select-wrapper">

                xxx

              </div>
            </HighlightedCell>
          );
        };
        column.className = "select";
      }

      else if (column.dataIndex === "variantClassSomatic") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className="table-select-wrapper">
                xxx
              </div>
            </HighlightedCell>
          );
        };
        column.className = "select";
      }

      else if (col.dataIndex === "notes") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              xxx
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "transcript") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              xxx
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "chrPosition") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              xxx
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "activityLog") {
        column.render = (...data) => {
          return (
            <HighlightedCell isHighlighted={data[1].isAdded}>
              xx
              x            </HighlightedCell>
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

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  render() {
    const {
      filteredData,
    } = this.props;

    const columns = this.columnsConverter(this.state.columns);

    return (
      <TableLayout>
        {!!filteredData?.length &&
        <Table
          className={style["variant-table-wrapper"]}
          components={this.components}
          pagination={{ pageSize: 20 }}
          bordered
          columns={columns}
          dataSource={filteredData}
          scroll={{ x: "max-content", y: "true" }}
        />
        }

        {!filteredData?.length && <EmptyState/>}
      </TableLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredData: getFilteredData(state),
    isAllRowSelected: checkIsAllRowSelected(state),
    selectedRows: getSelectedRows(state),
    sortOrder: getSortOrder(state),
    sortParam: getSortParam(state),
    testId: getTestId(state)
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
      else if (data?.status === null) {
        dispatch(handleUncheckConfirmationData(data));
      }
    },
    updateActivityLog: data => dispatch(updateActivityLog(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
    setNotes: data => dispatch(setNotes(data)),
    fetchTableData: data => dispatch(fetchTableData(data)),
    setSort: data => dispatch(setSort(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestsTable);
