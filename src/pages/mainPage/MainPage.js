import React, { Component } from "react";
import FilterItem from "../../genericComponents/filterItem";
// import PropTypes from 'prop-types';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h3>MainPage</h3>
        <FilterItem label="Unclassified" tagColor="white" />
        <FilterItem label="PATH" tagColor="green" />
        <FilterItem label="LATH" tagColor="yellow" />
      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
