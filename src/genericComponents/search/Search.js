import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { AutoComplete, Icon } from "antd";
import { getFilteredSearchQueries, getSearchQuery } from "Store/selectors";
import { updateSearch } from "Actions/tableActions";
import { ReactComponent as CloseIcon } from "Assets/close.svg";
import style from "./Search.module.scss";
import { TEXTS } from "Utils/constants";

class Search extends Component {
  handleOnSearchChange = e => {
    this.props.updateSearch(e);
  };

  clearSearch = () => {
    this.props.updateSearch("");
  };

  render() {
    const { searchText, tableData } = this.props;
    return (
      <div className={style["search-wrapper"]}>
        {!searchText ? (
          <div className="flex items-center search-icons-wrapper">
            <Icon type="search" style={{ color: "#96A2AA" }} />
          </div>
        ) : (
          <span />
        )}

        <AutoComplete
          id="search-field"
          data-testid={`search-field`}
          dataSource={tableData}
          value={searchText}
          onChange={this.handleOnSearchChange}
          placeholder={TEXTS.searchPlaceholder}
        />

        {searchText && (
          <div
            className="clear-search-button"
            data-testid={`tumor-clear-search-button`}
            onClick={this.clearSearch}>
            <CloseIcon />
          </div>
        )}
      </div>
    );
  }
}

Search.propTypes = {};

const mapStateToProps = state => {
  return {
    searchText: getSearchQuery(state),
    tableData: getFilteredSearchQueries(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateSearch: data => dispatch(updateSearch(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
