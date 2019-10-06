import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip } from "antd";
import style from "pages/finalReportPage/components/finalReportActionableTable/FinalReportActionableTable.module.scss";
import ResizeableTitle from "genericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "genericComponents/variantTable/components/highlightedCell/HighlightedCell";
import TableLayout from "pages/singleTestPage/components/tableLayout";
import LabeledTag from "genericComponents/labeledTag/LabeledTag";
import { GERMLINE_VARIANT_CLASS_OPTIONS } from "utils/constants";

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
        title: "Variant",
        dataIndex: "variant",
        key: "2",
        width: 80
      },
      {
        title: "Classification",
        dataIndex: "classification",
        key: "4",
        width: 180
      },
      {
        title: "VAF",
        dataIndex: "vaf",
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
        title: "Approved drug\n" +
          "(same indication)",
        dataIndex: "approved_drug_same_indication",
        key: "7",
        width: 100
      },
      {
        title: "Approved drug\n" +
          "(other indication",
        dataIndex: "approved_drug_other_indication",
        key: "8",
        width: 110
      },
      {
        title: "Clinical trials",
        dataIndex: "clinical_trials",
        key: "9",
        width: 80
      },
      {
        dataIndex: "remove",
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
  
  handleRemoveRow = () => {
    this.props.remove;
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
      if (col.dataIndex === "classification") {
        column.render = (text, record) => {
          console.log(text, record);
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className="label-custom-style">
                <LabeledTag
                  typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
                  value={text}
                />
              </div>
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
    const { selectedData } = this.props;
    const columns = this.columnsConverter(this.state.columns);
    
    return (
      <TableLayout>
        <Table
          className={style["final-report-actionable-table"]}
          components={this.components}
          bordered
          columns={columns}
          dataSource={selectedData}
          scroll={{ x: "max-content", y: "true" }}
        />
      </TableLayout>
    );
  }
}

FinalReportActionableTable.propTypes = {
  selectedData: PropTypes.array
};

FinalReportActionableTable.defaultProps = {
  selectedData: []
};

export default FinalReportActionableTable;
