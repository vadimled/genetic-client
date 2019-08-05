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

const { TabPane } = Tabs;

class EvidenceContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  handleAddEvidence = () => {
    console.log("handleAddEvidence");
  };
  
  render() {
    const { tabPaneHeaders /* , tabPaneBodies */ } = this.props;
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
              // console.log(tabPaneBodies[index]);
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
                  {<EvidenceTable category={header.title} />}
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

export default connect(
  mapStateToProps,
  null
)(EvidenceContainer);
