import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table } from "antd";

import style from "./EvidenceTable.module.scss";
import defaultImage from "Assets/smallEmptyState.svg";

import ResizeableTitle from "GenericComponents/variantTable/components/resizeableTitle";
import EmptyState from "GenericComponents/emptyState/EmptyState";
import TableDateAndUser from "variantComponents/evidenceContainer/components/tableDateAndUser";
import TableSourceDescription from "variantComponents/evidenceContainer/components/tableSourceDescription";
import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";
import TableMatch from "variantComponents/evidenceContainer/components/tableMatch";
import TableActions from "variantComponents/evidenceContainer/components/tableActions";

import {
  EVIDENCE_TABLE_COLUMNS,
  COUNTRIES,
} from "Utils/constants";
import { createEvidenceTableData } from "Utils/helpers";
import { getCurrentEvidenceData } from "Store/selectors";


class EvidenceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: EVIDENCE_TABLE_COLUMNS[props.category] || []
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
          return <TableLevel
            level={level}
            className="evidence-level-text"
          />;
        };
      } else if (col.dataIndex === "location") {
        column.render = (text) => {
          const country = COUNTRIES.find(cntr => cntr.value === text);
          return <div className="evidence-table-text">
            {country?.label || ''}
          </div>;
        };
      } else if (col.dataIndex === "trial_id") {
        column.render = (text, obj) => {
          if (obj?.source?.trim() === 'clinicaltrials.gov') {
            text = text.trim();
            return (
              <div className="evidence-table-text">
                <a href={`https://clinicaltrials.gov/ct2/show/${text}`}>
                  {`https://clinicaltrials.gov/ct2/show/${text}`}
                </a>
              </div>
            );
          }
          return <div className="evidence-table-text">
            {text}
          </div>;
        };
      } else if (col.dataIndex === "reference") {
        column.render = (text, obj) => {
          const arrayOfReferences = text?.split(',');

          if (obj?.source?.trim()?.toLowerCase() === 'pumbed') {
            return arrayOfReferences.map((reference, index) => {
              reference = reference.trim();
              return (
                <div className="evidence-table-text" key={index}>
                  <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${reference}`}>
                    {`https://www.ncbi.nlm.nih.gov/pubmed/${reference}`}
                  </a>
                </div>
              );
            });
          }
          return arrayOfReferences.map((reference, index) => <div className="evidence-table-text" key={index}>
            {reference}
          </div>);
        };
      } else if (col.dataIndex === "is_phenotype_and_indication_match") {
        column.render = (text) => {
          return (
            <TableMatch match={text}/>
          );
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
        column.render = (text) => {
          return (
            <div className="evidence-table-text">
              {text}
            </div>
          );
        };
      }
      return column;
    });
  };

  render() {
    const { category, tabContent } = this.props;
    this.data = createEvidenceTableData(category, tabContent);
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
              scroll={{ y: "240px" }}
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
