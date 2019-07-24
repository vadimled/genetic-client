import React, { Component } from "react";
import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";
import { SORTING_ORDER } from "../../../utils/constants";
import cn from "classnames";

class TableSorter extends Component {
  state = {
    clicksCounter: 1
  };

  handleSort = () => {
    const { setSort, field } = this.props;

    const { clicksCounter } = this.state;

    if (this.state.clicksCounter < 2) {
      this.setState({ clicksCounter: clicksCounter + 1 });
    } else if (clicksCounter >= 2) {
      this.setState({ clicksCounter: 0 });
    }

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
    const { title } = this.props;

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
                "arrow-active top-arrow": this.state.clicksCounter === 0
              })}
            />
            <DropdownArrow
              className={cn({ "arrow-active": this.state.clicksCounter === 2 })}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default TableSorter;
