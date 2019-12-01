import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
// import cn from "classnames

import Search from "GenericComponents/search";

import style from "./FinalReportTableToolBar.module.scss";

const FinalReportTableToolBar = (props) => {
  const {
    searchText,
    onChangeSearch,
    tebleData,
  } = props;

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const dataSource = tebleData.reduce((arr, item) => {
      item.gene && arr.push(item.gene);
      item.coding && arr.push(item.coding);
      item.protein && arr.push(item.protein);
      return arr;
    }, []);

    setDataSource(dataSource);

  }, [searchText, tebleData]);

  return (
    <div className={style["toolbar-wrapper"]}>
      <Fragment>
        <div className="left-wrapper">
          <div className="search-field-wrapper">
            <Search
              searchText={searchText}
              dataSource={[...new Set(dataSource)]}
              placeholder="Search"
              onChange={onChangeSearch}
              onClear={onChangeSearch.bind(null, '')}
            />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

FinalReportTableToolBar.propTypes = {
  searchText: PropTypes.string,
  onChangeSearch: PropTypes.func.isRequired,
  tebleData: PropTypes.array,
};
FinalReportTableToolBar.defaultProps = {
  searchText: '',
  tebleData: []
};

export default FinalReportTableToolBar;
