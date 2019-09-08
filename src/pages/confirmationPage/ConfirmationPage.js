import React, { Component, Fragment } from "react";
import {
  getLoadingStatus,
  getVariantData,
  getVariantId,
  getVariantPageTestId
} from "Store/selectors";
import { connect } from "react-redux";
import { fetchConfirmationMetadata } from "Actions/confirmationPageActions";
import style from "./ConfirmationPage.module.scss";
import Spinner from "GenericComponents/spinner/Spinner";
import ConfirmationTable from "Pages/singleTestPage/components/sendForConfirmationPopup/components/confirmationTable";
import EmptyState from "GenericComponents/emptyState/EmptyState";

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    const { match, fetchMetadata } = props;
    const { confirmationId } = match.params;

    fetchMetadata(confirmationId);
  }

  render() {
    const { isLoading } = this.props;
    const data = {};
    return (
      <div className={style["confirmation-page-wrapper"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="confirmation-content">
              {!!data.length && <div className="confirmation-table">
                <ConfirmationTable
                  data={data}
                />
              </div>}
              {!data.length && <EmptyState description="" title="No data for sending"/>}
            </div>
          </Fragment>
        )}
      </div>
    );
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
