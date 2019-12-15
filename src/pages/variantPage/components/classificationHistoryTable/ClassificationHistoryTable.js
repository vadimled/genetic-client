import React, { Component, Fragment } from "react";
import { Table } from "antd";
import style from "./ClassificationHistoryTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
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

  columnsConverter = columns => {
    const { typeData } = this.props;
    return columns.map((column) => {

      if (column.dataIndex === "created_at") {
        column.render = date => {
          return <div className="n-table-cell">
            <TableDateAndUser date={date} />
          </div>;
        };
      } else if (column.dataIndex === "gsid") {
        column.render = (text, record) => (
          <div className="n-table-cell">
            <Link to={`/tests/${record.testId}`}>{text}</Link>
          </div>
        );
      } else if (column.dataIndex === "class") {
        column.render = text => {
          return (
            <div className="n-table-cell">
              <LabeledTag value={text} typeData={typeData} />
            </div>
          );
        };
      } else {
        column.render = (text) => {
          return (
            <div className="n-table-cell">
              {text}
            </div>
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
              pagination={false}
              columns={columns}
              dataSource={data}
              scroll={{ y: this.state.tableMinHeight }}
            />
            {length > 3 && (
              <div className="see-all-btn">
                <ToggledButton
                  id="classification-history-table"
                  onClick={this.setTableHeight}
                  labelStateClosed={TEXTS.seeAll}
                  labelStateOpened={TEXTS.seeLess}
                />
              </div>
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
