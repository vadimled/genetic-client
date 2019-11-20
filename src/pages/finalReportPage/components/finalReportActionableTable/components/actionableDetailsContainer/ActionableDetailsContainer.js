import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tabs } from "antd";

import SimpleButton from "GenericComponents/simpleButton";
import ActionableDetailsTabPaneHeader from "../actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "./components/expandedInterpretation";
import Therapies from "./components/therapies";
import ClinicalTrial from './components/clinicalTrials';

import style from "./ActionableDetailsContainer.module.scss";

import {
  getCurrentActionableTab,
  getGeneDescription,
  getVariantDescription,
  getGeneDescriptionSaved,
  getVariantDescriptionSaved,
  getActionableAlterationsDrugs
} from "Store/selectors";
import {
  setCurrentActionableTab,
  saveExpandedTextAreaContent,
  setActionableAlterationTherapiesDescription
} from "Actions/finalReportAction";
import {
  ACTIONABLE_CATEGORIES_OPTIONS,
  ACTIONABLE_TABS_VALUES
} from "Utils/constants";

const { TabPane } = Tabs;

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

  setActionableAlterationTherapiesDescription = e => {
    const { id, value } = e.target;
    this.props.setActionableAlterationTherapiesDescription({
      id,
      value
    });
  };

  handleClinicalTrials = e => {
    console.log("e", e);

  };

  renderContent = value => {
    const {
      geneDescription,
      variantDescription,
      geneDescriptionSaved,
      variantDescriptionSaved,
      therapies
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
            onChange={this.setActionableAlterationTherapiesDescription}
            data={therapies}
          />
        );
      case ACTIONABLE_TABS_VALUES.clinicalTrials:
        return (
          <ClinicalTrial
            key={"clinical-trials"}
            data={[]}
            onChange={this.handleClinicalTrials}
          />
        );
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
    variantDescriptionSaved: getVariantDescriptionSaved(state),
    therapies: getActionableAlterationsDrugs(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setExpandedInterpretationTextArea: data => dispatch(saveExpandedTextAreaContent(data)),
    setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key)),
    setActionableAlterationTherapiesDescription: data => dispatch(setActionableAlterationTherapiesDescription(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
