import React, { Component } from "react";
import style from "./ActionableDetailsContainer.module.scss";
import PropTypes from "prop-types";
import { Tabs } from "antd";
// import TabPaneHeader from "variantComponents/actionable-details-containerContainer/components/tabPaneHeader";
// import ActionableTable from "variantComponents/actionable-details-containerContainer/components/actionable-details-containerTable";
// import ActionDeleteActionable from "variantComponents/actionable-details-containerContainer/components/actionDeleteActionable";
import // getActionableConfigId,
// getSubmitData,
// getTabPaneHeaders,
// getCurrentActionableTab
"Store/selectors";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import // cleanActionableActionData,
// deleteActionableEntry,
// setActionableActionMode,
// setCurrentActionableTab
"Actions/actionable-details-containerConfigActions";
import { TEXTS } from "Utils/constants";

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

  render() {
    const { tabPaneHeaders, currentActionableTab } = this.props;
    return (
      <div className={style["actionable-details-container-wrapper"]}>
        <div className="actionable-details-container-title">Actionable:</div>
        <Tabs
          tabBarExtraContent={
            <SimpleButton
              className={"add-actionable-details-container-button-text"}
              onClick={this.handleAddActionable}
              text={"+ Add Actionable"}
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
                    <TabPaneHeader
                      amount={header.length}
                      title={header.title}
                    />
                  }
                  key={index + 1}
                >
                  {
                    <ActionableTable
                      category={header.value}
                      handleEditEntry={this.handleEditEntry}
                      handleDeleteEntry={this.handleDeleteEntry}
                    />
                  }
                </TabPane>
              );
            })}
        </Tabs>
        {this.state.showPopupDelete && (
          <ActionDeleteActionable
            onClickYes={this.handleDeleteYes}
            onClickNo={this.handleDeleteNo}
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

const mapStateToProps = (/* state */) => {
  return {
    // tabPaneHeaders: getTabPaneHeaders(state),
    // currentActionableTab: getCurrentActionableTab(state),
    // deleteData: getSubmitData(state),
    // id: getActionableConfigId(state)
  };
};

function mapDispatchToProps(/* dispatch*/) {
  return {
    // onAction: status => dispatch(setActionableActionMode(status)),
    // deleteEntry: data => dispatch(deleteActionableEntry(data)),
    // cleanData: () => dispatch(cleanActionableActionData()),
    // setCurrentActionableTab: key => dispatch(setCurrentActionableTab(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionableDetailsContainer);
