import React, { Component } from "react";
import { connect } from "react-redux";
import ResizeableTitle from "../../genericComponents/variantTable/components/resizeableTitle";
import cn from "classnames";
import { Checkbox, Table, Tooltip } from "antd";
import HighlightedCell from "../../genericComponents/variantTable/components/highlightedCell/HighlightedCell";
import style from "../../genericComponents/variantTable/VariantTable.module.scss";
import {
  checkIsAllRowSelected,
  getSelectedRows,
  getSortOrder,
  getSortParam,
  getCoverageTableData
} from "Store/selectors";
import {
  handleConfirmationStatus,
  handleUncheckConfirmationData,
  saveUserPreferencesSorting, setNotes, setSort
} from "Store/actions/tableActions";
import { goToChrPositionIgv } from "../../store/actions/igvActions";
import Notes from "../../genericComponents/notes";
import {
  handleSelectAllRowsCoverage,
  handleSelectedRowCoverage,
  fetchTableData
} from "Store/actions/coveragePageActions";
import ConfirmationStatus from "../../genericComponents/confirmationStatus";
import { TEXTS } from "../../utils/constants";



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
        title: "Mean",
        dataIndex: "mean",
        key: "6",
        width: 150
      },

      {
        title: "Notes",
        dataIndex: "notes",
        key: "14",
        width: 700
      },

    ]
  };

  componentDidMount() {
    this.props.fetchTableData();
  }

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

          if (record.status && record.status !== TEXTS.UNCHECK) {

            console.log("here");
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
      }

      else if (col.dataIndex === "notes") {
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
      }

      else if (col.dataIndex === "coding") {
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
      }

      else if (col.dataIndex === "lowCoweredRegion") {
        column.render = (text, record) => {
          return (
            <HighlightedCell >
              <Tooltip placement="topLeft">
                <div className="text">{record.chr}: {record.minCoverage} - {record.maxCoverage}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      }

      else if (col.dataIndex === "mean") {
        column.render = (text, record) => {

          return (
            <HighlightedCell >
              <Tooltip placement="topLeft">
                <div className="text">{record.meanCoverage}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
      }


      else {
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

    const {tableData} = this.props;

    console.log(tableData);

    return (
      <Table
        className={style["variant-table-wrapper"]}
        components={this.components}
        pagination={{ pageSize: 20 }}
        bordered
        columns={columns}
        dataSource={tableData}
        scroll={{ x: "max-content", y: "true" }}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    tableData: getCoverageTableData(state),
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
    fetchTableData: () => dispatch(fetchTableData()),
    handleSelectedRow: (data) => dispatch(handleSelectedRowCoverage(data)),
    handleSelectAllRows: (data) => dispatch(handleSelectAllRowsCoverage(data)),
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