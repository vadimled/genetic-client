import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip } from "antd";
import style from "./FinalReportActionableTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import TableLayout from "Pages/singleTestPage/components/tableLayout";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";
import MultiLineText from "GenericComponents/multiLineText";
import { ReactComponent as OkIcon } from "Assets/ok.svg";
import { ReactComponent as DeliteIcon } from "Assets/delete.svg";
import { convertVaf } from "Utils/helpers";

class FinalReportActionableTable extends Component {
  state = {
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "1",
        width: 120
      },
      {
        title: "Variant",
        dataIndex: "variant",
        key: "2",
        width: 120
      },
      {
        title: "Classification",
        dataIndex: "classification",
        key: "4",
        width: 100
      },
      {
        title: "VAF",
        dataIndex: "percentage_variants",
        key: "5",
        width: 80
      },
      {
        title: `Approved drug\n
        (same indication)`,
        dataIndex: "approved_drug_same_indication",
        key: "7",
        width: 180
      },
      {
        title: "Approved drug\n" + "(other indication",
        dataIndex: "approved_drug_other_indication",
        key: "8",
        width: 180
      },
      {
        title: "Clinical trials",
        dataIndex: "clinical_trials",
        key: "9",
        width: 120
      },
      {
        dataIndex: "remove",
        key: "10",
        width: 80
      }
    ]
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  handleRemoveRow = (id, e) => {
    e.stopPropagation();
    const { testId, remove } = this.props;
    remove({ testId, id });
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
          const { germline_class, somatic_class, zygosity } = record;
          let value, typeData;
          if (zygosity === TEXTS.somatic) {
            value = somatic_class;
            typeData = SOMATIC_VARIANT_CLASS_OPTIONS;
          } else {
            value = germline_class;
            typeData = GERMLINE_VARIANT_CLASS_OPTIONS;
          }

          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className="label-custom-style">
                <LabeledTag typeData={typeData} value={value} />
              </div>
            </HighlightedCell>
          );
        };
        column.className = "no-padding";
      } else if (col.dataIndex === "percentage_variants") {
        column.render = (text, record) => {
          const { isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <div className="text">{text ? `${convertVaf(text)}%` : ``}</div>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "variant") {
        column.render = (text, record) => {
          const { hgvs_p, hgvs_c, isAdded, status, mutation_type } = record;

          return status && mutation_type === TEXTS.CNV ? (
            <HighlightedCell isHighlighted={isAdded}>
              <div className="text">{status}</div>
            </HighlightedCell>
          ) : (
            <HighlightedCell isHighlighted={isAdded}>
              <MultiLineText
                source={{ hgvs_p, hgvs_c }}
                className="multiLine-text"
              />
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "clinical_trials") {
        column.render = (text, record) => {
          const { isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <div className="ok-icon">{text && <OkIcon />}</div>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "remove") {
        column.render = (text, record) => {
          const { isAdded, id } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <div
                className="delete-icon"
                onClick={e => this.handleRemoveRow(id, e)}
              >
                {<DeliteIcon />}
              </div>
            </HighlightedCell>
          );
        };
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

  handleRowClick = obj => {
    this.props.handleSelectRow(obj.id);
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
    const { dataSource } = this.props;
    const columns = this.columnsConverter(this.state.columns);
    return (
      <TableLayout>
        <Table
          className={style["final-report-actionable-table"]}
          components={this.components}
          bordered
          columns={columns}
          onRow={(record) => {
            return {
              onClick: e => this.handleRowClick(record, e)
            };
          }}
          dataSource={dataSource}
          pagination={false}
          scroll={{ x: "max-content", y: "false" }}
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
