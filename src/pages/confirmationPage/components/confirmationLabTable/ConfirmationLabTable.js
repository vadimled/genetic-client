import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputNumber, Table, Tooltip } from "antd";
import style from "./ConfirmationLabTable.module.scss";
import ExternalLink from "GenericComponents/externalLink";
import Notes from "GenericComponents/notes";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";

class ConfirmationLabTable extends Component {
  state = {
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 128
      },
      {
        title: "Chr: position",
        dataIndex: "chrPosition",
        key: "3",
        width: 156
      },
      {
        title: "Transcript",
        dataIndex: "transcript",
        key: "4",
        width: 156
      },
      {
        title: "Coding",
        dataIndex: "coding",
        key: "7",
        width: 131
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 121
      },
      {
        title: "Primer*",
        dataIndex: "primer",
        key: "16",
        width: 132
      },
      {
        title: "Fragment size*",
        dataIndex: "fragmentSize",
        key: "17",
        width: 220
      },
      {
        title: "Instructions",
        dataIndex: "confirmationNotes",
        key: "13",
        width: 150
      },
      {
        title: "",
        dataIndex: "addConfirmationAdditionData",
        key: "23",
        width: 35
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

      if (col.dataIndex === "gene") {
        column.render = value => {
          return (
            <div className="remover-cell cell-padding full-cell">
              <span>{value}</span>
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "chrPosition") {
        column.render = (value, row) => {
          const { handelChrPosition } = this.props;
          const { chrPosition } = row;
          return (
            <div className="cell-padding full-cell">
              <ExternalLink
                data={chrPosition}
                externalHandler={handelChrPosition.bind(null, chrPosition)}
              />
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "transcript") {
        column.render = (value, row) => {
          return (
            <div className="cell-padding full-cell">
              <ExternalLink data={row.transcript} />
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "coding") {
        column.render = (value, row) => {
          return (
            <div className="cell-padding full-cell">
              <Tooltip placement="topLeft" title={row.codingLong}>
                <div>{value}</div>
              </Tooltip>
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "protein") {
        column.render = value => {
          return <div className="cell-padding full-cell">{value}</div>;
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "primer") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) => (
            <div key={`primer-${item.keyId}`} className="table-multiple-row">
              <div className="table-input-wrapper">
                <InputNumber
                  value={item.primer}
                  data-testid="primer-input"
                  data-testrowid={row.id}
                  data-testindex={index}
                />
              </div>
            </div>
          ));
        };
        column.className = "input no-padding";
      }

      if (col.dataIndex === "fragmentSize") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) => (
            <div key={`fsize-${item.keyId}`} className="table-multiple-row">
              <div className="table-input-wrapper">
                <InputNumber
                  value={item.fragmentSize}
                  data-testid="fragmentSize-input"
                  data-testrowid={row.id}
                  data-testindex={index}
                />
              </div>
            </div>
          ));
        };
        column.className = "input no-padding";
      }

      if (col.dataIndex === "confirmationNotes") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item) => (
            <div key={`notes-${item.keyId}`} className="table-multiple-row">
              <div className="table-input-wrapper notes-confirmation-wrapper">
                <Notes value={item.notes} />
              </div>
            </div>
          ));
        };
        column.className = "input no-padding";
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
    console.log(data);
    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        className={style["confirmation-lab-table"]}
        components={this.components}
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  }
}

ConfirmationLabTable.propTypes = {
  data: PropTypes.array,
  handelChrPosition: PropTypes.func.isRequired
};

ConfirmationLabTable.defaultProps = {
  data: []
};

export default ConfirmationLabTable;
