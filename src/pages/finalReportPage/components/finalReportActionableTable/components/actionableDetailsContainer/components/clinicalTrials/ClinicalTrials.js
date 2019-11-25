import React, { Component } from "react";
import PropTypes from "prop-types";
// import cn from "classnames";
import { Table, Input } from "antd";
import TableLayout from "Pages/singleTestPage/components/tableLayout";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
// import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import LabeledTag from "GenericComponents/labeledTag/LabeledTag";
import MultiLineText from "GenericComponents/multiLineText";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";

const { TextArea } = Input;

import style from "./ClinicalTrials.module.scss";

class ClinicalTrials extends Component {
  state = {
    columns: [
      {
        title: "Description",
        dataIndex: "description",
        key: "1",
        width: 120
      },
      {
        title: "Biomarker",
        dataIndex: "biomarker",
        key: "2",
        width: 120
      },
      {
        title: "Indication",
        dataIndex: "indication",
        key: "4",
        width: 100
      },
      {
        title: "Drug",
        dataIndex: "drug_name",
        key: "5",
        width: 80
      },
      {
        title: "Trial id",
        dataIndex: "trial_id",
        key: "7",
        width: 180
      },
      {
        title: "Locations",
        dataIndex: "location",
        key: "8",
        width: 180
      },
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
      if (col.dataIndex === "description") {
        column.render = (value, record) => {
          return (
            <div className="textarea">
              <TextArea
                id={record.id}
                autosize
                value={record.description}
                onChange={this.props.onChange.bind(null, 'description')}
                placeholder={"Type here"}
              />
            </div>
          );
        };
      }
      else if (col.dataIndex === "biomarker") {
        column.render = (text, record) => {
          const { hgvs_p, hgvs_c, germline_class, somatic_class, zygosity } = record.biomarker;

          // define classification
          let value, typeData;
          if (zygosity === TEXTS.somatic) {
            value = somatic_class;
            typeData = SOMATIC_VARIANT_CLASS_OPTIONS;
          }
          else {
            value = germline_class;
            typeData = GERMLINE_VARIANT_CLASS_OPTIONS;
          }

          return (
            <div>
              <MultiLineText
                source={{ hgvs_p, hgvs_c }}
                className="multiLine-text"
              />
              <div>
                <LabeledTag typeData={typeData} value={value} />
              </div>
            </div>
          );
        };
      }
      else {
        column.render = value => {
          return (
            <div className="text">{value ? value.toString() : ''}</div>
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
    const { data } = this.props;
    const columns = this.columnsConverter(this.state.columns);
    return (
      <TableLayout>
        <Table
          className={style["actionable-alteration-clinical-trial-table"]}
          components={this.components}
          bordered
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: "max-content", y: "false" }}
          rowKey="id"
        />
      </TableLayout>
    );
  }
}

ClinicalTrials.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

ClinicalTrials.defaultProps = {
  data: []
};

export default ClinicalTrials;
