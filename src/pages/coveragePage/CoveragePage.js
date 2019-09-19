import React, { Component } from "react";
import { connect } from "react-redux";


class CoveragePage extends Component {

  render() {
    // const {} = this.props;
    return (
      <h2>Coverage</h2>
    );
  }
}

//
// function mapStateToProps(state) {
//   return {};
// }


export default connect(null, {})(CoveragePage);