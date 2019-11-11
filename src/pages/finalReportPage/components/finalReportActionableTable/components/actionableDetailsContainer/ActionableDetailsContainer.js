import React, { Component } from "react";
import style from "./ActionableDetailsContainer.module.scss";
// import PropTypes from "prop-types";
import { Tabs } from "antd";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import {
  ACTIONABLE_CATEGORIES_OPTIONS,
  ACTIONABLE_TABS_VALUES,
  TEXTS
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
  // setExpandedInterpretationTextArea
} from "Actions/finalReportAction";
import ActionableDetailsTabPaneHeader from "../actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "./components/expandedInterpretation";

const { TabPane } = Tabs;

class ActionableDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupDelete: false
    };
  }

  handleAddActionable = () => {
    this.props.onAction({
      actionSlideBarStatus: true,
      mode: TEXTS.add
    });
  };

  handleEditEntry = (e, id) => {
    const { data } = this.props;
    this.props.onAction({
      actionSlideBarStatus: true,
      id,
      mode: TEXTS.edit,
      data: data[id]
    });
  };

  handleDeleteEntry = (e, id) => {
    this.setState({ showPopupDelete: !this.state.showPopupDelete });
    this.props.onAction({
      actionSlideBarStatus: false,
      id,
      mode: TEXTS.delete
    });
  };

  handleDeleteYes = () => {
    const { deleteEntry, deleteData } = this.props;
    deleteEntry(deleteData);
    this.setState({ showPopupDelete: !this.state.showPopupDelete });
  };

  handleDeleteNo = () => {
    this.setState({ showPopupDelete: !this.state.showPopupDelete });
    this.props.cleanData();
  };

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
            geneDescription={geneDescription}
            variantDescription={variantDescription}
            geneDescriptionSaved={geneDescriptionSaved}
            variantDescriptionSaved={variantDescriptionSaved}
            onChange={this.handleExpandedInterpretation}
          />
        );
      case ACTIONABLE_TABS_VALUES.therapies:
        return null;
      case ACTIONABLE_TABS_VALUES.clinicalTrials:
        return null;
    }
  };

  render() {
    const { currentActionableTab } = this.props;
    return (
      <div className={style["actionable-details-container-wrapper"]}>
        <Tabs
          // tabBarExtraContent={
          //   <SimpleButton
          //     className={"actionable-details-done"}
          //     // onClick={this.handleAddActionable}
          //     text={"done"}
          //   />
          // }
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
        {
          <SimpleButton
            className={"actionable-details-done"}
            // onClick={this.handleAddActionable}
            text={"Done"}
          />
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
    currentActionableTab: getCurrentActionableTab(state),
    geneDescription: getGeneDescription(state),
    variantDescription: getVariantDescription(state),
    geneDescriptionSaved: getGeneDescriptionSaved(state),
    variantDescriptionSaved: getVariantDescriptionSaved(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // onAction: status => dispatch(setActionableActionMode(status)),
    setExpandedInterpretationTextArea: data =>
      dispatch(saveExpandedTextAreaContent(data)),
    setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
