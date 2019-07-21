import React, { Component } from "react";
import { Table } from "antd";
import style from "./ClassificationHistoryTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import PropTypes from "prop-types";
import ToggledButton from "GenericComponents/toggledButton";
import cn from "classnames";

// import PropTypes from 'prop-types';

class ClassificationHistoryTable extends Component {
  state = {
    columns: [
      {
        key: "1",
        title: "Date",
        dataIndex: "date",
        width: 150
      },
      {
        title: "GSID",
        dataIndex: "gsid",
        key: "2",
        width: 400
      },
      {
        title: "Analyst Name",
        dataIndex: "analystName",
        key: "3",
        width: 400
      },
      {
        title: "Class",
        dataIndex: "class",
        key: "4",
        width: 500
      }
    ],
    tableMinHeight: null,
    isTableMaxHeight: false
  };

  components = {
    header: {
      cell: ResizeableTitle
    },
    body: {
      // row: ()=> <tr class="ant-table-row ant-table-row-level-0"></tr>
    }
  };
  
  setTableHeight = state => {
    this.setState({isTableMaxHeight: !this.state.isTableMaxHeight, tableMinHeight: state ? null: "300px"});
  
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
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };
      column.render = (text, record) => {
        return (
          <HighlightedCell isHighlighted={record.isAdded}>
            {text}
          </HighlightedCell>
        );
      };

      return column;
    });
  };
  render() {
    const { data } = this.props;

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <div className={style["classification-history-wrapper"]}>
        <div className="classification-history-title">
          Classification History
        </div>
        <Table
          className={cn("classification-history-table-wrapper", {"with-scroll": this.state.isTableMaxHeight})}
          components={this.components}
          pagination={false}
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ y: this.state.tableMinHeight }}
        />
        <ToggledButton
          onClick={this.setTableHeight}
          labelState1={"See All"}
          labelState2={"See Less"} />
      </div>
    );
  }
}

ClassificationHistoryTable.propTypes = {
  data: PropTypes.array
};

ClassificationHistoryTable.defaultProps = {
  data: []
};

export default ClassificationHistoryTable;
