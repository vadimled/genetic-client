import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Table, Tooltip, InputNumber } from "antd";
import style from './ConfirmationTable.module.scss';
import ExternalLink from "GenericComponents/externalLink";
import Notes from "GenericComponents/notes";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";

class ConfirmationTable extends Component {
  state = {
    hoveredAdditionalConfirmationRow: {},

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

  onOverAdditionalConfirmationRow = data => {
    this.setState({
      hoveredAdditionalConfirmationRow: data
    });
  };

  onLeaveAdditionalConfirmationRow = () => {
    this.setState({
      hoveredAdditionalConfirmationRow: {}
    });
  };

  columnsConverter = columns => {
    const { hoveredAdditionalConfirmationRow } = this.state;

    const getAdditionClassesOnAdditionRow = (row, index) => {
      return cn({
        'hovered': hoveredAdditionalConfirmationRow?.id === row?.id
          && hoveredAdditionalConfirmationRow?.index === index,
        'toremove': hoveredAdditionalConfirmationRow?.id === row?.id
          && hoveredAdditionalConfirmationRow?.indexToRemove === index,
        'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
          && hoveredAdditionalConfirmationRow?.index !== index
          && hoveredAdditionalConfirmationRow?.indexToRemove !== index
      });
    };

    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };

      if (col.dataIndex === "gene") {
        column.render = (value, row) => {
          return (
            <div
              className={cn("remover-cell cell-padding full-cell", {
                'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
              })}
            >
              <span>{value}</span>
              <button
                onClick={this.props.removeConfirmationRow.bind(null, row.id)}
                data-testid="remove-row"
              />
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "chrPosition") {
        column.render = (value, row) => {
          const { chrPosition } = row;
          return (
            <div
              className={cn("cell-padding full-cell", {
                'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
              })}
            >
              <ExternalLink
                data={chrPosition}
                externalHandler={this.props.handelChrPosition.bind(
                  null,
                  chrPosition
                )}
              />
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "transcript") {
        column.render = (value, row) => {
          return (
            <div
              className={cn("cell-padding full-cell", {
                'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
              })}
            >
              <ExternalLink data={row.transcript} />
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "coding") {
        column.render = (value, row) => {
          return (
            <div
              className={cn("cell-padding full-cell", {
                'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
              })}
            >
              <Tooltip placement="topLeft" title={row.codingLong}>
                <div>{value}</div>
              </Tooltip>
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "protein") {
        column.render = (value, row) => {
          return (
            <div
              className={cn("cell-padding full-cell", {
                'bg-white': hoveredAdditionalConfirmationRow?.id === row?.id
              })}
            >
              {value}
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "primer") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) =>
            <div
              key={`primer-${item.keyId}`}
              className={cn(
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index),
                {
                  'validation-error': item?.validationFaildFields?.includes(col.dataIndex)
                }
              )}
              onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                id: row.id,
                index
              })}
              onMouseLeave={this.onLeaveAdditionalConfirmationRow}
            >
              <div className="table-input-wrapper">
                <InputNumber
                  value={item.primer}
                  onChange={value =>
                    this.props.handleConfirmationPrimer({
                      id: row.id,
                      index,
                      value
                    })
                  }
                  placeholder="Edit"
                  data-testid="primer-input"
                  data-testrowid={row.id}
                  data-testindex={index}
                />
              </div>
            </div>
          );
        };
        column.className = "input no-padding";
      }

      if (col.dataIndex === "fragmentSize") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) =>
            <div
              key={`fsize-${item.keyId}`}
              className={cn(
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index),
                {
                  'validation-error': item?.validationFaildFields?.includes(col.dataIndex)
                }
              )}
              onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                id: row.id,
                index
              })}
              onMouseLeave={this.onLeaveAdditionalConfirmationRow}
            >
              <div className="table-input-wrapper">
                <InputNumber
                  value={item.fragmentSize}
                  onChange={value =>
                    this.props.handleConfirmationFragmentSize({
                      id: row.id,
                      index,
                      value
                    })
                  }
                  placeholder="Edit"
                  data-testid="fragmentSize-input"
                  data-testrowid={row.id}
                  data-testindex={index}
                />
              </div>
            </div>
          );
        };
        column.className = "input no-padding";
      }

      if (col.dataIndex === "confirmationNotes") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) =>
            <div
              key={`notes-${item.keyId}`}
              className={cn(
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index)
              )}
              onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                id: row.id,
                index
              })}
              onMouseLeave={this.onLeaveAdditionalConfirmationRow}
            >
              <div className="table-input-wrapper notes-confirmation-wrapper">
                <Notes
                  value={item.notes}
                  setNotes={notes => this.props.handleConfirmationNotes({
                    id: row.id,
                    index,
                    notes
                  })}
                  placeholder="Add"
                />
              </div>
            </div>
          );
        };
        column.className = "input no-padding";
      }

      if (col.dataIndex === "addConfirmationAdditionData") {
        column.render = (value, row) => {
          return row.additionConfirmationData.map((item, index) =>
            <div
              key={`adtnl-btn-${item.keyId}`}
              className="table-multiple-row bg-white"
            >
              {index === 0 && <div
                className="table-act-plus"
                onClick={this.props.addAdditionalConfirmationData.bind(null, {
                  id: row.id
                })}
                onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                  id: row.id,
                  indexToAdd: index
                })}
                onMouseLeave={this.onLeaveAdditionalConfirmationRow}
                data-testid="additional-plus"
                data-testrowid={row.id}
                data-testindex={index}
              />}
              {index > 0 && <div
                className="table-act-remove"
                onClick={this.props.removeAdditionalConfirmationData.bind(null, {
                  id: row.id,
                  index
                })}
                onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                  id: row.id,
                  indexToRemove: index
                })}
                onMouseLeave={this.onLeaveAdditionalConfirmationRow}
                data-testid="additional-minus"
                data-testrowid={row.id}
                data-testindex={index}
              />}
            </div>
          );
        };
        column.className = "add-cell no-padding";
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

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        className={style["confirmation-table"]}
        components={this.components}
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  }
}

ConfirmationTable.propTypes = {
  data: PropTypes.array,
  removeConfirmationRow: PropTypes.func.isRequired,
  handelChrPosition: PropTypes.func.isRequired,
  handleConfirmationNotes: PropTypes.func.isRequired,
  handleConfirmationPrimer: PropTypes.func.isRequired,
  handleConfirmationFragmentSize: PropTypes.func.isRequired,
  addAdditionalConfirmationData: PropTypes.func.isRequired,
  removeAdditionalConfirmationData: PropTypes.func.isRequired,
};

ConfirmationTable.defaultProps = {
  data: []
};

export default ConfirmationTable;
