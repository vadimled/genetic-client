import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip, Input } from "antd";
import { Resizable } from "react-resizable";
import style from './ConfirmationTable.module.scss';
// import Tag from 'GenericComponents/tag';
import ExternalLink from "GenericComponents/externalLink";
import Notes from "GenericComponents/notes";
// import { VARIANT_CLASS, SOMATIC_CLASS } from "Utils/constants";
import binImg from "Assets/bin.svg";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

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
        title: "Exon",
        dataIndex: "exon",
        key: "5",
        width: 75
      },
      {
        title: "coding",
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
        title: "Special Note",
        dataIndex: "confirmationNotes",
        key: "13",
        width: 212
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
      return [
        hoveredAdditionalConfirmationRow?.id === row?.id
        && (hoveredAdditionalConfirmationRow?.index === index
          || hoveredAdditionalConfirmationRow?.indexToRemove === index
        )
          ? "hovered"
          : '',
        hoveredAdditionalConfirmationRow?.id === row?.id
        && hoveredAdditionalConfirmationRow?.index !== index
        && hoveredAdditionalConfirmationRow?.indexToRemove !== index
          ? "bg-white"
          : ''
      ].join(' ');
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
              className={[
                "remover-cell cell-padding full-cell",
                hoveredAdditionalConfirmationRow?.id === row?.id
                  ? "bg-white"
                  : ''
              ].join(' ')}
            >
              <span>{value}</span>
              <button
                onClick={this.props.removeConfirmationRow.bind(null, row.id)}
              >
                <img src={binImg} alt="bin"/>
              </button>
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
              className={[
                "remover-cell cell-padding full-cell",
                hoveredAdditionalConfirmationRow?.id === row?.id
                  ? "bg-white"
                  : ''
              ].join(' ')}
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

      if (col.dataIndex === "exon") {
        column.render = (value, row) => {
          return (
            <div
              className={[
                "remover-cell cell-padding full-cell",
                hoveredAdditionalConfirmationRow?.id === row?.id
                  ? "bg-white"
                  : ''
              ].join(' ')}
            >
              {value}
            </div>
          );
        };
        column.className = "no-padding";
      }

      if (col.dataIndex === "coding") {
        column.render = (value, row) => {
          return (
            <div
              className={[
                "remover-cell cell-padding full-cell",
                hoveredAdditionalConfirmationRow?.id === row?.id
                  ? "bg-white"
                  : ''
              ].join(' ')}
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
              className={[
                "remover-cell cell-padding full-cell",
                hoveredAdditionalConfirmationRow?.id === row?.id
                  ? "bg-white"
                  : ''
              ].join(' ')}
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
              className={[
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index),
                item?.validationFaildFields?.includes(col.dataIndex)
                  ? "validation-error"
                  : ''
              ].join(' ')}
              onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                id: row.id,
                index
              })}
              onMouseLeave={this.onLeaveAdditionalConfirmationRow}
            >
              <div className="table-input-wrapper">
                <Input
                  value={item.primer}
                  onChange={e =>
                    this.props.handleConfirmationPrimer({
                      id: row.id,
                      index,
                      value: e.target.value
                    })
                  }
                  placeholder="Edit"
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
              className={[
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index, col.dataIndex),
                item?.validationFaildFields?.includes(col.dataIndex)
                  ? "validation-error"
                  : ''
              ].join(' ')}
              onMouseOver={this.onOverAdditionalConfirmationRow.bind(null, {
                id: row.id,
                index
              })}
              onMouseLeave={this.onLeaveAdditionalConfirmationRow}
            >
              <div className="table-input-wrapper">
                <Input
                  value={item.fragmentSize}
                  onChange={e =>
                    this.props.handleConfirmationFragmentSize({
                      id: row.id,
                      index,
                      value: e.target.value
                    })
                  }
                  placeholder="Edit"
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
              className={[
                "table-multiple-row",
                getAdditionClassesOnAdditionRow(row, index)
              ].join(' ')}
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
