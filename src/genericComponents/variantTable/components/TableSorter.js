import React, { Component } from "react";
import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";
import { SORTING_ORDER } from "Utils/constants";
import cn from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSortOrder, getSortParam } from "Store/selectors";

class TableSorter extends Component {

  handleSort = () => {
    const { setSort, field, sortOrder } = this.props;

    let order = "";

    switch (sortOrder) {
      case SORTING_ORDER.descending:
        order = SORTING_ORDER.default;
        break;
      case SORTING_ORDER.default:
        order = SORTING_ORDER.ascending;
        break;
      case SORTING_ORDER.ascending:
        order = SORTING_ORDER.descending;
        break;
    }

    setSort({ field, order });
  };

  render() {
    const { title, sortOrder } = this.props;

    return (
      <div
        className="table-sorter-wrapper flex justify-center"
        onClick={() => this.handleSort()}
      >
        <div className="flex items-center justify-center">
          <div className="table-sorter-title">{title}</div>
          <div className="flex flex-column">
            <DropdownArrow
              className={cn("top-arrow", {
                "arrow-active top-arrow": sortOrder === SORTING_ORDER.ascending
              })}
            />
            <DropdownArrow
              className={cn({
                "arrow-active": sortOrder === SORTING_ORDER.descending
              })}
            />
          </div>
        </div>

      </div>
    );
  }
}

TableSorter.propTypes = {
  setSort: PropTypes.func.isRequired,
  field: PropTypes.string,
  title: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    sortOrder: getSortOrder(state),
    sortParam: getSortParam(state),
  };
}

export default connect(mapStateToProps, {})(TableSorter);
