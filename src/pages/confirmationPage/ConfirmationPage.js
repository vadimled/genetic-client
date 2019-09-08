import React, { Component } from "react";
import {
  getLoadingStatus,
  getVariantData,
  getVariantId,
  getVariantPageTestId
} from "Store/selectors";
import { connect } from "react-redux";
import { fetchConfirmationMetadata } from "Actions/confirmationPageActions";

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    const { match, fetchMetadata } = props;
    const { confirmationId } = match.params;
    console.log(confirmationId);
    fetchMetadata(confirmationId);
  }

  render() {
    return <div>ConfirmationPage</div>;
  }
}

const mapStateToProps = state => {
  return {
    variantData: getVariantData(state),
    testId: getVariantPageTestId(state),
    isLoading: getLoadingStatus(state),
    variantId: getVariantId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchMetadata: data => dispatch(fetchConfirmationMetadata(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage);
