import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, AutoComplete } from 'antd';
import SimpleSelect from "GenericComponents/simpleSelect";
import style from "./Toolbar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import IgvLoadBAM from './components/IgvLoadBAM';
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getTotalEntriesAmount,
} from "Store/selectors";
import { setMutationType } from "Actions/variantsActions";
import { updateSearch } from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
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
      searchText,
      tableData,
      selectedRows,
      openConfirmationPopup
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        {!!selectedRows?.length &&
          <button
            className={cn(["confirmation-button", { "sidebar-open": sidebarToggle }])}
            onClick={openConfirmationPopup.bind(null, selectedRows)}
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

          <div className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}>
            <IgvLoadBAM />
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
    searchText: getSearchQuery(state),
    tableData: getFilteredSearchQueries(state),
    selectedRows: getSelectedRows(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    openConfirmationPopup: data => {
      dispatch(handleOnConfirmation(true));
      dispatch(setConfirmationData(data));
    },
    updateSearch: data => dispatch(updateSearch(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
