import React, { Component } from "react";
import { Button, Icon } from 'antd';

import style from "./Toolbar.module.scss";
import SimpleSelect from "GenericComponents/simpleSelect";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getTotalEntriesAmount,
  getIgvFetchBAMFileStatus
} from "Store/selectors";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMutationType } from "Actions/variantsActions";
import { fetchBAMFile } from 'Actions/igvActions';
import { getMutationType } from "Store/selectors";

class Toolbar extends Component {
  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };

  fetchBAMFile = () => {
    // eslint-disable-next-line
    const mockUrl = 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeUwRepliSeq/wgEncodeUwRepliSeqGm12801G1bAlnRep1.bam';
    this.props.fetchBAMFile(mockUrl);
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      mutations,
      fetchBAMFileStatus
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">
          <div className="mutation-select-wrapper">
            <SimpleSelect
              options={MUTATION}
              onChange={this.handleOnChange}
              name="mutation"
              value={mutations}
              disabled
            />
          </div>
        </div>
        <div
          className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <div className="igv-btn-wrapper">
            <Button
              type={fetchBAMFileStatus ? 'primary' : ''}
              onClick={this.fetchBAMFile}
              disabled={fetchBAMFileStatus}
              className={fetchBAMFileStatus ? `progress progress--${fetchBAMFileStatus}` : ''}
            >
              Load BAM{fetchBAMFileStatus === 3 && <Icon type="check" />}
            </Button>
          </div>
          <NumberVariants filtered={filtered} total={total} />
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  filtered: PropTypes.number,
  total: PropTypes.number,
  mutations: PropTypes.string
};

const mapStateToProps = state => {
  return {
    filtered: getFilteredEntriesAmount(state),
    total: getTotalEntriesAmount(state),
    mutations: getMutationType(state),
    fetchBAMFileStatus: getIgvFetchBAMFileStatus(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    fetchBAMFile: data => dispatch(fetchBAMFile(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
