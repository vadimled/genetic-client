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
  getSearchQueries
} from "Store/selectors";
import { Icon } from "antd";
import closeBtn from "Assets/close.svg";
import { AutoComplete } from "antd";

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
      tableData
    } = this.props;

    console.log("--searchText: ", searchText);

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
          <div className="search-field-wrapper flex items-center">
            {!searchText && (
              <div className="flex items-center search-icons-wrapper">
                <Icon type="search" style={{ color: "#96A2AA" }} />
                <div className="placeholder">Search</div>
              </div>
            )}

            <AutoComplete
              id="search-field"
              dataSource={searchText && tableData}
              value={searchText}
              onChange={this.handleOnSearchChange}
              placeholder="input here"
            />

            {searchText && (
              <button
                className="clear-search-button"
                style={{ backgroundImage: `url(${closeBtn})` }}
                onClick={() => this.clearSearch()}
              />
            )}
          </div>
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
  return {
    filtered: getFilteredEntriesAmount(state),
    total: getTotalEntriesAmount(state),
    mutations: getMutationType(state),
    searchText: getSearchQuery(state),
    tableData: getSearchQueries(state)
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
