import React, { Component } from "react";
import style from "./ActionableDetailsContainer.module.scss";
// import PropTypes from "prop-types";
import { Tabs } from "antd";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import {
  ACTIONABLE_CATEGORIES_OPTIONS,
  ACTIONABLE_TABS_VALUES
} from "Utils/constants";
import {
  getCurrentActionableTab,
  getGeneDescription,
  getVariantDescription,
  getGeneDescriptionSaved,
  getVariantDescriptionSaved
} from "Store/selectors";
import {
  setCurrentActionableTab,
  saveExpandedTextAreaContent
} from "Actions/finalReportAction";
import ActionableDetailsTabPaneHeader from "../actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "./components/expandedInterpretation";
import Therapies from "./components/therapies";

const { TabPane } = Tabs;

// TODO: remove when the server will be updated
const therapiesMockData = [
  {
    drug_name: "Palbociclib (IBRANCE)",
    source_description:
      "Palbociclib is a CDK4/6 kinase inhibitor approved by the" +
      " FDA for the treatment of adult patients with hormone receptor (HR)-positive, " +
      "human epidermal growth factor receptor 2 (HER2)-negative advanced or metastatic " +
      "breast cancer in combination with:- an aromatase inhibitor as initial " +
      "endocrine-based therapy in postmenopausal women or in men; or- " +
      "Fulvestrant in patients with disease progression following endocrine therapy." +
      "Palbociclib is currently examined in a Phase I trial in combination with the " +
      "PI3K/mTOR Inhibitor Gedatolisib for Patients with advanced Squamous Cell Lung cancer (NCT03065062)."
  },
  {
    drug_name: "Gedatolisib (PF-05212384)",
    source_description:
      "Gedatolisib is PI3K and mTOR kinase inhibitor " +
      "currently examined in multiple clinical trials for select solid " +
      "tumors including a phase I trial in combination with the CDK4/6 Inhibitor, " +
      "Palbociclib, for Patients with advanced Squamous Cell Lung cancer (NCT03065062). 3065062)."
  },
  {
    drug_name: "MK-2206",
    source_description:
      "MK-2206 is a selective pan-AKT inhibitor currently examined " +
      "in multiple clinical trials for various solid tumors, including a phase " +
      "II trial for patientswith Advanced Non-Small Cell Lung Cancer (NCT01306045)."
  },
  {
    drug_name: "Gedatolisib (PF-05212384)",
    source_description:
      "Gedatolisib is PI3K and mTOR kinase inhibitor " +
      "currently examined in multiple clinical trials for select solid " +
      "tumors including a phase I trial in combination with the CDK4/6 Inhibitor, " +
      "Palbociclib, for Patients with advanced Squamous Cell Lung cancer (NCT03065062). 3065062)."
  }
];

class ActionableDetailsContainer extends Component {
  onTabClicked = key => {
    this.props.setCurrentActionableTab(key);
  };

  handleExpandedInterpretation = e => {
    const { name, value } = e.target;
    this.props.setExpandedInterpretationTextArea({
      name: name,
      value: value
    });
  };

  handleTherapies = e => {
    console.log(e.target);
    // const { name, value } = e.target;
    // this.props.setExpandedInterpretationTextArea({
    //   name: name,
    //   value: value
    // });
  };

  renderContent = value => {
    const {
      geneDescription,
      variantDescription,
      geneDescriptionSaved,
      variantDescriptionSaved
    } = this.props;
    switch (value) {
      case ACTIONABLE_TABS_VALUES.expanded:
        return (
          <ExpandedInterpretation
            key={"expanded-interpretation"}
            geneDescription={geneDescription}
            variantDescription={variantDescription}
            geneDescriptionSaved={geneDescriptionSaved}
            variantDescriptionSaved={variantDescriptionSaved}
            onChange={this.handleExpandedInterpretation}
          />
        );
      case ACTIONABLE_TABS_VALUES.therapies:
        return (
          <Therapies
            key={"therapies"}
            onChange={this.handleTherapies}
            data={therapiesMockData}
          />
        );
      case ACTIONABLE_TABS_VALUES.clinicalTrials:
        console.log(value);
        return null;
    }
  };

  render() {
    const { currentActionableTab } = this.props;
    return (
      <div className={style["actionable-details-container-wrapper"]}>
        <Tabs
          size={"large"}
          activeKey={currentActionableTab}
          onChange={this.onTabClicked}
        >
          {ACTIONABLE_CATEGORIES_OPTIONS.map((header, index) => {
            const { label, value } = header;
            return (
              <TabPane
                tab={<ActionableDetailsTabPaneHeader title={label} />}
                key={index + 1}
              >
                {this.renderContent(value)}
              </TabPane>
            );
          })}
        </Tabs>
        <div className="actionable-details-done-wrapper">
          <SimpleButton
            className={"actionable-details-done"}
            // onClick={this.handleAddActionable}
            text={"Done"}
          />
        </div>
      </div>
    );
  }
}

// ActionableDetailsContainer.propTypes = {
// };
//
// ActionableDetailsContainer.defaultProps = {
// };

const mapStateToProps = state => {
  return {
    currentActionableTab: getCurrentActionableTab(state),
    geneDescription: getGeneDescription(state),
    variantDescription: getVariantDescription(state),
    geneDescriptionSaved: getGeneDescriptionSaved(state),
    variantDescriptionSaved: getVariantDescriptionSaved(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setExpandedInterpretationTextArea: data =>
      dispatch(saveExpandedTextAreaContent(data)),
    setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
