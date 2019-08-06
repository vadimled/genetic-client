import React, { Component } from "react";
import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";
import { SORTING_ORDER } from "../../../utils/constants";
import cn from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSortOrder, getSortParam, getClicksCounter } from "../../../store/selectors";

class TableSorter extends Component {

  handleSort = () => {
    const { setSort, field, clicksCounter } = this.props;

    let order = "";

    switch (clicksCounter) {
      case 0:
        order = SORTING_ORDER["default"];
        break;
      case 1:
        order = SORTING_ORDER["ascending"];
        break;
      case 2:
        order = SORTING_ORDER["descending"];
        break;
    }

    setSort({ field, order });
  };

  render() {
    const { title, clicksCounter } = this.props;

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
                "arrow-active top-arrow": clicksCounter === 0
              })}
            />
            <DropdownArrow
              className={cn({ "arrow-active": clicksCounter === 2 })}
            />
          </div>
        </div>

      </div>
    );
  }
}

TableSorter.propTypes = {
  setSort: PropTypes.func,
  field: PropTypes.string,
  title: PropTypes.string,
};
//
// function mapDispatchToProps(dispatch) {
//   return {
//     handleSelectedRow: (data) => dispatch(handleSelectedRow(data)),
//     handleSelectAllRows: (data) => dispatch(handleSelectAllRows(data)),
//     handleZygosity: (data) => dispatch(handleZygosity(data)),
//     handleVariantClass: (data) => dispatch(handleVariantClass(data)),
//     handleConfirmationStatus: (data) => {
//       if (data?.status) {
//         dispatch(handleConfirmationStatus(data));
//       }
//       else if (data?.status === null) {
//         dispatch(handleUncheckConfirmationData(data));
//       }
//     },
//     updateActivityLog: data => dispatch(updateActivityLog(data)),
//     goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
//     setNotes: data => dispatch(setNotes(data)),
//     fetchTableData: data => dispatch(fetchTableData(data)),
//     setSort: data => dispatch(setSort(data)),
//   };
// }

function mapStateToProps(state) {
  return {
    sortOrder: getSortOrder(state),
    sortParam: getSortParam(state),
    clicksCounter: getClicksCounter(state),

  };
}

export default connect(mapStateToProps, {})(TableSorter);