import React, { Component, Fragment } from "react";
import {
  getLoadingStatus,
  getConfirmationPageTableData,
  getVariantId,
  getVariantPageTestId
} from "Store/selectors";
import { connect } from "react-redux";
import { fetchConfirmationMetadata } from "Actions/confirmationPageActions";
import style from "./ConfirmationPage.module.scss";
import Spinner from "GenericComponents/spinner/Spinner";
import EmptyState from "GenericComponents/emptyState/EmptyState";
import { goToChrPositionIgv } from "Actions/igvActions";
import ConfirmationLabTable from "Pages/confirmationPage/components/confirmationLabTable";

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    const { match, fetchMetadata } = props;
    const { confirmationId } = match.params;

    fetchMetadata(confirmationId);
  }

  render() {
    const { isLoading, data, goToChrPositionIgv } = this.props;
    console.log(data);
    return (
      <div className={style["confirmation-page-wrapper"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="confirmation-content">
              {!!data?.length && <div className="confirmation-table">
                <ConfirmationLabTable
                  data={data}
                  handelChrPosition={goToChrPositionIgv}
                />
              </div>}
              {!data?.length && <EmptyState description="" title="No data for sending"/>}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: getConfirmationPageTableData(state),
    testId: getVariantPageTestId(state),
    isLoading: getLoadingStatus(state),
    variantId: getVariantId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchMetadata: data => dispatch(fetchConfirmationMetadata(data)),
    goToChrPositionIgv: (data) => dispatch(goToChrPositionIgv(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage);
