import React, { Component } from "react";
import { Checkbox, Table, Tooltip } from "antd";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS, SOMATIC_VARIANT_CLASS_OPTIONS,
  VARIANT_CLASS_GERMLINE,
  VARIANT_CLASS_SOMATIC
} from "Utils/constants";



class FinalReportVariantsTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          key: "1",
          dataIndex: "selection",
          width: 100,
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
          width: 250
        },
        {
          title: "Transcript",
          dataIndex: "transcript",
          key: "4",
          width: 180
        },
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
          width: 250
        },
        {
          title: "Protein",
          dataIndex: "protein",
          key: "8",
          width: 150
        },
        {
          title: "VAF",
          dataIndex: "vaf",
          key: "9",
          width: 80,
          className: "sorter numeric"
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
        }
      ]
    };
  }

  components = {
    header: {
      cell: ResizeableTitle
    }
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
        const { isAllRowSelected } = this.props;
        column.title = (
          <div
            className={cn("table-header-selection-chbx")}
          >
            <Checkbox
              checked={isAllRowSelected}
              onChange={this.handleCheckboxChange}
            />
          </div>
        );

        column.render = (text, record) => {

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
            {record.zygosity}
          </HighlightedCell>
        );
      } else if (column.dataIndex === "variantClassGermline") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div className={cn("table-select-wrapper", {"hidden-classification": record.zygosity === "somatic"})}>
                <div>
                  <LabeledTag
                    typeData={GERMLINE_VARIANT_CLASS_OPTIONS}
                    label={VARIANT_CLASS_GERMLINE[text]?.label}
                  />
                </div>
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
                <div>
                  <LabeledTag
                    typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
                    label={VARIANT_CLASS_SOMATIC[text]?.label}
                  />
                </div>
              </div>
            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "notes") {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              <div>{record.notes}</div>
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
              {chrPosition}
            </HighlightedCell>
          );
        };
      }
      else if (col.dataIndex === "alleleChange") {
        column.render = (text, record) => {
          const { isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <div className="text">{text}</div>

            </HighlightedCell>
          );
        };
      } else if (col.dataIndex === "coding") {
        column.render = (text, record) => {
          const { isAdded } = record;
          return (
            <HighlightedCell isHighlighted={isAdded}>
              <div className="text">{text}</div>
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

  render() {
    const {selectedVariants} = this.props;

    const columns = this.columnsConverter(this.state.columns);

    if (!selectedVariants) {
      return <div>no data</div>;
    }

    return (
      <Table
        components={this.components}
        pagination={{ pageSize: 5 }}
        bordered
        columns={columns}
        dataSource={selectedVariants}
        scroll={{ x: "max-content", y: "240px" }}
      />
    );
  }
}

export default withRouter(FinalReportVariantsTable);
