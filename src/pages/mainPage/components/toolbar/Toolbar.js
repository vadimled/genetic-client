import React, { Component, Fragment } from "react";
import { Button, Icon, AutoComplete } from 'antd';

import style from "./Toolbar.module.scss";
import SimpleSelect from "GenericComponents/simpleSelect";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getTotalEntriesAmount,
  getIgvFetchBAMFileStatus,
  getBAMFileUrl
} from "Store/selectors";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchBAMFile } from "Actions/igvActions";
import { setMutationType } from "Actions/variantsActions";
import { updateSearch } from "Actions/tableActions";
import { handleOnConfirmation } from "Actions/confirmationActions";
import {
  getMutationType,
  getSearchQuery,
  getFilteredSearchQueries,
  getSelectedRows
} from "Store/selectors";
import closeIcon from "Assets/close.svg";

class Toolbar extends Component {
  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };


  fetchBAMFile = () => {
    const { BAMFileUrl } = this.props;
    this.props.fetchBAMFile(BAMFileUrl);
  };

  handleOnSearchChange = e => {
    this.props.updateSearch(e);
  };

  clearSearch = () => {
    this.props.updateSearch("");
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      mutations,
      fetchBAMFileStatus,
      searchText,
      tableData,
      selectedRows,
      handleOnConfirmation
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        {!!selectedRows?.length &&
          <button
            className={cn(["confirmation-button", { "sidebar-open": sidebarToggle }])}
            onClick={handleOnConfirmation.bind(null, true)}
          >
            Send for confirmation
          </button>
        }
        {!selectedRows?.length && <Fragment>
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

          <div className="search-field-wrapper flex items-center">
            {!searchText && (
              <div className="flex items-center search-icons-wrapper">
                <Icon type="search" style={{ color: "#96A2AA" }} />
                <div className="placeholder">Search</div>
              </div>
            )}

            <AutoComplete
              id="search-field"
              data-testid={`search-field`}
              dataSource={searchText && tableData}
              value={searchText}
              onChange={this.handleOnSearchChange}
              placeholder="input here"
            />

            {searchText && (
              <button
                className="clear-search-button"
                style={{ backgroundImage: `url(${closeIcon})` }}
                onClick={() => this.clearSearch()}
              />
            )}
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
        </Fragment>}
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
    fetchBAMFileStatus: getIgvFetchBAMFileStatus(state),
    BAMFileUrl: getBAMFileUrl(state),
    searchText: getSearchQuery(state),
    tableData: getFilteredSearchQueries(state),
    selectedRows: getSelectedRows(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    fetchBAMFile: data => dispatch(fetchBAMFile(data)),
    updateSearch: data => dispatch(updateSearch(data)),
    handleOnConfirmation: data => dispatch(handleOnConfirmation(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
