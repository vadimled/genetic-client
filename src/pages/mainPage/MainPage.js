import React, { Component } from "react";
import FilterItem from "../../genericComponents/filterItem";
// import PropTypes from 'prop-types';
import {TAG_COLORS} from 'Utils/constants';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h3>MainPage</h3>
        <FilterItem label="Unclassified" tagColor="white" />
        <FilterItem label="PATH" tagColor={TAG_COLORS.blueLight} />
        <FilterItem label="LATH" tagColor={TAG_COLORS.yellow} />
      </div>
    );
  }
}

// MainPage.propTypes = {
//
// };

export default MainPage;
