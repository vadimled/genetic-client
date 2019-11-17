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
  getVariantDescriptionSaved,
  getTherapies
} from "Store/selectors";
import {
  setCurrentActionableTab,
  saveExpandedTextAreaContent,
  setTherapiesTextArea
} from "Actions/finalReportAction";
import ActionableDetailsTabPaneHeader from "../actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "./components/expandedInterpretation";
import Therapies from "./components/therapies";

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

  handleTherapies = e => {
    const { id, value } = e.target;
    this.props.setTherapiesTextArea({
      id,
      value
    });
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
            onChange={this.handleTherapies}
            data={therapies}
          />
        );
      case ACTIONABLE_TABS_VALUES.clinicalTrials:
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
    variantDescriptionSaved: getVariantDescriptionSaved(state),
    therapies: getTherapies(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setExpandedInterpretationTextArea: data =>
      dispatch(saveExpandedTextAreaContent(data)),
    setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key)),
    setTherapiesTextArea: data => dispatch(setTherapiesTextArea(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
