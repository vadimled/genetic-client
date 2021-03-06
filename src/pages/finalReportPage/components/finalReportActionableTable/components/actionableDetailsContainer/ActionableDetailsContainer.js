import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tabs } from "antd";

// import SimpleButton from "GenericComponents/simpleButton";
import ActionableDetailsTabPaneHeader from "../actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "./components/expandedInterpretation";
import Therapies from "./components/therapies";
import ClinicalTrial from './components/clinicalTrials';

import style from "./ActionableDetailsContainer.module.scss";

import {
  getTestId,
  getSelectedActionableAlterationId,
  getCurrentActionableAlterationTab,
  getActionableAlterationGeneDescription,
  getActionableAlterationVariantDescription,
  getActionableAlterationGeneDescriptionSaved,
  getActionableAlterationVariantDescriptionSaved,
  getActionableAlterationsDrugs,
  getActionableAlterationsClinicalTrials
} from "Store/selectors";
import {
  setCurrentActionableAlterationTab,
  setActionableAlterationExpandedInterpretation,
  setActionableAlterationDrugsDescription,
  setActionableAlterationClinicalTrial,
} from "Actions/finalReportAction";
import {
  ACTIONABLE_CATEGORIES_OPTIONS,
  ACTIONABLE_TABS_VALUES
} from "Utils/constants";

const { TabPane } = Tabs;

class ActionableDetailsContainer extends Component {
  onTabClicked = key => {
    this.props.setCurrentActionableAlterationTab(key);
  };

  handleActionableAlterationExpandedInterpretation = e => {
    const { testId, selectedActionableAlterationId } = this.props;
    const { name, value } = e.target;
    this.props.setActionableAlterationExpandedInterpretation({
      testId: testId,
      actionableAlterationId: selectedActionableAlterationId,
      field: name,
      value
    });
  };

  setActionableAlterationDrugsDescription = e => {
    const { testId, selectedActionableAlterationId } = this.props;
    const { id, value } = e.target;
    this.props.setActionableAlterationDrugsDescription({
      testId: testId,
      actionableAlterationId: selectedActionableAlterationId,
      actionablealterationDrugId: id,
      value
    });
  };

  handleClinicalTrials = (field, e) => {
    const { testId, selectedActionableAlterationId } = this.props;
    const { id, value } = e.target;

    this.props.setActionableAlterationClinicalTrial({
      testId: testId,
      actionableAlterationId: selectedActionableAlterationId,
      actionablealterationClinicalTrialId: id,
      field,
      value
    });
  };

  renderContent = value => {
    const {
      actionableAlterationGeneDescription,
      actionableAlterationVariantDescription,
      actionableAlterationGeneDescriptionSaved,
      actionableAlterationVariantDescriptionSaved,
      grugs,
      clinicalTrials
    } = this.props;

    switch (value) {
      case ACTIONABLE_TABS_VALUES.expanded:
        return (
          <ExpandedInterpretation
            key={"expanded-interpretation"}
            geneDescription={actionableAlterationGeneDescription}
            variantDescription={actionableAlterationVariantDescription}
            geneDescriptionSaved={actionableAlterationGeneDescriptionSaved}
            variantDescriptionSaved={actionableAlterationVariantDescriptionSaved}
            onChange={this.handleActionableAlterationExpandedInterpretation}
          />
        );
      case ACTIONABLE_TABS_VALUES.therapies:
        return (
          <Therapies
            key={"therapies"}
            onChange={this.setActionableAlterationDrugsDescription}
            data={grugs}
          />
        );
      case ACTIONABLE_TABS_VALUES.clinicalTrials:
        return (
          <ClinicalTrial
            key={"clinical-trials"}
            data={clinicalTrials}
            onChange={this.handleClinicalTrials}
          />
        );
    }
  };

  render() {
    const { currentActionableAlterationTab } = this.props;
    return (
      <div className={style["actionable-details-container-wrapper"]}>
        <Tabs
          size={"large"}
          activeKey={currentActionableAlterationTab}
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
        {
        // <div className="actionable-details-done-wrapper">
        //   <SimpleButton
        //     className={"actionable-details-done"}
        //     // onClick={this.handleAddActionable}
        //     text={"Done"}
        //   />
        // </div>
        }

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
    testId: getTestId(state),
    selectedActionableAlterationId: getSelectedActionableAlterationId(state),
    currentActionableAlterationTab: getCurrentActionableAlterationTab(state),
    actionableAlterationGeneDescription: getActionableAlterationGeneDescription(state),
    actionableAlterationVariantDescription: getActionableAlterationVariantDescription(state),
    actionableAlterationGeneDescriptionSaved: getActionableAlterationGeneDescriptionSaved(state),
    actionableAlterationVariantDescriptionSaved: getActionableAlterationVariantDescriptionSaved(state),
    grugs: getActionableAlterationsDrugs(state),
    clinicalTrials: getActionableAlterationsClinicalTrials(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setActionableAlterationExpandedInterpretation: data => dispatch(setActionableAlterationExpandedInterpretation(data)),
    setCurrentActionableAlterationTab: key => dispatch(setCurrentActionableAlterationTab(key)),
    setActionableAlterationDrugsDescription: data => dispatch(setActionableAlterationDrugsDescription(data)),
    setActionableAlterationClinicalTrial: data => dispatch(setActionableAlterationClinicalTrial(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
