import React, { Component, Fragment } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import ClassificationHistoryTable from "variantComponents/classificationHistoryTable";
import EvidenceContainer from "variantComponents/evidenceContainer";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import {
  getExternalResources,
  getGermlineEvidence,
  getHistoryGermline,
  getHistorySomatic,
  getSomaticEvidence,
  getVariantData,
  getZygosityType,
  getVariantId,
  getVariantPageTestId,
  getLoadingStatus
} from "Store/selectors";
import { connect } from "react-redux";
import {
  fetchEvidenceData,
  fetchVariantMetadataData,
  // setExternalResources,
  setSelectedZygosityType,
  setTestInformation,
  fetchClassificationHistory
} from "Actions/variantPageActions";
import { getDataArray } from "Utils/helpers";
import {
  SOMATIC_VARIANT_CLASS_OPTIONS,
  GERMLINE_VARIANT_CLASS_OPTIONS
} from "Utils/constants";
import queryString from "query-string";
import Spinner from "GenericComponents/spinner";

class VariantPage extends Component {
  constructor(props) {
    super(props);
    const { testId, variantId } = props.match.params;
    const { selectedZygosityType } = queryString.parse(window.location.search);

    this.state = {
      sidebarToggle: true,
      germlineClassHistoryData: getDataArray(props.germlineClassHistory),
      somaticClassHistoryData: getDataArray(props.somaticClassHistory)
    };

    props.fetchVariantMetadataData({ testId, variantId });
    props.fetchEvidenceData({ testId, variantId });
    props.setSelectedZygosityType({ selectedZygosityType, testId, variantId });
    props.setTestInformation({ testId, variantId });
  }

  componentDidMount() {
    const { fetchClassificationHistory } = this.props;
    fetchClassificationHistory();
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  render() {
    const { sidebarToggle } = this.state;
    const {
      externalResources,
      variantData,
      selectedZygosityType,
      somaticEvidence,
      germlineEvidence,
      testId,
      variantId,
      isLoading
    } = this.props;

    const { somaticClassHistoryData, germlineClassHistoryData } = this.state;
    return (
      <div className={style["variant-page-wrapper"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div
              className={cn([
                "links-wrapper",
                { "links-wrapper-open": sidebarToggle }
              ])}
            >
              <SideBarLayout
                handleClick={this.handleClick}
                mode={sidebarToggle}
                className={"external-resources"}
                iconOpened={<OpenedIcon />}
                iconClosed={<ClosedIcon />}
              >
                <ExternalResources
                  externalResources={externalResources}
                  selectedZygosityType={selectedZygosityType}
                />
              </SideBarLayout>
            </div>
            <div
              className={cn([
                "main-wrapper",
                { "links-wrapper-open": sidebarToggle }
              ])}
            >
              <div className="main-header-data">
                <VariantPageHeader
                  sidebarToggle={sidebarToggle}
                  variantData={variantData}
                  testId={testId}
                  variantId={variantId}
                />
              </div>
              <div className="main-data">
                <div
                  className={cn([
                    "history",
                    { "links-wrapper-open": sidebarToggle }
                  ])}
                >
                  <ClassificationHistoryTable
                    data={
                      selectedZygosityType === "somatic"
                        ? somaticClassHistoryData
                        : germlineClassHistoryData
                    }
                    typeData={
                      selectedZygosityType === "somatic"
                        ? SOMATIC_VARIANT_CLASS_OPTIONS
                        : GERMLINE_VARIANT_CLASS_OPTIONS
                    }
                  />
                </div>
                <div
                  className={cn([
                    "evidence",
                    { "links-wrapper-open": sidebarToggle }
                  ])}
                >
                  <EvidenceContainer
                    data={
                      selectedZygosityType === "somatic"
                        ? somaticEvidence
                        : germlineEvidence
                    }
                    typeData={
                      selectedZygosityType === "somatic"
                        ? SOMATIC_VARIANT_CLASS_OPTIONS
                        : GERMLINE_VARIANT_CLASS_OPTIONS
                    }
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

VariantPage.propTypes = {};

const mapStateToProps = state => {
  return {
    variantData: getVariantData(state),
    germlineClassHistory: getHistoryGermline(state),
    somaticClassHistory: getHistorySomatic(state),
    somaticEvidence: getSomaticEvidence(state),
    germlineEvidence: getGermlineEvidence(state),
    externalResources: getExternalResources(state),
    selectedZygosityType: getZygosityType(state),
    testId: getVariantPageTestId(state),
    isLoading: getLoadingStatus(state),
    variantId: getVariantId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // setResources: data => dispatch(setExternalResources(data)),
    fetchVariantMetadataData: data => dispatch(fetchVariantMetadataData(data)),
    fetchEvidenceData: data => dispatch(fetchEvidenceData(data)),
    setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
    setTestInformation: data => dispatch(setTestInformation(data)),
    fetchClassificationHistory: () => dispatch(fetchClassificationHistory())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
