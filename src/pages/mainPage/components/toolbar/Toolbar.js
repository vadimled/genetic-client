import React, { Component } from "react";
import style from "./Toolbar.module.scss";
import SimpleSelect from "GenericComponents/simpleSelect";
import { MUTATION } from "Utils/constants";
// import PropTypes from 'prop-types';

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
    return (
      <div className={style["toolbar-wrapper"]}>
        <div className="left-wrapper">
          <div className="mutation-select-wrapper">
            <SimpleSelect
              options={MUTATION}
              onChange={this.handleOnChange}
              name="mutation"
              value={this.state.mutation}
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

// Toolbar.propTypes = {};

export default Toolbar;
