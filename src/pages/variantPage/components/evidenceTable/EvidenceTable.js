import React, { Component } from 'react';
import style from "./EvidenceTable.module.scss";
// import PropTypes from 'prop-types';

class EvidenceTable extends Component {
  render() {
    return ( <div className={style["evidence-wrapper"]}>
      <div className="evidence-title">
        Evidence:
      </div>
    </div>);
  }
}

EvidenceTable.propTypes = {};

export default EvidenceTable;
