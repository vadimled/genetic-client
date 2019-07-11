import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect";
import Search from "GenericComponents/search";
import style from "./Toolbar.module.scss";
import { MUTATION } from "Utils/constants";
import NumberVariants from "Pages/mainPage/components/numberVariants";
import IgvLoadBAM from "./components/IgvLoadBAM";
import {
  setMutationType
} from "Actions/variantsActions";
import {
  updateSearch
} from "Actions/tableActions";
import {
  handleOnConfirmation,
  setConfirmationData
} from "Actions/confirmationActions";
import {
  getFilteredEntriesAmount,
  getMutationType,
  getSelectedRows,
  getTotalEntriesAmount
} from "Store/selectors";
import Sort from "./components/Sort";




class Toolbar extends Component {
  handleOnChange = e => {
    this.props.setMutationType(e.target.value);
  };

  render() {
    const {
      filtered,
      total,
      sidebarToggle,
      mutations,
      selectedRows,
      openConfirmationPopup
    } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        {!!selectedRows?.length &&
          <button
            className={cn(["confirmation-button", { "sidebar-open": sidebarToggle }])}
            onClick={openConfirmationPopup.bind(null, selectedRows)}
            data-testid="confirmation-button"
          >
            Send for confirmation
          </button>
        }
        {!selectedRows?.length && <Fragment>
          <div className="left-wrapper">
            <div className="mutation-select-wrapper">
              <SimpleSelect
                options={MUTATION}
                onChange={this.handleOnChange}
                name="mutation"
                value={mutations}
                // disabled
              />
            </div>
          </div>

          <div className="search-field-wrapper flex items-center">
            <Search />
          </div>

          <div className={cn(["right-wrapper", { "sidebar-open": sidebarToggle }])}>
            <Sort />
            <IgvLoadBAM />
            <NumberVariants filtered={filtered} total={total} />
          </div>

        </Fragment>}

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
    selectedRows: getSelectedRows(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setMutationType: data => dispatch(setMutationType(data)),
    openConfirmationPopup: data => {
      dispatch(handleOnConfirmation(true));
      dispatch(setConfirmationData(data));
    },
    updateSearch: data => dispatch(updateSearch(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
