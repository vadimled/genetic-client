import React, { Component } from "react";
import style from "evidenceContainer/EvidenceContainer.module.scss";
// import PropTypes from 'prop-types';
import { Button, Tabs } from "antd";
import TabPaneContent from "variantComponents/evidenceContainer/components/tabPaneHeader";
import PropTypes from "prop-types";
import { getTabPaneHeaders } from "Store/selectors";
import { connect } from "react-redux";

const { TabPane } = Tabs;
const operations = <Button>+ Add Evidence</Button>;

class EvidenceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabPaneHeaders /* , tabPaneBodies */ } = this.props;
    return (
      <div className={style["evidence-wrapper"]}>
        <div className="evidence-title">Evidence:</div>
        <Tabs tabBarExtraContent={operations} size={"large"}>
          {!!tabPaneHeaders && tabPaneHeaders.map((header, index) => {
            // console.log(tabPaneBodies[index]);
            return (
              <TabPane
                tab={
                  <TabPaneContent amount={header.length} title={header.title} />
                }
                key={index + 1}
              >
                {`Content of tab ${index + 1}`}
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
    // tabPaneBodies: getTabPaneBodies(state),
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     setResources: data => dispatch(setExternalResources(data)),
//     fetchVariantData: data => dispatch(fetchVariantData(data)),
//     setSelectedZygosityType: data => dispatch(setSelectedZygosityType(data)),
//     setTestInformation: data => dispatch(setTestInformation(data))
//   };
// }

export default connect(
  mapStateToProps,
  null
)(EvidenceContainer);
