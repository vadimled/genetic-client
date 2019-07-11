import React from 'react';
import { connect } from "react-redux";
import { Button } from 'antd';
import cn from 'classnames';
import style from './AddResult.module.scss';
// import {
//   getIgvFetchBAMFileStatus,
//   getBAMFileUrl
// } from "Store/selectors";
// import {
//   fetchBAMFile
// } from 'Actions/igvActions';

const AddResult = () => {
  // const {
  //   fetchBAMFileStatus,
  //   BAMFileUrl,
  //   fetchBAMFile
  // } = props;

  return (
    <div className={cn(
      "toolbar-btn-wrapper",
      style["add-result-btn"]
    )}>
      <Button
        onClick={() => true}
        data-testid="add-result-btn"
      >
        <div className="btn-icon"/>
        Add result
      </Button>
    </div>
  );
};

const mapStateToProps = () => {
  return {

  };
};

function mapDispatchToProps() {
  return {
    // fetchBAMFile: data => dispatch(fetchBAMFile(data)),
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddResult)
);
