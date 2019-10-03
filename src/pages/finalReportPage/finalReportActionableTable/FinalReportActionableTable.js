import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip } from "antd";
import style from "./FinalReportActionableTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import TableLayout from "Pages/singleTestPage/components/tableLayout";
// import MultiLineText from "Pages/singleTestPage/components/FinalReportActionableTable/components/multiLineText";

class FinalReportActionableTable extends Component {
  state = {
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "1",
        width: 128
      },
      {
        title: "Chr",
        dataIndex: "chr",
        key: "2",
        width: 80
      },
      {
        title: "Range",
        dataIndex: "range",
        key: "4",
        width: 180
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "5",
        width: 140
      },
      {
        title: "Confidence",
        dataIndex: "confidence",
        key: "6",
        width: 140
      },
      {
        title: "Amplicons",
        dataIndex: "num_amplicons",
        key: "7",
        width: 100
      },
      {
        title: "Panelizer",
        dataIndex: "copiesPanelizer",
        key: "8",
        width: 110
      },
      {
        title: "CNVCov",
        dataIndex: "copiesCNVCov",
        key: "9",
        width: 80
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
      if (col.dataIndex === "range") {
        column.render = value => {
          return (
            <HighlightedCell isHighlighted={false}>
              {value}
            </HighlightedCell>
          );
        };
        column.className = "no-padding";
      } else {
        column.render = value => {
          return (
            <HighlightedCell isHighlighted={false}>
              <Tooltip placement="topLeft" title={value}>
                <div className="text">{value}</div>
              </Tooltip>
            </HighlightedCell>
          );
        };
        column.className = "no-padding";
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
    const columns = this.columnsConverter(this.state.columns);
    
    return (
      <TableLayout>
        <Table
          className={style["final-report-actionable-table"]}
          components={this.components}
          bordered
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 20 }}
          scroll={{ x: "max-content", y: "true" }}
        />
      </TableLayout>
    );
  }
}

FinalReportActionableTable.propTypes = {
  data: PropTypes.array
};

FinalReportActionableTable.defaultProps = {
  data: []
};

export default FinalReportActionableTable;
