import React, { Component } from "react";
import style from "./Toolbar.module.scss";
import SimpleSelect from "GenericComponents/simpleSelect";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getTotalEntriesAmount
} from "Store/selectors";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMutationType } from "Store/actions/variantsActions";
import { updateSearch } from "Store/actions/tableActions";
import {
  getMutationType,
  getSearchQuery,
  getSearchResult
} from "Store/selectors";
import { Icon } from "antd";

class Toolbar extends Component {
  state = {
    isSearching: false
  };

  toggleIsSearching = () => {
    this.setState({ isSearching: !this.state.isSearching });
  };

  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };

  handleOnSearchChange = e => {
    this.props.updateSearch(e.target.value);
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      mutations,
      searchText,
      filteredData
    } = this.props;
    const { isSearching } = this.state;

    console.log("---filteredData: ", filteredData);

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
        <div>
          {isSearching ? (
            <div className="search-field-wrapper">
              <input
                className="search-field"
                value={searchText}
                onChange={this.handleOnSearchChange}
              />

              <Icon
                onClick={() => this.toggleIsSearching()}
                type="search"
                style={{ color: "#96A2AA" }}
              />
            </div>
          ) : (
            <div className="search-icon flex">
              <Icon
                onClick={() => this.toggleIsSearching()}
                type="search"
                style={{ color: "#96A2AA" }}
              />
            </div>
          )}
        </div>
        <div
          className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}
        >
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
  console.log(state);

  return {
    filtered: getFilteredEntriesAmount(state),
    total: getTotalEntriesAmount(state),
    mutations: getMutationType(state),
    searchText: getSearchQuery(state),
    filteredData: getSearchResult(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    updateSearch: data => dispatch(updateSearch(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
