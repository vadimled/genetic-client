import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table } from "antd";

import style from "./EvidenceTable.module.scss";
import defaultImage from "Assets/smallEmptyState.svg";

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
import { getCurrentEvidenceData, getSelectedCurrentEvidencePhenotype } from "Store/selectors";

class EvidenceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: EVIDENCE_TABLE_COLUMNS[props.category] || []
    };
  }

  columnsConverter = columns => {
    const { handleDeleteEntry, handleEditEntry } = this.props;
    return columns.map((column) => {

      if (column.dataIndex === "created_at") {
        column.render = (date, obj) => {
          return (
            <div className="n-table-cell">
              <TableDateAndUser date={date} user={obj.user} />
            </div>
          );
        };
      } else if (column.dataIndex === "source_description") {
        column.render = (text, obj) => {
          return (
            <div className="n-table-cell">
              <TableSourceDescription
                source={obj.source}
                description={obj.description}
              />
            </div>
          );
        };
      } else if (column.dataIndex === "level") {
        column.render = level => {
          return <TableLevel
            level={level}
            className="n-table-cell"
          />;
        };
      } else if (column.dataIndex === "location") {
        column.render = (text) => {
          const country = COUNTRIES.find(cntr => cntr.value === text);
          return <div className="n-table-cell">
            {country?.label || ''}
          </div>;
        };
      } else if (column.dataIndex === "trial_id") {
        column.render = (text, obj) => {
          if (obj?.source?.trim() === 'clinicaltrials.gov') {
            text = text.trim();
            return (
              <div className="n-table-cell">
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
      } else if (column.dataIndex === "reference") {
        column.render = (text, obj) => {
          const arrayOfReferences = text?.split(',');
          if (!arrayOfReferences){
            return null;
          }
          if (obj?.source?.trim()?.toLowerCase() === 'pumbed') {
            return <div className="n-table-cell">
              {arrayOfReferences.map((reference, index) => {
                reference = reference.trim();
                return (
                  <div key={index}>
                    <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${reference}`}>
                      {`https://www.ncbi.nlm.nih.gov/pubmed/${reference}`}
                    </a>
                  </div>
                );
              })}
            </div>;
          }
          return <div className="n-table-cell">
            {arrayOfReferences.map((reference, index) => <div key={index}>
              {reference}
            </div>)}
          </div>;
        };
      } else if (column.dataIndex === "is_phenotype_and_indication_match") {
        column.render = (text) => {
          return (
            <TableMatch match={text}/>
          );
        };
      } else if (column.dataIndex === "actions") {
        column.render = (text, obj) => {
          return (
            <div className="n-table-cell">
              <TableActions
                onDelete={e => handleDeleteEntry(e, obj.id)}
                onEdit={e => handleEditEntry(e, obj.id)}
              />
            </div>
          );
        };
      } else {
        column.render = (text) => {
          return (
            <div className="n-table-cell">
              {text}
            </div>
          );
        };
      }
      return column;
    });
  };

  render() {
    const { category, tabContent, selectedCurrentEvidencePhenotype } = this.props;
    this.data = createEvidenceTableData(category, tabContent, selectedCurrentEvidencePhenotype);
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
              className={style["new-table"]}
              pagination={false}
              columns={columns}
              dataSource={this.data}
              // scroll={{ x: "max-content", y: "false" }}
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
    tabContent: getCurrentEvidenceData(state),
    selectedCurrentEvidencePhenotype: getSelectedCurrentEvidencePhenotype(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(EvidenceTable);
