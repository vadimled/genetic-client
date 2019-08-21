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
  getLoadingStatus,
  getSomaticEvidence,
  getVariantData,
  getVariantId,
  getVariantPageTestId,
  getZygosityType
} from "Store/selectors";
import { connect } from "react-redux";
import {
  fetchClassificationHistory,
  fetchEvidenceData,
  fetchVariantMetadataData,
  setSelectedZygosityType,
  setTestInformation
} from "Actions/variantPageActions";
import { getDataArray } from "Utils/helpers";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";
import queryString from "query-string";
import Spinner from "GenericComponents/spinner";

class VariantPage extends Component {
  constructor(props) {
    super(props);

    const {
      germlineClassHistory,
      fetchEvidenceData,
      fetchVariantMetadataData,
      match,
      fetchCH,
      setSelectedZygosityType,
      setTestInformation,
      somaticClassHistory
    } = props;
    const { testId, variantId } = match.params;
    const { selectedZygosityType } = queryString.parse(window.location.search);

    fetchVariantMetadataData({ testId, variantId });
    fetchEvidenceData({ testId, variantId });
    setSelectedZygosityType({ selectedZygosityType, testId, variantId });
    setTestInformation({ testId, variantId });
    fetchCH(variantId);
 
    this.state = {
      sidebarToggle: true,
      germlineClassHistoryData: getDataArray(germlineClassHistory),
      somaticClassHistoryData: getDataArray(somaticClassHistory)
    };
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
                      selectedZygosityType === TEXTS.somatic
                        ? somaticClassHistoryData
                        : germlineClassHistoryData
                    }
                    typeData={
                      selectedZygosityType === TEXTS.somatic
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
                      selectedZygosityType === TEXTS.somatic
                        ? somaticEvidence
                        : germlineEvidence
                    }
                    typeData={
                      selectedZygosityType === TEXTS.somatic
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
    fetchCH: data => dispatch(fetchClassificationHistory(data)),
    fetchVariantMetadataData: data => dispatch(fetchVariantMetadataData(data)),
    fetchEvidenceData: data => dispatch(fetchEvidenceData(data)),
    setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
    setTestInformation: data => dispatch(setTestInformation(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
