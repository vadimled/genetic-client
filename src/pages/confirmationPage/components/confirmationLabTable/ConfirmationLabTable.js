import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip } from "antd";
import style from "./ConfirmationLabTable.module.scss";
import ExternalLink from "GenericComponents/externalLink";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";

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
        width: 180
      },
      {
        title: "Transcript",
        dataIndex: "transcript",
        key: "4",
        width: 180
      },
      {
        title: "Coding",
        dataIndex: "coding",
        key: "7",
        width: 80
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 80
      },
      {
        title: "Primer",
        dataIndex: "primer",
        key: "16",
        width: 70
      },
      {
        title: "Fragment size",
        dataIndex: "fragmentSize",
        key: "17",
        width: 160
      },
      {
        title: "Instructions",
        dataIndex: "confirmationNotes",
        key: "13",
        width: 350
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

      if (col.dataIndex === "protein") {
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

      if (col.dataIndex === "primer") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map(item => (
            <div
              key={`primer-${item.keyId}`}
              className="cell-padding full-cell"
            >
              {item.primer}
            </div>
          ));
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "fragmentSize") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map(item => (
            <div key={`fsize-${item.keyId}`} className="cell-padding full-cell">
              {item.fragment_size}
            </div>
          ));
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "confirmationNotes") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map(item => (
            <div key={`notes-${item.keyId}`} className="cell-padding full-cell">
              {item.instructions}
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
