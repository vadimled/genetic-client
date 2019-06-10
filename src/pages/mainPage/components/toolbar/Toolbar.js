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
import { getMutationType } from "Store/selectors";

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

  render() {
    const { filtered, total, sidebarToggle, mutations } = this.props;
    const { isSearching } = this.state;

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
            <div>
              <dv>Search input</dv>
            </div>
          ) : (
            <div className="flex justify-end">
              <a className="navbar-search">
                <img
                  alt="search"
                  className="search-icon"
                  onClick={() => this.toggleIsSearching()}
                />
              </a>
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
