import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import cn from "classnames";

import style from "./VariantPage.module.scss";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";

import SideBarLayout from "Pages/singleTestPage/components/sideBarLayout";
import IgvAlertPopup from "Pages/singleTestPage/components/igvAlertPopup/IgvAlertPopup";

import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import ClassificationHistoryTable from "variantComponents/classificationHistoryTable";
import EvidenceContainer from "variantComponents/evidenceContainer";
import Spinner from "GenericComponents/spinner/Spinner";

import {
  getExternalResources,
  getGermlineEvidence,
  getHistoryGermline,
  getHistorySomatic,
  getLoadingStatus,
  getSomaticEvidence,
  getVariantData,
  getZygosityType,
  getVariantId,
  getVariantPageTestId,
  getIgvAlertShow,
  getTestsList
} from "Store/selectors";
import {
  fetchEvidenceData,
  fetchVariantMetadataData,
  setExternalResources,
  setSelectedZygosityType,
  setTestInformation,
  fetchClassificationHistory
} from "Actions/variantPageActions";
import { goToChrPositionIgv } from "Actions/igvActions";
import { fetchTestMetadata } from "Actions/testActions";
import { fetchTests } from "Actions/testsActions";
import {
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS,
  TEXTS
} from "Utils/constants";


class VariantPage extends Component {
  constructor(props) {
    super(props);

    const {
      fetchEvidenceData,
      fetchVariantMetadataData,
      match,
      setSelectedZygosityType,
      setTestInformation,
      fetchTestMetadata,
      fetchTests
    } = props;
    const { testId, variantId } = match.params;
    const { selectedZygosityType } = queryString.parse(window.location.search);
    fetchTests();
    fetchVariantMetadataData({ testId, variantId });
    fetchEvidenceData(variantId);
    setSelectedZygosityType({ selectedZygosityType, testId, variantId });
    setTestInformation({ testId, variantId });
    fetchTestMetadata(testId);

    this.state = {
      sidebarToggle: true,
      isTestsList: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.testsList.length > 0 && !state.isTestsList) {
      const {
        fetchClassificationHistory,
        match: {
          params: { variantId }
        }
      } = props;
      fetchClassificationHistory({ variantId, testsList: props.testsList });
      return { isTestsList: true };
    }
    return null;
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  handelChrPosition = chrPosition => {
    this.props.goToChrPositionIgv(chrPosition);
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
      isLoading,
      germlineClassHistory,
      somaticClassHistory,
      isIgvAlertShow
    } = this.props;

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
                  onChrPosition={this.handelChrPosition}
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
                        ? somaticClassHistory
                        : germlineClassHistory
                    }
                    typeData={
                      selectedZygosityType === TEXTS.somatic
                        ? SOMATIC_VARIANT_CLASS_OPTIONS
                        : GERMLINE_VARIANT_CLASS_OPTIONS
                    }
                    testId={testId}
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
            {!!isIgvAlertShow && <IgvAlertPopup />}
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
    variantId: getVariantId(state),
    isIgvAlertShow: getIgvAlertShow(state),
    testsList: getTestsList(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setResources: data => dispatch(setExternalResources(data)),
    fetchClassificationHistory: data => dispatch(fetchClassificationHistory(data)),
    fetchVariantMetadataData: data => dispatch(fetchVariantMetadataData(data)),
    fetchEvidenceData: data => dispatch(fetchEvidenceData(data)),
    setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
    setTestInformation: data => dispatch(setTestInformation(data)),
    goToChrPositionIgv: data => dispatch(goToChrPositionIgv(data)),
    fetchTestMetadata: id => dispatch(fetchTestMetadata(id)),
    fetchTests: () => dispatch(fetchTests())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
