import React, { Component, Fragment } from "react";
import { Table } from "antd";
import style from "./ClassificationHistoryTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import PropTypes from "prop-types";
import ToggledButton from "GenericComponents/toggledButton";
import cn from "classnames";
import LabeledTag from "GenericComponents/labeledTag";
import { TEXTS } from "Utils/constants";
import EmptyState from "GenericComponents/emptyState/EmptyState";
import defaultImage from "Assets/smallEmptyState.svg";
import TableDateAndUser from "variantComponents/evidenceContainer/components/tableDateAndUser";
import { Link } from "react-router-dom";

class ClassificationHistoryTable extends Component {
  state = {
    columns: [
      {
        key: "1",
        title: "Date",
        dataIndex: "created_at",
        width: 140
      },
      {
        title: "GSID",
        dataIndex: "gsid",
        key: "2",
        width: 300
      },
      {
        title: "phenotype",
        dataIndex: "phenotype",
        key: "3",
        width: 300
      },
      {
        title: "Analyst Name",
        dataIndex: "analystName",
        key: "4",
        width: 400
      },
      {
        title: "Class",
        dataIndex: "class",
        key: "5",
        width: 400
      }
    ],
    tableMinHeight: null,
    isTableMaxHeight: false
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  setTableHeight = state => {
    const {
        data: { length }
      } = this.props,
      currHeight = (length - 1) * 29;

    this.setState({
      isTableMaxHeight: !this.state.isTableMaxHeight,
      tableMinHeight: state ? null : `${currHeight <= 300 ? currHeight : 300}px`
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

  columnsConverter = columns => {
    const { typeData } = this.props;
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };
      if (col.dataIndex === "created_at") {
        column.render = date => {
          return <TableDateAndUser date={date} />;
        };
      } else if (col.dataIndex === "gsid") {
        column.render = (text, record) => (
          <div className="label-custom-style">
            <Link to={`/tests/${record.testId}`}>{text}</Link>
          </div>
        );
      } else if (col.dataIndex === "class") {
        column.render = text => {
          return (
            <div className="label-custom-style">
              <LabeledTag value={text} typeData={typeData} />
            </div>
          );
        };
      } else {
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

  render() {
    const { data } = this.props;
    const length = data ? data.length : 0;
    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <div className={style["classification-history-wrapper"]}>
        {!length ? (
          <div className="empty-state">
            <EmptyState
              image={defaultImage}
              title={"No Classification History"}
              description=""
            />
          </div>
        ) : (
          <Fragment>
            <Table
              className={cn("classification-history-table-wrapper", {
                "with-scroll": this.state.isTableMaxHeight
              })}
              components={this.components}
              pagination={false}
              bordered
              columns={columns}
              dataSource={data}
              scroll={{ y: this.state.tableMinHeight }}
            />
            {length > 3 && (
              <ToggledButton
                id="classification-history-table"
                onClick={this.setTableHeight}
                labelStateClosed={TEXTS.seeAll}
                labelStateOpened={TEXTS.seeLess}
              />
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

ClassificationHistoryTable.propTypes = {
  data: PropTypes.array,
  typeData: PropTypes.array.isRequired
};

ClassificationHistoryTable.defaultProps = {
  data: []
};

export default ClassificationHistoryTable;
