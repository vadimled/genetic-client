import React, { Component } from "react";
import style from "./EvidenceContainer.module.scss";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import TabPaneHeader from "variantComponents/evidenceContainer/components/tabPaneHeader";
import EvidenceTable from "variantComponents/evidenceContainer/components/evidenceTable";
import ActionDeleteEvidence from "variantComponents/evidenceContainer/components/actionDeleteEvidence";
import {
  getSubmitData,
  getTabPaneHeaders,
  getEvidenceConfigId
} from "Store/selectors";
import { connect } from "react-redux";
import SimpleButton from "GenericComponents/simpleButton";
import {
  setEvidenceActionMode,
  deleteEvidenceEntry
} from "Actions/evidenceConfigActions";
import { TEXTS } from "Utils/constants";

const { TabPane } = Tabs;

class EvidenceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDelete: false,
      deleteId: null
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
    this.setState({ isDelete: !this.state.isDelete, deleteId: id });
  };

  handleDeleteYes = () => {
    const { deleteEvidenceEntry, onAction, deleteData } = this.props;
    onAction({
      actionSlideBarStatus: false,
      id: this.state.deleteId,
      mode: TEXTS.delete
    });
    this.setState({ isDelete: !this.state.isDelete, deleteId: null });
    deleteData.ids.evidenceId = this.state.deleteId;
    deleteEvidenceEntry(deleteData);
  };

  handleDeleteNo = () => {
    this.setState({ isDelete: !this.state.isDelete, deleteId: null });
  };

  render() {
    const { tabPaneHeaders } = this.props;
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
                      category={header.title}
                      handleEditEntry={this.handleEditEntry}
                      handleDeleteEntry={this.handleDeleteEntry}
                    />
                  }
                </TabPane>
              );
            })}
        </Tabs>
        {this.state.isDelete && (
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
    deleteData: getSubmitData(state),
    id: getEvidenceConfigId(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onAction: status => dispatch(setEvidenceActionMode(status)),
    deleteEvidenceEntry: data => dispatch(deleteEvidenceEntry(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceContainer);
