import React, { Component } from "react";
import style from "./ActionableDetailsContainer.module.scss";
// import PropTypes from "prop-types";
import { Tabs } from "antd";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import {
  ACTIONABLE_CATEGORIES_OPTIONS,
  TEXTS,
  ACTIONABLE_TABS_VALUES
} from "Utils/constants";
import {
  getCurrentActionableTab,
  getGeneDescription,
  getVariantDescription
} from "Store/selectors";
import { setCurrentActionableTab } from "Actions/finalReportAction";
import ActionableDetailsTabPaneHeader from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsTabPaneHeader";
import ExpandedInterpretation from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsContainer/components/expandedInterpretation";
// import ActionableDetailsTabPaneHeader from "variantComponents/actionable-details-containerContainer/components/tabPaneHeader";
// import ActionableTable from "variantComponents/actionable-details-containerContainer/components/actionable-details-containerTable";
// import ActionDeleteActionable from "variantComponents/actionable-details-containerContainer/components/actionDeleteActionable";

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
    console.log(e);
  };

  renderContent = value => {
    const { geneDescription, variantDescription } = this.props;
    switch (value) {
      case ACTIONABLE_TABS_VALUES.expanded:
        return (
          <ExpandedInterpretation
            geneDescription={geneDescription}
            variantDescription={variantDescription}
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
          tabBarExtraContent={
            <SimpleButton
              className={"add-actionable-details-container-button-text"}
              onClick={this.handleAddActionable}
              text={"Select variants"}
            />
          }
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
        {this.state.showPopupDelete && (
          <SimpleButton
            className={"add-actionable-details-container-button-text"}
            onClick={this.handleAddActionable}
            text={"Done"}
          />
        )}
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
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // onAction: status => dispatch(setActionableActionMode(status)),
    // deleteEntry: data => dispatch(deleteActionableEntry(data)),
    // cleanData: () => dispatch(cleanActionableActionData()),
    setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
