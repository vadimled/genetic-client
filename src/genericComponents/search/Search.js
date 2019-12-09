import React from "react";
import PropTypes from "prop-types";
import { AutoComplete, Icon } from "antd";

import { ReactComponent as CloseIcon } from "Assets/close.svg";

import style from "./Search.module.scss";

const Search = (props) => {
  const { searchText, dataSource, placeholder, onChange, onClear } = props;

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
        className="search-field"
        data-testid={`search-field`}
        dataSource={dataSource}
        value={searchText}
        onChange={onChange}
        placeholder={placeholder}
      />

      {searchText && (
        <div
          className="clear-search-button"
          data-testid={`tumor-clear-search-button`}
          onClick={onClear}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  dataSource: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
Search.defaultProps = {
  searchText: '',
  dataSource: [],
  placeholder: ''
};

export default Search;
