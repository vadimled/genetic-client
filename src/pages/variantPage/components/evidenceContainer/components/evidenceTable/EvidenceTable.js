import React, { Component, Fragment } from "react";
import { Table } from "antd";
import style from "./EvidenceTable.module.scss";
import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import HighlightedCell from "GenericComponents/variantTable/components/highlightedCell/HighlightedCell";
import PropTypes from "prop-types";
// import cn from "classnames";
// import { TEXTS } from "Utils/constants";
import EmptyState from "GenericComponents/emptyState/EmptyState";
import defaultImage from "Assets/smallEmptyState.svg";
import { getCurrentEvidenceData } from "Store/selectors";
import { connect } from "react-redux";
import { createTableData } from "Utils/helpers";
import TableDateAndUser from "variantComponents/evidenceContainer/components/tableDateAndUser";
import TableSourceDescription from "variantComponents/evidenceContainer/components/tableSourceDescription";
import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";
import TableActions from "variantComponents/evidenceContainer/components/tableActions";

class EvidenceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          key: "1",
          title: "Date",
          dataIndex: "created_at",
          width: 140
        },
        {
          title: "Source and Description",
          dataIndex: "source_description",
          key: "2",
          width: 800
        },
        {
          title: "Level",
          dataIndex: "level",
          key: "3",
          width: 100
        },
        {
          title: "Actions",
          dataIndex: "actions",
          key: "4",
          width: 100
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

  columnsConverter = columns => {
    const { handleDeleteEntry, handleEditEntry } = this.props;
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };
      if (col.dataIndex === "created_at") {
        column.render = (date, obj) => {
          return <TableDateAndUser date={date} user={obj.user} />;
        };
      } else if (col.dataIndex === "source_description") {
        column.render = (text, obj) => {
          return (
            <TableSourceDescription
              source={obj.source}
              description={obj.description}
            />
          );
        };
      } else if (col.dataIndex === "level") {
        column.render = level => {
          return <TableLevel level={level} />;
        };
      } else if (col.dataIndex === "actions") {
        column.render = (text, obj) => {
          return (
            <TableActions
              onDelete={e => handleDeleteEntry(e, obj.id)}
              onEdit={e => handleEditEntry(e, obj.id)}
            />
          );
        };
      } else {
        column.render = (text, record) => {
          return (
            <HighlightedCell isHighlighted={record.isAdded}>
              {text}
            </HighlightedCell>
          );
        };
      }
      return column;
    });
  };

  render() {
    const { category, tabContent } = this.props;
    this.data = createTableData(category, tabContent);
    const { length } = this.data;

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <div className={style["evidence-table-wrapper"]}>
        {!length ? (
          <div className="empty-state">
            <EmptyState
              image={defaultImage}
              title={"No Evidence Data"}
              description=""
            />
          </div>
        ) : (
          <Fragment>
            <Table
              className={"evidence-ant-table-wrapper"}
              components={this.components}
              pagination={false}
              bordered
              columns={columns}
              dataSource={this.data}
              scroll={{ y: "300px" }}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

EvidenceTable.propTypes = {
  category: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    tabContent: getCurrentEvidenceData(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(EvidenceTable);
