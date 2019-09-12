import React, { Component } from "react";
import style from "./EvidenceContainer.module.scss";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import TabPaneHeader from "variantComponents/evidenceContainer/components/tabPaneHeader";
import EvidenceTable from "variantComponents/evidenceContainer/components/evidenceTable";
import ActionDeleteEvidence from "variantComponents/evidenceContainer/components/actionDeleteEvidence";
import {
  getEvidenceConfigId,
  getSubmitData,
  getTabPaneHeaders,
  getCurrentEvidenceTab
} from "Store/selectors";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import {
  cleanEvidenceActionData,
  deleteEvidenceEntry,
  setEvidenceActionMode,
  setCurrentEvidenceTab
} from "Actions/evidenceConfigActions";
import { TEXTS } from "Utils/constants";

const { TabPane } = Tabs;

class EvidenceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupDelete: false
    };
  }

  handleAddEvidence = () => {
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
    this.props.setCurrentEvidenceTab(key);
  };
  
  render() {
    const { tabPaneHeaders, currentEvidenceTab } = this.props;
    return (
      <div className={style["evidence-wrapper"]}>
        <div className="evidence-title">Evidence:</div>
        <Tabs
          tabBarExtraContent={
            <SimpleButton
              className={"add-evidence-button-text"}
              onClick={this.handleAddEvidence}
              text={"+ Add Evidence"}
            />
          }
          size={"large"}
          activeKey={currentEvidenceTab}
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
                    <EvidenceTable
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
          <ActionDeleteEvidence
            onClickYes={this.handleDeleteYes}
            onClickNo={this.handleDeleteNo}
          />
        )}
      </div>
    );
  }
}

EvidenceContainer.propTypes = {
  data: PropTypes.object,
  typeData: PropTypes.array.isRequired
};

EvidenceContainer.defaultProps = {
  data: {}
};

const mapStateToProps = state => {
  return {
    tabPaneHeaders: getTabPaneHeaders(state),
    currentEvidenceTab: getCurrentEvidenceTab(state),
    deleteData: getSubmitData(state),
    id: getEvidenceConfigId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onAction: status => dispatch(setEvidenceActionMode(status)),
    deleteEntry: data => dispatch(deleteEvidenceEntry(data)),
    cleanData: () => dispatch(cleanEvidenceActionData()),
    setCurrentEvidenceTab: key => dispatch(setCurrentEvidenceTab(key)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceContainer);
