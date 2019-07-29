import React, { Component } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import ClassificationHistoryTable from "variantComponents/classificationHistoryTable";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import {
  getExternalResources,
  getHistoryGermline,
  getHistorySomatic,
  getVariantData,
  getZygosityType
} from "Store/selectors";
import { connect } from "react-redux";
import { setExternalResources, fetchVariantData, setZygosityType } from "Actions/variantPageActions";
import { createResourcesLinks, getDataArray } from "Utils/helpers";
import { SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";
import queryString from "query-string";
import { GERMLINE_VARIANT_CLASS_OPTIONS } from "../../utils/constants";


class VariantPage extends Component {
  constructor(props) {
    super(props);

    const {testId, variantId} = props.match.params;

    const {selectedZygosityType} = queryString.parse(window.location.search);

    props.setZygosityType({selectedZygosityType, testId, variantId});

    this.state = {
      sidebarToggle: true
    };

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
      germlineClassHistory,
      selectedZygosityType
    } = this.props;
    const {testId, variantId} = this.props.match.params;

    console.log("--variant page props: ", this.props);

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
                  selectedZygosityType === "somatic" ?
                    getDataArray(somaticClassHistory) :
                    getDataArray(germlineClassHistory)
                }
                typeData={
                  selectedZygosityType === "somatic" ?
                    SOMATIC_VARIANT_CLASS_OPTIONS :
                    GERMLINE_VARIANT_CLASS_OPTIONS
                }
              />
            </div>
            <div className="evidence" />
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
    externalResources: getExternalResources(state),
    selectedZygosityType: getZygosityType(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setResources: data => dispatch(setExternalResources(data)),
    fetchVariantData: () => dispatch(fetchVariantData()),
    setZygosityType: data => dispatch(setZygosityType(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
