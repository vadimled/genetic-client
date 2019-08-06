import React, { Component } from "react";
import style from "./EvidenceContainer.module.scss";
// import PropTypes from 'prop-types';
import { Tabs } from "antd";
import TabPaneHeader from "variantComponents/evidenceContainer/components/tabPaneHeader";
import PropTypes from "prop-types";
import { getTabPaneHeaders } from "Store/selectors";
import { connect } from "react-redux";
import EvidenceTable from "variantComponents/evidenceContainer/components/evidenceTable";
import SimpleButton from "GenericComponents/simpleButton";
import { setEvidenceActionMode } from "Actions/evidenceConfigActions";
import { TEXTS } from "Utils/constants";

const { TabPane } = Tabs;

class EvidenceContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleAddEvidence = () => {
    this.props.onAction({
      actionSlideBarStatus: true,
      mode: TEXTS.add
    });
  };

  handleEditEntry = (e, id) => {
    this.props.onAction({
      actionSlideBarStatus: true,
      id,
      mode: TEXTS.edit
    });
  };

  handleDeleteEntry = (e, id) => {
    this.props.onAction({
      actionSlideBarStatus: false,
      id,
      mode: TEXTS.delete
    });
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
    tabPaneHeaders: getTabPaneHeaders(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onAction: status => dispatch(setEvidenceActionMode(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceContainer);
