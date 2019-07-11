import React from 'react';
import { connect } from "react-redux";
import { Button, Icon } from 'antd';
import cn from 'classnames';
import style from './IgvLoadBAM.module.scss';
import {
  getIgvFetchBAMFileStatus,
  getBAMFileUrl
} from "Store/selectors";
import {
  fetchBAMFile
} from 'Actions/igvActions';

const IgvLoadBAM = (props) => {
  const {
    fetchBAMFileStatus,
    BAMFileUrl,
    fetchBAMFile
  } = props;

  return (
    <div className={cn(
      "toolbar-btn-wrapper",
      style["igv-btn"]
    )}>
      <Button
        type={fetchBAMFileStatus ? 'primary' : ''}
        onClick={fetchBAMFile.bind(null, BAMFileUrl)}
        disabled={fetchBAMFileStatus}
        className={fetchBAMFileStatus ? `progress progress--${fetchBAMFileStatus}` : ''}
        data-testid="open-igv-btn"
      >
        Load BAM{fetchBAMFileStatus === 3 && <Icon type="check" />}
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchBAMFileStatus: getIgvFetchBAMFileStatus(state),
    BAMFileUrl: getBAMFileUrl(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchBAMFile: data => dispatch(fetchBAMFile(data)),
  };
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IgvLoadBAM)
);
