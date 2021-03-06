import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Tabs } from "antd";

import style from "./EvidenceContainer.module.scss";

import TabPaneHeader from "variantComponents/evidenceContainer/components/tabPaneHeader";
import EvidenceTable from "variantComponents/evidenceContainer/components/evidenceTable";
import ActionDeleteEvidence from "variantComponents/evidenceContainer/components/actionDeleteEvidence";
import SimpleButton from "GenericComponents/simpleButton";
import SimpleSelect from "GenericComponents/simpleSelect";

import {
  getEvidenceConfigId,
  getSubmitData,
  getTabPaneHeaders,
  getCurrentEvidenceTab,
  getSelectedZygosityType,
  getCurrentEvidencePhenotypes,
  getSelectedCurrentEvidencePhenotype,
} from "Store/selectors";
import {
  cleanEvidenceActionData,
  deleteEvidenceEntry,
  setEvidenceActionMode,
  setCurrentEvidenceTab,
  setSelectedCurrentEvidencePhenotype,
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

  handleSelectedCurrentEvidencePhenotype = e => {
    this.props.setSelectedCurrentEvidencePhenotype(e.target.value);
  }

  render() {
    const {
      tabPaneHeaders,
      currentEvidenceTab,
      selectedZygosityType,
      currentEvidencePhenotypes,
      selectedCurrentEvidencePhenotype
    } = this.props;

    return (
      <div className={style["evidence-wrapper"]}>
        <div className="section-toolbar">
          <div className="toolbar-title evidence-title">Evidence</div>
          {selectedZygosityType === TEXTS.somatic && (+currentEvidenceTab === 5 || +currentEvidenceTab === 6) &&
            <div className="toolbar-select">
              <SimpleSelect
                value={selectedCurrentEvidencePhenotype}
                options={currentEvidencePhenotypes}
                onChange={this.handleSelectedCurrentEvidencePhenotype}
                isClearAvailable
                placeholder="All phenotypes"
              />
            </div>
          }
        </div>
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
    id: getEvidenceConfigId(state),
    selectedZygosityType: getSelectedZygosityType(state),
    currentEvidencePhenotypes: getCurrentEvidencePhenotypes(state),
    selectedCurrentEvidencePhenotype: getSelectedCurrentEvidencePhenotype(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onAction: status => dispatch(setEvidenceActionMode(status)),
    deleteEntry: data => dispatch(deleteEvidenceEntry(data)),
    cleanData: () => dispatch(cleanEvidenceActionData()),
    setCurrentEvidenceTab: key => dispatch(setCurrentEvidenceTab(key)),
    setSelectedCurrentEvidencePhenotype: data => dispatch(setSelectedCurrentEvidencePhenotype(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceContainer);
