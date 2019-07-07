import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SimpleSelect from "GenericComponents/simpleSelect";
import style from "./Toolbar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import IgvLoadBAM from "./components/IgvLoadBAM";
import cn from "classnames";
import {
  getFilteredEntriesAmount,
  getMutationType,
  getTotalEntriesAmount
} from "Store/selectors";
import { setMutationType } from "Actions/variantsActions";
import Search from "GenericComponents/search";

class Toolbar extends Component {
  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };

  render() {
    const { filtered, total, sidebarToggle, mutations } = this.props;

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
        <div className="search-field-wrapper flex items-center">
          <Search />
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
    mutations: getMutationType(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
