import React, { Component } from "react";
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
  getHistoryGermline,
  getHistorySomatic,
  getVariantData,
  getSomaticEvidence,
  getGermlineEvidence
} from "Store/selectors";
import { connect } from "react-redux";
import {
  setExternalResources,
  fetchVariantData,
  setSelectedZygosityType,
  setTestInformation
} from "Actions/variantPageActions";
import { createResourcesLinks, getDataArray } from "Utils/helpers";
import { SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";
import queryString from "query-string";

class VariantPage extends Component {
  constructor(props) {
    super(props);
    const { testId, variantId } = props.match.params;
    const { selectedZygosityType } = queryString.parse(window.location.search);

    this.state = {
      sidebarToggle: true
    };

    props.fetchVariantData({ testId, variantId });
    props.setSelectedZygosityType({ selectedZygosityType, testId, variantId });
    props.setTestInformation({ testId, variantId });

    // TODO: this action must be dispatched from the Saga
    props.setResources(createResourcesLinks(props.variantData));
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
      somaticClassHistory,
      germlineEvidence
    } = this.props;
    return (
      <div className={style["variant-page-wrapper"]}>
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
            <ExternalResources externalResources={externalResources} />
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
                data={getDataArray(somaticClassHistory)}
                typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
              />
            </div>
            <div
              className={cn([
                "evidence",
                { "links-wrapper-open": sidebarToggle }
              ])}
            >
              <EvidenceContainer
                data={germlineEvidence}
                typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
              />
            </div>
          </div>
        </div>
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
    externalResources: getExternalResources(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setResources: data => dispatch(setExternalResources(data)),
    fetchVariantData: data => dispatch(fetchVariantData(data)),
    setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
    setTestInformation: data => dispatch(setTestInformation(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
