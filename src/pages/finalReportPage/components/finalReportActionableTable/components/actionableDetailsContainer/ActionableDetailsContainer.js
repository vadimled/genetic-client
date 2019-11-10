import React, { Component } from "react";
import style from "./ActionableDetailsContainer.module.scss";
import PropTypes from "prop-types";
import { Tabs } from "antd";
// import ActionableDetailsTabPaneHeader from "variantComponents/actionable-details-containerContainer/components/tabPaneHeader";
// import ActionableTable from "variantComponents/actionable-details-containerContainer/components/actionable-details-containerTable";
// import ActionDeleteActionable from "variantComponents/actionable-details-containerContainer/components/actionDeleteActionable";

import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import { TEXTS } from "Utils/constants";
import { getCurrentActionableTab } from "Store/selectors";
import { setCurrentActionableTab } from "Actions/finalReportAction";
import ActionableDetailsTabPaneHeader
  from "Pages/finalReportPage/components/finalReportActionableTable/components/actionableDetailsTabPaneHeader";

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
  
  renderContent = () => {
  
  };

  render() {
    const { tabPaneHeaders, currentActionableTab } = this.props;
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
          {!!tabPaneHeaders &&
            tabPaneHeaders.map((header, index) => {
              return (
                <TabPane
                  tab={
                    <ActionableDetailsTabPaneHeader
                      amount={header.length}
                      title={header.title}
                    />
                  }
                  key={index + 1}
                >
                  {
                    this.renderContent()
                  }
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

ActionableDetailsContainer.propTypes = {
  data: PropTypes.object,
  typeData: PropTypes.array.isRequired
};

ActionableDetailsContainer.defaultProps = {
  data: {}
};

const mapStateToProps = ( state ) => {
  return {
    currentActionableTab: getCurrentActionableTab(state),
    // tabPaneHeaders: getTabPaneHeaders(state),
    // deleteData: getSubmitData(state),
    // id: getActionableConfigId(state)
  };
};

function mapDispatchToProps( dispatch) {
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
