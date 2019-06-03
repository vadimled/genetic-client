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

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mutation: "dna"
    };
  }

  handleOnChange = e => {
    this.setState({ mutation: e.target.value });
  };

  render() {
    const { filtered, total, sidebarToggle } = this.props;

    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">
          <div className="mutation-select-wrapper">
            <SimpleSelect
              options={MUTATION}
              onChange={this.handleOnChange}
              name="mutation"
              value={this.state.mutation}
              // disabled
            />
          </div>
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
  filtered: PropTypes.string,
  total: PropTypes.string
};

const mapStateToProps = state => {
  return {
    filtered: getFilteredEntriesAmount(state) || undefined,
    total: getTotalEntriesAmount(state) || undefined
  };
};

export default connect(mapStateToProps)(Toolbar);
