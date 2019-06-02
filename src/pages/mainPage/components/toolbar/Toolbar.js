import React, { Component } from "react";
import style from "./Toolbar.module.scss";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import { getFilteredEntriesAmount, getTotalEntriesAmount } from "Store/selectors";
import { connect } from "react-redux";
import cn from "classnames";
import PropTypes from "prop-types";

class Toolbar extends Component {
  render() {
    const { filtered, total, sidebarToggle } = this.props;
    
    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">Left</div>
        <div className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}>
          <NumberVariants filtered={filtered} total={total} />
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  filtered: PropTypes.string,
  total: PropTypes.string
};

function mapStateToProps(state) {
  return {
    filtered: getFilteredEntriesAmount(state) || undefined,
    total: getTotalEntriesAmount(state) || undefined
  };
}

export default connect(mapStateToProps)(Toolbar);
