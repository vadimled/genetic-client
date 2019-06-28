import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip } from "antd";
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
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 128,
        render: (text, record) => {
          return (
            <div className="remover-cell">
              <span>{text}</span>
              <button
                onClick={this.props.handleSelectedRow.bind(null, {
                  item: record,
                  value: false
                })}
              >
                <img src={binImg} alt="bin"/>
              </button>
            </div>
          );
        }
      },
      {
        title: "Chr: position",
        dataIndex: "chrPosition",
        key: "3",
        width: 128
      },
      {
        title: "Exon",
        dataIndex: "exon",
        key: "5",
        width: 100
      },
      {
        title: "coding",
        dataIndex: "coding",
        key: "7",
        width: 178,
        render: (text, record) => {
          return (
            <Tooltip placement="topLeft" title={record.codingLong}>
              <div>{text}</div>
            </Tooltip>
          );
        }
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 100
      },
      {
        title: "Special Note",
        dataIndex: "confirmationNotes",
        key: "13",
        width: 532
      },
      // {
      //   title: "Variant Class",
      //   dataIndex: "variantClass",
      //   key: "11",
      //   width: 178,
      //   render: (text, record) => {
      //     let variantClass = VARIANT_CLASS[record.variantClass] || SOMATIC_CLASS[record.variantClass];
      //     return variantClass
      //       ? (
      //         <div className="flex items-center">
      //           <Tag color={variantClass.tagColor} />
      //           {variantClass.label}
      //         </div>
      //       )
      //       : '';
      //   }
      // },
      // {
      //   title: "Allele change",
      //   dataIndex: "alleleChange",
      //   key: "6",
      //   width: 178,
      //   render: (text, record) => {
      //     return (
      //       <Tooltip placement="topLeft" title={record.alleleChangeLong}>
      //         <div>{text}</div>
      //       </Tooltip>
      //     );
      //   }
      // },
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

      if (col.dataIndex === "chrPosition") {
        column.render = (...data) => {
          const { chrPosition } = data[1];
          return (
            <ExternalLink
              data={chrPosition}
              externalHandler={this.props.handelChrPosition.bind(
                null,
                chrPosition
              )}
            />
          );
        };
      }

      if (col.dataIndex === "confirmationNotes") {
        column.render = (...data) => <Notes
          setNotes={notes => this.props.handleConfirmationNotes({
            id: data[1].id,
            notes
          })}
          value={data[1].confirmationNotes}
        />;
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
  handleSelectedRow: PropTypes.func.isRequired,
  handelChrPosition: PropTypes.func.isRequired,
  handleConfirmationNotes: PropTypes.func.isRequired
};

ConfirmationTable.defaultProps = {
  data: []
};

export default ConfirmationTable;
