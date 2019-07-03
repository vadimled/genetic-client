import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, AutoComplete } from "antd";
import SimpleSelect from "GenericComponents/simpleSelect";
import style from "./Toolbar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import IgvLoadBAM from "./components/IgvLoadBAM";
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getTotalEntriesAmount
} from "Store/selectors";
import { setMutationType } from "Actions/variantsActions";
import { updateSearch } from "Actions/tableActions";
import {
  getMutationType,
  getSearchQuery,
  getFilteredSearchQueries
} from "Store/selectors";
import closeBtn from "Assets/close.svg";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      searchField: createRef()
    };
  }
  
  static getDerivedStateFromProps(props) {
    const { tableData } = props;
    // console.log(state.searchField.current?.select);
    if(tableData.length === 0){
      let node =  document.querySelector(".ant-select-search__field");
      // console.log(document.querySelector(".ant-select-search__field"));
      // node?.addEventListener("onKeyDown", e => console.log(e.target.value) );
      // document.querySelector(".ant-select-search__field")?.focus();
      node.focus();
      console.log(node.value);
      node.value = "1";
      /*
      console.log(document.querySelector(".ant-select-search__field__mirror"));

      document.querySelector(".ant-select-search__field").select();
      // document.querySelector(".ant-select-search__field__mirror").focus();
      // console.log(state.searchField.current?.select.rcSelect);
      state.searchField.current?.select.rcSelect.focus();*/
    }
    
    return null;
  }
  
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
              ref={this.state.searchField}
              data-testid={`search-field`}
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
          <IgvLoadBAM />
          <NumberVariants filtered={filtered} total={total} />
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  filtered: PropTypes.number,
  total: PropTypes.number,
  mutations: PropTypes.string,
  sidebarToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    filtered: getFilteredEntriesAmount(state),
    total: getTotalEntriesAmount(state),
    mutations: getMutationType(state),
    searchText: getSearchQuery(state),
    tableData: getFilteredSearchQueries(state)
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
